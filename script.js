document.getElementById('transitionButton').addEventListener('click', function () {
  const baleine = document.getElementById('transitionVideoContainer');
  const video = document.getElementById('transitionVideo');

  baleine.style.display = 'block';

  if (video) {
    video.playbackRate = 0.5; // 0.5 = deux fois plus lent (1 = normal)
    video.play(); // Lancer la vidéo si ce n'est pas déjà fait
  }

  // Adapter ce délai à la durée réelle de ta vidéo ralentie
  setTimeout(() => {
    window.location.href = 'rotterdam.html';
  }, 4000); // ici : 4 secondes (à ajuster selon ta vidéo)
});
