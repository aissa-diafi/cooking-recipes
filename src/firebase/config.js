import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD8UgCSMz8vyLuEkrsOKjVVZaj-i9I8yqw",
  authDomain: "cooking-recipes1.firebaseapp.com",
  projectId: "cooking-recipes1",
  storageBucket: "cooking-recipes1.appspot.com",
  messagingSenderId: "1059641110430",
  appId: "1:1059641110430:web:e08ced2e2a5ae5d558708f",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();

export { projectFirestore };
