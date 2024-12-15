import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCQYQzJjPVvgm09X3YNU21XaeQHap9ixNM",
    authDomain: "auth-development-a5111.firebaseapp.com",
    projectId: "auth-development-a5111",
    storageBucket: "auth-development-a5111.firebasestorage.app",
    messagingSenderId: "949809688334",
    appId: "1:949809688334:web:ce042ce587febd4bbaf15f"
};

// init firebase
const app = !window.firebase?.apps?.length ? initializeApp(firebaseConfig) : window.firebase.app();
const db = getFirestore(app);

export { db, addDoc, collection };