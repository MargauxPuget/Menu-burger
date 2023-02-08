// sélection de l'élément de curseur, du curseur lui-même et du conteneur de curseur
let iconMenuClose = document.querySelector('.iconMenuClose');
let iconMenuOpen = document.querySelector('.iconMenuOpen');
let nav = document.querySelector('.nav');

// ouvrir le menu burger
iconMenuClose.addEventListener("click", () => {
  iconMenuOpen.classList.toggle("icon--hidden");
  iconMenuClose.classList.toggle("icon--hidden");
  nav.classList.toggle("nav--hidden");
});

// fermer le menu burger
iconMenuOpen.addEventListener("click", () => {
  iconMenuOpen.classList.toggle("icon--hidden");
  iconMenuClose.classList.toggle("icon--hidden");
  nav.classList.toggle("nav--hidden");
});
