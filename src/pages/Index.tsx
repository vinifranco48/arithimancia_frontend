import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-void flex items-center justify-center p-4">
      <div className="text-center space-y-8 animate-fade-in">
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-bold text-gradient-mystic">
            Arithimancia
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            A Grande Rede Matemática Precisa de Você
          </p>
        </div>

        <div className="flex flex-col gap-4 max-w-md mx-auto">
          <Button
            onClick={() => navigate('/lore-selection')}
            size="lg"
            className="text-lg py-6 bg-gradient-mystic hover:shadow-2xl hover:scale-105 transition-all"
          >
            🚀 Começar Aventura
          </Button>
          
          <Button
            onClick={() => navigate('/characters')}
            variant="outline"
            size="lg"
            className="text-lg py-6"
          >
            📚 Ver Personagens
          </Button>
        </div>

        <div className="text-sm text-muted-foreground">
          Uma jornada épica através dos reinos da matemática
        </div>
      </div>
    </div>
  );
};

export default Index;
