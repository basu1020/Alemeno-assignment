// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeHG4ygD57mpQcQFPoutCckGh3ei8Y26o",
  authDomain: "fir-react-app-a1ced.firebaseapp.com",
  projectId: "fir-react-app-a1ced",
  storageBucket: "fir-react-app-a1ced.appspot.com",
  messagingSenderId: "61629466510",
  appId: "1:61629466510:web:d915f217e820e31776c6df",
  measurementId: "G-15NTLWM7YD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)