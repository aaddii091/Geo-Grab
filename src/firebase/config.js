// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCJZECHevu2xpFk8eEV9qDs9l1vATyyjxo",
  authDomain: "chatroom-c9a90.firebaseapp.com",
  projectId: "chatroom-c9a90",
  storageBucket: "chatroom-c9a90.appspot.com",
  messagingSenderId: "599051420288",
  appId: "1:599051420288:web:e819dd7a8fd9a03db0dc65",
  measurementId: "G-SNJRBHWJSX",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Services
const db = getFirestore();
const auth = getAuth();
const storage = getStorage(app);
// const timestamp = getFirestore().FieldValue.serverTimestamp;

export { db, auth, storage };
