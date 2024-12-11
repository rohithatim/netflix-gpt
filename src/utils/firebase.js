// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEV-nYrXEFW2NYhG8M8D12kMKM5vQQcmQ",
  authDomain: "netflixgpt-294af.firebaseapp.com",
  projectId: "netflixgpt-294af",
  storageBucket: "netflixgpt-294af.firebasestorage.app",
  messagingSenderId: "496208045698",
  appId: "1:496208045698:web:1a65316261c66be6f1769b",
  measurementId: "G-VYBLMRN49S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
