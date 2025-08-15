const sumar = (a:number, b:number):number => a + b;
const esPar = (numero:number):boolean => numero % 2 === 0;

const reproductor : {cancionActual:string; playlist:string[];mostrarCancion:()=>string;siguienteCancion?:()=>string} = {
    cancionActual : "Thunderstruck - AC/DC",
    playlist : ["The Trooper - Iron Maiden","November Rain - Guns and Roses", "Still Loving You - Scorpions"],
    mostrarCancion : function():string{
        return `Reproduciendo: ${this.cancionActual}`
    },
    //siguienteCancion : ():string => `Siguiente: ${this.cancionActual}`
}

console.log(reproductor);
console.log(reproductor.mostrarCancion());
//console.log(reproductor.siguienteCancion());
// la arrow function captura el valor global de .this

const frases:string[] = ["Una frase","Dos frases","Esta es otra frase", "Esta tambien es otra frase", "Una ultima frase"]
const frasesLargasMayuscula:string[] = frases.filter((frase) => frase.length > 10) .map((frase) => frase.toUpperCase());

console.log(frasesLargasMayuscula);