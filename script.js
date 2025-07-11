document.getElementById('transitionButton').addEventListener('click', function () {
  const baleineContainer = document.getElementById('transitionVideoContainer');
  const baleine = document.getElementById('baleine');

  // Affiche la vidéo
  baleineContainer.style.display = 'block';

  // Joue la vidéo
baleineContainer.style.display = 'block';
setTimeout(() => {
  window.location.href = 'rotterdam.html';
}, 3000);

  // Quand la vidéo est terminée, redirige vers une autre page
  baleine.onended = function () {
    window.location.href = 'rotterdam.html';
  };
});
