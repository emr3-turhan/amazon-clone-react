import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3s07d8kASbBi-pQF1QgnALOF8Nhz8ZF8",
  authDomain: "challenge-eddf8.firebaseapp.com",
  projectId: "challenge-eddf8",
  storageBucket: "challenge-eddf8.appspot.com",
  messagingSenderId: "11405769534",
  appId: "1:11405769534:web:2f207e61fef694baa90a6f",
  measurementId: "G-V46T4PWMMM",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
