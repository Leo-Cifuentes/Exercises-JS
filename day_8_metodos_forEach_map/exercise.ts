const arrayNames:string[] = ["Nita","Kaiser","Leonardo","Diana","Nala","Daniel"];

arrayNames.forEach((name) => console.log(`Bienvenido, ${name}.`))

const arrayNumbers:number[] = [10, 20, 30, 40, 50];

let resultados = arrayNumbers.map((x) => x / 10);

console.log(arrayNumbers);
console.log(resultados);

const products : {name:string; price:number}[]=[
    {name:"laptop", price: 1200},
    {name:"Mouse", price: 25},
    {name:"Teclado", price: 80},
]

const productName = products.map(({name}) => (name));

console.log(productName);