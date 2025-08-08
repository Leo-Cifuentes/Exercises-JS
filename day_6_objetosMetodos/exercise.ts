/*const perfilUsuario : {nombre:string; edad:number; email:string; estaActivo:boolean; describir: ()=>string; desactivar: ()=>string} ={
    nombre : "Juan Perez",
    edad : 30,
    email : "correo@dominio.com",
    estaActivo : true,
    describir: function():string {
        return `${perfilUsuario.nombre} tiene ${perfilUsuario.edad} años.`
    },
    desactivar: function() :string {
        perfilUsuario.estaActivo = false;
        return `El usuario ${perfilUsuario.nombre} ha sido desactivado.`;
    }
}

console.log(perfilUsuario.describir());
perfilUsuario.desactivar();
console.log(perfilUsuario);*/

const usuarioAdmin : {nombre:string; edad:number; email:string; estaActivo:boolean; describir: ()=>string; desactivar: ()=>string} ={
    nombre : "Ricardo Gomez",
    edad : 45,
    email : "correo@dominio.com",
    estaActivo : true,
    describir: function():string {
        return `${this.nombre} tiene ${this.edad} años.`
    },
    desactivar: function() :string {
        this.estaActivo = false;
        return `El usuario ${this.nombre} ha sido desactivado.`;
    }
}
//Al utilizar 'this' se asegura que el metodo va a funcionar sin importar si se cambia el nombre de la variable del objeto.

const perfilUsuario : {nombre:string; edad:number; email:string; estaActivo:boolean; describir: ()=>string; desactivar: ()=>string; actualizarEdad: (nuevaEdad:number)=>string} ={
    nombre : "Juan Perez",
    edad : 30,
    email : "correo@dominio.com",
    estaActivo : true,
    describir: function(){
        return `${this.nombre} tiene ${this.edad} años.`
    },
    desactivar: function(){
        this.estaActivo = false;
        return `El usuario ${this.nombre} ha sido desactivado.`;
    },
    actualizarEdad: function(nuevaEdad){           
        this.edad = nuevaEdad;
        return `La edad de ${this.nombre} ha sido actualizada a ${this.edad}`
    }
}

console.log(perfilUsuario.describir());
console.log(perfilUsuario);
console.log(perfilUsuario.desactivar());
console.log(perfilUsuario);
console.log(perfilUsuario.actualizarEdad(34));
console.log(perfilUsuario);