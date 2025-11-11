import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { toast } from 'sonner';

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const { login, register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      if (isLogin) {
        await login(email, password);
        toast.success('Login realizado com sucesso!');
      } else {
        await register(email, password, username);
        toast.success('Conta criada com sucesso!');
      }
      navigate('/characters');
    } catch (error) {
      toast.error('Erro na autenticação');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-void">
      <Card className="max-w-md w-full p-8 space-y-6 bg-card/90 backdrop-blur border-primary/30">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-gradient-mystic">
            Arithimancia
          </h1>
          <p className="text-muted-foreground">
            {isLogin ? 'Entre na Grande Rede Matemática' : 'Junte-se aos Reconstrutores'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Nome de Usuário</label>
              <Input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="bg-background/50"
              />
            </div>
          )}

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Email</label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-background/50"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Senha</label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="bg-background/50"
            />
          </div>

          <Button type="submit" className="w-full bg-gradient-mystic">
            {isLogin ? 'Entrar' : 'Registrar'}
          </Button>
        </form>

        <div className="text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-sm text-primary hover:underline"
          >
            {isLogin ? 'Não tem conta? Registre-se' : 'Já tem conta? Entre'}
          </button>
        </div>
      </Card>
    </div>
  );
}
