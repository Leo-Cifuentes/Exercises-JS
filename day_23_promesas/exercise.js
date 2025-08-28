function simularLogin() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve("Usuario autenticado exitosamente");
        }, 2000);
    });
}
simularLogin().then(function (mensaje) {
    console.log(mensaje);
});
function verificarServidor() {
    return new Promise(function (reject) {
        setTimeout(function () {
            reject("El servidor no responde");
        }, 1500);
    });
}
verificarServidor().catch(function (mensaje) {
    console.log(mensaje);
});
var promesaIncial = Promise.resolve(10);
promesaIncial.then(function (num) {
    var multiplica = num * 2;
    console.log("Paso 1: ".concat(multiplica));
    return multiplica;
}).then(function (multiplica) {
    var suma = multiplica + 5;
    console.log("Paso 2: ".concat(suma));
    return suma;
}).then(function (suma) {
    console.log(suma);
});
