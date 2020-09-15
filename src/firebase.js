import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAjusNDnPBIdNzyhW_VQKEtpQ4YS9hf_1c",
    authDomain: "facebook-clone-a6f5d.firebaseapp.com",
    databaseURL: "https://facebook-clone-a6f5d.firebaseio.com",
    projectId: "facebook-clone-a6f5d",
    storageBucket: "facebook-clone-a6f5d.appspot.com",
    messagingSenderId: "512719023764",
    appId: "1:512719023764:web:ce4db04d2c208ee1b68e81",
    measurementId: "G-XSQ80GGF4S"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;
