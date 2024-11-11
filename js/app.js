// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwkevD5GuyL-UH_J68stlb8-yETjjdNXg",
  authDomain: "fir-e42bb.firebaseapp.com",
  databaseURL: "https://fir-e42bb-default-rtdb.firebaseio.com",
  projectId: "fir-e42bb",
  storageBucket: "fir-e42bb.firebasestorage.app",
  messagingSenderId: "1019133485649",
  appId: "1:1019133485649:web:476f8eff007283efcc0e70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


//for the login button.. sign na gois
const submit = document.getElementById('submit');
submit.addEventListener('click', function(event){
    event.preventDefault()

    //inputs for email and pass
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;

    const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    window.location.href= "dashboard.html";
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  });
})




    // Walkthrough
    const slides = document.querySelectorAll('.slides');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = (i === index) ? 'block' : 'none';
        });
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function startSlideShow() {
        slideInterval = setInterval(nextSlide, 5000);
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            clearInterval(slideInterval); 
            showSlide(index);            
            currentSlide = index;        
            startSlideShow();             
        });
    });

    showSlide(currentSlide);
    startSlideShow();

