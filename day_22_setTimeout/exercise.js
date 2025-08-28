console.log("Yo me muestro primero");
setTimeout(function () {
    console.log("Yo me muestro después de 2 segundos");
}, 2000); // 2000 milisegundos = 2 segundos
console.log("Yo me muestro segundo, aunque estoy al final");
// los mensajes se muestran según el orden en el que estan escritos, pero con setTimeout se plantea un tiempo en el cual la funcion se debe ejecutar.
function procesarPedido(pedido, callbak) {
    console.log("Procesando el pedido de ".concat(pedido));
    setTimeout(function () {
        console.log("\u00A1Pedido listo!");
        callbak();
    }, 3000);
}
procesarPedido("Pizza", function () {
    console.log("El repartidor ha salido con tu pedido.");
});
setTimeout(function () {
    console.log("Buscando usuario...");
    // El segundo paso EMPIEZA cuando el primero TERMINA
    setTimeout(function () {
        console.log("Validando acceso...");
        // El tercer paso EMPIEZA cuando el segundo TERMINA
        setTimeout(function () {
            console.log("Acceso concedido");
        }, 1000);
    }, 1500);
}, 1000);
