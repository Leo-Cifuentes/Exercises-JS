document.addEventListener('DOMContentLoaded', function() {

    const nuevoBoton = document.createElement("button") as HTMLElement;
    const divContenedor = document.querySelector(".contenedor") as HTMLElement;
    const listaItems = document.querySelector("#lista-dinamica") as HTMLElement;
    const parrafoDos = document.querySelectorAll(".parrafo-destacado")[1] as HTMLElement;
    nuevoBoton.textContent = "Haz clic aquí";
    console.log(nuevoBoton);
    divContenedor.appendChild(nuevoBoton);
    const items : string [] = ["Home", "About", "Contact"];
    items.forEach((item) => {
        if (item) {
            const listaItem = document.createElement("li");
            listaItem.textContent = item;
            listaItems.appendChild(listaItem);
            console.log("Lista: " + listaItem);
        }
    })
    parrafoDos.remove();
})