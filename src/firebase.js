import firebase from 'firebase'
import "firebase/firestore"
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyA8YdftWQs3j0Qjt1C1fd_nCu4i47JGyn8",
    authDomain: "restaurent-83d00.firebaseapp.com",
    projectId: "restaurent-83d00",
    storageBucket: "restaurent-83d00.appspot.com",
    messagingSenderId: "491117895346",
    appId: "1:491117895346:web:8c97f1d1558ac0216373ab"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;