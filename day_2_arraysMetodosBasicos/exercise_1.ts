const playlist:string [] = ["Así vivo yo - Orquesta Colon","Love Bites -  Deff Lepard", "Gaga - JBalvin"]; 

console.log(`Lista original: ${playlist}.\n________________________________________________________`);
playlist.push("En Alta - J Balvin");
console.log(playlist, "\n________________________________________________________");
playlist.unshift("Abicú - Roberto Angleró");
console.log(playlist, "\n________________________________________________________");
playlist.pop();
console.log(playlist, "\n________________________________________________________");
playlist.shift();
console.log(playlist, "\n________________________________________________________");

const listaDeCompras:string [] = ["Leche","Pan", "Carne", "Huevos", "Queso"];
const articuloPan:number = listaDeCompras.indexOf("Pan");
console.log(`Pan está en la posición ${articuloPan} de la lista de compras.\n________________________________________________________`);
const articulosComprados: string [] = listaDeCompras.slice(1, 3);
console.log(`Artículos comprados: ${articulosComprados}.\n________________________________________________________`);
console.log(`Lista de compras original: ${listaDeCompras}.`);