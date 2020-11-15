import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDiihCz4sTSzMUhS8rkCBb9pT7uucj8k-s",
    authDomain: "challenge-fa7b7.firebaseapp.com",
    databaseURL: "https://challenge-fa7b7.firebaseio.com",
    projectId: "challenge-fa7b7",
    storageBucket: "challenge-fa7b7.appspot.com",
    messagingSenderId: "1032033137753",
    appId: "1:1032033137753:web:17ccc5ef08cad2fcac2d48",
    measurementId: "G-MPPNN5F0WP"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };