import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6H8Y4lpF-4UMnlHCfw5bHfGdwZovZwiM",
  authDomain: "interview-aeb07.firebaseapp.com",
  projectId: "interview-aeb07",
  storageBucket: "interview-aeb07.firebasestorage.app",
  messagingSenderId: "705962780737",
  appId: "1:705962780737:web:42b95d6776fee71b98fec0",
  measurementId: "G-26JYZ0V53M"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
