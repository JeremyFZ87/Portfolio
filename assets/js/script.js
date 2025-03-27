const carouselImages = document.querySelector(".carousel-images");
const images = document.querySelectorAll(".carousel-images img");
let index = 0;

// Définir la largeur totale du conteneur en fonction du nombre d'images
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
