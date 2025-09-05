document.addEventListener('DOMContentLoaded', () => {
    // Selecciona todos los botones de navegación de la barra lateral
    const navButtons = document.querySelectorAll('.sidebar-nav .nav-button');

    // Itera sobre cada botón para añadirle un evento de clic
    navButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Previene el comportamiento por defecto del enlace (que es un salto brusco)
            event.preventDefault();

            // Obtiene el ID del objetivo del atributo href (ej. '#objetivo')
            const targetId = button.getAttribute('href');
            
            // Selecciona el elemento de la sección correspondiente a ese ID
            const targetSection = document.querySelector(targetId);

            // Si la sección existe, haz scroll suave hacia ella
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth', // La animación de scroll
                    block: 'start'      // Alinea la parte superior de la sección con la parte superior de la vista
                });
            }
        });
    });
});