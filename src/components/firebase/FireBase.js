import firebase from "firebase";
import "@firebase/firestore"

const app = firebase.initializeApp({
    apiKey: "AIzaSyD21v8kmTbgIZrizz6W5U07sPgHGSk4UlU",
    authDomain: "itemcoder-ed1d8.firebaseapp.com",
    projectId: "itemcoder-ed1d8",
    storageBucket: "itemcoder-ed1d8.appspot.com",
    messagingSenderId: "1005500433008",
    appId: "1:1005500433008:web:fac459b1b3f1814bdfaab5"
});

export function getFirebase() {
    return app;
}

export function getFirestore() {
    return firebase.firestore(app)
}