import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAODJoommxzP7EJ0mmZXdVJwBtk8TNoaMU",
  authDomain: "facebook-7dc5d.firebaseapp.com",
  projectId: "facebook-7dc5d",
  storageBucket: "facebook-7dc5d.appspot.com",
  messagingSenderId: "1008309247015",
  appId: "1:1008309247015:web:760e968ec3cbbdeb35c202",
  measurementId: "G-QQEGNEF0Y8",
};


// connect 
const firebaseApp = firebase.initializeApp(firebaseConfig);

// db access
const db = firebaseApp.firestore();

// auth
const auth = firebase.auth();

// provider
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider };
export default db;