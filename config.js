import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export const firebaseConfig ={
    apiKey: "AIzaSyCnH3xwDrJktv-PltsLODgcmiqK7JEMVwQ",
    authDomain: "otp-test-e7507.firebaseapp.com",
    projectId: "otp-test-e7507",
    storageBucket: "otp-test-e7507.appspot.com",
    messagingSenderId: "443625858689",
    appId: "1:443625858689:web:01deadadfe815fd13b4f80",
    measurementId: "G-L7EEEQ5448"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}
