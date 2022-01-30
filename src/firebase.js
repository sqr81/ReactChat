import firebase from 'firebase'
//import firebase from 'firebase/compat/app';
//import 'firebase/compat/auth';
//import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBvh2W7ld0PyifiGg5zr7njV0sKGVbaM9w",
    authDomain: "reactchat-a4ace.firebaseapp.com",
    projectId: "reactchat-a4ace",
    storageBucket: "reactchat-a4ace.appspot.com",
    messagingSenderId: "368746931452",
    appId: "1:368746931452:web:a59b7ae5ac246a5fa22379",
    measurementId: "G-N41DZFYLFB"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth}