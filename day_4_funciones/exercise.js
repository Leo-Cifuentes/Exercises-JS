function calcularPromedio(valores) {
    var suma = 0;
    for (var i = 0; i < valores.length; i++) {
        suma += valores[i];
    }
    return suma / valores.length;
}
var valores = [10, 20, 30, 40, 50];
var promedio1 = calcularPromedio(valores);
console.log("El promedio de los valores es: ".concat(promedio1));
function palabraMasLarga(palabras) {
    var palabrasLargas = palabras[0];
    for (var i = 0; i < palabras.length; i++) {
        if (palabras[i].length > palabrasLargas.length) {
            palabrasLargas = palabras[i];
        }
    }
    return palabrasLargas;
}
var palabras = ["manzana", "banana", "cereza", "mandarina"];
var palabraLarga = palabraMasLarga(palabras);
console.log("La palabra m\u00E1s larga es: ".concat(palabraLarga));
var variableGlobal = "Soy accesible en todas partes";
function probarScope() {
    var variableLocal = "Solo soy accesible dentro de la función";
    console.log(variableGlobal); // Acceso a la variable global
    console.log(variableLocal); // Acceso a la variable local
}
probarScope();
console.log(variableGlobal); // Acceso a la variable global
//console.log(variableLocal); Error: variableLocal no está definida fuera de la función
