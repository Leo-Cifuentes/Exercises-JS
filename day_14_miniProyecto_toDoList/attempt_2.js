var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var listaDeTareasInicial = [
    { id: 1, descripcion: "Aprender .map", completada: true },
    { id: 2, descripcion: "Aprender .filter", completada: true },
    { id: 3, descripcion: "Aprender .reduce", completada: false },
    { id: 4, descripcion: "Aprender Angular", completada: false }
];
var lista = listaDeTareasInicial;
// Añadir tarea nueva a la lista------------------------------------------
function añadirTarea(lista, descripcionNuevaTarea) {
    var nuevaTarea = {
        id: Date.now(),
        descripcion: descripcionNuevaTarea,
        completada: false
    };
    return __spreadArray(__spreadArray([], lista, true), [nuevaTarea], false);
}
var descripcionTarea1 = "Aprender React";
var lista2 = añadirTarea(lista, descripcionTarea1);
console.log(lista2);
// Marcar como completada una tarea en la lista---------------------------
function completarTarea(lista, id) {
    var tareaCompleta = lista.map(function (tarea) {
        return tarea.id === id
            ? __assign(__assign({}, tarea), { completada: true }) : tarea;
    });
    return tareaCompleta;
}
var lista3 = completarTarea(lista2, 4);
console.log(lista3);
// Eliminar una tarea de la lista ---------------------------------------
function eliminarTarea(lista, id) {
    var tareaEliminada = lista.filter(function (tarea) {
        return tarea.id !== id;
    });
    return tareaEliminada;
}
var lista4 = eliminarTarea(lista3, 3);
console.log(lista4);
// Mostrar la lista de pendientes---------------------------------------
function listarPendientes(lista) {
    var noCompletadas = lista.filter(function (tarea) {
        return tarea.completada === false;
    });
    return noCompletadas;
}
console.log(listarPendientes(lista4));
