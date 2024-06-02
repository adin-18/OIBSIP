// Animation for hero section
const heroContent = document.querySelector('.hero-content');

window.addEventListener('load', () => {
  heroContent.style.opacity = '1';
  heroContent.style.transform = 'translateY(0)';
});

// Animation for features section
const features = document.querySelectorAll('.feature');

window.addEventListener('scroll', () => {
  features.forEach((feature) => {
    const featureTop = feature.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (featureTop < windowHeight * 0.8) {
      feature.style.opacity = '1';
      feature.style.transform = 'translateX(0)';
    }
  });
});