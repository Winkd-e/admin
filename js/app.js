// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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

//inputs for email and pass
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;

//for the login button
const submit = document.getElementById('submit');
submit.addEventListener('click', function(event){
    event.preventDefault()
    alert(5)
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

