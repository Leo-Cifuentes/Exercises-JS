document.addEventListener("DOMContentLoaded", function() {

    const botonSaludo = document.querySelector("#boton-saludo") as HTMLElement;
    const mensajeSaludo = document.querySelector("#mensaje-saludo") as HTMLElement;
    const cajaSensible = document.querySelector("#caja-sensible") as HTMLElement;

    botonSaludo.addEventListener("click", function() {
        mensajeSaludo.textContent = "¡Hola! Gracias por hacer clic.";
    })
    cajaSensible.addEventListener("mouseover", function(){
        cajaSensible.style.background = "salmon";
    })
    cajaSensible.addEventListener("mouseout", function() {
        cajaSensible.style.background = "steelblue";
    })
    window.addEventListener("keydown", function(event) {
        console.log(`Tecla Presionada: ${event.key}` );
    })

})