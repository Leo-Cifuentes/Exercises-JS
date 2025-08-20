document.addEventListener('DOMContentLoaded', function () {
    var nuevoBoton = document.createElement("button");
    var divContenedor = document.querySelector(".contenedor");
    var listaItems = document.querySelector("#lista-dinamica");
    var parrafoDos = document.querySelectorAll(".parrafo-destacado")[1];
    nuevoBoton.textContent = "Haz clic aquí";
    console.log(nuevoBoton);
    divContenedor.appendChild(nuevoBoton);
    var items = ["Home", "About", "Contact"];
    items.forEach(function (item) {
        if (item) {
            var listaItem = document.createElement("li");
            listaItem.textContent = item;
            listaItems.appendChild(listaItem);
            console.log("Lista: " + listaItem);
        }
    });
    parrafoDos.remove();
});
