document.getElementById('transitionButton').addEventListener('click', function () {
  const baleine = document.getElementById('transitionVideoContainer');

  baleine.style.display = 'block';

  setTimeout(() => {
    window.location.href = 'rotterdam.html'; // change cette URL si besoin
  }, 800); // 1000ms = 1s, ajuste selon la durée du GIF
});
