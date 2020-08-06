import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBEHVrdn0lHoebsc8T0YXx6QyrP550f5HU",
  authDomain: "react-firebase-268e7.firebaseapp.com",
  databaseURL: "https://react-firebase-268e7.firebaseio.com",
  projectId: "react-firebase-268e7",
  storageBucket: "react-firebase-268e7.appspot.com",
  messagingSenderId: "465797715832",
  appId: "1:465797715832:web:632a374d8df06c2eac1a8d",
  measurementId: "G-LK3DR5NS5V",
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
