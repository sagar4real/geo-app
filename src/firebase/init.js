import firebase from'firebase'
import firestore from'firebase/firestore'
// Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 var firebaseConfig = {
    apiKey: "AIzaSyBaHzIq-CtacwPZBI_1fdKx73qaI9gb6zI",
    authDomain: "geo-try-b05b6.firebaseapp.com",
    projectId: "geo-try-b05b6",
    storageBucket: "geo-try-b05b6.appspot.com",
    messagingSenderId: "243664217548",
    appId: "1:243664217548:web:867a5bcc6882941c5fa969",
    measurementId: "G-SMPV3FV17H"
  };
 // Initialize Firebase
 const firebaseApp=firebase.initializeApp(firebaseConfig);
 firebase.analytics();
 firebaseApp.firestore().settings({timestampsInSnapshots: true})
//   exporting firebase database
export default firebaseApp.firestore();