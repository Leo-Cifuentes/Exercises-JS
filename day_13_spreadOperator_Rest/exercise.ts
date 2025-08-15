const marcasDeportivas1:string[] = ["Nike", "Adidas"]
const marcasDeportivas2:string[] = ["Puma", "Reebok"]
const todasLasMarcas:string[] = [...marcasDeportivas1, ...marcasDeportivas2]
const copiaMarcas= [...todasLasMarcas];
copiaMarcas.push("Kappa");

console.log(`${todasLasMarcas}
-------------------------
${copiaMarcas}`);

type Datos = {nombre?:string; edad?:number; profesion?:string, empresa?:string}

const datosPersonales:Datos = {
    nombre:"Daniel Ruíz",
    edad: 30
}
const datosProfesionales:Datos ={
    profesion:"Desarrollador",
    empresa:"Quick"
}
const perfilCompleto:Datos = {...datosPersonales,...datosProfesionales}
const perfilActualizado:Datos ={
    ...perfilCompleto,
    empresa: "Modyo"
}

console.log(perfilCompleto)
console.log(perfilActualizado);

function mostrarGanador (primerLugar:string, segundoLugar:string, ...restoDeCompetidores:string[]):string{
    return `El ganador es: ${primerLugar}.
El segundo lugar es: ${segundoLugar}.
El resto de competidores son: ${restoDeCompetidores.join(", ")}.`;
}

const participantes:string[]=["Nini Rodríguez","Diana Rodríguez", "Daniel Ruíz", "Kaiser Emilio", "Nala María", "Leonardo Cifuentes"]
console.log(mostrarGanador(participantes[0], participantes[1], ...participantes.slice(2)));