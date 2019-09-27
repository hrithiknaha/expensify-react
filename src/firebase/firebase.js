import * as firebase from 'firebase'
const Config = {
    apiKey: "AIzaSyD341W76Y6GecwwWSioJ6qzbPxGw1FTUNA",
    authDomain: "expensify-7c5bb.firebaseapp.com",
    databaseURL: "https://expensify-7c5bb.firebaseio.com",
    projectId: "expensify-7c5bb",
    storageBucket: "expensify-7c5bb.appspot.com",
    messagingSenderId: "953807156586",
    appId: "1:953807156586:web:5ee2645ea2eb5a9dab2113"
  };

firebase.initializeApp(Config);

const database = firebase.database()

export { firebase, database as default } 