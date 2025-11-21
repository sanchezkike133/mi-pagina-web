document.querySelectorAll('.nav-list a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
    if (nav.classList.contains('visible')) {
      nav.classList.remove('visible');
      toggle.setAttribute('aria-expanded', false);
    }
  });
});
