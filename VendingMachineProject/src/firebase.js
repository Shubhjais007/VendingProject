
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBuqGZ0WlIQsZFbvGvoxPBGrC-iF0ZP-Yo",
    authDomain: "vendingauth.firebaseapp.com",
    databaseURL: "https://vendingauth.firebaseio.com",
    projectId: "vendingauth",
    storageBucket: "vendingauth.appspot.com",
    messagingSenderId: "526131129966",
    appId: "1:526131129966:web:c9a50bdcba13d3b067407f",
    measurementId: "G-GX9R224QMD"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firebaseAuth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;