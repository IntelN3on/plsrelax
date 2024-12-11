const particleContainer = document.getElementById('particle-container');

function createParticle() {
    const particle = document.createElement('div');
    particle.classList.add('particle');

    // Randomize the starting position of the particle at the bottom
    particle.style.left = Math.random() * window.innerWidth + 'px'; // Horizontal position
    particle.style.animationDuration = Math.random() * 2 + 3 + 's'; // Random animation time between 3s and 5s

    // Append particle to the container
    particleContainer.appendChild(particle);

    // Remove particle after it disappears (to optimize performance)
    setTimeout(() => {
        particle.remove();
    }, 5000); // Remove after animation duration
}

// Create a new particle every 100ms
setInterval(createParticle, 100);
