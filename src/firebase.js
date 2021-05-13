import firebase from 'firebase';
import dotenv from 'dotenv';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "jimmy-opot-netflix-auth.firebaseapp.com",
    projectId: "jimmy-opot-netflix-auth",
    storageBucket: "jimmy-opot-netflix-auth.appspot.com",
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID,
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;