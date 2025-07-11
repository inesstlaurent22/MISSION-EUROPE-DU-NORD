document.getElementById('transitionButton').addEventListener('click', function () {
  const baleineContainer = document.getElementById('transitionVideoContainer');

  // Affiche le GIF de transition
  baleineContainer.style.display = 'block';

  // Attends 3 secondes (ou la durée réelle du GIF) avant de rediriger
  setTimeout(() => {
    window.location.href = 'rotterdam.html';
  }, 3000); // remplace 3000 par la durée de ton GIF en millisecondes
});
