// Optional: Enhance neon effect by dynamically changing the neon color
document.addEventListener('DOMContentLoaded', function() {
  // Grab the heading with class="neon-text"
  const neonElement = document.querySelector('.neon-text');
  // If the element exists on the page:
  if (neonElement) {
    const colors = ['#ff00de', '#00fff7', '#fffc00', '#ff007c', '#00ff95'];
    setInterval(() => {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      neonElement.style.textShadow = `
        0 0 5px ${randomColor},
        0 0 10px ${randomColor},
        0 0 20px ${randomColor},
        0 0 30px ${randomColor},
        0 0 40px ${randomColor}
      `;
    }, 1500);
  }
});
