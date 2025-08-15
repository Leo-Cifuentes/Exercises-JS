type Tarea = {id:number, descripcion: string, completada: boolean};
type Lista = Tarea [];

const listaDeTareasInicial = [
    { id: 1, descripcion: "Aprender .map", completada: true },
    { id: 2, descripcion: "Aprender .filter", completada: true },
    { id: 3, descripcion: "Aprender .reduce", completada: false },
    { id: 4, descripcion: "Aprender Angular", completada: false}
];
const lista : Lista = listaDeTareasInicial;
// Añadir tarea nueva a la lista------------------------------------------
function añadirTarea(lista:Lista, descripcionNuevaTarea:string):Lista{
    const nuevaTarea = {
        id: Date.now(),
        descripcion : descripcionNuevaTarea,
        completada : false
    };
    return [...lista, nuevaTarea];
}
const descripcionTarea1 : string = "Aprender React";
const lista2 = añadirTarea(lista, descripcionTarea1);
console.log(lista2);
// Marcar como completada una tarea en la lista---------------------------
function completarTarea(lista:Lista, id:number):Lista{
    const tareaCompleta = lista.map((tarea) => 
        tarea.id === id
        ? {...tarea, completada : true}
        : tarea
    );
    return tareaCompleta
}
const lista3 = completarTarea(lista2, 4)
console.log(lista3);
// Eliminar una tarea de la lista ---------------------------------------
function eliminarTarea(lista:Lista, id:number):Lista{
    const tareaEliminada = lista.filter((tarea) =>
        tarea.id !== id
    );
    return tareaEliminada
}
const lista4 = eliminarTarea(lista3, 3);
console.log(lista4);
// Mostrar la lista de pendientes---------------------------------------
function listarPendientes(lista:Lista):Lista{
    const noCompletadas = lista.filter((tarea) =>
        tarea.completada === false
    );
    return noCompletadas
}
console.log(listarPendientes(lista4));