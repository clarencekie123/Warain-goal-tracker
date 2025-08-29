import { initializeApp } from "firebase/app";
import { getFirestore  } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCcRHtbE__MnVyAHe_PMfQAjEf4KKePTwM",
  authDomain: "goalproject-cnaw.firebaseapp.com",
  projectId: "goalproject-cnaw",
  storageBucket: "goalproject-cnaw.firebasestorage.app",
  messagingSenderId: "383176444289",
  appId: "1:383176444289:web:90b7b19e0b8504e2490080"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)