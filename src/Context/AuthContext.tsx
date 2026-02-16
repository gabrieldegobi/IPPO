import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../Firebase/ConfigFirebase";
import { onAuthStateChanged } from "firebase/auth";
import type { User, UserCredential } from "firebase/auth";
import { useAuthFunction } from "../Hooks/useAuth";

// Tipo do contexto
interface AuthContextInterface {
  user: User | null;
  signup: (email: string, password: string,name:string) => Promise<UserCredential>;
  login: (email: string, password: string) => Promise<UserCredential>;
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

  //importa funções do Hook externo

  const { signup, login, logout } = useAuthFunction();

  //Detecta mudanças de Autenticação
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
    });
    return () => unsub();
  }, []);
  
  return (
    <AuthContext.Provider value={{ user,  signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
