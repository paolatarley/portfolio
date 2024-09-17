let carousels = {
  'carrossel-fotografias': { index: 0, intervalId: null },
  'carrossel-photoshop': { index: 0, intervalId: null }
};

function moveSlide(n, carouselId) {
  const carousel = carousels[carouselId];
  const slides = document.querySelectorAll(`#${carouselId} .carrossel-images img`);
  const totalSlides = slides.length;
  carousel.index = (carousel.index + n + totalSlides) % totalSlides;
  document.querySelector(`#${carouselId} .carrossel-images`).style.transform = `translateX(${
      -100 * carousel.index
  }%)`;
}

function startCarousel(carouselId, interval) {
  const carousel = carousels[carouselId];
  carousel.intervalId = setInterval(() => moveSlide(1, carouselId), interval);
}

// Inicia os carrosséis
startCarousel('carrossel-fotografias', 3000); // Muda de imagem a cada 3 segundos
startCarousel('carrossel-photoshop', 3000); // Muda de imagem a cada 3 segundos
