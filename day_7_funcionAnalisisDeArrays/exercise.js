function analizarArray(numeros) {
    if (!numeros || numeros.length === 0)
        return null;
    else {
        var suma = 0;
        for (var i = 0; i < numeros.length; i++) {
            suma += numeros[i];
        }
        var promedio = suma / numeros.length;
        var min = Math.min.apply(Math, numeros);
        var max = Math.max.apply(Math, numeros);
        var longitud = numeros.length;
        return { promedio: promedio, min: min, max: max, longitud: longitud };
    }
}
var numeros = [15, 5, 20, 10, 34];
var analisis = analizarArray(numeros);
console.log(analisis);
