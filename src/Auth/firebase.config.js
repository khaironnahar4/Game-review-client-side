// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA55ZJECl4UDHCBzxGssnMsjsNBW5sNGGo",
  authDomain: "game-review-c03f4.firebaseapp.com",
  projectId: "game-review-c03f4",
  storageBucket: "game-review-c03f4.firebasestorage.app",
  messagingSenderId: "976301102227",
  appId: "1:976301102227:web:ff6d00a16b758aa28ee966"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;