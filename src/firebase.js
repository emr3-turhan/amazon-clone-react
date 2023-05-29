import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "n",
  authDomain: "a",
  projectId: "h",
  storageBucket: "v",
  messagingSenderId: "r",
  appId: "r",
  measurementId: "m",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
