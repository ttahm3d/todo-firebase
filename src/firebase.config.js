import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCRNgh7TXXBoI9A7aK42PWHvw8HVlGM364",
  authDomain: "todoist-7da7c.firebaseapp.com",
  projectId: "todoist-7da7c",
  storageBucket: "todoist-7da7c.appspot.com",
  messagingSenderId: "277409824421",
  appId: "1:277409824421:web:fcfb339c457af89b3ad74c",
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
