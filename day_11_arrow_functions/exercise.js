var sumar = function (a, b) { return a + b; };
var esPar = function (numero) { return numero % 2 === 0; };
var reproductor = {
    cancionActual: "Thunderstruck - AC/DC",
    playlist: ["The Trooper - Iron Maiden", "November Rain - Guns and Roses", "Still Loving You - Scorpions"],
    mostrarCancion: function () {
        return "Reproduciendo: ".concat(this.cancionActual);
    },
    //siguienteCancion : ():string => `Siguiente: ${this.cancionActual}`
};
console.log(reproductor);
console.log(reproductor.mostrarCancion());
//console.log(reproductor.siguienteCancion());
// la arrow function captura el valor global de .this
var frases = ["Una frase", "Dos frases", "Esta es otra frase", "Esta tambien es otra frase", "Una ultima frase"];
var frasesLargasMayuscula = frases.filter(function (frase) { return frase.length > 10; }).map(function (frase) { return frase.toUpperCase(); });
console.log(frasesLargasMayuscula);
