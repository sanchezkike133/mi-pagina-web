const toggle = document.getElementById('nav-toggle');
const nav = document.getElementById('nav-list');

toggle.addEventListener('click', () => {
  const expanded = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', !expanded);
  nav.classList.toggle('visible');
});
