import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, getRedirectResult } from "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDYu-w1F37uKWBbC6Dma_Aaz7cN9p_JjYA",
  authDomain: "facebook-clone-30c23.firebaseapp.com",
  projectId: "facebook-clone-30c23",
  storageBucket: "facebook-clone-30c23.appspot.com",
  messagingSenderId: "869057658277",
  appId: "1:869057658277:web:e1c1fe40e0a4baccf83c4c",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
export default db;
