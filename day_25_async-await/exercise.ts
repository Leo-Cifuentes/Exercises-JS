interface User {    
    id: number;
    name: string;
    username: string;
    email:string;
    address:string;
    phone:number;
    website:string;
    company:string;
}

const promesaSimple = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("¡Promesa cumplida!");
    }, 2000);
});

const ejecutarPromesa = async() => {
    const respuesta = await promesaSimple;
    console.log(respuesta);
}

ejecutarPromesa();

const obternerUsuarios = async() => {
    try{
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
    const datos: User[] = await respuesta.json();
    if(datos && datos.length >0){
        const primerUsuario = datos[0]; 
        console.log(`Nombre: ${primerUsuario.name}, correo: ${primerUsuario.email}`);
    }
    }
    catch (error){
        console.log("Error", error);
    }
}

obternerUsuarios();