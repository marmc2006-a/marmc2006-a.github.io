historia.js
// Esperar a que todo el documento HTML esté cargado
document.addEventListener('DOMContentLoaded', () => {
    // Seleccionar todos los elementos que tienen la clase 'fade-in'
    const bloques = document.querySelectorAll('.fade-in');

    // Crear un observador para detectar cuándo los bloques entran en la pantalla
    const observarScroll = new IntersectionObserver((entradas, observador) => {
        entradas.forEach(entrada => {
            // Si el bloque ya es visible en la pantalla
            if (entrada.isIntersecting) {
                // Añadir la clase 'visible' para activar la animación en CSS
                entrada.target.classList.add('visible');
                // Dejar de observar este bloque para que la animación no se repita al subir
                observador.unobserve(entrada.target);
            }
        });
    }, {
        // threshold: 0.15 significa que la animación empezará cuando el 15% del bloque sea visible
        threshold: 0.15 
    });

    // Indicarle al observador que vigile cada uno de los bloques
    bloques.forEach(bloque => {
        observarScroll.observe(bloque);
    });
});