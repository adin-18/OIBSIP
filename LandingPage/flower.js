// Get all navigation links
const navLinks = document.querySelectorAll('.nav-links a');

// Add click event listener to each navigation link
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); 

    // Get the target section ID from the link's href
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});