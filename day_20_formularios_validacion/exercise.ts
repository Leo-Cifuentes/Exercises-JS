document.addEventListener("DOMContentLoaded", function(){

    const formulario = document.querySelector("#contacto-form") as HTMLElement;
    const nombreInput = document.querySelector("#nombre") as HTMLInputElement;
    const mensajeTextarea = document.querySelector("#mensaje") as HTMLTextAreaElement;
    const mensajeError = document.querySelector("#error-mensaje") as HTMLElement;
    const resultado = document.querySelector("#resultado-envio") as HTMLElement;
    
    // .preventDefault() cancela un evento si es cancelable pero no detiene el resto del funcionamiento del evento.
    formulario.addEventListener("submit", function (event) {
      event.preventDefault();
      const valorNombre = nombreInput.value.trim();
      const valorMensaje = mensajeTextarea.value.trim();
      console.log(valorNombre);
      console.log(valorMensaje);
      if (mensajeTextarea.textLength <= 10) {
        mensajeError.textContent = "El mensaje debe tener al menos 10 caracteres.";
        return;
        }
      mensajeError.textContent = "";
      resultado.innerHTML = `<h3>¡Gracias, ${valorNombre}!</h3><p>Tu mensaje ha sido recibido.</p>`;
      nombreInput.value = "";
      mensajeTextarea.value = "";
    });

})