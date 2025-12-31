const menuIcon = document.getElementById('menu');
const navMenu = document.getElementById('nav');

menuIcon.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Cerrar el menú al hacer clic en cualquier enlace
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});
