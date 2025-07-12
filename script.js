// Cibler tous les boutons de transition
const transitionButtons = document.querySelectorAll('.transitionButton');
const baleine = document.getElementById('transitionVideoContainer');

transitionButtons.forEach(button => {
  button.addEventListener('click', function () {
    const targetURL = this.getAttribute('data-target');
    const video = document.getElementById('transitionVideo'); // utile si tu passes en <video>

    // Affiche la baleine (image ou vidéo)
    baleine.style.display = 'block';

    // Si tu utilises une vraie balise <video> au lieu d'un GIF
    if (video) {
      video.playbackRate = 0.5;
      video.play();
    }

    // Adapter le délai (ex: 4 secondes)
    setTimeout(() => {
      window.location.href = targetURL;
    }, 4000);
  });
});
