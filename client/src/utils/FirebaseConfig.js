// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLY-tCol7kSanTnYEKf-IB9VcUx7zjPTA",
  authDomain: "talkapp-2999a.firebaseapp.com",
  projectId: "talkapp-2999a",
  storageBucket: "talkapp-2999a.appspot.com",
  messagingSenderId: "501432017166",
  appId: "1:501432017166:web:8b6c015bde022ae8c4b75f",
  measurementId: "G-7ZGFH62ZV6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app); 