document.addEventListener("DOMContentLoaded", function() {

    const divExterno = document.querySelector("#externo") as HTMLElement;
    const divMedio = document.querySelector("#medio") as HTMLElement;
    const divInterno = document.querySelector("#interno") as HTMLElement;
    const listaDelegacion = document.querySelector("#lista-delegacion") as HTMLElement;

    divExterno.addEventListener("click", function() {
        console.log("Click en la caja EXTERNA");
    })    
    divMedio.addEventListener("click", function(event) {
        console.log("Click en la caja MEDIO"); 
        event.stopPropagation();
    })
    divInterno.addEventListener("click", function() {
        console.log("Click en la caja INTERNO");
    })
    listaDelegacion.addEventListener("click", function(event){
        if (event.target && event.target instanceof Element && event.target.classList.contains("item")){
            console.log(`Hiciste click en :${event.target.textContent}`);
        }
    })

})