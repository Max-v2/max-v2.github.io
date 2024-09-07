document.querySelectorAll('.menu nav ul li a').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();

        // Ocultar todas las secciones
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.remove('active');
        });

        // Mostrar la sección seleccionada
        const sectionId = this.getAttribute('data-section');
        document.getElementById(sectionId).classList.add('active');
    });
});