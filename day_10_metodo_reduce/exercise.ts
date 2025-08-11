const someNumbers:number[] = [1,4,9,12,15,20];
const initial:number= 0;
const sum = someNumbers.reduce((accumulator:number, current:number) => accumulator + current, initial);
console.log(sum);


const nestedArray:number[][] = [[1,2],[3,4],[5,6]];
const emptyArray:number[] = [];
const flatArray = nestedArray.reduce((accumulator:number[],current:number[]) => accumulator.concat(current), emptyArray);
console.log(flatArray);


const newBooks : {title:string;category:string}[] = [
    {title:"Libro A", category:"Fiction"},
    {title:"Libro B", category:"Science"},
    {title:"Libro C", category:"Fiction"},
    {title:"Libro D", category:"History"}
]
// El tipo del acumulador es un objeto donde cada clave es un string
// y cada valor es un array de strings.
type groupBooks = Record<string, string[]>;

const categoryBooks = newBooks.reduce((accumulator: groupBooks, currentBook) => {
    const category = currentBook.category;

    // Si la categoría (ej: 'Ficción') NO existe en el acumulador...
    if (!accumulator[category]) {
        // ...la creamos como un array vacío.
        accumulator[category] = [];
    }

    // Ya sea que existiera o la acabemos de crear, añadimos el título.
    accumulator[category].push(currentBook.title);

    // ¡Siempre devolvemos el acumulador para la siguiente iteración!
    return accumulator;

}, {} as groupBooks); // Empezamos con un objeto vacío

console.log(categoryBooks);