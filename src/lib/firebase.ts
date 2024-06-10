import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBYMjt32rX3qZ1n-hwCfbPgXkZJ-8En2K0",
  authDomain: "sveltekit-linktree-clone-1.firebaseapp.com",
  projectId: "sveltekit-linktree-clone-1",
  storageBucket: "sveltekit-linktree-clone-1.appspot.com",
  messagingSenderId: "713844550091",
  appId: "1:713844550091:web:3fb5576f5e73818ac6ee4e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();