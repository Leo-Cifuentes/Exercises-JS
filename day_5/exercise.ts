const coche : {marca:string, modelo?:string, anio:number, estaVendido:boolean, coloresDisponibles:string[], precio?:number} = {
marca: "Toyota",
modelo: "Corolla",
anio: 2022,
estaVendido: false,
coloresDisponibles: ["Rojo", "Azul","Blanco","Negro"]     
}
console.log(coche, "\n-----------------------------------------------------------");
console.log(`La marcha del coche es: ${coche.marca}.`);
console.log(`El modelo es: ${coche["anio"]}.`);
console.log(`El primer color es: ${coche.coloresDisponibles[0]}.\n-----------------------------------------------------------`);

coche.estaVendido = true;
coche["precio"] = 25000;
delete coche.modelo;
console.log(coche)