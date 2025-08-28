function simularLogin(){
    return new Promise((resolve) => {
        setTimeout(function(){
            resolve("Usuario autenticado exitosamente");
        },2000);
    });
}

simularLogin().then(function(mensaje){
    console.log(mensaje);
})

function verificarServidor(){
    return new Promise((reject) => {
        setTimeout(function(){
            reject("El servidor no responde");            
        }, 1500);
    })
}

verificarServidor().catch(function(mensaje){
    console.log(mensaje);
});

const promesaIncial = Promise.resolve(10);
promesaIncial.then((num) => {
    const multiplica = num * 2;
    console.log(`Paso 1: ${multiplica}`);
    return multiplica
}).then((multiplica) => {
    const suma = multiplica + 5;
    console.log(`Paso 2: ${suma}`)
    return suma
}).then((suma) => {
    console.log(suma);
})