// src/firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3ZLvFSzg9pHbjuNRh74jErwxnFRm7ueg",
  authDomain: "visitortracker-6f230.firebaseapp.com",
  databaseURL: "https://visitortracker-6f230-default-rtdb.firebaseio.com",
  projectId: "visitortracker-6f230",
  storageBucket: "visitortracker-6f230.appspot.com",
  messagingSenderId: "231502692450",
  appId: "1:231502692450:web:dc4e66c2a938a97905913b",
  measurementId: "G-P6V6S4Y0KS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db ,app} ;
