// Burger Menu Toggle
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
});

const categories = document.querySelectorAll('.category h2');

categories.forEach(cat => {
    cat.addEventListener('click', () => {
        const menu = cat.nextElementSibling;

        // Si déjà ouvert, on ferme
        if(menu.style.display === 'grid') {
            menu.style.display = 'none';
        } else {
            // On ferme tous les autres menus
            document.querySelectorAll('.category .menu-items').forEach(m => m.style.display = 'none');
            // On ouvre le menu cliqué
            menu.style.display = 'grid';
        }
    });
});
