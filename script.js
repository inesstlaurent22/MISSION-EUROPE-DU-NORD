document.addEventListener("DOMContentLoaded", function () {
  // 🚢 Transition Baleine
  const baleine = document.getElementById("transitionVideoContainer");
  const transitionButtons1 = document.querySelectorAll(".transitionButton");

  transitionButtons1.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      const target = this.getAttribute("data-target");
      if (!target) return;

      if (baleine) {
        baleine.style.display = "block";
        setTimeout(() => {
          window.location.href = target;
        }, 1200);
      } else {
        window.location.href = target;
      }
    });
  });

document.addEventListener("DOMContentLoaded", function () {
  // ✈️ Transition Avion
  const avion = document.getElementById("transitionVideo2");
  const transitionButtons2 = document.querySelectorAll(".transitionButton2");

  transitionButtons2.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      const target = this.getAttribute("data-target");
      if (!target) return;

      if (avion) {
        avion.style.display = "block";
        setTimeout(() => {
          window.location.href = target;
        }, 4000); // 4 secondes pour laisser l'animation se jouer
      } else {
        window.location.href = target;
      }
    });
  });
});

  // 🚆 Transition Train
  const train = document.getElementById("transitionVideoContainer3");
  const transitionButtons3 = document.querySelectorAll(".transitionButton3");

  transitionButtons3.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      const target = this.getAttribute("data-target");
      if (!target) return;

      if (train) {
        train.style.display = "block";
        setTimeout(() => {
          window.location.href = target;
        }, 3000);
      } else {
        window.location.href = target;
      }
    });
  });
});
