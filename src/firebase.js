import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBHGM0EAhjW4-Vr-Xhk15QKQkMd2JV-JXs",
    authDomain: "jimmy-opot-netflix-auth.firebaseapp.com",
    projectId: "jimmy-opot-netflix-auth",
    storageBucket: "jimmy-opot-netflix-auth.appspot.com",
    messagingSenderId: "211246632021",
    appId: "1:211246632021:web:7b6078afc6e08c610d58dc",
    measurementId: "G-L01K2HHHBT"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;