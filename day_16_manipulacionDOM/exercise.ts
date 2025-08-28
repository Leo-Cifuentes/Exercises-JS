document.addEventListener('DOMContentLoaded', function() {

    const titleH1 = document.querySelector("#tituloPrincipal") as HTMLElement;    
    titleH1.textContent = "¡Página Modificada por JavaScript!";

    let paragraphOne = document.querySelector(".parrafo-destacado") as HTMLElement;
    paragraphOne.innerHTML = "Ahora este párrafo tiene texto en <strong>negrita</strong>." ;
    // En .textContent solo se puede modificar el texto sin etiquetaa HTML, para .innerHTML se pueden introducir etiquetas que complementen el texto o el HTML.

    let divContenedor = document.querySelector(".contenedor") as HTMLElement;
    divContenedor.style.backgroundColor = "lightyellow", divContenedor.style.border = "2px solid green";

    let divDestacado = document.querySelectorAll(".parrafo-destacado")[1] as HTMLElement;
    divDestacado.classList.add("resaltado");
    titleH1.classList.toggle("resaltado");
}
)