// npm i firebase
// scr -> firebase.js
import firebase from "firebase/app";
import secret from "/secret";
firebase.initializeApp(secret);
// You can easily include firebase in your react app from above 3 lines.
export let auth = firebase.auth();