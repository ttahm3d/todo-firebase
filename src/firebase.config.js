import firebase from "firebase/app";

import "firebase/auth";
import "firebase/functions";
import "firebase/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyA2BqAZ9S86jf2xuQ8m3HWaWxoykOHRKUA",
  authDomain: "todo-app-158fe.firebaseapp.com",
  projectId: "todo-app-158fe",
  storageBucket: "todo-app-158fe.appspot.com",
  messagingSenderId: "332786530732",
  appId: "1:332786530732:web:28caabb3b9c6bc59246209",
  measurementId: "G-CTY1WVREZ0",
});

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const funcitons = firebase.functions();

export default firebase;
