import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  email: string;
  username: string;
  createdAt: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, username: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Simular verificação de sessão
    const savedUser = localStorage.getItem('arithimancia_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = async (email: string, password: string) => {
    // Simular login
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const mockUser: User = {
      id: 'user-' + Math.random().toString(36).substr(2, 9),
      email,
      username: email.split('@')[0],
      createdAt: new Date().toISOString(),
    };
    
    setUser(mockUser);
    localStorage.setItem('arithimancia_user', JSON.stringify(mockUser));
  };

  const register = async (email: string, password: string, username: string) => {
    // Simular registro
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const mockUser: User = {
      id: 'user-' + Math.random().toString(36).substr(2, 9),
      email,
      username,
      createdAt: new Date().toISOString(),
    };
    
    setUser(mockUser);
    localStorage.setItem('arithimancia_user', JSON.stringify(mockUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('arithimancia_user');
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
