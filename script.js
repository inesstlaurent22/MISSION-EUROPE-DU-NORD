document.getElementById('transitionButton').addEventListener('click', function () {
  const baleineContainer = document.getElementById('transitionVideoContainer');
  const baleine = document.getElementById('baleine');

  // Affiche la vidéo
  baleineContainer.style.display = 'block';

  // Joue la vidéo
  baleine.play().catch(error => {
    console.error('Erreur de lecture automatique :', error);
  });

  // Quand la vidéo est terminée, redirige vers une autre page
  baleine.onended = function () {
    window.location.href = 'rotterdam.html';
  };
});
