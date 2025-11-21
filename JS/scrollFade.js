// Selecciona todas las secciones, cards y noticias
const elementos = document.querySelectorAll('main section, .carrera.card, .noticia, .hero-content');
// Crea un NodeList con todos los elementos que queremos animar al hacer scroll

// Configura el observer
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Si el elemento entra en la pantalla, se le agrega la clase 'visible'
      // Esto activa la animación definida en CSS
    }
  });
}, { threshold: 0.1 });
// El threshold 0.1 significa que la animación se activará cuando al menos
// el 10% del elemento sea visible en la ventana

// Inicializa ocultos y observa
elementos.forEach(el => {
  el.classList.add('hidden');
  // Todos los elementos comienzan ocultos (clase 'hidden' con opacidad y translateY)
  observer.observe(el);
  // Se le dice al observer que observe este elemento para detectar cuando aparezca en pantalla
});
