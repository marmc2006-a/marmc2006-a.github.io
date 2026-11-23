document.addEventListener('DOMContentLoaded', () => {
    const botones = document.querySelectorAll('.btn-filtro');
    const items = document.querySelectorAll('.menu-item');

    botones.forEach(boton => {
        boton.addEventListener('click', () => {
            // Quitar clase "activo" de todos los botones
            botones.forEach(b => b.classList.remove('activo'));
            // Agregar "activo" al botón que se hizo clic
            boton.classList.add('activo');

            const filtro = boton.getAttribute('data-filtro');

            items.forEach(item => {
                // Si el filtro es "todos" o el item tiene la clase del filtro, se muestra
                if (filtro === 'todos' || item.classList.contains(filtro)) {
                    item.classList.remove('oculto');
                } else {
                    // Si no coincide, se oculta
                    item.classList.add('oculto');
                }
            });
        });
    });
});