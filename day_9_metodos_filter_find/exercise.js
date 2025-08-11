var numbersToFifty = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var unevenNumbers = numbersToFifty.filter(function (num) { return num % 2 !== 0; });
console.log(unevenNumbers);
var students = [
    { name: "Carlos", note: 5.0 },
    { name: "Ana", note: 9.5 },
    { name: "Luis", note: 7.8 },
    { name: "Marta", note: 8.9 }
];
var approvedStudents = students.filter(function (noteApproved) { return noteApproved.note >= 7; });
console.log(approvedStudents);
var books = [
    { id: "A1", title: "Cien Años de Soledad" },
    { id: "B2", title: "EL Señor de los Anillos" },
    { id: "C3", title: "1984" }
];
var findedBook = books.find(function (book) { return book.id === "B2"; });
console.log(findedBook);
