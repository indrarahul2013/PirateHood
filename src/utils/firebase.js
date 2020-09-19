import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'

const firebaseConfig = {
        apiKey: "AIzaSyC_EF_SYBF2IB8_0_9tZaLI43FWasHicp8",
        authDomain: "piratehood-3b4ac.firebaseapp.com",
        databaseURL: "https://piratehood-3b4ac.firebaseio.com",
        projectId: "piratehood-3b4ac",
        storageBucket: "piratehood-3b4ac.appspot.com",
        messagingSenderId: "891854251305",
        appId: "1:891854251305:web:2244e74bbeecdcee124338",
        measurementId: "G-J65BQ8PD8K"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();
// firebase.analytics();

export default firebase;