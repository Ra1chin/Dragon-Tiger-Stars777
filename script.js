// JavaScript for Scrolling Animation
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.content-section');
  
    // Function to check if element is in view
    function isInView(element) {
      const rect = element.getBoundingClientRect();
      return rect.top >= 0 && rect.top <= window.innerHeight;
    }
  
    // Add the 'visible' class when the section comes into view
    function revealOnScroll() {
      sections.forEach(function(section) {
        if (isInView(section)) {
          section.classList.add('visible');
        }
      });
    }
  
    // Listen for the scroll event and trigger revealOnScroll function
    window.addEventListener('scroll', revealOnScroll);
  
    // Initial check to reveal sections on page load if they are already in view
    revealOnScroll();
  });
  