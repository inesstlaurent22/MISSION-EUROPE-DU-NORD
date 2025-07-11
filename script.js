document.getElementById('transitionButton').addEventListener('click', function () {
  const baleineOverlay = document.getElementById('transitionVideoContainer');

  // Affiche le GIF de transition
  baleineOverlay.style.display = 'block';

  // Attends la durée du GIF avant de rediriger
  setTimeout(() => {
    window.location.href = 'rotterdam.html'; // change cette URL si besoin
  }, 1000); // 1000ms = 1s, ajuste selon la durée du GIF
});
