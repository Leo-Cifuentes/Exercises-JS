document.addEventListener("DOMContentLoaded", function () {
    var divExterno = document.querySelector("#externo");
    var divMedio = document.querySelector("#medio");
    var divInterno = document.querySelector("#interno");
    var listaDelegacion = document.querySelector("#lista-delegacion");
    divExterno.addEventListener("click", function () {
        console.log("Click en la caja EXTERNA");
    });
    divMedio.addEventListener("click", function (event) {
        console.log("Click en la caja MEDIO");
        event.stopPropagation();
    });
    divInterno.addEventListener("click", function () {
        console.log("Click en la caja INTERNO");
    });
    listaDelegacion.addEventListener("click", function (event) {
        if (event.target && event.target instanceof Element && event.target.classList.contains("item")) {
            console.log("Hiciste click en :".concat(event.target.textContent));
        }
    });
});
