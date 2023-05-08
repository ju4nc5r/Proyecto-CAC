let fakeimg = document.querySelector('.fakeimg');

fakeimg.addEventListener('mouseover', function() {
    fakeimg.style.left = '50px';
});

window.addEventListener("scroll", function() {
    let barra = document.querySelector(".barra_animaciones");
    let altura = window.innerHeight;
    let posicion = window.scrollY;
    let altura_total = document.body.clientHeight;
    let ancho = (posicion / (altura_total - altura)) * 100;
    barra.style.width = ancho + "%";
  });

window.addEventListener("scroll", function() {
    let barra = document.querySelector(".barra_animaciones");
    let degradado = document.querySelector(".degradado");
    let altura = window.innerHeight;
    let altura_total = document.body.clientHeight;
    let ancho = (posicion / (altura_total - altura)) * 100;
    barra.style.width = ancho + "%";
    degradado.style.width = ancho + "%";
    degradado.style.backgroundPositionX = ancho + "%";
  });

