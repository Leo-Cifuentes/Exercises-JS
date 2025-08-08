var coche = {
    marca: "Toyota",
    modelo: "Corolla",
    anio: 2022,
    estaVendido: false,
    coloresDisponibles: ["Rojo", "Azul", "Blanco", "Negro"]
};
console.log(coche, "\n-----------------------------------------------------------");
console.log("La marcha del coche es: ".concat(coche.marca, "."));
console.log("El modelo es: ".concat(coche["anio"], "."));
console.log("El primer color es: ".concat(coche.coloresDisponibles[0], ".\n-----------------------------------------------------------"));
coche.estaVendido = true;
coche["precio"] = 25000;
delete coche.modelo;
console.log(coche);
