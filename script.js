document.addEventListener("DOMContentLoaded", function () {
  const baleine = document.getElementById('transitionVideoContainer');

  const transitionButtons = document.querySelectorAll('.transitionButton');

  transitionButtons.forEach(button => {
    button.addEventListener("click", function (e) {
      e.preventDefault(); // Empêche comportement par défaut du bouton

      const target = this.getAttribute("data-target");
      if (!target) return;

      // Affiche la baleine
      baleine.style.display = 'block';

      // Lance la redirection après 1.6 secondes
      setTimeout(() => {
        window.location.href = target;
      }, 1400);
    });
  });
});
