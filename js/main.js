ScrollReveal().reveal('.featured');
ScrollReveal().reveal('.title__section');

let btnTop = document.querySelector('.btn__top');

window.onscroll = function() {
    if (isScrolledIntoView(btnTop)) {
        btnTop.style.display = "flex";
    }
};

function isScrolledIntoView(btnTop) {
    var rect = btnTop.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    // Comprueba si el elemento está completamente visible en la ventana del navegador
    return (elemTop >= 0) && (elemBottom <= window.innerHeight);
}