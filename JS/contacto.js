document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.form-contacto');
  
  form.addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que la página se recargue
    const formData = new FormData(form);

    fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' }
    })
    .then(response => {
      if (response.ok) {
        alert('¡Mensaje enviado! Revisa tu correo.');
        form.reset();
      } else {
        alert('Hubo un error al enviar el mensaje.');
      }
    })
    .catch(() => {
      alert('Hubo un error al enviar el mensaje.');
    });
  });
});
