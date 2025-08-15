var nombre = "Nini";
var edad = 33;
var pais = "Colombia";
console.log("Nombre: ".concat(nombre, "\nEdad: ").concat(edad, "\nPa\u00EDs: ").concat(pais));
var pelicula = {
    titulo: "Pulp Fiction",
    genero: "Comedia Negra",
    anio: 1994,
    director: {
        nombreDirector: "Quentin Tarantino",
        nacionalidad: "Estadounidense"
    }
};
var titulo = pelicula.titulo, anio = pelicula.anio;
var categoria = pelicula.genero;
var nombreDirector = pelicula.director.nombreDirector;
console.log(titulo);
console.log(anio);
console.log(categoria);
console.log(nombreDirector);
var frutas = ["manzana", "naranja", "pera", "mandarina", "ciruela", "guanabana"];
var fruta1 = frutas[0], fruta2 = frutas[1], fruta4 = frutas[3], otrasFrutas = frutas.slice(4);
console.log(fruta1);
console.log(fruta2);
console.log(fruta4);
console.log(otrasFrutas);
