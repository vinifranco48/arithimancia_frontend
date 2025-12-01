import { useState, useEffect } from 'react';
import { Character, Encounter, Problem } from '@/types/api';
import { gameService } from '@/services/api';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { toast } from 'sonner';
import { Sword, Skull } from 'lucide-react';
import { processBattleAnswer, ChallengeAnswer } from '@/utils/localGameEngine';

interface BattleProps {
  character: Character;
  encounter: Encounter;
  onVictory: (rewards: any) => void;
  onDefeat: () => void;
  onUpdateCharacter: (character: Character) => void;
  nodeChallenge?: ChallengeAnswer; // Optional challenge data from kingdom node for local validation
}

export const Battle = ({ character, encounter, onVictory, onDefeat, onUpdateCharacter, nodeChallenge }: BattleProps) => {
  const [currentEncounter, setCurrentEncounter] = useState<Encounter>(encounter);
  const [playerAnswer, setPlayerAnswer] = useState('');
  const [battleLog, setBattleLog] = useState<string[]>([]);
  const [damageNumbers, setDamageNumbers] = useState<{ id: number, value: number | string, x: number, y: number, type: 'damage' | 'heal' | 'miss' }[]>([]);
  const [startTime, setStartTime] = useState<number>(Date.now());
  const [isProcessing, setIsProcessing] = useState(false);

  // Animation States
  const [playerAction, setPlayerAction] = useState<'idle' | 'attack' | 'hit'>('idle');
  const [enemyAction, setEnemyAction] = useState<'idle' | 'attack' | 'hit'>('idle');

  // Debug: Log challenge data
  useEffect(() => {
    console.log('🎮 Battle Component - Node Challenge:', nodeChallenge);
    console.log('🎮 Battle Component - Encounter Problem:', encounter.problem);
  }, [nodeChallenge, encounter.problem]);

  useEffect(() => {
    setStartTime(Date.now());
  }, [currentEncounter.problem]);

  const addLog = (message: string) => {
    setBattleLog(prev => [...prev, message]);
  };

  const showDamageNumber = (value: number | string, type: 'damage' | 'heal' | 'miss', target: 'player' | 'enemy') => {
    const id = Date.now();
    const x = target === 'enemy' ? 70 + Math.random() * 10 : 20 + Math.random() * 10;
    const y = 40 + Math.random() * 10;

    setDamageNumbers(prev => [...prev, { id, value, x, y, type }]);
    setTimeout(() => {
      setDamageNumbers(prev => prev.filter(dn => dn.id !== id));
    }, 1000);
  };

  const handleSubmitAnswer = async () => {
    if (!playerAnswer || isProcessing) return;
    setIsProcessing(true);

    const timeTaken = (Date.now() - startTime) / 1000; // seconds

    try {
      let result;

      // Use local validation if nodeChallenge is provided
      if (nodeChallenge) {
        // Local validation mode - bypass API
        result = processBattleAnswer(
          playerAnswer,
          nodeChallenge,
          character,
          currentEncounter.monster.currentHealth,
          currentEncounter.monster.maxHealth,
          currentEncounter.monster.level,
          timeTaken
        );
      } else {
        // API validation mode - fallback to API
        result = await gameService.solveProblem(currentEncounter.id, playerAnswer, timeTaken);
      }

      if (result.correct) {
        // Player Attack Animation
        setPlayerAction('attack');
        setTimeout(() => setPlayerAction('idle'), 600);

        if (result.damage) {
          addLog(`⚔️ Causou ${result.damage} de dano!`);
          showDamageNumber(result.damage, 'damage', 'enemy');

          // Enemy Hit Animation
          setEnemyAction('hit');
          setTimeout(() => setEnemyAction('idle'), 500);

          // Update local enemy health
          setCurrentEncounter(prev => ({
            ...prev,
            monster: {
              ...prev.monster,
              currentHealth: Math.max(0, prev.monster.currentHealth - (result.damage || 0))
            }
          }));
        }

        if (result.encounterStatus === 'VICTORY') {
          addLog(`🎉 Você derrotou ${currentEncounter.monster.name}!`);
          if (result.characterUpdates) {
            // Merge updates
            onUpdateCharacter({ ...character, ...result.characterUpdates });
          }

          // Show level up message if applicable
          if (result.rewards?.levelUp) {
            toast.success(`Subiu de nível! Agora você é nível ${result.rewards.levelUp.newLevel}!`);
          }

          setTimeout(() => onVictory(result.rewards || {}), 2000);
        } else if (result.nextProblem) {
          // Update problem (API mode only)
          setCurrentEncounter(prev => ({
            ...prev,
            problem: result.nextProblem
          }));
          setPlayerAnswer('');
          setStartTime(Date.now());
        } else {
          // Clear answer for next round (local mode)
          setPlayerAnswer('');
          setStartTime(Date.now());
        }

      } else {
        addLog(`✗ Errou!`);
        showDamageNumber('Errou!', 'miss', 'player');

        if (result.damageTaken) {
          // Enemy Attack Animation
          setEnemyAction('attack');
          setTimeout(() => setEnemyAction('idle'), 600);

          setTimeout(() => {
            setPlayerAction('hit');
            setTimeout(() => setPlayerAction('idle'), 500);

            addLog(`💥 ${currentEncounter.monster.name} atacou! -${result.damageTaken} HP`);
            showDamageNumber(result.damageTaken!, 'damage', 'player');

            if (result.characterUpdates) {
              onUpdateCharacter({ ...character, ...result.characterUpdates });
            }

            // Check for defeat
            if (result.encounterStatus === 'DEFEAT') {
              setTimeout(() => onDefeat(), 1000);
            }
          }, 400);
        }

        if (result.nextProblem) {
          // Update problem (API mode only)
          setCurrentEncounter(prev => ({
            ...prev,
            problem: result.nextProblem
          }));
          setPlayerAnswer('');
          setStartTime(Date.now());
        } else {
          // Clear answer for next round (local mode)
          setPlayerAnswer('');
          setStartTime(Date.now());
        }
      }
    } catch (error) {
      console.error('Error solving problem:', error);
      toast.error('Erro ao enviar resposta');
    } finally {
      setIsProcessing(false);
    }
  };

  const getEnemyIcon = (name: string) => {
    if (name.includes('Dragão')) return '🐉';
    if (name.includes('Goblin')) return '👺';
    if (name.includes('Esqueleto')) return '💀';
    if (name.includes('Mago')) return '🧙';
    return '👾';
  };

  return (
    <div className="min-h-screen bg-[#0f0b15] p-4 flex items-center justify-center relative overflow-hidden">
      <div className="w-full max-w-6xl relative z-10 grid grid-rows-[1fr_auto] gap-8 h-screen max-h-[900px]">

        {/* Battle Arena (Visuals) */}
        <div className="relative flex items-center justify-between px-8 md:px-20">

          {/* Player Avatar */}
          <div className={`relative transition-all duration-300 ${playerAction === 'attack' ? 'animate-attack-right' :
            playerAction === 'hit' ? 'animate-damage' : 'animate-idle'
            }`}>
            <div className="text-[8rem] md:text-[12rem] filter drop-shadow-[0_0_30px_rgba(124,58,237,0.5)] transform scale-x-[-1]">
              🧙‍♂️
            </div>
            {/* Player Stats Overlay */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-48 bg-black/60 backdrop-blur-md rounded-lg p-2 border border-primary/30">
              <div className="text-center font-bold text-white mb-1">{character.name}</div>
              <Progress value={(character.currentHealth / character.maxHealth) * 100} className="h-2 bg-gray-800 mb-1" indicatorClassName="bg-red-500" />
            </div>
          </div>

          {/* VS Badge */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 opacity-20 pointer-events-none">
            <Sword className="w-64 h-64 text-white" />
          </div>

          {/* Enemy Avatar */}
          <div className={`relative transition-all duration-300 ${enemyAction === 'attack' ? 'animate-attack-left' :
            enemyAction === 'hit' ? 'animate-damage' : 'animate-idle'
            }`}>
            <div className="text-[8rem] md:text-[12rem] filter drop-shadow-[0_0_30px_rgba(239,68,68,0.5)]">
              {getEnemyIcon(currentEncounter.monster.name)}
            </div>
            {/* Enemy Stats Overlay */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-48 bg-black/60 backdrop-blur-md rounded-lg p-2 border border-red-500/30">
              <div className="text-center font-bold text-white mb-1">{currentEncounter.monster.name}</div>
              <Progress value={(currentEncounter.monster.currentHealth / currentEncounter.monster.maxHealth) * 100} className="h-2 bg-gray-800" indicatorClassName="bg-red-600" />
            </div>
          </div>

          {/* Floating Damage Numbers */}
          {damageNumbers.map(dn => (
            <div
              key={dn.id}
              className={`absolute z-50 text-5xl font-black animate-float-up ${dn.type === 'heal' ? 'text-green-400' : dn.type === 'miss' ? 'text-gray-400' : 'text-red-500'
                }`}
              style={{ left: `${dn.x}%`, top: `${dn.y}%`, textShadow: '0 0 10px black' }}
            >
              {dn.type === 'heal' ? '+' : dn.type === 'damage' ? '-' : ''}{dn.value}
            </div>
          ))}
        </div>

        {/* Control Panel */}
        <Card className="bg-[#1a1625]/95 backdrop-blur-xl border-t-4 border-primary shadow-[0_-10px_40px_rgba(0,0,0,0.5)] p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

            {/* Main Action (Center) */}
            <div className="md:col-span-8 flex flex-col justify-center">
              {currentEncounter.problem ? (
                <div className={`relative p-8 rounded-2xl border-2 transition-all duration-500 bg-black/40 border-gray-700`}>
                  <div className="text-center space-y-6">
                    <div className="text-sm text-gray-400 uppercase tracking-[0.2em] font-bold">
                      RESOLVA PARA ATACAR
                    </div>

                    <div className="text-4xl md:text-6xl font-black text-white font-mono tracking-tight drop-shadow-lg">
                      {currentEncounter.problem.description}
                    </div>

                    {currentEncounter.problem.hintText && (
                      <div className="text-sm text-yellow-500/80 italic">
                        Dica: {currentEncounter.problem.hintText}
                      </div>
                    )}

                    <div className="flex gap-4 max-w-md mx-auto">
                      <Input
                        type="text"
                        value={playerAnswer}
                        onChange={(e) => setPlayerAnswer(e.target.value)}
                        placeholder="?"
                        className="text-3xl h-16 bg-black/50 border-gray-600 focus:border-primary text-center font-mono rounded-xl"
                        onKeyDown={(e) => e.key === 'Enter' && handleSubmitAnswer()}
                        autoFocus
                        disabled={isProcessing}
                      />
                      <Button
                        onClick={handleSubmitAnswer}
                        className={`h-16 px-8 font-black text-xl rounded-xl transition-all hover:scale-105 active:scale-95 bg-white text-black hover:bg-gray-200`}
                        disabled={isProcessing}
                      >
                        {isProcessing ? '...' : 'ATACAR'}
                      </Button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center animate-pulse">
                  <p className="text-2xl font-bold text-gray-500">Aguardando desafio...</p>
                </div>
              )}
            </div>

            {/* Battle Log (Right) */}
            <div className="md:col-span-4 flex flex-col h-full">
              <h3 className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
                <Skull className="w-4 h-4" /> Registro de Combate
              </h3>
              <div className="flex-1 overflow-y-auto custom-scrollbar bg-black/40 rounded-xl p-3 border border-white/5 font-mono text-xs space-y-2 max-h-[200px]">
                {battleLog.slice().reverse().map((log, i) => (
                  <div key={i} className="text-gray-300 animate-in fade-in slide-in-from-left-2 border-l-2 border-white/10 pl-2 py-1">
                    {log}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </Card>
      </div>
    </div>
  );
};
