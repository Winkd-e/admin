import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js';



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
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  // reference for database
  const loginFormDB = firebaseConfig.databaseURL().ref('loginForm');

  document.getElementById('loginForm').addEventListener('submit', submitForm)

  function submitForm(e){
    e.preventDefault();

    var email = getElementVal('email');
    var password = getElementVal('password');

    console.log(email, password);
  }

  const getElementVal = (id) => {
    return document.getElementById(id).value;
  }



  // walkthrough
  let currentSlide = 0; 
  const slides = document.querySelectorAll(".slide");
  
  function showSlide(index) {
      const totalSlides = slides.length;
      currentSlide = (index + totalSlides) % totalSlides; // Ensure currentSlide is updated correctly
      const offset = -currentSlide * 100;
      document.querySelector(".slides").style.transform = `translateX(${offset}%)`;
  }
  
  function moveSlide(step) {
      showSlide(currentSlide + step);
  }
  
  // Auto-slide every 3 seconds
  setInterval(() => {
      moveSlide(1);
  }, 5000);
  
  // Initialize slider
  showSlide(currentSlide);
  