// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
  anchor.addEventListener('click',function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'});
  });
});

// Mobile Navbar Toggle
const navLinks=document.querySelector('.nav-links');
document.querySelector('.nav-toggle').addEventListener('click',()=>{navLinks.classList.toggle('active');});

// Contact Form
document.querySelector('form').addEventListener('submit',e=>{
  e.preventDefault();
  alert('Thanks! I will get back to you soon.');
  e.target.reset();
});

// Animate skill bars on scroll
const skills=document.querySelectorAll('.progress-bar span');
const skillSection=document.querySelector('#skills');
window.addEventListener('scroll',()=>{
  const rect=skillSection.getBoundingClientRect();
  if(rect.top < window.innerHeight){
    skills.forEach(bar=>bar.style.width=bar.style.width || bar.getAttribute('style'));
  }
});
