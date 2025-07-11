document.getElementById('transitionButton').addEventListener('click', function () {
  const videoContainer = document.getElementById('transitionVideoContainer');
  const video = document.getElementById('transitionVideo');

  // Affiche la vidéo
  videoContainer.style.display = 'block';

  // Lance la vidéo
  video.play().catch(error => {
    console.error('Erreur de lecture automatique:', error);
  });

  // Quand la vidéo est terminée, redirige
  video.onended = function () {
    window.location.href = 'menu.html'; // change vers la page que tu veux
  };
});
