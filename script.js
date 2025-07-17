  // Transition Baleine (1)
document.addEventListener("DOMContentLoaded", function () {
const baleine = document.getElementById('transitionVideoContainer');
const transitionButtons = document.querySelectorAll('.transitionButton');

  transitionButtons.forEach(button => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      const target = this.getAttribute("data-target");
      if (!target) return;

      baleine.style.display = 'block';
      setTimeout(() => {
        window.location.href = target;
      }, 1200);
    });
  });

    // Transition Avion (2)
  document.addEventListener("DOMContentLoaded", function () {
  const avion = document.getElementById('transitionVideo2');
  const transitionButtons = document.querySelectorAll('.transitionButton2');

  transitionButtons.forEach(button => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      const target = this.getAttribute("data-target");
      if (!target) return;

      avion.style.display = 'block';
      setTimeout(() => {
        window.location.href = target;
      }, 4000);
    });
  });
    
  // Transition Train (3)
  const train = document.getElementById('transitionVideoContainer3');
  const transitionButtons3 = document.querySelectorAll('.transitionButton3');

  transitionButtons3.forEach(button => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      const target = this.getAttribute("data-target");
      if (!target) return;

      train.style.display = 'block';
      setTimeout(() => {
        window.location.href = target;
      }, 3000);
    });
  });
});
