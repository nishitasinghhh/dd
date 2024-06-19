// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import {GoogleAuthProvider, getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0r5HVZQ15eP62-dCqj4PiDm387k-RXZ8",
  authDomain: "digitald-a0870.firebaseapp.com",
  projectId: "digitald-a0870",
  storageBucket: "digitald-a0870.appspot.com",
  messagingSenderId: "530820968871",
  appId: "1:530820968871:web:26092ef9ca68e185b78682"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
export const auth =getAuth(app);
export const provider=new GoogleAuthProvider()