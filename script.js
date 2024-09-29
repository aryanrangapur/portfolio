function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
document.addEventListener('DOMContentLoaded', function() {
  const title = document.querySelector('.title');

  title.classList.add('typing');

  title.addEventListener('animationend', function() {
    title.style.borderRight = 'none'; 
    title.classList.remove('typing'); 
  });
});



function displayPopup() {
  document.getElementById('popup').style.display = 'block';
}

function hidePopup() {
  document.getElementById('popup').style.display = 'none';
}

function createParticles() {
  const numParticles = 22; 
  const particleContainer = document.querySelector('.particle-container');

  for (let i = 0; i < numParticles; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.left = `${getRandomNumber(0, window.innerWidth)}px`;
    particle.style.top = `${getRandomNumber(-500, -50)}px`; 
    particleContainer.appendChild(particle);

    animateParticle(particle);
  }
}

function animateParticle(particle) {
  const duration = Math.random() * 5 + 2; 
  particle.style.animationDuration = `${duration}s`; 
  particle.style.animationDelay = `${Math.random() * 5}s`; 
}

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

window.addEventListener('load', () => {
  createParticles(); 
  const animationDuration = 8000; 
  const particles = document.querySelectorAll('.particle');
  const delayBetweenRemovals = animationDuration / particles.length; 

  function removeParticleWithDelay(index) {
    if (index < particles.length) {
      setTimeout(() => {
        particles[index].remove(); 
        removeParticleWithDelay(index + 1); 
      }, delayBetweenRemovals);
    }
  }

  setTimeout(() => {
    removeParticleWithDelay(0); 
  }, animationDuration);
});


const cursor = document.querySelector('.cursor');

function moveCursor(event) {
  const cursorSize = 12; 
  cursor.style.left = `${event.clientX - cursorSize / 2}px`;
  cursor.style.top = `${event.clientY - cursorSize / 2}px`;
}

function updateCursorOnScroll() {
  const cursorSize = 12; 
  cursor.style.top = `${window.scrollY + event.clientY - cursorSize / 2}px`;
}

window.addEventListener('mousemove', moveCursor);

window.addEventListener('scroll', updateCursorOnScroll);

// Function to handle gyroscope change
function handleGyroscope(event) {
  const beta = event.beta; 

  const particles = document.querySelectorAll('.particle');
  particles.forEach(particle => {
    particle.style.transform = `translateY(${beta}deg)`; 
  });
}

if (window.DeviceOrientationEvent) {
  window.addEventListener('deviceorientation', handleGyroscope);
} else {
  console.log('Device does not support gyroscope.');
}



function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function removeCursorOnMobile() {
  const cursor = document.querySelector('.cursor');
  if (isMobileDevice()) {
    cursor.style.display = 'none'; 
  }
}

document.addEventListener('DOMContentLoaded', function() {
  removeCursorOnMobile(); 
});


