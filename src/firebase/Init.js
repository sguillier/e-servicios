

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBa47uNdLCeYRSa7gZK6-1ne9PQIWPmUew",
  authDomain: "e-servicios.firebaseapp.com",
  projectId: "e-servicios",
  storageBucket: "e-servicios.appspot.com",
  messagingSenderId: "739404789327",
  appId: "1:739404789327:web:a37af74c3bde01e45f1c3a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Accedemos a Firestore 
const db = getFirestore(app);

// console.log(app)
// console.log(db)

export {app, db}
