import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyD8Rpt36m3d_SeM8a-CCStU7uUaP_wmoXg",
  authDomain: "tinder-clone-f6932.firebaseapp.com",
  databaseURL: "https://tinder-clone-f6932.firebaseio.com",
  projectId: "tinder-clone-f6932",
  storageBucket: "tinder-clone-f6932.appspot.com",
  messagingSenderId: "1002275125529",
  appId: "1:1002275125529:web:95082ee8716c4dee322d88",
  measurementId: "G-3MQ6NWM31E"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;