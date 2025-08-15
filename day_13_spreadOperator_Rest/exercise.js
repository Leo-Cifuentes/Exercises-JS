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
var marcasDeportivas1 = ["Nike", "Adidas"];
var marcasDeportivas2 = ["Puma", "Reebok"];
var todasLasMarcas = __spreadArray(__spreadArray([], marcasDeportivas1, true), marcasDeportivas2, true);
var copiaMarcas = __spreadArray([], todasLasMarcas, true);
copiaMarcas.push("Kappa");
console.log("".concat(todasLasMarcas, "\n-------------------------\n").concat(copiaMarcas));
var datosPersonales = {
    nombre: "Daniel Ruíz",
    edad: 30
};
var datosProfesionales = {
    profesion: "Desarrollador",
    empresa: "Quick"
};
var perfilCompleto = __assign(__assign({}, datosPersonales), datosProfesionales);
var perfilActualizado = __assign(__assign({}, perfilCompleto), { empresa: "Modyo" });
console.log(perfilCompleto);
console.log(perfilActualizado);
function mostrarGanador(primerLugar, segundoLugar) {
    var restoDeCompetidores = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        restoDeCompetidores[_i - 2] = arguments[_i];
    }
    return "El ganador es: ".concat(primerLugar, ".\nEl segundo lugar es: ").concat(segundoLugar, ".\nEl resto de competidores son: ").concat(restoDeCompetidores.join(", "), ".");
}
var participantes = ["Nini Rodríguez", "Diana Rodríguez", "Daniel Ruíz", "Kaiser Emilio", "Nala María", "Leonardo Cifuentes"];
console.log(mostrarGanador.apply(void 0, __spreadArray([participantes[0], participantes[1]], participantes.slice(2), false)));
