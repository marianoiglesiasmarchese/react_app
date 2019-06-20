import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCa3vC7F3rAwEVC4EM0XaSyK5fQhmG1CP0",
  authDomain: "catch-of-the-day-mariano.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-mariano.firebaseio.com",
  projectId: "catch-of-the-day-mariano",
  storageBucket: "catch-of-the-day-mariano.appspot.com",
  messagingSenderId: "1040285828986",
  appId: "1:1040285828986:web:19b8ed3a3c833f59"
});

const base = Rebase.createClass(firebaseApp.database());

// named export
export { firebaseApp };

// default export 
export default base;