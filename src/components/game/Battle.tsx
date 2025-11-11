import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Character, Enemy, MathChallenge, School } from '@/types/game';
import { generateChallenge } from '@/utils/mathChallenges';
import { toast } from 'sonner';

interface BattleProps {
  character: Character;
  enemy: Enemy;
  onVictory: (expGained: number) => void;
  onDefeat: () => void;
  onUpdateCharacter: (character: Character) => void;
}

export const Battle = ({ character, enemy, onVictory, onDefeat, onUpdateCharacter }: BattleProps) => {
  const [currentEnemy, setCurrentEnemy] = useState(enemy);
  const [challenge, setChallenge] = useState<MathChallenge | null>(null);
  const [playerAnswer, setPlayerAnswer] = useState('');
  const [battleLog, setBattleLog] = useState<string[]>([
    `Um ${enemy.name} selvagem apareceu!`,
    `${enemy.description}`
  ]);
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);

  useEffect(() => {
    if (isPlayerTurn) {
      const newChallenge = generateChallenge(character.school, character.level);
      setChallenge(newChallenge);
    }
  }, [isPlayerTurn, character.school, character.level]);

  const addLog = (message: string) => {
    setBattleLog(prev => [...prev, message]);
  };

  const handleSubmitAnswer = () => {
    if (!challenge) return;

    const numAnswer = parseFloat(playerAnswer);
    const isCorrect = Math.abs(numAnswer - challenge.answer) < 0.01;

    if (isCorrect) {
      const damage = character.power + (challenge.difficulty === 'hard' ? 15 : challenge.difficulty === 'medium' ? 10 : 5);
      const newEnemyHp = Math.max(0, currentEnemy.hp - damage);
      
      setCurrentEnemy({ ...currentEnemy, hp: newEnemyHp });
      addLog(`✓ Correto! Você causou ${damage} de dano!`);
      toast.success('Resposta correta!', { description: `Causou ${damage} de dano` });

      if (newEnemyHp <= 0) {
        const expGained = 50 + (character.level * 10);
        addLog(`🎉 Você derrotou ${currentEnemy.name}!`);
        addLog(`Ganhou ${expGained} pontos de experiência!`);
        setTimeout(() => onVictory(expGained), 2000);
        return;
      }

      setIsPlayerTurn(false);
      setTimeout(() => enemyTurn(newEnemyHp), 1500);
    } else {
      addLog(`✗ Incorreto. A resposta era ${challenge.answer}.`);
      toast.error('Resposta incorreta!', { description: `Resposta certa: ${challenge.answer}` });
      setIsPlayerTurn(false);
      setTimeout(() => enemyTurn(currentEnemy.hp), 1500);
    }

    setPlayerAnswer('');
  };

  const enemyTurn = (enemyHp: number) => {
    const damage = currentEnemy.power;
    const newPlayerHp = Math.max(0, character.hp - damage);
    
    onUpdateCharacter({ ...character, hp: newPlayerHp });
    addLog(`${currentEnemy.name} ataca! Causou ${damage} de dano.`);
    toast.warning('Você foi atacado!', { description: `Recebeu ${damage} de dano` });

    if (newPlayerHp <= 0) {
      addLog('💀 Você foi derrotado...');
      setTimeout(() => onDefeat(), 2000);
      return;
    }

    setIsPlayerTurn(true);
  };

  const getEnemyIcon = (type: string) => {
    switch (type) {
      case 'zero_absoluto': return '⊘';
      case 'infinito_selvagem': return '∞';
      case 'fractal_parasita': return '◈';
      case 'paradoxo': return '⊗';
      default: return '◆';
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-void">
      <div className="max-w-6xl w-full space-y-6">
        {/* Battle Header */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Player Stats */}
          <Card className="p-6 bg-card/50 backdrop-blur border-primary/30">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-primary">{character.name}</h3>
                <span className="text-sm text-muted-foreground">Nível {character.level}</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>HP</span>
                  <span>{character.hp}/{character.maxHp}</span>
                </div>
                <Progress value={(character.hp / character.maxHp) * 100} className="h-3" />
              </div>
              <div className="text-sm text-muted-foreground">
                Poder: {character.power} | Escola: {character.school}
              </div>
            </div>
          </Card>

          {/* Enemy Stats */}
          <Card className="p-6 bg-destructive/10 backdrop-blur border-destructive/30">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-destructive flex items-center gap-2">
                  <span className="text-4xl">{getEnemyIcon(currentEnemy.type)}</span>
                  {currentEnemy.name}
                </h3>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>HP</span>
                  <span>{currentEnemy.hp}/{currentEnemy.maxHp}</span>
                </div>
                <Progress value={(currentEnemy.hp / currentEnemy.maxHp) * 100} className="h-3" />
              </div>
            </div>
          </Card>
        </div>

        {/* Battle Arena */}
        <Card className="p-6 bg-card/50 backdrop-blur border-primary/30">
          {/* Battle Log */}
          <div className="mb-6 h-32 overflow-y-auto space-y-1 text-sm font-mono bg-background/50 p-4 rounded-lg border border-border">
            {battleLog.map((log, index) => (
              <div key={index} className="text-muted-foreground animate-in fade-in duration-300">
                &gt; {log}
              </div>
            ))}
          </div>

          {/* Challenge Section */}
          {isPlayerTurn && challenge && (
            <div className="space-y-4">
              <div className="text-center space-y-3 p-6 bg-gradient-mystic/10 rounded-lg border border-primary/30">
                <h4 className="text-xl font-semibold text-primary">Desafio Matemático</h4>
                <p className="text-2xl font-bold text-glow">{challenge.question}</p>
                <p className="text-sm text-muted-foreground">
                  Resolva para atacar! Dificuldade: {challenge.difficulty}
                </p>
              </div>

              <div className="flex gap-3">
                <Input
                  type="number"
                  value={playerAnswer}
                  onChange={(e) => setPlayerAnswer(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSubmitAnswer()}
                  placeholder="Digite sua resposta..."
                  className="text-lg bg-background/50 border-primary/50"
                  autoFocus
                />
                <Button
                  onClick={handleSubmitAnswer}
                  disabled={!playerAnswer}
                  className="px-8 bg-gradient-mystic hover:opacity-90"
                >
                  Atacar
                </Button>
              </div>
            </div>
          )}

          {!isPlayerTurn && (
            <div className="text-center py-8">
              <p className="text-xl text-muted-foreground animate-pulse">
                {currentEnemy.name} está preparando seu ataque...
              </p>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};
