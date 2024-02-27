// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFc38IULIVVTolFxnjipnz8Y3BwX_4c1w",
  authDomain: "bookshelf-2-0-b9245.firebaseapp.com",
  projectId: "bookshelf-2-0-b9245",
  storageBucket: "bookshelf-2-0-b9245.appspot.com",
  messagingSenderId: "623756126760",
  appId: "1:623756126760:web:4f9c4628a6a7e13298e31d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth
export const db = getFirestore(app)
export const auth = getAuth(app);
export { app };