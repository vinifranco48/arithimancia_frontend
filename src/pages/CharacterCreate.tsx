import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { toast } from 'sonner';
import { ArrowLeft } from 'lucide-react';
import { gameService, characterService } from '@/services/api';
import { School } from '@/types/api';

export default function CharacterCreate() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [selectedSchool, setSelectedSchool] = useState<number | null>(null);
  const [schools, setSchools] = useState<School[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadSchools();
  }, []);

  const loadSchools = async () => {
    try {
      const data = await gameService.getSchools();
      setSchools(data);
    } catch (error) {
      console.error('Failed to load schools:', error);
      toast.error('Erro ao carregar escolas');
    } finally {
      setIsLoading(false);
    }
  };

  const getSchoolDetails = (schoolName: string) => {
    const lowerName = schoolName.toLowerCase();
    if (lowerName.includes('álgebra') || lowerName.includes('algebra')) {
      return {
        icon: '⚖️',
        color: 'from-purple-500 to-violet-600',
      };
    }
    if (lowerName.includes('geometria')) {
      return {
        icon: '📐',
        color: 'from-blue-500 to-cyan-600',
      };
    }
    if (lowerName.includes('trigonometria')) {
      return {
        icon: '〰️',
        color: 'from-pink-500 to-rose-600',
      };
    }
    if (lowerName.includes('número') || lowerName.includes('numero')) {
      return {
        icon: '🔢',
        color: 'from-amber-500 to-orange-600',
      };
    }
    return {
      icon: '🎓',
      color: 'from-gray-500 to-gray-600',
    };
  };

  const handleSubmit = async () => {
    if (!name || !selectedSchool) {
      toast.error('Preencha o nome e escolha uma escola');
      return;
    }

    try {
      await characterService.createCharacter(name, selectedSchool);
      toast.success('Personagem criado com sucesso!');
      navigate('/characters');
    } catch (error: any) {
      const message = error.response?.data?.error?.message || 'Erro ao criar personagem';
      toast.error(message);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-void flex items-center justify-center">
        <div className="text-primary animate-pulse">Carregando escolas...</div>
      </div>
    );
  }

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
              {schools.map((school) => {
                const details = getSchoolDetails(school.name);
                return (
                  <Card
                    key={school.id}
                    className={`p-6 cursor-pointer transition-all ${selectedSchool === school.id
                        ? 'bg-primary/20 border-primary'
                        : 'bg-card/50 border-primary/20 hover:border-primary/40'
                      }`}
                    onClick={() => setSelectedSchool(school.id)}
                  >
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <span className="text-4xl">{details.icon}</span>
                        <div>
                          <h3 className={`text-xl font-bold bg-gradient-to-r ${details.color} bg-clip-text text-transparent`}>
                            {school.name}
                          </h3>
                          <p className="text-xs text-muted-foreground italic">{school.axiom}</p>
                        </div>
                      </div>
                      <p className="text-sm text-foreground/80">{school.description}</p>
                      <div className="text-xs text-primary mt-2">
                        Bônus: +{school.bonusValue} {school.bonusType}
                      </div>
                    </div>
                  </Card>
                );
              })}
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
