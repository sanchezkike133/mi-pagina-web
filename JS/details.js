const detallesCarreras = document.querySelectorAll('.detalles-carrera');
// Selecciona todos los elementos con la clase 'detalles-carrera' (los <details> de las carreras)
// y los guarda en la variable 'detallesCarreras' como un NodeList.

detallesCarreras.forEach(detalle => {
  // Recorre cada <details> individualmente
  detalle.addEventListener('toggle', () => {
    // Agrega un listener que se ejecuta cada vez que se abre o cierra este <details>
    if (detalle.open) { 
      // Si este <details> se ha abierto (propiedad open = true)
      detallesCarreras.forEach(other => {
        // Recorre nuevamente todos los <details>
        if (other !== detalle) {
          // Si el <details> actual no es el que se acaba de abrir
          other.removeAttribute('open'); 
          // Lo cierra (quita el atributo 'open') para que solo haya uno abierto a la vez
        }
      });
    }
  });
});
