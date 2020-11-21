// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  
  import firebase from 'firebase/app';
  import 'firebase/firestore';
  import 'firebase/auth';

  const firebaseConfig = {
    apiKey: "AIzaSyDVZ1OgW2JBLMg-NxKB0kuJ2Exd1dbVgcY",
    authDomain: "fir-tutorial-99eef.firebaseapp.com",
    databaseURL: "https://fir-tutorial-99eef.firebaseio.com",
    projectId: "fir-tutorial-99eef",
    storageBucket: "fir-tutorial-99eef.appspot.com",
    messagingSenderId: "560096062038",
    appId: "1:560096062038:web:2141c2c9c73953807c69f7",
    measurementId: "G-2BMMHYMGNW"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  const db = firebase.firestore();

  db.settings({ timestampsInSnapshots: true });
  
  export { auth, db };