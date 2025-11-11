import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { School } from '@/types/game';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { toast } from 'sonner';
import { ArrowLeft } from 'lucide-react';

export default function CharacterCreate() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [selectedSchool, setSelectedSchool] = useState<School | null>(null);

  const schools = [
    {
      id: 'algebrista' as School,
      name: 'Algebrista',
      motto: 'Pelos Axiomas da Ordem',
      description: 'Mestres das equações e do equilíbrio matemático',
      icon: '⚖️',
      color: 'from-purple-500 to-violet-600',
    },
    {
      id: 'geometra' as School,
      name: 'Geômetra',
      motto: 'Pela Harmonia das Formas',
      description: 'Arquitetos da realidade e das estruturas espaciais',
      icon: '📐',
      color: 'from-blue-500 to-cyan-600',
    },
    {
      id: 'trigonometra' as School,
      name: 'Trigonômetra',
      motto: 'Pelos Ciclos Eternos',
      description: 'Guardiões dos padrões e ritmos cósmicos',
      icon: '〰️',
      color: 'from-pink-500 to-rose-600',
    },
    {
      id: 'numerologo' as School,
      name: 'Numerólogo',
      motto: 'Pela Verdade dos Números',
      description: 'Sábios dos números primos e sequências sagradas',
      icon: '🔢',
      color: 'from-amber-500 to-orange-600',
    },
  ];

  const handleSubmit = () => {
    if (!name || !selectedSchool) {
      toast.error('Preencha o nome e escolha uma escola');
      return;
    }

    // Simular criação de personagem
    const newCharacter = {
      id: 'char-' + Math.random().toString(36).substr(2, 9),
      name,
      school: selectedSchool,
      level: 1,
      hp: 100,
      maxHp: 100,
      experience: 0,
      gold: 100,
      location: 'Biblioteca de Alexandria Numérica',
    };

    // Salvar no localStorage
    const savedChars = localStorage.getItem('arithimancia_characters');
    const characters = savedChars ? JSON.parse(savedChars) : [];
    
    if (characters.length >= 3) {
      toast.error('Máximo de 3 personagens atingido');
      return;
    }

    characters.push(newCharacter);
    localStorage.setItem('arithimancia_characters', JSON.stringify(characters));

    toast.success('Personagem criado com sucesso!');
    navigate('/characters');
  };

  return (
    <div className="min-h-screen bg-gradient-void p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <Button
          variant="ghost"
          onClick={() => navigate('/characters')}
          className="gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar
        </Button>

        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-gradient-mystic">
            Criar Novo Reconstrutor
          </h1>
          <p className="text-muted-foreground">
            Escolha sua escola e comece sua jornada na Grande Rede Matemática
          </p>
        </div>

        <Card className="p-8 bg-card/90 backdrop-blur border-primary/30 space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Nome do Personagem</label>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Digite o nome do seu reconstrutor"
              className="bg-background/50 text-lg"
            />
          </div>

          <div className="space-y-4">
            <label className="text-sm font-medium text-foreground">Escolha sua Escola</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {schools.map((school) => (
                <Card
                  key={school.id}
                  className={`p-6 cursor-pointer transition-all ${
                    selectedSchool === school.id
                      ? 'bg-primary/20 border-primary'
                      : 'bg-card/50 border-primary/20 hover:border-primary/40'
                  }`}
                  onClick={() => setSelectedSchool(school.id)}
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-4xl">{school.icon}</span>
                      <div>
                        <h3 className={`text-xl font-bold bg-gradient-to-r ${school.color} bg-clip-text text-transparent`}>
                          {school.name}
                        </h3>
                        <p className="text-xs text-muted-foreground italic">{school.motto}</p>
                      </div>
                    </div>
                    <p className="text-sm text-foreground/80">{school.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <Button
            onClick={handleSubmit}
            disabled={!name || !selectedSchool}
            className="w-full py-6 text-lg bg-gradient-mystic"
          >
            Criar Personagem
          </Button>
        </Card>
      </div>
    </div>
  );
}
