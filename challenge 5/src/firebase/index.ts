import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAN3eJbI5KFceAtSJdh4PuQvdJSM_KzfwQ",
  authDomain: "fitness-tracker-challenge.firebaseapp.com",
  projectId: "fitness-tracker-challenge",
  storageBucket: "fitness-tracker-challenge.appspot.com",
  messagingSenderId: "577416510259",
  appId: "1:577416510259:web:4026e208b2b3f016a55c46",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const firebase = getFirestore(app);
export const auth = getAuth(app);
