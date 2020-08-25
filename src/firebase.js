import firebase from 'firebase';
const firebaseConfig = {
  // your firebase config here
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;