const buscarRecursoInexistente = async () => {
    try{
        let response = await fetch("https://jsonplaceholder.typicode.com/users/9999");
        console.log(response.ok, response.status);
    }catch{

    }
}
//buscarRecursoInexistente();

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
async function obtenerUsuarioPorId(id: number) {
    try{
        let respuesta = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        if (!respuesta.ok){
            throw new Error(`Error al obtener el usuario. Status: ${respuesta.status}`);
        }
        let datos:User = await respuesta.json();        
        console.log(`Usuario encontrado: ${datos.name}`);        
    }catch (error){
        console.log(error);
    }
}
obtenerUsuarioPorId(1);
obtenerUsuarioPorId(15);