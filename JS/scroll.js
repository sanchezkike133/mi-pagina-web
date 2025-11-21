document.querySelectorAll('.nav-list a').forEach(link => {
  // Selecciona todos los enlaces dentro del menú de navegación y los recorre uno por uno

  link.addEventListener('click', (e) => {
    // Agrega un evento al hacer click en cada enlace
    e.preventDefault();
    // Evita que el enlace haga la acción por defecto (ir directamente al ancla)

    const target = document.querySelector(link.getAttribute('href'));
    // Obtiene el elemento del DOM al que apunta el href del enlace (por ejemplo '#inicio')

    target.scrollIntoView({ behavior: 'smooth' });
    // Hace scroll suave hasta ese elemento

    if (nav.classList.contains('visible')) {
      // Si el menú móvil está abierto
      nav.classList.remove('visible');
      // Lo cierra
      toggle.setAttribute('aria-expanded', false);
      // Actualiza aria-expanded a false para accesibilidad
    }
  });
});
