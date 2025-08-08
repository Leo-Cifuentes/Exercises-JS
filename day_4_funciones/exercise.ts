function calcularPromedio(valores:number[]): number {
    let suma:number = 0;
    for (let i:number = 0;i < valores.length; i++){
        suma += valores[i];
    }
    return suma / valores.length;
}

const valores:number[] = [10, 20, 30, 40, 50];
const promedio1:number = calcularPromedio(valores);
console.log(`El promedio de los valores es: ${promedio1}`);


function palabraMasLarga(palabras: string[]): any {
  let palabrasLargas: string = palabras[0];
  for (let i: number = 0; i < palabras.length; i++) {
    if (palabras[i].length > palabrasLargas.length) {
      palabrasLargas = palabras[i];
    }
  }
  return palabrasLargas;
}

const palabras:string[] = ["manzana", "banana", "cereza", "mandarina"];
const palabraLarga:string = palabraMasLarga(palabras);
console.log(`La palabra más larga es: ${palabraLarga}`);


let variableGlobal: string = "Soy accesible en todas partes";
function probarScope(): void {
    let variableLocal: string = "Solo soy accesible dentro de la función";
    console.log(variableGlobal); // Acceso a la variable global
    console.log(variableLocal); // Acceso a la variable local
}

probarScope();
console.log(variableGlobal); // Acceso a la variable global
//console.log(variableLocal); Error: variableLocal no está definida fuera de la función