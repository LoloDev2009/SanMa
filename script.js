// Seleccionar el elemento del carrusel y las imágenes individuales
const carouselSlide = document.querySelector('.carousel-slide');
const slides = carouselSlide.querySelectorAll('img');

// Seleccionar los botones de navegación
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

// Variable para mantener el índice de la diapositiva actual
let slideIndex = 0;

// Función para mostrar una diapositiva específica
function showSlide(index) {
  slides.forEach((slide) => {
    slide.style.display = 'none'; // Ocultar todas las diapositivas
  });

  slides[index].style.display = 'block'; // Mostrar la diapositiva seleccionada
}

// Función para mostrar la siguiente diapositiva
function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length; // Calcular el nuevo índice
  showSlide(slideIndex); // Mostrar la diapositiva siguiente
}

// Función para mostrar la diapositiva anterior
function prevSlide() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length; // Calcular el nuevo índice
  showSlide(slideIndex); // Mostrar la diapositiva anterior
}

// Agregar eventos de clic a los botones de navegación
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Mostrar la primera imagen inicialmente
showSlide(slideIndex);
