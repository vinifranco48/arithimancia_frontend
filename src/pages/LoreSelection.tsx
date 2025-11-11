import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Sparkles } from 'lucide-react';

type LoreType = 'algebra' | 'geometry' | 'combinatorics';

export default function LoreSelection() {
  const navigate = useNavigate();
  const [selectedLore, setSelectedLore] = useState<LoreType | null>(null);

  const lores = [
    {
      id: 'algebra' as LoreType,
      name: 'Reino da Álgebra',
      description: 'Explore o mundo das equações e incógnitas com os grandes algebristas da história',
      icon: '🧮',
      gradient: 'from-purple-500 via-violet-500 to-purple-600',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30',
      features: ['Equações lineares', 'Sistemas algébricos', 'Fatoração e produtos notáveis'],
      npcs: ['Al-Khwarizmi', 'Emmy Noether', 'Évariste Galois'],
    },
    {
      id: 'geometry' as LoreType,
      name: 'Reino da Geometria',
      description: 'Desvende os segredos das formas e espaços com os mestres da geometria',
      icon: '📐',
      gradient: 'from-blue-500 via-cyan-500 to-blue-600',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30',
      features: ['Formas e polígonos', 'Teoremas clássicos', 'Geometria espacial'],
      npcs: ['Euclides', 'Pitágoras', 'Arquimedes'],
    },
    {
      id: 'combinatorics' as LoreType,
      name: 'Reino da Combinatória',
      description: 'Domine a arte de contar e organizar com os especialistas em arranjos',
      icon: '🎲',
      gradient: 'from-orange-500 via-amber-500 to-orange-600',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/30',
      features: ['Permutações', 'Combinações', 'Princípio fundamental da contagem'],
      npcs: ['Pascal', 'Fibonacci', 'Ramanujan'],
    },
  ];

  const handleStart = () => {
    if (!selectedLore) return;
    
    // Salvar lore selecionado
    localStorage.setItem('selected_lore', selectedLore);
    
    // Navegar para jogo
    navigate('/game');
  };

  return (
    <div className="min-h-screen bg-gradient-void p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar
        </Button>

        <div className="text-center space-y-3 animate-fade-in">
          <div className="flex items-center justify-center gap-3">
            <Sparkles className="w-8 h-8 text-primary animate-pulse" />
            <h1 className="text-4xl md:text-6xl font-bold text-gradient-mystic">
              Escolha Sua Jornada
            </h1>
            <Sparkles className="w-8 h-8 text-primary animate-pulse" />
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada reino possui sua própria história, NPCs lendários e desafios únicos. Escolha sabiamente!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {lores.map((lore, index) => (
            <Card
              key={lore.id}
              className={`p-6 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-fade-in
                ${selectedLore === lore.id 
                  ? `${lore.bgColor} ${lore.borderColor} border-2 shadow-lg` 
                  : 'bg-card/50 border-border hover:border-primary/40'
                }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedLore(lore.id)}
            >
              {/* Icon Header */}
              <div className="text-center mb-6">
                <div className={`inline-flex p-6 rounded-full bg-gradient-to-br ${lore.gradient} shadow-lg mb-4`}>
                  <span className="text-6xl">{lore.icon}</span>
                </div>
                <h2 className={`text-2xl font-bold bg-gradient-to-r ${lore.gradient} bg-clip-text text-transparent`}>
                  {lore.name}
                </h2>
              </div>

              {/* Description */}
              <p className="text-sm text-foreground/80 mb-6 text-center">
                {lore.description}
              </p>

              {/* Features */}
              <div className="space-y-3 mb-6">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                  O que você vai aprender:
                </p>
                <ul className="space-y-2">
                  {lore.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-foreground/90">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${lore.gradient}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* NPCs */}
              <div className="space-y-3 pt-4 border-t border-border/50">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                  Mestres que você encontrará:
                </p>
                <div className="flex flex-wrap gap-2">
                  {lore.npcs.map((npc, i) => (
                    <span
                      key={i}
                      className={`text-xs px-3 py-1 rounded-full ${lore.bgColor} border ${lore.borderColor} text-foreground/90`}
                    >
                      {npc}
                    </span>
                  ))}
                </div>
              </div>

              {/* Selected indicator */}
              {selectedLore === lore.id && (
                <div className="mt-6 text-center">
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${lore.gradient} text-white font-semibold text-sm shadow-lg animate-scale-in`}>
                    ✓ Selecionado
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Start Button */}
        <div className="flex justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Button
            onClick={handleStart}
            disabled={!selectedLore}
            size="lg"
            className={`px-12 py-6 text-lg font-bold shadow-lg transition-all duration-300
              ${selectedLore 
                ? 'bg-gradient-mystic hover:shadow-2xl hover:scale-105' 
                : 'opacity-50'
              }`}
          >
            {selectedLore ? '🚀 Iniciar Jornada' : 'Escolha um Reino'}
          </Button>
        </div>
      </div>
    </div>
  );
}
