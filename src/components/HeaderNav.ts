export function initHeaderNav(): void {
  const menuButton = document.getElementById("menuButton");
  const mobileMenu = document.getElementById("mobileMenu");
  let lastScrollY = window.scrollY;

  // Gestion du menu mobile
  menuButton?.addEventListener("click", () => {
    mobileMenu?.classList.toggle("-translate-x-full");
  });

  // Fermer le menu mobile lors du clic sur un lien
  const mobileLinks = mobileMenu?.querySelectorAll("a");
  mobileLinks?.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu?.classList.add("-translate-x-full");
    });
  });

  // Gestion de l'opacité du bouton lors du défilement
  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      // Défilement vers le bas
      menuButton?.classList.add("opacity-10");
    } else {
      // Défilement vers le haut
      menuButton?.classList.remove("opacity-10");
    }

    lastScrollY = currentScrollY;
  });
} 