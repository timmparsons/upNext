// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRj9AQNJsoHA1MePbHPYCMmzSYfTFM5rc",
  authDomain: "upnext-cc0c1.firebaseapp.com",
  projectId: "upnext-cc0c1",
  storageBucket: "upnext-cc0c1.appspot.com",
  messagingSenderId: "941193670740",
  appId: "1:941193670740:web:690d1cd2a5f926723dbdc1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db, getFirestore, collection, addDoc, getDocs }