import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../Firebase/ConfigFirebase";
import { onAuthStateChanged } from "firebase/auth";
import type { User } from "firebase/auth";
import { useAuthFunction } from "../Hooks/useAuth";

// Tipo do contexto
interface AuthContextInterface {
  user: User | null;
  loading: boolean;
  signup: (email: string, password: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

//criando o contexto
const AuthContext = createContext<AuthContextInterface | null>(null);

//Hook para usar o contexto

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context)
    throw new Error("useAuth deve ser usado dentro de <AuthProvider>");
  return context;
}

//provider

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  //importa funções do Hook externo

  const { signup, login, logout } = useAuthFunction();

  //Detecta mudandas de Autenticação
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
