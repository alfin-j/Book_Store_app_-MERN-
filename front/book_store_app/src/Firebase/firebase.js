import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAJsQGwVAfbrOriAOhb5YEm7xERM-93u3M",
    authDomain: "bookstoreapp-aa15d.firebaseapp.com",
    projectId: "bookstoreapp-aa15d",
    storageBucket: "bookstoreapp-aa15d.firebasestorage.app",
    messagingSenderId: "786772565331",
    appId: "1:786772565331:web:44653aca6e2c50582d15a6"
  };

const app= initializeApp(firebaseConfig)
const auth = getAuth(app);

const db=getFirestore(app)
export { db };
export { auth };