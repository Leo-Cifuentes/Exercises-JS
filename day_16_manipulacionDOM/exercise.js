document.addEventListener('DOMContentLoaded', function () {
    var titleH1 = document.querySelector("#tituloPrincipal");
    titleH1.textContent = "¡Página Modificada por JavaScript!";
    var paragraphOne = document.querySelector(".parrafo-destacado");
    paragraphOne.innerHTML = "Ahora este párrafo tiene texto en <strong>negrita</strong>.";
    // En .textContent solo se puede modificar el texto sin etiquetaa HTML, para .innerHTML se pueden introducir etiquetas que complementen el texto o el HTML.
    var divContenedor = document.querySelector(".contenedor");
    divContenedor.style.backgroundColor = "lightyellow", divContenedor.style.border = "2px solid green";
    var divDestacado = document.querySelectorAll(".parrafo-destacado")[1];
    divDestacado.classList.add("resaltado");
    titleH1.classList.toggle("resaltado");
});
