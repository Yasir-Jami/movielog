import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  email: string,
  // Add other elements like email
}

interface AuthContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ( {children}: {children: ReactNode} ) => {
  const [user, setUserState] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('authUser');
    if (storedUser) {
      try {
        const parsedUser: User = JSON.parse(storedUser);
        setUserState(parsedUser);
      } catch (e) {
        console.error('Failed to parse user from localStorage:', e);
        localStorage.removeItem('authUser');
      }
    }
  }, []);

  const setUser = (user: User | null) => {
    setUserState(user);
    if (user) {
      localStorage.setItem('authUser', JSON.stringify(user));
    } else {
      localStorage.removeItem('authUser');
    }
  };

  const logout = () => {
    setUser(null);
  }

  return(
    <AuthContext.Provider value={{ user, setUser, logout, isAuthenticated: !!user }}>
    {children}
    </AuthContext.Provider>
  )
}

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};