document.addEventListener('DOMContentLoaded', () => {
    const tarjetasEquipo = document.querySelectorAll('.miembro-card');

    tarjetasEquipo.forEach(tarjeta => {
        tarjeta.addEventListener('mouseenter', () => {
            tarjeta.style.borderBottomColor = '#d4a373';
        });

        tarjeta.addEventListener('mouseleave', () => {
            tarjeta.style.borderBottomColor = '#3b2214';
        });
    });
});