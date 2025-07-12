document.addEventListener("DOMContentLoaded", function () {
  const baleine = document.getElementById('transitionVideoContainer');

  // Récupère tous les boutons ayant la classe transitionButton
  const transitionButtons = document.querySelectorAll('.transitionButton');

  transitionButtons.forEach(button => {
    button.addEventListener("click", function () {
      const target = this.getAttribute("data-target");
      if (!target) return;

      // Affiche la baleine
      baleine.style.display = 'block';

      // Lancer la redirection après délai
      setTimeout(() => {
        window.location.href = target;
      }, 1600);
    });
  });
});
