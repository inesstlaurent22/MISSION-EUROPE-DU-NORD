document.getElementById('transitionButton').addEventListener('click', function () {
  const videoContainer = document.getElementById('transitionVideoContainer');
  const video = document.getElementById('transitionButton');

  // Affiche la vidéo
  baleineContainer.style.display = 'block';

  // Lance la vidéo
  video.play().catch(error => {
    console.error('Erreur de lecture automatique:', error);
  });

  // Quand la vidéo est terminée, redirige
  video.onended = function () {
    window.location.href = 'rotterdam.html'; // change vers la page que tu veux
  };
});
