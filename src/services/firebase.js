import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import {getFirestore} from  'firebase/firestore';


const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_AI_KEY,
  authDomain:import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId:import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket:import.meta.env.VITE_FIREBASE_STRONG_BUCKET,
  messagingSenderId:import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId:import.meta.env.VITE_FIREBASE_APP_ID,

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const db=getFirestore(app);

export {auth, db}