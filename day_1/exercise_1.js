function convertirUnidades(valor, unidadOrigen, unidadDestino) {
    var kmAmillas = 0.621371; // 1 km = 0.621371 millas
    var kgAlibras = 2.20462; // 1 kg = 2.20462 libras
    if (unidadOrigen === "km" && unidadDestino === "millas") {
        var resultado = valor * kmAmillas; // Convertir km a millas
        return "".concat(valor, " km equivalen a ").concat(resultado.toFixed(2), " millas");
    }
    else if (unidadOrigen === "millas" && unidadDestino === "km") {
        var resultado = valor / kmAmillas; // Convertir millas a km
        return "".concat(valor, " millas equivalen a ").concat(resultado.toFixed(2), " Kilometros}");
    }
    else if (unidadOrigen === "kg" && unidadDestino === "libras") {
        var resultado = valor * kgAlibras; // Convertir kg a libras
        return "".concat(valor, " kilogramos equivalen a ").concat(resultado.toFixed(2), " libras}");
    }
    else if (unidadOrigen === "libras" && unidadDestino === "kg") {
        var resultado = valor / kgAlibras; // Convertir libras a kg
        return "".concat(valor, " libras equivalen a ").concat(resultado.toFixed(2), " Kilogramos");
    }
    return "La conversion de ".concat(unidadOrigen, " a ").concat(unidadDestino, " no esta soportada.");
}
var conversion1 = convertirUnidades(10, "libras", "kg");
console.log(conversion1);
console.log("--------------------------------------------------");
var conversion2 = convertirUnidades(60, "millas", "km");
console.log(conversion2);
console.log("--------------------------------------------------");
var conversion3 = convertirUnidades(100, "litros", "gramos");
console.log(conversion3);
