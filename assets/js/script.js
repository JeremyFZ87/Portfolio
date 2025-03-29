document.addEventListener("DOMContentLoaded", () => {
  const carouselImages = document.querySelector(".carousel-images");
  const images = document.querySelectorAll(".carousel-images img");
  let index = 0;

  if (carouselImages) {
    // Code pour gérer le carrousel uniquement si l'élément existe
    carouselImages.style.width = `${images.length * 100}%`;
    images.forEach((img) => {
      img.style.width = `${100 / images.length}%`; // Chaque image occupe une fraction égale
    });

    // Fonction pour déplacer le carrousel
    function moveCarousel() {
      carouselImages.style.transform = `translateX(-${
        index * (100 / images.length)
      }%)`;
    }

    // Auto-défilement
    let autoScroll = setInterval(() => {
      index = (index + 1) % images.length;
      moveCarousel();
    }, 3000); // Change d'image toutes les 3 secondes
  } else {
    console.warn("Carousel not found on this page.");
  }

  // Code pour le menu burger
  const burgerMenu = document.querySelector(".burger-menu");
  const dropdown = document.querySelector(".burger-dropdown");

  if (burgerMenu && dropdown) {
    burgerMenu.addEventListener("click", () => {
      burgerMenu.classList.toggle("active");
    });
  } else {
    console.warn("Burger menu or dropdown not found on this page.");
  }
});
