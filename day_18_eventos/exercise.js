document.addEventListener("DOMContentLoaded", function () {
    var botonSaludo = document.querySelector("#boton-saludo");
    var mensajeSaludo = document.querySelector("#mensaje-saludo");
    var cajaSensible = document.querySelector("#caja-sensible");
    botonSaludo.addEventListener("click", function () {
        mensajeSaludo.textContent = "¡Hola! Gracias por hacer clic.";
    });
    cajaSensible.addEventListener("mouseover", function () {
        cajaSensible.style.background = "salmon";
    });
    cajaSensible.addEventListener("mouseout", function () {
        cajaSensible.style.background = "steelblue";
    });
    window.addEventListener("keydown", function (event) {
        console.log("Tecla Presionada: ".concat(event.key));
    });
});
