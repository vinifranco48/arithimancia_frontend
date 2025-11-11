import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { School } from '@/types/game';

interface CharacterCreationProps {
  onComplete: (name: string, school: School) => void;
}

const kingdoms = [
  {
    id: 'algebrista' as School,
    name: 'Reino da Álgebra',
    schoolName: 'Algebrista',
    motto: 'Pelos Axiomas da Ordem',
    description: 'Reconstrua o Grande Livro de Equações. Variáveis fugiram, constantes se tornaram instáveis. Al-Khwarizmi aguarda na Torre Algébrica.',
    icon: '🧮',
    symbol: 'x² + y²',
    color: 'from-purple-600 to-violet-600',
    loreHint: '40 nós · 6 mestres · Equações e sistemas'
  },
  {
    id: 'geometra' as School,
    name: 'Reino da Geometria',
    schoolName: 'Geômetra',
    motto: 'Pela Forma e Simetria',
    description: 'Restaure a Biblioteca de Formas Perfeitas. Círculos perderam sua redondeza, triângulos distorcidos. Euclides espera petrificado.',
    icon: '📐',
    symbol: '△ ○ □',
    color: 'from-blue-500 to-cyan-600',
    loreHint: '40 nós · 7 mestres · Axiomas e círculos'
  },
  {
    id: 'trigonometra' as School,
    name: 'Reino dos Ciclos',
    schoolName: 'Trigonômetra',
    motto: 'Pelos Ciclos Eternos',
    description: 'Sincronize o Relógio Cósmico. Ondas caóticas, senos e cossenos dessincronizados. Hipátia aguarda no Observatório Celeste.',
    icon: '∿',
    symbol: '∿ ∫ ∞',
    color: 'from-pink-500 to-rose-600',
    loreHint: '40 nós · 5 mestres · Ângulos e ondas'
  },
  {
    id: 'numerologo' as School,
    name: 'Reino dos Números',
    schoolName: 'Numerólogo',
    motto: 'Pelos Números Primordiais',
    description: 'Salve a Cripta dos Números Primos. Zeros Absolutos invadiram, perfeitos perderam perfeição. Pitágoras medita petrificado.',
    icon: '🔢',
    symbol: '∑ π φ',
    color: 'from-amber-500 to-orange-600',
    loreHint: '40 nós · 6 mestres · Primos e sequências'
  }
];

export const CharacterCreation = ({ onComplete }: CharacterCreationProps) => {
  const [name, setName] = useState('');
  const [selectedSchool, setSelectedSchool] = useState<School | null>(null);

  const handleSubmit = () => {
    if (name && selectedSchool) {
      onComplete(name, selectedSchool);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-void">
      <div className="max-w-4xl w-full space-y-8 animate-in fade-in duration-1000">
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold text-glow-intense">
            ARITHIMANCIA
          </h1>
          <p className="text-xl text-muted-foreground">
            O Mundo da Reconstrução Matemática
          </p>
          <div className="w-32 h-1 bg-gradient-mystic mx-auto rounded-full" />
        </div>

        <Card className="p-8 bg-card/50 backdrop-blur border-primary/30">
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-lg font-semibold text-primary">
                Nome do Reconstrutor
              </label>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Digite seu nome..."
                className="bg-background/50 border-primary/50 text-lg"
              />
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary text-center">
                Escolha Seu Reino Matemático
              </h3>
              <p className="text-sm text-muted-foreground text-center">
                Cada reino tem sua própria história, mestres e desafios únicos
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                {kingdoms.map((kingdom) => (
                  <Card
                    key={kingdom.id}
                    className={`p-6 cursor-pointer transition-all hover:scale-105 ${
                      selectedSchool === kingdom.id
                        ? 'border-primary border-2 shadow-[0_0_30px_rgba(168,85,247,0.5)]'
                        : 'border-border hover:border-primary/50'
                    }`}
                    onClick={() => setSelectedSchool(kingdom.id)}
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-2xl font-bold">{kingdom.name}</h4>
                          <p className="text-xs text-muted-foreground">Classe: {kingdom.schoolName}</p>
                        </div>
                        <span className="text-4xl">{kingdom.icon}</span>
                      </div>
                      <p className="text-sm text-primary italic">"{kingdom.motto}"</p>
                      <p className="text-muted-foreground text-sm">
                        {kingdom.description}
                      </p>
                      <div className="pt-2 border-t border-border/50">
                        <p className="text-xs text-muted-foreground">
                          {kingdom.loreHint}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <Button
              onClick={handleSubmit}
              disabled={!name || !selectedSchool}
              className="w-full text-lg py-6 bg-gradient-mystic hover:opacity-90 transition-opacity"
            >
              Iniciar Jornada
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};
