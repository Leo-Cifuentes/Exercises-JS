var someNumbers = [1, 4, 9, 12, 15, 20];
var initial = 0;
var sum = someNumbers.reduce(function (accumulator, current) { return accumulator + current; }, initial);
console.log(sum);
var nestedArray = [[1, 2], [3, 4], [5, 6]];
var emptyArray = [];
var flatArray = nestedArray.reduce(function (accumulator, current) { return accumulator.concat(current); }, emptyArray);
console.log(flatArray);
var newBooks = [
    { title: "Libro A", category: "Fiction" },
    { title: "Libro B", category: "Science" },
    { title: "Libro C", category: "Fiction" },
    { title: "Libro D", category: "History" }
];
var categoryBooks = newBooks.reduce(function (accumulator, currentBook) {
    var category = currentBook.category;
    // Si la categoría (ej: 'Ficción') NO existe en el acumulador...
    if (!accumulator[category]) {
        // ...la creamos como un array vacío.
        accumulator[category] = [];
    }
    // Ya sea que existiera o la acabemos de crear, añadimos el título.
    accumulator[category].push(currentBook.title);
    // ¡Siempre devolvemos el acumulador para la siguiente iteración!
    return accumulator;
}, {}); // Empezamos con un objeto vacío
console.log(categoryBooks);
