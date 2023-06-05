// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvOdR0JZOoypR23vqeru4c7uEHbkq6Kq0",
  authDomain: "react-hooks-mern.firebaseapp.com",
  projectId: "react-hooks-mern",
  storageBucket: "react-hooks-mern.appspot.com",
  messagingSenderId: "670742913970",
  appId: "1:670742913970:web:2218b7feacc795e401baab"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );