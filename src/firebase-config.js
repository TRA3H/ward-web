import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdur0akL7ZLVdG0Z-l6nPYxdUFGAQvy5I",
  authDomain: "ward-c2ef4.firebaseapp.com",
  projectId: "ward-c2ef4",
  storageBucket: "ward-c2ef4.appspot.com",
  messagingSenderId: "979071372012",
  appId: "1:979071372012:web:dcc882fc99b5507f82f3c9",
  measurementId: "G-40TN51EQ98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export default firestore;
