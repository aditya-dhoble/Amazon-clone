// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD76u228ri7vOM0HMHG7jGrxZPFcRF2TeI",
    authDomain: "challenge-2375f.firebaseapp.com",
    projectId: "challenge-2375f",
    storageBucket: "challenge-2375f.appspot.com",
    messagingSenderId: "1065857559355",
    appId: "1:1065857559355:web:76141b5e90cdaeda31e51e",
    measurementId: "G-TR24RJ3HNG"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  // Initialize database and auth
  const db = firebase.firestore();
  const auth = firebase.auth();

  export { db, auth };