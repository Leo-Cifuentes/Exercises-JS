var arrayNames = ["Nita", "Kaiser", "Leonardo", "Diana", "Nala", "Daniel"];
arrayNames.forEach(function (name) { return console.log("Bienvenido, ".concat(name, ".")); });
var arrayNumbers = [10, 20, 30, 40, 50];
var resultados = arrayNumbers.map(function (x) { return x / 10; });
console.log(arrayNumbers);
console.log(resultados);
var products = [
    { name: "laptop", price: 1200 },
    { name: "Mouse", price: 25 },
    { name: "Teclado", price: 80 },
];
var productName = products.map(function (_a) {
    var name = _a.name;
    return (name);
});
console.log(productName);
