document.getElementById('transitionButton').addEventListener('click', function () {
  // Affiche la vidéo de transition
  const videoContainer = document.getElementById('transitionVideoContainer');
  const video = document.getElementById('transitionVideo');
  videoContainer.style.display = 'block';

  // Lance la vidéo (si elle n’est pas déjà en autoplay)
  video.play();

  // Quand la vidéo est terminée, redirige vers la nouvelle page
  video.onended = function () {
    window.location.href = 'menu.html';
  };
});
