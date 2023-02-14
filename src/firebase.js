import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBtr4SZmwjXAffPvbeohiw5k_pEaKal0Wc",
  authDomain: "linkedin-clone-1760b.firebaseapp.com",
  projectId: "linkedin-clone-1760b",
  storageBucket: "linkedin-clone-1760b.appspot.com",
  messagingSenderId: "170737871997",
  appId: "1:170737871997:web:fe9a1390c3ae5987e09514"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
