const numbersToFifty = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

const unevenNumbers = numbersToFifty.filter((num) => num % 2 !== 0);
console.log(unevenNumbers);

const students : {name:string, note:number}[] = [
    {name:"Carlos", note:5.0},
    {name:"Ana", note:9.5},
    {name:"Luis", note: 7.8},
    {name:"Marta", note:8.9}
];

const approvedStudents = students.filter((noteApproved) => noteApproved.note >= 7);
console.log(approvedStudents);

const books : {id:string, title:string}[] = [
    {id:"A1", title:"Cien Años de Soledad"},
    {id:"B2", title:"EL Señor de los Anillos"},
    {id:"C3", title:"1984"}
]

const findedBook = books.find((book) => book.id === "B2");
console.log(findedBook);

//El metodo .filter() retorna un array con todos los elementos que cumplan la condición establecida.
//El metodo .find() retorna el primer elemento que cumpla con la condicion establecida.