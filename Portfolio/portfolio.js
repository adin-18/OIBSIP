const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault(); // Prevent the default link behavior

    const targetId = e.target.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    // Scroll to the target section with a smooth animation
    targetSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

window.addEventListener('load', function() {
  var circularImage = document.querySelector('.circular-image');
  circularImage.classList.add('loaded');
});