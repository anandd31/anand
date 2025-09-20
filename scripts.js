// ===== Smooth Scroll for Anchor Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// ===== Mobile Navbar Toggle =====
const navLinks = document.querySelector('.nav-links');
const navToggle = document.createElement('div');
navToggle.classList.add('nav-toggle');
navToggle.innerHTML = '<i class="fas fa-bars" style="color:white; font-size:1.5rem;"></i>';
document.querySelector('.navbar').appendChild(navToggle);

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// ===== Contact Form Submission =====
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you for your message! I will get back to you soon.');
  form.reset();
});
