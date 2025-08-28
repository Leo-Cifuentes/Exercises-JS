document.addEventListener("DOMContentLoaded", function () {
    var formulario = document.querySelector("#contacto-form");
    var nombreInput = document.querySelector("#nombre");
    var mensajeTextarea = document.querySelector("#mensaje");
    var mensajeError = document.querySelector("#error-mensaje");
    var resultado = document.querySelector("#resultado-envio");
    // .preventDefault() cancela un evento si es cancelable pero no detiene el resto del funcionamiento del evento.
    formulario.addEventListener("submit", function (event) {
        event.preventDefault();
        var valorNombre = nombreInput.value.trim();
        var valorMensaje = mensajeTextarea.value.trim();
        console.log(valorNombre);
        console.log(valorMensaje);
        if (mensajeTextarea.textLength <= 10) {
            mensajeError.textContent = "El mensaje debe tener al menos 10 caracteres.";
            return;
        }
        mensajeError.textContent = "";
        resultado.innerHTML = "<h3>\u00A1Gracias, ".concat(valorNombre, "!</h3><p>Tu mensaje ha sido recibido.</p>");
        nombreInput.value = "";
        mensajeTextarea.value = "";
    });
});
