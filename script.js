document.getElementById('transitionButton').addEventListener('click', function () {
  const button = this;
  const baleine-overlay = document.getElementById('transitionVideoContainer');

  // Désactive le bouton pour éviter plusieurs clics
  button.disabled = true;
  button.style.cursor = 'not-allowed';
  button.style.opacity = '0.6'; // Optionnel : effet visuel de désactivation

  // Affiche le GIF de transition
  baleine-overlay.style.display = 'block';

  // Attends la durée du GIF avant de rediriger
  setTimeout(() => {
    window.location.href = 'rotterdam.html';
  }, 1000); // adapte si ton GIF dure plus longtemps
});
