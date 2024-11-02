import {initializeApp} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js';
import {getFiresore, setDoc, doc} from 'https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js';

const firebaseConfig = {
    apiKey: "AIzaSyA9ZyBsVRehOePa0HjmLE-h6djDbv6EhNY",
    authDomain: "project-firebase-78b80.firebaseapp.com",
    databaseURL: "https://project-firebase-78b80-default-rtdb.firebaseio.com",
    projectId: "project-firebase-78b80",
    storageBucket: "project-firebase-78b80.firebasestorage.app",
    messagingSenderId: "1005365271899",
    appId: "1:1005365271899:web:a98fb3de49710c0cde4e7e"
  };

  // initializing firebasee
  firebaseConfig.initializeApp(firebaseConfig);

  const signIn = document.getElementById('loginbtn');
  signIn.addEventListener('click', (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const auth=getAuth();

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) =>{
        showMessage('Login is successful.', 'signInMessage')
        const user=userCredential.user;
        localStorage.setItem('loggedInUserID', user.uid);
        window.location.href='dashboard.html';
    })
    .catch((error) =>{
        if(errorCode==='auth/invalid-credential'){
            showMessage('Incorret email or password', 'signInMessage');
        }
        else{
            showMessage('Account does not exist.', 'sigInMessage')
        }
    })
  })