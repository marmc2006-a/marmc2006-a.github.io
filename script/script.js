script.js
const imagenes = document.querySelectorAll('.encabezado img');
let indiceActual = 0;
function cambiarImagen() {
    imagenes[indiceActual].classList.remove('activa');
    indiceActual = (indiceActual + 1) % imagenes.length;
    imagenes[indiceActual].classList.add('activa');
}
setInterval(cambiarImagen, 5000);
// Espera a que todo el contenido del documento se cargue correctamente
document.addEventListener('DOMContentLoaded', () => {
    
    // Selecciona todas las imágenes del carrusel en el encabezado
    const imagenes = document.querySelectorAll('.encabezado img');
    let indiceActual = 0;

    // Función que realiza el cambio de imagen
    function cambiarImagen() {
        if (imagenes.length === 0) return;

        // Quita la clase 'activa' de la imagen actual
        imagenes[indiceActual].classList.remove('activa');

        // Avanza al siguiente índice (vuelve a 0 al llegar al final)
        indiceActual = (indiceActual + 1) % imagenes.length;

        // Agrega la clase 'activa' a la nueva imagen
        imagenes[indiceActual].classList.add('activa');
    }

    // Configura el intervalo de cambio automático cada 5 segundos (5000 milisegundos)
    setInterval(cambiarImagen, 5000);

    // Desplazamiento suave (smooth scroll) para los enlaces del menú
    const enlacesNav = document.querySelectorAll('nav ul li a, .boton');
    enlacesNav.forEach(enlace => {
        enlace.addEventListener('click', (e) => {
            const destinoId = enlace.getAttribute('href');
            if (destinoId && destinoId.startsWith('#')) {
                const seccionDestino = document.querySelector(destinoId);
                if (seccionDestino) {
                    e.preventDefault();
                    seccionDestino.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

});