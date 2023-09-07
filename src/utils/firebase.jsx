// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPEnNcK8387-zP77zRdp76xMHok8YTbf4",
  authDomain: "netflixgpt-f486d.firebaseapp.com",
  projectId: "netflixgpt-f486d",
  storageBucket: "netflixgpt-f486d.appspot.com",
  messagingSenderId: "476392629982",
  appId: "1:476392629982:web:b14a57f4ad15290509c44f",
  measurementId: "G-1RHZ6KL24E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
