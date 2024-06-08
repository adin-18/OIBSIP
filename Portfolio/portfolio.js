// Navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Scale-in animations
const scaleInElements = document.querySelectorAll('.scale-in');

window.addEventListener('load', () => {
  scaleInElements.forEach(element => {
    element.classList.add('show');
  });
});

window.addEventListener('scroll', () => {
  scaleInElements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if (elementPosition < screenPosition) {
      element.classList.add('show');
    }
  });
});