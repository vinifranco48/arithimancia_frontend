import { MapNode } from '@/types/npc';
import { Character } from '@/types/game';
import { Sword, Book, Gift, Skull, Lock, CheckCircle2, Star, Trophy } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

interface GameMapProps {
  nodes: MapNode[];
  character: Character;
  onNodeSelect: (node: MapNode) => void;
  currentNodeId?: number;
}

export const GameMap = ({ nodes, character, onNodeSelect, currentNodeId }: GameMapProps) => {
  const completedNodes = nodes.filter(n => n.completed).length;
  const progressPercentage = (completedNodes / nodes.length) * 100;
  const currentNodeIndex = nodes.findIndex(n => n.id === currentNodeId);

  const getNodeIcon = (type: MapNode['type'], locked: boolean, completed: boolean) => {
    if (completed) return <CheckCircle2 className="w-8 h-8" />;
    if (locked) return <Lock className="w-8 h-8" />;
    
    switch (type) {
      case 'battle':
        return <Sword className="w-8 h-8" />;
      case 'npc':
        return <Book className="w-8 h-8" />;
      case 'treasure':
        return <Gift className="w-8 h-8" />;
      case 'boss':
        return <Skull className="w-8 h-8" />;
    }
  };

  const getNodeColors = (type: MapNode['type'], locked: boolean, completed: boolean, isCurrent: boolean) => {
    if (locked) {
      return {
        bg: 'bg-muted/50',
        border: 'border-muted',
        text: 'text-muted-foreground',
        icon: 'text-muted-foreground'
      };
    }
    
    if (completed) {
      return {
        bg: 'bg-primary/10',
        border: 'border-primary/50',
        text: 'text-foreground',
        icon: 'text-primary'
      };
    }
    
    if (isCurrent) {
      return {
        bg: 'bg-primary/20 shadow-[0_0_30px_hsl(var(--primary)/0.3)]',
        border: 'border-primary ring-2 ring-primary/50',
        text: 'text-foreground',
        icon: 'text-primary'
      };
    }
    
    switch (type) {
      case 'battle':
        return {
          bg: 'bg-destructive/10 hover:bg-destructive/20',
          border: 'border-destructive/50',
          text: 'text-foreground',
          icon: 'text-destructive'
        };
      case 'npc':
        return {
          bg: 'bg-accent/10 hover:bg-accent/20',
          border: 'border-accent/50',
          text: 'text-foreground',
          icon: 'text-accent'
        };
      case 'treasure':
        return {
          bg: 'bg-secondary/10 hover:bg-secondary/20',
          border: 'border-secondary/50',
          text: 'text-foreground',
          icon: 'text-secondary'
        };
      case 'boss':
        return {
          bg: 'bg-primary/10 hover:bg-primary/20',
          border: 'border-primary/50',
          text: 'text-foreground',
          icon: 'text-primary'
        };
    }
  };

  return (
    <div className="min-h-screen bg-gradient-void p-4 md:p-8">
      {/* Header with character info and progress */}
      <div className="max-w-4xl mx-auto mb-8">
        <Card className="p-6 bg-card/95 backdrop-blur border-border">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-1">{character.name}</h2>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-primary" />
                  Nível {character.level}
                </span>
                <span className="text-primary">{character.experience} XP</span>
                <span className="text-destructive">{character.hp}/{character.maxHp} HP</span>
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
              <span className="text-foreground font-medium">{Math.round(progressPercentage)}%</span>
            </div>
            <Progress value={progressPercentage} className="h-3" />
          </div>
        </Card>
      </div>

      {/* Vertical path map */}
      <div className="max-w-2xl mx-auto relative">
        {nodes.map((node, index) => {
          const nextNode = nodes[index + 1];
          const colors = getNodeColors(node.type, node.locked, node.completed, currentNodeId === node.id);
          const isLeft = index % 2 === 0;

          return (
            <div key={node.id} className="relative mb-12 last:mb-0">
              {/* Connecting line */}
              {nextNode && (
                <div className={`absolute ${isLeft ? 'left-[50%]' : 'right-[50%]'} top-full w-0.5 h-12 
                  ${node.completed && !nextNode.locked ? 'bg-primary' : 'bg-border'} 
                  ${node.completed && !nextNode.locked ? 'shadow-[0_0_10px_hsl(var(--primary)/0.5)]' : ''}`} 
                />
              )}

              {/* Character Avatar */}
              {currentNodeId === node.id && !node.locked && (
                <div className={`absolute ${isLeft ? 'left-[50%] -translate-x-1/2' : 'right-[50%] translate-x-1/2'} -top-16 z-20 animate-fade-in`}>
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/30 rounded-full blur-xl animate-pulse" />
                    <div className="relative bg-gradient-to-br from-primary to-primary/80 rounded-full p-4 shadow-2xl border-4 border-background animate-bounce">
                      <div className="text-4xl">🧙‍♂️</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Node card */}
              <div 
                className={`flex ${isLeft ? 'justify-start' : 'justify-end'} animate-fade-in`}
                style={{ perspective: '1000px' }}
              >
                <Card
                  className={`
                    relative w-72 p-5 border-2 transition-all duration-500
                    ${colors.bg} ${colors.border} ${colors.text}
                    ${node.locked ? 'cursor-not-allowed opacity-60' : 'cursor-pointer hover:-translate-y-2 hover:shadow-2xl'}
                    ${!node.locked && 'hover:[transform:rotateY(5deg)_rotateX(5deg)]'}
                    [transform-style:preserve-3d]
                  `}
                  onClick={() => !node.locked && onNodeSelect(node)}
                >
                  {/* Current indicator */}
                  {currentNodeId === node.id && !node.completed && (
                    <div className="absolute -top-2 -right-2 z-10">
                      <div className="relative">
                        <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75" />
                        <div className="relative bg-primary rounded-full p-2 shadow-lg">
                          <Trophy className="w-4 h-4 text-primary-foreground" />
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex items-start gap-4 mb-3">
                    {/* Icon */}
                    <div className={`
                      flex-shrink-0 p-3 rounded-xl ${colors.bg} ${colors.icon} 
                      transition-all duration-500
                      ${!node.locked && 'hover:scale-125 hover:rotate-12 hover:shadow-lg'}
                      [transform-style:preserve-3d]
                      ${!node.locked && 'hover:[transform:translateZ(20px)_rotate(12deg)]'}
                    `}>
                      {node.npc?.avatar ? (
                        <span className="text-4xl">{node.npc.avatar}</span>
                      ) : (
                        getNodeIcon(node.type, node.locked, node.completed)
                      )}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold text-lg">{node.title}</h3>
                        {node.type === 'boss' && (
                          <Skull className="w-4 h-4 text-primary animate-pulse" />
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground mb-2">
                        {node.npc ? node.npc.name : `Nível ${node.requiredLevel}`}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-sm mb-4 leading-relaxed">{node.description}</p>
                  
                  {/* Rewards */}
                  <div className="flex items-center gap-3 mb-3 text-sm [transform-style:preserve-3d]">
                    <div className="flex items-center gap-1 px-2 py-1 bg-primary/10 rounded-md transition-all duration-300 hover:scale-110 hover:[transform:translateZ(10px)]">
                      <Star className="w-3 h-3 text-primary" />
                      <span className="font-medium text-primary">+{node.rewards.xp} XP</span>
                    </div>
                    {node.rewards.gold && (
                      <div className="flex items-center gap-1 px-2 py-1 bg-secondary/10 rounded-md transition-all duration-300 hover:scale-110 hover:[transform:translateZ(10px)]">
                        <span className="font-medium text-secondary">+{node.rewards.gold} Ouro</span>
                      </div>
                    )}
                  </div>
                  
                  {/* Status button */}
                  {node.locked && (
                    <div className="flex items-center justify-center gap-2 py-2 text-sm text-muted-foreground">
                      <Lock className="w-4 h-4" />
                      <span>Bloqueado</span>
                    </div>
                  )}
                  
                  {node.completed && (
                    <div className="flex items-center justify-center gap-2 py-2 text-sm font-medium text-primary">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Completo</span>
                    </div>
                  )}
                  
                  {!node.locked && !node.completed && (
                    <Button
                      size="lg"
                      className="w-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg [transform-style:preserve-3d] hover:[transform:translateZ(10px)]"
                      variant={currentNodeId === node.id ? "default" : "outline"}
                    >
                      {currentNodeId === node.id ? '⚡ Em Progresso' : '🚀 Começar'}
                    </Button>
                  )}
                </Card>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
