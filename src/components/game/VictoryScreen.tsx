import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Character } from '@/types/game';

interface VictoryScreenProps {
  character: Character;
  onContinue: () => void;
}

export const VictoryScreen = ({ character, onContinue }: VictoryScreenProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-void">
      <Card className="max-w-2xl w-full p-8 bg-card/50 backdrop-blur border-primary/30 space-y-6 text-center">
        <div className="space-y-4">
          <h2 className="text-5xl font-bold text-primary text-glow-intense animate-pulse-glow">
            ✨ VITÓRIA! ✨
          </h2>
          
          <div className="w-32 h-1 bg-gradient-mystic mx-auto rounded-full" />
          
          <p className="text-2xl text-foreground">
            Parabéns, {character.name}!
          </p>
          
          <p className="text-lg text-muted-foreground">
            Você provou seu valor como um verdadeiro Reconstrutor da Grande Rede Matemática.
          </p>
        </div>

        <div className="py-6 space-y-3 bg-gradient-mystic/10 rounded-lg border border-primary/30">
          <div className="text-lg">
            <span className="text-muted-foreground">Nível:</span>{' '}
            <span className="text-2xl font-bold text-primary">{character.level}</span>
          </div>
          <div className="text-lg">
            <span className="text-muted-foreground">Experiência Total:</span>{' '}
            <span className="text-2xl font-bold text-primary">{character.experience}</span>
          </div>
          <div className="text-lg">
            <span className="text-muted-foreground">Escola:</span>{' '}
            <span className="text-xl font-semibold text-primary capitalize">{character.school}</span>
          </div>
        </div>

        <div className="space-y-4 pt-4">
          <p className="text-foreground/80">
            A Grande Rede Matemática está mais forte graças aos seus esforços.
            Mas ainda há muito a ser reconstruído...
          </p>
          
          <Button
            onClick={onContinue}
            className="w-full px-8 py-6 text-lg bg-gradient-mystic hover:opacity-90"
          >
            Continuar Aventura →
          </Button>
        </div>
      </Card>
    </div>
  );
};
