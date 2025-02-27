//Menu responsivo
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const menuItems = document.querySelectorAll('.nav-links a');

    // Alterna o menu ao clicar no ícone
    menuToggle.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });

    // Fecha o menu ao clicar em um item
    menuItems.forEach(item => {
        item.addEventListener('click', function () {
            navLinks.classList.remove('active');
        });
    });

    // Fecha o menu ao clicar fora dele (boa prática para UX)
    document.addEventListener('click', function (event) {
        if (!menuToggle.contains(event.target) && !navLinks.contains(event.target)) {
            navLinks.classList.remove('active');
        }
    });

    // Expande a imagem ao clicar
    function expandirImagem(img) {
        document.getElementById("lightbox").style.display = "flex";
        document.getElementById("lightbox-img").src = img.src;
    }

    // Fecha o Lightbox
    function fecharLightbox() {
        document.getElementById("lightbox").style.display = "none";
    }
});