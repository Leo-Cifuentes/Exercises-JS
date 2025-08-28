document.addEventListener("DOMContentLoaded", function() {

    const formulario = document.querySelector("#nueva-tarea-form") as HTMLFormElement;
    const nuevaTareaInput = document.querySelector("#nueva-tarea-input") as HTMLInputElement;
    const listaDeTareas = document.querySelector("#lista-tareas") as HTMLUListElement;
 // --- ESCUCHADOR PARA AÑADIR TAREAS ---
    formulario.addEventListener("submit", function(event){
        event.preventDefault();
        const valorTextoInput = nuevaTareaInput.value.trim();
        if(valorTextoInput.length < 1){            
            return;
        }
// --- CREAR ELEMENTO LI, SPAN Y AÑADIRLO A LA LISTA UL ---
        const elementoLista = document.createElement("li");
        elementoLista.innerHTML = `<span>${valorTextoInput} <button class="delete-btn">Eliminar</button>`;
        listaDeTareas.appendChild(elementoLista);
        nuevaTareaInput.value = "";

    })
// --- SE CREA EL ESCUCHADOR PARA LA LISTA ---
    listaDeTareas.addEventListener("click", function(event){
    // --- MARCAR TAREA COMO COMPLETADA ---
        if (event.target instanceof HTMLElement && event.target.matches("span")){
            event.target.parentElement?.classList.toggle("completada");                
        }
    // --- ELIMINAR LA TAREA ---          
        if (event.target instanceof HTMLElement && event.target.matches(".delete-btn")){
            event.target.parentElement?.remove();
        }
    })
    
})

/*document.addEventListener("DOMContentLoaded", function() {

    const formulario = document.querySelector("#nueva-tarea-form") as HTMLFormElement;
    const nuevaTareaInput = document.querySelector("#nueva-tarea-input") as HTMLInputElement;
    const listaDeTareas = document.querySelector("#lista-tareas") as HTMLUListElement;

    // --- ESCUCHADOR PARA AÑADIR TAREAS ---
    formulario.addEventListener("submit", function(event){
        event.preventDefault();
        const valorTextoInput = nuevaTareaInput.value.trim();
        if(valorTextoInput === ""){      
            return;
        }
        
        const elementoLista = document.createElement("li");
        // Creas el span y el botón por separado para más control
        const textoSpan = document.createElement("span");
        textoSpan.textContent = valorTextoInput;
        
        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.className = "delete-btn"; // .className es una forma directa
        
        elementoLista.appendChild(textoSpan);
        elementoLista.appendChild(botonEliminar);
        listaDeTareas.appendChild(elementoLista);
        
        nuevaTareaInput.value = "";
    });
    
    // --- UN ÚNICO ESCUCHADOR PARA TODA LA LISTA (DELEGACIÓN) ---
    listaDeTareas.addEventListener("click", function(event){
        const target = event.target as HTMLElement; // Hacemos un cast para facilidad

        // Marcar como completada
        if (target.tagName === "SPAN"){
            target.parentElement?.classList.toggle("completada");          
        }
        
        // Eliminar tarea
        if (target.classList.contains("delete-btn")){
            target.parentElement?.remove();
        }
    });
    
});*/