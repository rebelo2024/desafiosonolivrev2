import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBOWPke8tHqPsW16iq6eVgAOfwhO3DqDbI",
    authDomain: "desafiosonolivre.firebaseapp.com",
    projectId: "desafiosonolivre",
    storageBucket: "desafiosonolivre.firebasestorage.app",
    messagingSenderId: "306738585494",
    appId: "1:306738585494:web:e19a80e9bdf35d831947b7"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };
