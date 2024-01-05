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
    title.classList.remove('typing'); // Remove the typing animation class
  });
});



function displayPopup() {
  document.getElementById('popup').style.display = 'block';
}

function hidePopup() {
  document.getElementById('popup').style.display = 'none';
}

/// Function to create particles and initiate animation
function createParticles() {
  const numParticles = 24; // Number of particles
  const particleContainer = document.querySelector('.particle-container');

  for (let i = 0; i < numParticles; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.left = `${getRandomNumber(0, window.innerWidth)}px`;
    particle.style.top = `${getRandomNumber(-500, -50)}px`; // Start position above the window
    particleContainer.appendChild(particle);

    // Start animation for each particle with a delay
    animateParticle(particle);
  }
}

// Function to animate individual particles
function animateParticle(particle) {
  const duration = Math.random() * 5 + 2; // Adjust animation duration
  particle.style.animationDuration = `${duration}s`; // Set animation duration dynamically
  particle.style.animationDelay = `${Math.random() * 5}s`; // Randomize animation delay
}

// Function to generate random number between min and max
function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

// Initialize particles creation and animation
window.addEventListener('load', () => {
  createParticles(); // Create particles
  const animationDuration = 8000; // Duration in milliseconds (8 seconds)
  const particles = document.querySelectorAll('.particle');
  const delayBetweenRemovals = animationDuration / particles.length; // Calculate delay for each particle's removal

  // Function to remove particles with a delay
  function removeParticleWithDelay(index) {
    if (index < particles.length) {
      setTimeout(() => {
        particles[index].remove(); // Remove particle at the specified index
        removeParticleWithDelay(index + 1); // Remove next particle with a delay
      }, delayBetweenRemovals);
    }
  }

  // Start removing particles after the specified duration
  setTimeout(() => {
    removeParticleWithDelay(0); // Start removing particles
  }, animationDuration);
});


const cursor = document.querySelector('.cursor');

function moveCursor(event) {
  const cursorSize = 12; // Adjust the cursor size if needed
  cursor.style.left = `${event.clientX - cursorSize / 2}px`;
  cursor.style.top = `${event.clientY - cursorSize / 2}px`;
}

function updateCursorOnScroll() {
  const cursorSize = 12; // Adjust the cursor size if needed
  cursor.style.top = `${window.scrollY + event.clientY - cursorSize / 2}px`;
}

window.addEventListener('mousemove', moveCursor);

window.addEventListener('scroll', updateCursorOnScroll);

// Function to handle gyroscope change
function handleGyroscope(event) {
  const beta = event.beta; // Get the beta rotation value from gyroscope

  // Apply the gyroscope data to the particle movement
  const particles = document.querySelectorAll('.particle');
  particles.forEach(particle => {
    particle.style.transform = `translateY(${beta}deg)`; // Modify the translation based on gyroscope data
  });
}

// Check for gyroscope support
if (window.DeviceOrientationEvent) {
  // If the device supports gyroscope
  window.addEventListener('deviceorientation', handleGyroscope);
} else {
  console.log('Device does not support gyroscope.');
}



// Function to check if the device is a mobile device
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


