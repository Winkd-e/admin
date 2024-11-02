


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
  