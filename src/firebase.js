// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCNT1QU89kyhU10r_4KMHjfl9VUVFz8s_w",
  authDomain: "derick-contact-form.firebaseapp.com",
  databaseURL: "https://derick-contact-form-default-rtdb.firebaseio.com",
  projectId: "derick-contact-form",
  storageBucket: "derick-contact-form.appspot.com",
  messagingSenderId: "406463875362",
  appId: "1:406463875362:web:aa16db3d8f0b1645f4fd7b",
});

var db = firebaseApp.firestore();
export { db };
