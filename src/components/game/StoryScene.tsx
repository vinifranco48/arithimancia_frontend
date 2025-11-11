import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface StorySceneProps {
  chapter: number;
  onContinue: () => void;
}

const storyChapters = [
  {
    title: 'O Despertar',
    content: [
      'A Grande Rede Matemática foi fragmentada há eras atrás, quando o Paradoxo Zero rasgou a própria realidade numérica.',
      'Agora, 2+2 nem sempre é 4. Geometrias impossíveis surgem do nada. Os números perderam seu significado.',
      'Você é um dos poucos Reconstrutores capazes de restaurar a ordem matemática, um axioma de cada vez.',
      'Sua jornada começa nas Ruínas da Biblioteca de Alexandria Numérica, onde equações antigas ainda ecoam pelas paredes...'
    ]
  },
  {
    title: 'O Primeiro Fragmento',
    content: [
      'Você derrotou sua primeira criatura matemática corrompida!',
      'Ao restaurar a ordem numérica nesta região, você pode sentir a Grande Rede se fortalecendo.',
      'Mas este é apenas o começo. O Paradoxo Zero deixou cicatrizes profundas na realidade.',
      'Criaturas mais poderosas aguardam à frente. Continue sua jornada, Reconstrutor!'
    ]
  },
  {
    title: 'O Deserto das Funções Perdidas',
    content: [
      'Você atravessa o Deserto das Funções Perdidas, onde gráficos de equações se materializam como montanhas e vales.',
      'Aqui, as leis da matemática são ainda mais instáveis. Padrões fractais correm pelo horizonte.',
      'Você sente que está se aproximando do coração da corrupção matemática.',
      'Prepare-se para desafios ainda maiores!'
    ]
  },
  {
    title: 'O Laboratório do Último Matemático',
    content: [
      'Você descobriu o Laboratório do Último Matemático, perdido no tempo e espaço.',
      'Aqui, as distorções temporais fazem os números dançarem de formas impossíveis.',
      'Nos registros antigos, você encontra menções ao Paradoxo Zero original...',
      'A verdade está próxima. Continue sua busca pela Reconstrução!'
    ]
  },
];

export const StoryScene = ({ chapter, onContinue }: StorySceneProps) => {
  const story = storyChapters[Math.min(chapter, storyChapters.length - 1)];

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-void">
      <Card className="max-w-3xl w-full p-8 bg-card/50 backdrop-blur border-primary/30 space-y-6">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold text-primary text-glow">
            {story.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-mystic mx-auto rounded-full" />
        </div>

        <div className="space-y-4">
          {story.content.map((paragraph, index) => (
            <p
              key={index}
              className="text-lg text-foreground/90 leading-relaxed animate-in fade-in duration-1000"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="pt-6 flex justify-center">
          <Button
            onClick={onContinue}
            className="px-8 py-6 text-lg bg-gradient-mystic hover:opacity-90"
          >
            Continuar Jornada →
          </Button>
        </div>
      </Card>
    </div>
  );
};
