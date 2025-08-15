const nombre:string = "Nini";
const edad:number = 33;
const pais:string = "Colombia"
console.log(`Nombre: ${nombre}
Edad: ${edad}
País: ${pais}`);

type Pelicula = {titulo:string; genero:string; anio:number, director:{nombreDirector:string; nacionalidad:string}} 
const pelicula : Pelicula = {
    titulo:"Pulp Fiction",
    genero:"Comedia Negra",
    anio:1994,
    director : {
        nombreDirector:"Quentin Tarantino",
        nacionalidad:"Estadounidense"
    }
}
const {titulo, anio} = pelicula;
const {genero: categoria} = pelicula;
let {director:{nombreDirector}} = pelicula

console.log(titulo);
console.log(anio);
console.log(categoria)
console.log(nombreDirector);

const frutas : string[] = ["manzana","naranja","pera","mandarina","ciruela", "guanabana"]
const [fruta1, fruta2, ,fruta4, ...otrasFrutas] = frutas;

console.log(fruta1);
console.log(fruta2);
console.log(fruta4);
console.log(otrasFrutas);