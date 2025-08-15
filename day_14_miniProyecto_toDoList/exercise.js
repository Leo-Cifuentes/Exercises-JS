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
    { id: 3, descripcion: "Aprender .reduce", completada: false }
];
var lista = __spreadArray([], listaDeTareasInicial, true);
function añadirTarea(lista, descripcionNuevaTarea) {
    var nuevaTarea = {
        id: Date.now() + Math.floor(Math.random() * 10),
        descripcion: descripcionNuevaTarea,
        completada: false
    };
    return __spreadArray(__spreadArray([], lista, true), [nuevaTarea], false);
}
console.log(añadirTarea(lista, "Aprender arrowFunction"));
function completarTarea(lista, id) {
    return lista.map(function (tarea) {
        return tarea.id === id
            ? __assign(__assign({}, tarea), { completada: true }) : tarea;
    });
}
console.log(completarTarea(lista, 3));
function eliminarTarea(lista, id) {
    return lista.filter(function (tarea) {
        return tarea.id !== id;
    });
}
console.log(eliminarTarea(lista, 1));
function listaPendientes(lista) {
    return lista.filter(function (completa) { return completa.completada !== true; });
}
console.log(listaPendientes(lista));
