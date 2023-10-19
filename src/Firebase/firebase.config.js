// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_rpeBYYTR6yW-nfPDb9ghxW6zqnK75y8",
  authDomain: "e-commerce--based.firebaseapp.com",
  projectId: "e-commerce--based",
  storageBucket: "e-commerce--based.appspot.com",
  messagingSenderId: "325238703504",
  appId: "1:325238703504:web:4c29287f16a403b8ad1f15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;