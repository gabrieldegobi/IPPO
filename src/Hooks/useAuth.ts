import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

import { auth } from "../Firebase/ConfigFirebase";


export function useAuthFunction() {
  
  async function signup(email: string, password: string, name: string) {
    const cred = await createUserWithEmailAndPassword(auth, email, password);
    // Atualiza o nome do usuário no Firebase
    if (auth.currentUser) {
      await updateProfile(auth.currentUser, {
        displayName: name,
      });
    }

    return cred;
  }

  async function login(email: string, password: string) {
    return await signInWithEmailAndPassword(auth, email, password);
    
    
  }
  async function logout() {
    return signOut(auth);
  }
  return { signup, login, logout };
}
