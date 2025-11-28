import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { auth } from "../Firebase/ConfigFirebase";

export function useAuthFunction() {
  async function signup(email: string, password: string) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  async function login(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  async function logout() {
    return signOut(auth);
  }
  return { signup, login, logout };
}
