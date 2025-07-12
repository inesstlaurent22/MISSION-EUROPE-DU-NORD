document.addEventListener("DOMContentLoaded", function () {
  const baleine = document.getElementById('transitionVideoContainer');

  // Liste des boutons avec les pages cibles
  const redirections = {
    "paris-button": "paris.html",
    "copenhague-button": "copenhague.html",
    "oslo-button": "oslo.html",
    "hamar-button": "hamar.html",
    "trondheim-button": "trondheim.html",
    "bodo-button": "bodo.html",
    "tromso-button": "tromso.html",
    "capnord-button": "capnord.html",
    "kirkenes-button": "kirkenes.html",
    "stockholm-button": "stockholm.html",
    "helsinki-button": "helsinki.html",
    "tallin-button": "tallin.html",
    "riga-button": "riga.html",
    "vilnius-button": "vilnius.html",
    "cracovie-button": "cracovie.html",
    "berlin-button": "berlin.html"
  };

  // Appliquer les redirections avec transition
  for (const id in redirections) {
    const button = document.querySelector(`.${id}`);
    if (button) {
      button.addEventListener("click", function () {
        baleine.style.display = 'block'; // Affiche la transition (image ou vidéo)
        setTimeout(() => {
          window.location.href = redirections[id]; // Redirige vers la bonne page
        }, 1600); // Durée de la transition
      });
    }
  }
});
