import { initializeApp } from "firebase/app";
import * as auth from "firebase/auth";
// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCRr53sQSVPJTbgfqdWGiyoa2H_Qnb57cc",
  authDomain: "mealstogo-cbed6.firebaseapp.com",
  projectId: "mealstogo-cbed6",
  storageBucket: "mealstogo-cbed6.appspot.com",
  messagingSenderId: "1040217408593",
  appId: "1:1040217408593:web:f36641305a8814c05ea470",
};



initializeApp(firebaseConfig);
const getAuth = auth.getAuth();

export const firebase = { auth, getAuth };

// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
