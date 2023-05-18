// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";


console.log(process.env.NEXT_PUBLIC_FIREBASE_API_KEY)
console.log(process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN)
console.log(process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID)
console.log(process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET)
console.log(process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID)
console.log(process.env.NEXT_PUBLIC_FIREBASE_APP_ID)

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase
const firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(firebase_app);
export {firebase_app,db};
