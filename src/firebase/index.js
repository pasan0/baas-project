// src/firebase/index.js

import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { getDatabase } from "firebase/database"; // Import the getDatabase function
import { LocalStorage } from 'quasar'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAn5cQtf1LXC8EZEsPdlAmMUp10xTBe2-0",
  authDomain: "bass-project-01.firebaseapp.com",
  projectId: "bass-project-01",
  storageBucket: "bass-project-01.appspot.com",
  messagingSenderId: "1032858596285",
  appId: "1:1032858596285:web:7633580b08977238a4d8d4",
  measurementId: "G-GCQ3HZDLWY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage();
export const rtdb = getDatabase(app); // Initialize the Realtime Database


onAuthStateChanged(auth, (user) => {
 if (user) {
  LocalStorage.set('user', user)
 } else {
  LocalStorage.remove('user')
 }
});
