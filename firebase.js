// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_APP_PUBLIC_FIREBASE_API_KEY,
  authDomain: "twitter-v1-4ac12.firebaseapp.com",
  projectId: "twitter-v1-4ac12",
  storageBucket: "twitter-v1-4ac12.appspot.com",
  messagingSenderId: "682620992481",
  appId: "1:682620992481:web:cc617ac3d0e5aef35df0a0",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
export { app, db, storage };
