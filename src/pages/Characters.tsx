import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { School } from '@/types/game';
import { Sparkles, Swords, LogOut, User } from 'lucide-react';

interface Character {
  id: string;
  name: string;
  school: School;
  level: number;
  hp: number;
  maxHp: number;
  experience: number;
  gold: number;
  location: string;
}

export default function Characters() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    // Simular carregamento de personagens
    const savedChars = localStorage.getItem('arithimancia_characters');
    if (savedChars) {
      setCharacters(JSON.parse(savedChars));
    }
  }, []);

  const handleCreateCharacter = () => {
    navigate('/character/create');
  };

  const handlePlayCharacter = (character: Character) => {
    localStorage.setItem('current_character', JSON.stringify(character));
    // Ir direto para o jogo - o reino já foi escolhido ao criar o personagem
    navigate('/game');
  };

  const handleDeleteCharacter = (id: string) => {
    const updatedChars = characters.filter(c => c.id !== id);
    setCharacters(updatedChars);
    localStorage.setItem('arithimancia_characters', JSON.stringify(updatedChars));
  };

  const getSchoolColor = (school: School) => {
    const colors = {
      algebrista: 'from-purple-500 to-violet-600',
      geometra: 'from-blue-500 to-cyan-600',
      trigonometra: 'from-pink-500 to-rose-600',
      numerologo: 'from-amber-500 to-orange-600',
    };
    return colors[school];
  };

  const getSchoolName = (school: School) => {
    const names = {
      algebrista: 'Algebrista',
      geometra: 'Geômetra',
      trigonometra: 'Trigonômetra',
      numerologo: 'Numerólogo',
    };
    return names[school];
  };

  return (
    <div className="min-h-screen bg-gradient-void p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold text-gradient-mystic">
              Meus Personagens
            </h1>
            <p className="text-muted-foreground mt-2">Bem-vindo, {user?.username}</p>
          </div>
          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={() => navigate('/profile')}
              className="gap-2"
            >
              <User className="w-4 h-4" />
              Perfil
            </Button>
            <Button
              variant="outline"
              onClick={logout}
              className="gap-2"
            >
              <LogOut className="w-4 h-4" />
              Sair
            </Button>
          </div>
        </div>

        {/* Characters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {characters.map((character) => (
            <Card
              key={character.id}
              className="p-6 bg-card/90 backdrop-blur border-primary/30 space-y-4"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{character.name}</h3>
                  <p className={`text-sm font-medium bg-gradient-to-r ${getSchoolColor(character.school)} bg-clip-text text-transparent`}>
                    {getSchoolName(character.school)}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground">Nível</p>
                  <p className="text-2xl font-bold text-primary">{character.level}</p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">HP:</span>
                  <span className="text-foreground">{character.hp}/{character.maxHp}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">XP:</span>
                  <span className="text-foreground">{character.experience}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Ouro:</span>
                  <span className="text-amber-500">{character.gold}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Local:</span>
                  <span className="text-foreground text-xs">{character.location}</span>
                </div>
              </div>

              <div className="flex gap-2">
                <Button
                  onClick={() => handlePlayCharacter(character)}
                  className="flex-1 bg-gradient-mystic gap-2"
                >
                  <Swords className="w-4 h-4" />
                  Jogar
                </Button>
                <Button
                  variant="destructive"
                  onClick={() => handleDeleteCharacter(character.id)}
                >
                  Deletar
                </Button>
              </div>
            </Card>
          ))}

          {/* Create Character Card */}
          {characters.length < 3 && (
            <Card
              className="p-6 bg-card/50 backdrop-blur border-primary/20 border-dashed flex flex-col items-center justify-center gap-4 cursor-pointer hover:border-primary/50 transition-colors"
              onClick={handleCreateCharacter}
            >
              <Sparkles className="w-12 h-12 text-primary" />
              <div className="text-center">
                <p className="font-bold text-foreground">Criar Novo Personagem</p>
                <p className="text-sm text-muted-foreground">
                  {characters.length}/3 personagens
                </p>
              </div>
            </Card>
          )}
        </div>

        {characters.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">
              Você ainda não possui personagens. Crie seu primeiro Reconstrutor!
            </p>
            <Button onClick={handleCreateCharacter} className="bg-gradient-mystic gap-2">
              <Sparkles className="w-4 h-4" />
              Criar Primeiro Personagem
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
