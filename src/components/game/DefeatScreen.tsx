import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface DefeatScreenProps {
  onRetry: () => void;
}

export const DefeatScreen = ({ onRetry }: DefeatScreenProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-void">
      <Card className="max-w-2xl w-full p-8 bg-destructive/10 backdrop-blur border-destructive/30 space-y-6 text-center">
        <div className="space-y-4">
          <h2 className="text-5xl font-bold text-destructive">
            💀 DERROTA 💀
          </h2>
          
          <div className="w-32 h-1 bg-gradient-to-r from-destructive to-red-600 mx-auto rounded-full" />
          
          <p className="text-2xl text-foreground">
            O Paradoxo Zero prevaleceu desta vez...
          </p>
          
          <p className="text-lg text-muted-foreground">
            A Grande Rede Matemática enfraqueceu, mas sua jornada não termina aqui.
          </p>
        </div>

        <div className="py-6 space-y-3">
          <p className="text-foreground/80 italic">
            "A matemática não é sobre respostas certas, mas sobre aprender com os erros."
          </p>
          <p className="text-sm text-muted-foreground">
            - Os Axiomas da Reconstrução
          </p>
        </div>

        <div className="space-y-4 pt-4">
          <Button
            onClick={onRetry}
            className="w-full px-8 py-6 text-lg bg-gradient-mystic hover:opacity-90"
          >
            ↻ Tentar Novamente
          </Button>
          
          <p className="text-sm text-muted-foreground">
            Dica: Estude os padrões matemáticos e tente diferentes estratégias!
          </p>
        </div>
      </Card>
    </div>
  );
};
