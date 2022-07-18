import React, {
  createContext,
  ReactNode,
  useContext
} from 'react';
import * as AuthSession from 'expo-auth-session';

interface AuthProviderProps {
  children: ReactNode;
}

interface User {
  id: string;
  name: string;
  email: string;
  photo?: string;
}

interface AuthContextData {
  user: User;
  signInWithGoogle(): Promise<void>;
}

const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const user = {
    id: '12313123',
    name: 'Leandro Vieira',
    email: 'leandro@email.com'
  };

  async function signInWithGoogle() {
    try {
      const CLIENT_ID = '755898090961-91ijeol3chl4hhbrsl3ftbnfeii5fhev.apps.googleusercontent.com';
      const REDIRECT_URI = 'https://auth.expo.io/@LeandroRVieira/RyoFinances';
      const RESPONSE_TYPE = 'token';
      const SCOPE = encodeURI('profile email');

      const authUrl= 
      `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

      const response = await AuthSession.startAsync({ authUrl })

    } catch (error) {
      throw new Error(error);
    }
  }

  return (
    <AuthContext.Provider value={{ 
      user, 
      signInWithGoogle 
    }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth }
