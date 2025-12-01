import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Sparkles, Swords, LogOut, User } from 'lucide-react';
import { characterService } from '@/services/api';
import { Character, School } from '@/types/api';
import { toast } from 'sonner';

export default function Characters() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [characters, setCharacters] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadCharacters();
  }, []);

  const loadCharacters = async () => {
    try {
      const data = await characterService.getCharacters();
      setCharacters(data);
    } catch (error) {
      console.error('Failed to load characters:', error);
      toast.error('Erro ao carregar personagens');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreateCharacter = () => {
    navigate('/character/create');
  };

  const handlePlayCharacter = (character: Character) => {
    localStorage.setItem('current_character_id', character.id.toString());
    navigate('/game');
  };

  const handleDeleteCharacter = async (id: number) => {
    if (!confirm('Tem certeza que deseja deletar este personagem?')) return;

    try {
      await characterService.deleteCharacter(id);
      setCharacters(characters.filter(c => c.id !== id));
      toast.success('Personagem deletado com sucesso');
    } catch (error) {
      toast.error('Erro ao deletar personagem');
    }
  };

  const getSchoolColor = (schoolName?: string) => {
    if (!schoolName) return 'from-gray-500 to-gray-600';

    const lowerName = schoolName.toLowerCase();
    if (lowerName.includes('álgebra') || lowerName.includes('algebra')) return 'from-purple-500 to-violet-600';
    if (lowerName.includes('geometria')) return 'from-blue-500 to-cyan-600';
    if (lowerName.includes('trigonometria')) return 'from-pink-500 to-rose-600';
    if (lowerName.includes('número') || lowerName.includes('numero')) return 'from-amber-500 to-orange-600';

    return 'from-gray-500 to-gray-600';
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-void flex items-center justify-center">
        <div className="text-primary animate-pulse">Carregando personagens...</div>
      </div>
    );
  }

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
                  <p className={`text-sm font-medium bg-gradient-to-r ${getSchoolColor(character.school?.name)} bg-clip-text text-transparent`}>
                    {character.school?.name || 'Sem Escola'}
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
                  <span className="text-foreground">{character.currentHealth}/{character.maxHealth}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">XP:</span>
                  <span className="text-foreground">{character.experiencePoints}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Ouro:</span>
                  <span className="text-amber-500">{character.gold}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Local:</span>
                  <span className="text-foreground text-xs">{character.location?.name || 'Desconhecido'}</span>
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

        {characters.length === 0 && !isLoading && (
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
