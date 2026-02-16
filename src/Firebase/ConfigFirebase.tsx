// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const apiKeyVite = import.meta.env.VITE_FIREBASE_API_KEY;

const firebaseConfig = {
  apiKey: apiKeyVite,
  authDomain: "igreja-ippo.firebaseapp.com",
  projectId: "igreja-ippo",
  storageBucket: "igreja-ippo.firebasestorage.app",
  messagingSenderId: "688180018962",
  appId: "1:688180018962:web:25ac1b984b0a30b7d73dcb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
