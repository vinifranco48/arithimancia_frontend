import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { toast } from 'sonner';
import { ArrowLeft, Save } from 'lucide-react';

export default function Profile() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState(user?.username || '');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleUpdateProfile = () => {
    // Simular atualização de perfil
    toast.success('Perfil atualizado com sucesso!');
  };

  const handleChangePassword = () => {
    if (newPassword !== confirmPassword) {
      toast.error('As senhas não coincidem');
      return;
    }
    if (newPassword.length < 6) {
      toast.error('A senha deve ter pelo menos 6 caracteres');
      return;
    }
    // Simular mudança de senha
    toast.success('Senha alterada com sucesso!');
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="min-h-screen bg-gradient-void p-6">
      <div className="max-w-2xl mx-auto space-y-6">
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
            Perfil do Jogador
          </h1>
          <p className="text-muted-foreground">Gerencie suas informações</p>
        </div>

        {/* Profile Info */}
        <Card className="p-8 bg-card/90 backdrop-blur border-primary/30 space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Informações do Perfil</h2>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Email</label>
                <Input
                  type="email"
                  value={user?.email}
                  disabled
                  className="bg-background/30"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Nome de Usuário</label>
                <Input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="bg-background/50"
                />
              </div>

              <Button
                onClick={handleUpdateProfile}
                className="w-full bg-gradient-mystic gap-2"
              >
                <Save className="w-4 h-4" />
                Salvar Alterações
              </Button>
            </div>
          </div>
        </Card>

        {/* Change Password */}
        <Card className="p-8 bg-card/90 backdrop-blur border-primary/30 space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Alterar Senha</h2>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Senha Atual</label>
                <Input
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className="bg-background/50"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Nova Senha</label>
                <Input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="bg-background/50"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Confirmar Nova Senha</label>
                <Input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="bg-background/50"
                />
              </div>

              <Button
                onClick={handleChangePassword}
                variant="secondary"
                className="w-full"
                disabled={!currentPassword || !newPassword || !confirmPassword}
              >
                Alterar Senha
              </Button>
            </div>
          </div>
        </Card>

        {/* Stats */}
        <Card className="p-8 bg-card/90 backdrop-blur border-primary/30">
          <h2 className="text-2xl font-bold text-foreground mb-4">Estatísticas</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-background/50 rounded-lg">
              <p className="text-3xl font-bold text-primary">
                {JSON.parse(localStorage.getItem('arithimancia_characters') || '[]').length}
              </p>
              <p className="text-sm text-muted-foreground">Personagens</p>
            </div>
            <div className="text-center p-4 bg-background/50 rounded-lg">
              <p className="text-3xl font-bold text-primary">
                {new Date(user?.createdAt || '').toLocaleDateString('pt-BR')}
              </p>
              <p className="text-sm text-muted-foreground">Membro desde</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
