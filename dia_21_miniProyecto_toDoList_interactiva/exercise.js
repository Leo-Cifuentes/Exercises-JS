document.addEventListener("DOMContentLoaded", function () {
    var formulario = document.querySelector("#nueva-tarea-form");
    var nuevaTareaInput = document.querySelector("#nueva-tarea-input");
    var listaDeTareas = document.querySelector("#lista-tareas");
    formulario.addEventListener("submit", function (event) {
        event.preventDefault();
        var valorTextoInput = nuevaTareaInput.value.trim();
        if (valorTextoInput.length < 1) {
            return;
        }
        var elementoLista = document.createElement("li");
        elementoLista.innerHTML = "<span>".concat(valorTextoInput, " <button class=\"delete-btn\">Eliminar</button>");
        listaDeTareas.appendChild(elementoLista);
        nuevaTareaInput.value = "";
    });
    listaDeTareas.addEventListener("click", function (event) {
        var _a, _b;
        if (event.target instanceof HTMLElement && event.target.matches("span")) {
            (_a = event.target.parentElement) === null || _a === void 0 ? void 0 : _a.classList.toggle("completada");
        }
        if (event.target instanceof HTMLElement && event.target.matches(".delete-btn")) {
            (_b = event.target.parentElement) === null || _b === void 0 ? void 0 : _b.remove();
        }
    });
});
