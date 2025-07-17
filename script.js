document.addEventListener("DOMContentLoaded", function () {
  // Transition Baleine (1)
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
  const avion = document.getElementById('transitionVideoContainer2');
  const transitionButtons2 = document.querySelectorAll('.transitionButton2');

  transitionButtons2.forEach(button => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      const target = this.getAttribute("data-target");
      if (!target) return;

      avion.style.display = 'block';
      setTimeout(() => {
        window.location.href = target;
      }, 6000);
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
