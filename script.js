document.addEventListener("DOMContentLoaded", function () {
  // Baleine (transition 1)
  const baleine = document.getElementById('transitionVideoContainer');
  const transitionButtons = document.querySelectorAll('.transitionButton');

  transitionButtons.forEach(button => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      const target = this.getAttribute("data-target");
      if (!target) return;

      // Affiche la baleine
      baleine.style.display = 'block';

      // Redirection après 1.2 secondes
      setTimeout(() => {
        window.location.href = target;
      }, 1200);
    });
  });

  // Avion (transition 2)
  const avion = document.getElementById('transitionVideoContainer2');
  const transitionButtons2 = document.querySelectorAll('.transitionButton2');

  transitionButtons2.forEach(button => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      const target = this.getAttribute("data-target");
      if (!target) return;

      // Affiche l’avion
      avion.style.display = 'block';

      // Redirection après 1.2 secondes
      setTimeout(() => {
        window.location.href = target;
      }, 1200);
    });
  });
});
