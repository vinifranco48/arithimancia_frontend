import { useState } from 'react';
import { NPC } from '@/types/npc';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { BookOpen, Brain, CheckCircle2, X } from 'lucide-react';
import { toast } from 'sonner';

interface NPCDialogueProps {
  npc: NPC;
  onComplete: (xpGained: number) => void;
  onClose: () => void;
}

export const NPCDialogue = ({ npc, onComplete, onClose }: NPCDialogueProps) => {
  const [stage, setStage] = useState<'dialogue' | 'lesson' | 'practice'>('dialogue');
  const [dialogueIndex, setDialogueIndex] = useState(0);
  const [currentProblem, setCurrentProblem] = useState(0);
  const [answer, setAnswer] = useState('');
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const handleNextDialogue = () => {
    if (dialogueIndex < npc.dialogues.length - 1) {
      setDialogueIndex(dialogueIndex + 1);
    } else {
      setStage('lesson');
    }
  };

  const handleStartPractice = () => {
    setStage('practice');
  };

  const handleSubmitAnswer = () => {
    const problem = npc.lesson.practiceProblems[currentProblem];
    const userAnswer = parseInt(answer);

    if (userAnswer === problem.answer) {
      toast.success('Correto!', {
        description: 'Você dominou este conceito!'
      });
      setCorrectAnswers(correctAnswers + 1);
      
      if (currentProblem < npc.lesson.practiceProblems.length - 1) {
        setCurrentProblem(currentProblem + 1);
        setAnswer('');
      } else {
        // Completed all problems
        const xpGained = 50 + (correctAnswers * 25);
        toast.success('Lição Completa!', {
          description: `Você ganhou ${xpGained} XP com ${npc.name}!`
        });
        onComplete(xpGained);
      }
    } else {
      toast.error('Incorreto', {
        description: `Dica: ${problem.hint}`
      });
    }
  };

  const getEmotionEmoji = (emotion: string) => {
    switch (emotion) {
      case 'happy': return '😊';
      case 'thinking': return '🤔';
      case 'excited': return '🤩';
      default: return '😌';
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <span className="text-6xl">{npc.avatar}</span>
              <div>
                <CardTitle className="text-2xl">{npc.name}</CardTitle>
                <CardDescription className="text-lg">{npc.title}</CardDescription>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {stage === 'dialogue' && (
            <div className="space-y-4">
              <div className="bg-muted/50 p-6 rounded-lg border-l-4 border-primary">
                <div className="flex items-start gap-3">
                  <span className="text-3xl">{getEmotionEmoji(npc.dialogues[dialogueIndex].emotion)}</span>
                  <p className="text-lg leading-relaxed flex-1">
                    {npc.dialogues[dialogueIndex].text}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  {dialogueIndex + 1} / {npc.dialogues.length}
                </span>
                <Button onClick={handleNextDialogue}>
                  {dialogueIndex < npc.dialogues.length - 1 ? 'Continuar' : 'Aprender'}
                </Button>
              </div>
            </div>
          )}

          {stage === 'lesson' && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold">{npc.lesson.concept}</h3>
              </div>

              <div className="bg-gradient-mystic/10 p-6 rounded-lg border border-primary/20">
                <p className="text-base leading-relaxed mb-4">{npc.lesson.explanation}</p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold flex items-center gap-2">
                    <Brain className="w-4 h-4" />
                    Exemplos:
                  </h4>
                  {npc.lesson.examples.map((example, i) => (
                    <div key={i} className="bg-background/50 p-3 rounded border border-border">
                      <code className="text-sm">{example}</code>
                    </div>
                  ))}
                </div>
              </div>

              <Button onClick={handleStartPractice} className="w-full" size="lg">
                Praticar Agora
              </Button>
            </div>
          )}

          {stage === 'practice' && (
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold">Desafio Prático</h3>
                  <span className="text-sm text-muted-foreground">
                    {currentProblem + 1} / {npc.lesson.practiceProblems.length}
                  </span>
                </div>
                <Progress 
                  value={((currentProblem + 1) / npc.lesson.practiceProblems.length) * 100} 
                  className="h-2"
                />
              </div>

              <div className="bg-muted/50 p-6 rounded-lg">
                <p className="text-lg mb-6">
                  {npc.lesson.practiceProblems[currentProblem].question}
                </p>

                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">
                      Sua Resposta:
                    </label>
                    <Input
                      type="number"
                      value={answer}
                      onChange={(e) => setAnswer(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleSubmitAnswer()}
                      placeholder="Digite o número..."
                      className="text-lg"
                      autoFocus
                    />
                  </div>

                  <Button onClick={handleSubmitAnswer} className="w-full" size="lg">
                    <CheckCircle2 className="w-4 h-4 mr-2" />
                    Verificar Resposta
                  </Button>
                </div>
              </div>

              <div className="text-center text-sm text-muted-foreground">
                <p>Respostas corretas: {correctAnswers} / {npc.lesson.practiceProblems.length}</p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
