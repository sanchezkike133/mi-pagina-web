const toggle = document.getElementById('nav-toggle');
// Selecciona el botón de menú móvil (el botón con id "nav-toggle")

const nav = document.getElementById('nav-list');
// Selecciona la lista de navegación (ul con id "nav-list")

toggle.addEventListener('click', () => {
  // Agrega un evento que se ejecuta al hacer click en el botón
  const expanded = toggle.getAttribute('aria-expanded') === 'true';
  // Verifica si el menú ya está abierto (atributo aria-expanded = "true")

  toggle.setAttribute('aria-expanded', !expanded);
  // Cambia el valor de aria-expanded al opuesto (true/false) para accesibilidad

  nav.classList.toggle('visible');
  // Alterna la clase 'visible' en la lista de navegación para mostrar u ocultar el menú
});
