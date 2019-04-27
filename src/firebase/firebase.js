import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyD2GZT_lb3aUodGlJ5f2-sYJw7Nxys08_Q",
    authDomain: "expense-tracker-6c0f2.firebaseapp.com",
    databaseURL: "https://expense-tracker-6c0f2.firebaseio.com",
    projectId: "expense-tracker-6c0f2",
    storageBucket: "expense-tracker-6c0f2.appspot.com",
    messagingSenderId: "448287965017"
  };

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default};