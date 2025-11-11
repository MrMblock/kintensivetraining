// firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Ajout des services Firebase
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyARTk9sEubE1K1SQqtHUAWUqZhMFjBIB9I",
  authDomain: "kit-121105.firebaseapp.com",
  projectId: "kit-121105",
  storageBucket: "kit-121105.firebasestorage.app",
  messagingSenderId: "384822151697",
  appId: "1:384822151697:web:b69a74a9410ff238617fb0",
  measurementId: "G-WS0H1CYH47"
};

// Initialisation
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialisation des services
const db = getFirestore(app);       // Base de données Firestore
const auth = getAuth(app);          // Authentification
const storage = getStorage(app);    // Stockage fichiers

export { app, analytics, db, auth, storage };
