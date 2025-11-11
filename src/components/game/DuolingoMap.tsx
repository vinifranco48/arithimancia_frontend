import { MapNode } from '@/types/npc';
import { Character } from '@/types/game';
import { Sword, Book, Gift, Skull, Lock, CheckCircle2, Star, Crown } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

interface DuolingoMapProps {
  nodes: MapNode[];
  character: Character;
  onNodeSelect: (node: MapNode) => void;
  currentNodeId?: number;
}

export const DuolingoMap = ({ nodes, character, onNodeSelect, currentNodeId }: DuolingoMapProps) => {
  const completedNodes = nodes.filter(n => n.completed).length;
  const progressPercentage = (completedNodes / nodes.length) * 100;

  const getNodeColor = (type: MapNode['type'], locked: boolean, completed: boolean) => {
    if (locked) return 'bg-gray-300 border-gray-400';
    if (completed) return 'bg-green-400 border-green-500';
    
    switch (type) {
      case 'battle':
        return 'bg-red-400 border-red-500';
      case 'npc':
        return 'bg-blue-400 border-blue-500';
      case 'treasure':
        return 'bg-yellow-400 border-yellow-500';
      case 'boss':
        return 'bg-purple-500 border-purple-600';
    }
  };

  const getNodeIcon = (type: MapNode['type'], locked: boolean, completed: boolean) => {
    if (completed) return <CheckCircle2 className="w-10 h-10 text-white" />;
    if (locked) return <Lock className="w-10 h-10 text-gray-600" />;
    
    const iconClass = "w-10 h-10 text-white";
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
    <div className="min-h-screen bg-gradient-to-b from-background via-card to-background p-4 md:p-8">
      {/* Header Stats */}
      <div className="max-w-2xl mx-auto mb-8">
        <Card className="p-6 bg-card/95 backdrop-blur border-primary/20 shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className="text-5xl">🧙‍♂️</div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">{character.name}</h2>
                <div className="flex items-center gap-3 text-sm">
                  <div className="flex items-center gap-1 px-2 py-1 bg-primary/20 rounded-lg">
                    <Star className="w-4 h-4 text-primary" />
                    <span className="font-bold text-primary">Nv. {character.level}</span>
                  </div>
                  <div className="px-2 py-1 bg-destructive/20 rounded-lg">
                    <span className="font-bold text-destructive">{character.hp}/{character.maxHp} HP</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-primary">{completedNodes}/{nodes.length}</div>
              <div className="text-xs text-muted-foreground">Completo</div>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Progresso da Jornada</span>
              <span className="text-foreground font-bold">{Math.round(progressPercentage)}%</span>
            </div>
            <Progress value={progressPercentage} className="h-4 bg-muted" />
          </div>
        </Card>
      </div>

      {/* Duolingo-style Path */}
      <div className="max-w-md mx-auto relative pb-20">
        {nodes.map((node, index) => {
          const nextNode = nodes[index + 1];
          const colors = getNodeColor(node.type, node.locked, node.completed);
          const isLeft = index % 2 === 0;
          const isCurrent = currentNodeId === node.id;

          return (
            <div key={node.id} className="relative mb-16 animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
              {/* Curved Path Line */}
              {nextNode && (
                <svg 
                  className="absolute top-full left-1/2 -translate-x-1/2 w-32 h-20 pointer-events-none"
                  style={{ zIndex: 0 }}
                >
                  <path
                    d={`M ${isLeft ? 64 : 64} 0 Q ${isLeft ? 32 : 96} 40, ${!isLeft ? 64 : 64} 80`}
                    stroke={node.completed && !nextNode.locked ? 'hsl(var(--duo-green))' : 'hsl(var(--border))'}
                    strokeWidth="8"
                    fill="none"
                    strokeLinecap="round"
                    className="drop-shadow-lg"
                  />
                </svg>
              )}

              {/* Character on Current Node */}
              {isCurrent && !node.locked && (
                <div className={`absolute ${isLeft ? 'right-full mr-4' : 'left-full ml-4'} top-1/2 -translate-y-1/2 z-20 animate-bounce`}>
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/30 rounded-full blur-xl animate-pulse" />
                    <div className="relative text-6xl drop-shadow-2xl">
                      🧙‍♂️
                    </div>
                  </div>
                </div>
              )}

              {/* Node Circle */}
              <div 
                className={`flex ${isLeft ? 'justify-start pl-8' : 'justify-end pr-8'}`}
                style={{ perspective: '1000px' }}
              >
                <div className="relative z-10">
                  {/* Node Button */}
                  <button
                    onClick={() => !node.locked && onNodeSelect(node)}
                    disabled={node.locked}
                    className={`
                      relative w-32 h-32 rounded-full border-8 
                      ${colors} shadow-[var(--shadow-node)]
                      transition-all duration-300
                      ${node.locked ? 'cursor-not-allowed opacity-60' : 'cursor-pointer hover:scale-110 hover:shadow-2xl active:scale-95'}
                      ${isCurrent ? 'ring-8 ring-primary/50 ring-offset-4 ring-offset-background animate-pulse' : ''}
                    `}
                  >
                    {/* Icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      {node.npc?.avatar ? (
                        <span className="text-6xl">{node.npc.avatar}</span>
                      ) : (
                        getNodeIcon(node.type, node.locked, node.completed)
                      )}
                    </div>

                    {/* Current Indicator */}
                    {isCurrent && !node.completed && (
                      <div className="absolute -top-3 -right-3 z-20">
                        <div className="relative">
                          <div className="absolute inset-0 bg-primary rounded-full animate-ping" />
                          <div className="relative bg-primary rounded-full p-2 shadow-lg">
                            <Star className="w-5 h-5 text-primary-foreground fill-current" />
                          </div>
                        </div>
                      </div>
                    )}
                  </button>

                  {/* Node Info Card */}
                  <div className={`absolute top-1/2 -translate-y-1/2 ${isLeft ? 'left-full ml-6' : 'right-full mr-6'} w-56 z-20`}>
                    <Card className={`p-4 bg-card/95 backdrop-blur border-2 transition-all duration-300
                      ${isCurrent ? 'border-primary shadow-lg scale-105' : 'border-border/50'}
                      ${node.locked ? 'opacity-60' : 'hover:shadow-xl'}
                    `}>
                      <h3 className="font-bold text-lg mb-1 text-foreground">{node.title}</h3>
                      {node.npc && (
                        <p className="text-xs text-primary font-medium mb-2">{node.npc.name}</p>
                      )}
                      <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{node.description}</p>
                      
                      {/* Rewards */}
                      <div className="flex items-center gap-2 text-xs">
                        <div className="flex items-center gap-1 px-2 py-1 bg-primary/10 rounded">
                          <Star className="w-3 h-3 text-primary" />
                          <span className="font-bold text-primary">+{node.rewards.xp}</span>
                        </div>
                        {node.rewards.gold && (
                          <div className="px-2 py-1 bg-yellow-500/10 rounded">
                            <span className="font-bold text-yellow-600">+{node.rewards.gold} 🪙</span>
                          </div>
                        )}
                      </div>

                      {/* Action Button */}
                      {!node.locked && !node.completed && (
                        <Button
                          onClick={() => onNodeSelect(node)}
                          size="sm"
                          className={`w-full mt-3 font-bold ${isCurrent ? 'bg-primary' : 'bg-secondary'}`}
                        >
                          {isCurrent ? '⚡ Continuar' : '▶ Começar'}
                        </Button>
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
          <div className="text-center py-12 animate-scale-in">
            <div className="text-8xl mb-4 animate-bounce">🏆</div>
            <h2 className="text-3xl font-bold text-primary mb-2">Jornada Completa!</h2>
            <p className="text-muted-foreground">Você dominou todos os desafios!</p>
          </div>
        )}
      </div>
    </div>
  );
};
