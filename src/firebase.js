import firebase from 'firebase';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB7vt7hf2oTqZjzBe0polUW80mbhwrJzHY",
    authDomain: "newsapp-c56ad.firebaseapp.com",
    databaseURL: "https://newsapp-c56ad.firebaseio.com",
    projectId: "newsapp-c56ad",
    storageBucket: "newsapp-c56ad.appspot.com",
    messagingSenderId: "762398704299",
    appId: "1:762398704299:web:3a791de1740fbbc4f02dee"
  };

  firebase.initializeApp(config);
  
  export const auth = firebase.auth();
  export default firebase;