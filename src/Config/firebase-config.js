// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXNweMY-iTZNI_nZWgD9puIER8fT3azgA",
  authDomain: "olx-clone-95a4e.firebaseapp.com",
  projectId: "olx-clone-95a4e",
  storageBucket: "olx-clone-95a4e.appspot.com",
  messagingSenderId: "749314553921",
  appId: "1:749314553921:web:4457bfb2750e1fdfa52ec0",
  measurementId: "G-L9WY32BHX3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);