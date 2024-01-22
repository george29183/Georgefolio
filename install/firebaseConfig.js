// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArhRQadrwk4GvIXPpaDa0H5QxEmUFeRq4",
  authDomain: "georgefolio-6a500.firebaseapp.com",
  projectId: "georgefolio-6a500",
  storageBucket: "georgefolio-6a500.appspot.com",
  messagingSenderId: "851866073185",
  appId: "1:851866073185:web:1a5538275002c0cd7e1220",
  measurementId: "G-5TBMPW08JS"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
