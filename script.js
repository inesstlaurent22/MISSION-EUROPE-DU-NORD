document.getElementById('transitionButton').addEventListener('click', function () {
  const button = this;
  const baleineContainer = document.getElementById('transitionVideoContainer');

  // Désactive le bouton pour éviter plusieurs clics
  button.disabled = true;
  button.style.cursor = 'not-allowed';
  button.style.opacity = '0.6'; // Optionnel : effet visuel de désactivation

  // Affiche le GIF de transition
  baleineContainer.style.display = 'block';

  // Attends la durée du GIF avant de rediriger
  setTimeout(() => {
    window.location.href = 'rotterdam.html';
  }, 3000); // adapte si ton GIF dure plus longtemps
});
