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
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [username, setUsername] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login, register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    try {
      if (isLogin) {
        await login(email, password);
        toast.success('Login realizado com sucesso!');
      } else {
        if (password !== passwordConfirmation) {
          toast.error('As senhas não coincidem');
          return;
        }
        await register(username, email, password, passwordConfirmation);
        toast.success('Conta criada com sucesso!');
      }
      navigate('/characters');
    } catch (error: any) {
      let message = error.response?.data?.error?.message || 'Erro na autenticação';

      if (error.response?.status === 429) {
        message = 'Muitas tentativas. Por favor, aguarde alguns segundos e tente novamente.';
      } else if (error.response?.status === 409) {
        message = 'Usuário ou email já cadastrado.';
      } else if (error.response?.status === 422) {
        // Extrair detalhes específicos de validação
        const details = error.response?.data?.error?.details;
        if (details && Array.isArray(details)) {
          // Mostrar cada erro de campo específico
          details.forEach((err: any) => {
            toast.error(`${err.field || 'Campo'}: ${err.message}`);
          });
          return; // Não mostrar mensagem genérica
        }
        message = error.response?.data?.error?.message || 'Dados inválidos. Verifique os requisitos abaixo.';
      }

      toast.error(message);
    } finally {
      setIsSubmitting(false);
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
            <label className="text-sm font-medium text-foreground">
              {isLogin ? 'Email ou Username' : 'Email'}
            </label>
            <Input
              type={isLogin ? "text" : "email"}
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

          {!isLogin && (
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Confirmar Senha</label>
              <Input
                type="password"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                required
                className="bg-background/50"
              />
            </div>
          )}

          {!isLogin && (
            <div className="text-xs space-y-2 p-3 rounded-md bg-muted/50 border border-border/50">
              <p className="font-semibold text-foreground">Requisitos:</p>
              <div className="space-y-1 text-muted-foreground">
                <p><span className="font-medium">Username:</span> Mínimo 3 caracteres (apenas letras, números, _ e -)</p>
                <p><span className="font-medium">Senha:</span> Mínimo 8 caracteres com:</p>
                <ul className="list-disc list-inside ml-2">
                  <li>Uma letra maiúscula (A-Z)</li>
                  <li>Uma letra minúscula (a-z)</li>
                  <li>Um número (0-9)</li>
                </ul>
              </div>
            </div>
          )}

          <Button type="submit" className="w-full bg-gradient-mystic" disabled={isSubmitting}>
            {isSubmitting ? 'Aguarde...' : (isLogin ? 'Entrar' : 'Registrar')}
          </Button>
        </form>

        <div className="text-center">
          <button
            onClick={() => {
              setIsLogin(!isLogin);
              setPassword('');
              setPasswordConfirmation('');
            }}
            className="text-sm text-primary hover:underline"
          >
            {isLogin ? 'Não tem conta? Registre-se' : 'Já tem conta? Entre'}
          </button>
        </div>
      </Card>
    </div>
  );
}
