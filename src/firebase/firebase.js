// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import {GoogleAuthProvider, getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDXz79DhjNwT3yRaDjbJT-HAOiwFJdfC6A",
    authDomain: "pruebagse21905.firebaseapp.com",
    projectId: "pruebagse21905",
    storageBucket: "pruebagse21905.appspot.com",
    messagingSenderId: "429554740208",
    appId: "1:429554740208:web:1c775e466fd0cce1e88b35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth()
const google = new GoogleAuthProvider()

export {
    app,
    db,
    google,
    auth
}