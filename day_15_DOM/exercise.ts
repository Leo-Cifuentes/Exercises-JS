document.addEventListener('DOMContentLoaded', function() {

const tituloPrincipal = document.getElementById("tituloPrincipal") as HTMLElement;
console.log(tituloPrincipal);

const primerParrafo = document.querySelector(".parrafo-destacado") as HTMLElement;
console.log(primerParrafo);

const parrafoAnidado = document.querySelector(".contenedor p")as HTMLElement;
console.log(parrafoAnidado);

const nulo = document.querySelector("#unId") as HTMLElement | null;
console.log(nulo);

});

// null hace referencia a que hay parametro nulo o que no existe en el HTML.