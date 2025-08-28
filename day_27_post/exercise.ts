type Post = {id?:number, title:string, body:string, userId:number}

const nuevoPost : Post = {
    title: "Un Título Genial",
    body: "Este es el contenido de mi post.",
    userId: 10
};

async function publicarPost(datosPost:Post) {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            //JSON.stringify hace que el objeto o los datos del objeto pasen a ser una cadena de texto JSON.
            body: JSON.stringify(datosPost)
        });
        if (!response.ok){
            throw new Error(`Error al conectar con la API. Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(`Post creado exitosamente con ID: ${data.id}`);
    }catch(error) {
        console.log(error);
    }    
}

publicarPost(nuevoPost);
