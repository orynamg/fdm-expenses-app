import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDaNcEKKUAQad3J4FktMlvTS9T17XgSi-I",
    authDomain: "fdm-expenses-fb590.firebaseapp.com",
    projectId: "fdm-expenses-fb590",
    storageBucket: "fdm-expenses-fb590.appspot.com",
    messagingSenderId: "727287515703",
    appId: "1:727287515703:web:0e6b50d3f29f0504188db2",
    measurementId: "G-459GF971TZ"
};


export const firebase = initializeApp(firebaseConfig);
export const firestore = getFirestore(firebase);
export const auth = getAuth(firebase);
export const provider = new GoogleAuthProvider();