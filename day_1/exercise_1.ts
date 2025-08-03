function convertirUnidades(valor:number,unidadOrigen:string,unidadDestino:string){
    const kmAmillas:number = 0.621371; // 1 km = 0.621371 millas
    const kgAlibras:number = 2.20462; // 1 kg = 2.20462 libras
    if(unidadOrigen === "km" && unidadDestino === "millas"){
        const resultado:number = valor * kmAmillas; // Convertir km a millas
        return `${valor} km equivalen a ${resultado.toFixed(2)} millas`;
    } else if(unidadOrigen === "millas" && unidadDestino === "km"){
        const resultado:number = valor / kmAmillas; // Convertir millas a km
        return `${valor} millas equivalen a ${resultado.toFixed(2)} Kilometros}`;
    } else if(unidadOrigen === "kg" && unidadDestino === "libras"){
        const resultado:number = valor * kgAlibras; // Convertir kg a libras
        return `${valor} kilogramos equivalen a ${resultado.toFixed(2)} libras}`;
    }else if(unidadOrigen === "libras" && unidadDestino === "kg"){
        const resultado:number = valor / kgAlibras; // Convertir libras a kg
        return `${valor} libras equivalen a ${resultado.toFixed(2)} Kilogramos`;
    }
    return `La conversion de ${unidadOrigen} a ${unidadDestino} no esta soportada.`;
    
}

const conversion1 = convertirUnidades(10, "libras", "kg");
console.log(conversion1);
console.log("--------------------------------------------------");
const conversion2 = convertirUnidades(60, "millas", "km");
console.log(conversion2);
console.log("--------------------------------------------------");
const conversion3 = convertirUnidades(100, "litros", "gramos");
console.log(conversion3);