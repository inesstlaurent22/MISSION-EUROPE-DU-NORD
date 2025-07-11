document.getElementById('transitionButton').addEventListener('click', function () {
  const baleineContainer = document.getElementById('transitionVideoContainer');
  const baleine = document.getElementById('transitionVideo');

  // Affiche la vidéo
  baleineContainer.style.display = 'block';

  // Lance la vidéo
  baleine.play().catch(error => {
    console.error('Erreur de lecture automatique:', error);
  });

  // Quand la vidéo est terminée, redirige
  baleine.onended = function () {
    window.location.href = 'rotterdam.html'; // change vers la page que tu veux
  };
});
