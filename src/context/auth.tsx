import React from 'react';
import api from '../services/api';

interface User {
  name: string;
  email: string;
}

interface AuthContextData {
  signed: boolean;
  user: User | null;
  loading: boolean;
  signIn(email: string, password: string): Promise<Boolean>;
  signOut(): void;
}

interface Props {
  children: React.ReactNode;
}

const AuthContext = React.createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: Props) {
  const [user, setUser] = React.useState<User | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function loadStorageData() {
      const storageUser = localStorage.getItem('@EAuth:user');
      const storageToken = localStorage.getItem('@EAuth:token');
      if (storageUser && storageToken) {
        setUser(JSON.parse(storageUser));
        api.defaults.headers['Authorization'] = `${storageToken}`;
      }
    }
    loadStorageData();
    setLoading(false);
  }, []);

  async function signIn(email: string, password: string) {
    try {
      const response = await api.post('/authenticate', { email, password });
      setUser(response.data.user);

      api.defaults.headers['Authorization'] = `${response.data.token}`;
      localStorage.setItem('@EAuth:user', JSON.stringify(response.data.user));
      localStorage.setItem('@EAuth:token', response.data.token);
      return true;
    } catch (err) {
      return false;
    }
  }

  function signOut() {
    localStorage.clear();
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, loading, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = React.useContext(AuthContext);

  return context;
}
