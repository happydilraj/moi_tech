import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBd8rRy9Yo-kTXErgmKqKj19ou16jRAf_A",
    authDomain: "otp-based-login-6dd9b.firebaseapp.com",
    projectId: "otp-based-login-6dd9b",
    storageBucket: "otp-based-login-6dd9b.appspot.com",
    messagingSenderId: "738601776403",
    appId: "1:738601776403:web:77dbe16f45d714a031d6e6",
    measurementId: "G-PM16RL5R60"
  };

firebase.initializeApp(firebaseConfig);
export default firebase

