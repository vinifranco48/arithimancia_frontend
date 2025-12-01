import { useState, useEffect } from 'react';
import { MapNode } from '@/types/npc';
import { Character } from '@/types/game';
import { Sword, Book, Gift, Lock, CheckCircle2, Star, Crown } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ProgressReport } from './ProgressReport';
import { Book as BookIcon } from 'lucide-react';

interface DuolingoMapProps {
  nodes: MapNode[];
  character: Character;
  onNodeSelect: (node: MapNode) => void;
  currentNodeId?: number;
}

export const DuolingoMap = ({ nodes, character, onNodeSelect, currentNodeId }: DuolingoMapProps) => {
  const completedNodes = nodes.filter(n => n.completed).length;
  const progressPercentage = (nodes.length > 0) ? (completedNodes / nodes.length) * 100 : 0;
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [showReport, setShowReport] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 20,
        y: (e.clientY / window.innerHeight) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const getNodeColor = (type: MapNode['type'], locked: boolean, completed: boolean) => {
    if (locked) return 'bg-gray-800 border-gray-700 grayscale';
    if (completed) return 'bg-green-500 border-green-600 shadow-[0_0_20px_rgba(34,197,94,0.4)]';

    switch (type) {
      case 'battle':
        return 'bg-red-500 border-red-600 shadow-[0_0_20px_rgba(239,68,68,0.4)]';
      case 'npc':
        return 'bg-blue-500 border-blue-600 shadow-[0_0_20px_rgba(59,130,246,0.4)]';
      case 'treasure':
        return 'bg-yellow-500 border-yellow-600 shadow-[0_0_20px_rgba(234,179,8,0.4)]';
      case 'boss':
        return 'bg-purple-600 border-purple-700 shadow-[0_0_30px_rgba(147,51,234,0.6)]';
      default:
        return 'bg-gray-500 border-gray-600';
    }
  };

  const getNodeIcon = (type: MapNode['type'], locked: boolean, completed: boolean) => {
    if (completed) return <CheckCircle2 className="w-10 h-10 text-white drop-shadow-md" />;
    if (locked) return <Lock className="w-8 h-8 text-gray-500" />;

    const iconClass = "w-10 h-10 text-white drop-shadow-md animate-pulse-slow";
    switch (type) {
      case 'battle':
        return <Sword className={iconClass} />;
      case 'npc':
        return <Book className={iconClass} />;
      case 'treasure':
        return <Gift className={iconClass} />;
      case 'boss':
        return <Crown className={iconClass} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0f0b15] relative overflow-hidden p-4 md:p-8">
      {/* Parallax Background Elements */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, #7c3aed 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          transform: `translate(${mousePos.x * -1}px, ${mousePos.y * -1}px)`
        }}
      />
      <div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-[#0f0b15]/80 to-[#0f0b15] pointer-events-none"
      />

      {/* Header Stats */}
      <div className="max-w-2xl mx-auto mb-12 relative z-10">
        <Card className="p-6 bg-card/80 backdrop-blur-xl border-primary/20 shadow-2xl sticky top-4 z-50">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary/50 shadow-[0_0_15px_rgba(124,58,237,0.3)]">
                <span className="text-4xl">🧙‍♂️</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white tracking-tight">{character.name}</h2>
                <div className="flex items-center gap-3 text-sm mt-1">
                  <div className="flex items-center gap-1 px-2 py-0.5 bg-primary/20 rounded border border-primary/30">
                    <Star className="w-3 h-3 text-primary" />
                    <span className="font-bold text-primary">Nv. {character.level}</span>
                  </div>
                  <div className="px-2 py-0.5 bg-red-500/20 rounded border border-red-500/30">
                    <span className="font-bold text-red-400">{character.hp}/{character.maxHp} HP</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-right flex flex-col items-end gap-2">
              <div>
                <div className="text-3xl font-black text-primary drop-shadow-glow">{completedNodes}/{nodes.length}</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Nós Completos</div>
              </div>
              <Button
                size="sm"
                variant="outline"
                className="text-xs border-primary/50 hover:bg-primary/20"
                onClick={() => setShowReport(true)}
              >
                <BookIcon className="w-3 h-3 mr-1" /> Grimório
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs uppercase font-bold tracking-wider">
              <span className="text-gray-400">Progresso do Reino</span>
              <span className="text-primary">{Math.round(progressPercentage)}%</span>
            </div>
            <Progress value={progressPercentage} className="h-3 bg-gray-800" indicatorClassName="bg-gradient-to-r from-primary to-purple-400" />
          </div>
        </Card>
      </div>

      {/* Map Path */}
      <div className="max-w-md mx-auto relative pb-32 z-10">
        {nodes.map((node, index) => {
          const nextNode = nodes[index + 1];
          const colors = getNodeColor(node.type, node.locked, node.completed);
          const isLeft = index % 2 === 0;
          const isCurrent = currentNodeId === node.id;
          const isNext = !node.locked && !node.completed && (!nodes[index - 1] || nodes[index - 1].completed);

          return (
            <div key={node.id} className="relative mb-24 group">
              {/* Path Line */}
              {nextNode && (
                <svg
                  className="absolute top-20 left-1/2 -translate-x-1/2 w-48 h-32 pointer-events-none overflow-visible"
                  style={{ zIndex: 0 }}
                >
                  <path
                    d={`M ${isLeft ? 40 : 150} 20 C ${isLeft ? 40 : 150} 100, ${!isLeft ? 40 : 150} 50, ${!isLeft ? 40 : 150} 130`}
                    stroke={node.completed ? '#8b5cf6' : '#374151'}
                    strokeWidth="6"
                    fill="none"
                    strokeLinecap="round"
                    className="drop-shadow-lg transition-colors duration-500"
                  />
                  {node.completed && !nextNode.locked && (
                    <path
                      d={`M ${isLeft ? 40 : 150} 20 C ${isLeft ? 40 : 150} 100, ${!isLeft ? 40 : 150} 50, ${!isLeft ? 40 : 150} 130`}
                      stroke="#a78bfa"
                      strokeWidth="6"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray="10 10"
                      className="animate-dash opacity-50"
                    />
                  )}
                </svg>
              )}

              {/* Character Avatar on Current Node */}
              {isCurrent && (
                <div className={`absolute ${isLeft ? 'right-full mr-6' : 'left-full ml-6'} top-10 z-30 animate-bounce duration-1000`}>
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/50 rounded-full blur-xl animate-pulse" />
                    <div className="relative text-5xl drop-shadow-2xl transform -scale-x-100">
                      🧙‍♂️
                    </div>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-black/50 text-white text-[10px] px-2 py-0.5 rounded-full whitespace-nowrap">
                      Você está aqui
                    </div>
                  </div>
                </div>
              )}

              {/* Node Container */}
              <div
                className={`flex ${isLeft ? 'justify-start pl-4' : 'justify-end pr-4'}`}
              >
                <div className="relative z-10">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button
                          onClick={() => !node.locked && onNodeSelect(node)}
                          disabled={node.locked}
                          className={`
                            relative w-24 h-24 md:w-28 md:h-28 rounded-[2rem] border-b-8 
                            ${colors} 
                            transition-all duration-300 ease-out
                            ${node.locked ? 'cursor-not-allowed opacity-80' : 'cursor-pointer hover:-translate-y-2 hover:shadow-2xl active:translate-y-0 active:border-b-0'}
                            ${isCurrent ? 'ring-4 ring-white ring-offset-4 ring-offset-[#0f0b15] animate-pulse-glow' : ''}
                            ${isNext ? 'animate-bounce-slow' : ''}
                          `}
                        >
                          {/* Inner Gradient Overlay */}
                          <div className="absolute inset-0 rounded-[1.5rem] bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />

                          {/* Icon */}
                          <div className="absolute inset-0 flex items-center justify-center transform transition-transform group-hover:scale-110">
                            {node.npc?.avatar ? (
                              <span className="text-5xl filter drop-shadow-lg">{node.npc.avatar}</span>
                            ) : (
                              getNodeIcon(node.type, node.locked, node.completed)
                            )}
                          </div>

                          {/* Level Badge */}
                          {!node.locked && (
                            <div className="absolute -top-3 -right-3 bg-gray-900 border border-gray-700 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                              Nv.{node.requiredLevel}
                            </div>
                          )}
                        </button>
                      </TooltipTrigger>
                      <TooltipContent side="top" className="bg-gray-900 border-gray-700 text-white">
                        {node.locked ? (
                          <p className="flex items-center gap-2"><Lock className="w-3 h-3" /> Requer Nível {node.requiredLevel}</p>
                        ) : (
                          <p>{node.title}</p>
                        )}
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  {/* Node Info Card (Visible on Hover or if Current) */}
                  <div className={`
                    absolute top-1/2 -translate-y-1/2 ${isLeft ? 'left-full ml-8' : 'right-full mr-8'} w-64 z-20
                    transition-all duration-300 transform
                    ${isCurrent || isNext ? 'opacity-100 translate-x-0' : 'opacity-0 pointer-events-none translate-x-4 group-hover:opacity-100 group-hover:translate-x-0'}
                  `}>
                    <Card className={`
                      p-4 bg-[#1a1625]/95 backdrop-blur-xl border-2 
                      ${isCurrent ? 'border-primary shadow-[0_0_30px_rgba(124,58,237,0.2)]' : 'border-gray-700'}
                    `}>
                      <div className="flex justify-between items-start mb-2">
                        <h3 className={`font-bold text-lg leading-tight ${isCurrent ? 'text-primary' : 'text-white'}`}>
                          {node.title}
                        </h3>
                        {node.type === 'boss' && <Crown className="w-5 h-5 text-yellow-500 animate-pulse" />}
                      </div>

                      {node.npc && (
                        <p className="text-xs text-blue-400 font-bold mb-2 uppercase tracking-wider flex items-center gap-1">
                          <Book className="w-3 h-3" /> {node.npc.name}
                        </p>
                      )}

                      <p className="text-xs text-gray-400 mb-4 line-clamp-2 leading-relaxed">
                        {node.description}
                      </p>

                      {/* Rewards */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        <div className="flex items-center gap-1 px-2 py-1 bg-gray-800 rounded border border-gray-700">
                          <Star className="w-3 h-3 text-yellow-400" />
                          <span className="text-xs font-bold text-gray-300">+{node.rewards.xp} XP</span>
                        </div>
                        {node.rewards.gold && (
                          <div className="flex items-center gap-1 px-2 py-1 bg-gray-800 rounded border border-gray-700">
                            <span className="text-xs font-bold text-yellow-500">+{node.rewards.gold} 🪙</span>
                          </div>
                        )}
                      </div>

                      {/* Action Button */}
                      {!node.locked && !node.completed && (
                        <Button
                          onClick={() => onNodeSelect(node)}
                          size="sm"
                          className={`w-full font-bold shadow-lg transition-transform active:scale-95 ${isCurrent
                              ? 'bg-primary hover:bg-primary/90 text-white'
                              : 'bg-gray-700 hover:bg-gray-600 text-gray-200'
                            }`}
                        >
                          {isCurrent ? '⚡ CONTINUAR' : '▶ INICIAR'}
                        </Button>
                      )}

                      {node.completed && (
                        <div className="w-full py-2 bg-green-500/10 border border-green-500/30 rounded text-center">
                          <span className="text-xs font-bold text-green-400 flex items-center justify-center gap-1">
                            <CheckCircle2 className="w-3 h-3" /> COMPLETADO
                          </span>
                        </div>
                      )}
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Finish Trophy */}
        {completedNodes === nodes.length && (
          <div className="text-center py-12 animate-in zoom-in duration-500">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-yellow-500/30 blur-3xl animate-pulse" />
              <div className="text-9xl mb-6 animate-bounce relative z-10">🏆</div>
            </div>
            <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 mb-2">
              REINO CONQUISTADO!
            </h2>
            <p className="text-gray-400 text-lg">Você dominou todos os desafios deste reino.</p>
            <Button className="mt-8 bg-white text-black hover:bg-gray-200 font-bold px-8 py-6 text-lg rounded-full shadow-[0_0_30px_rgba(255,255,255,0.3)]">
              PRÓXIMO REINO ➔
            </Button>
          </div>
        )}
      </div>

      {/* Progress Report Modal */}
      {showReport && (
        <ProgressReport onClose={() => setShowReport(false)} />
      )}
    </div>
  );
};
