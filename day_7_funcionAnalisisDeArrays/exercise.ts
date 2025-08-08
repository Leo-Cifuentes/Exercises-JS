function analizarArray (numeros?:number[]){
    if (!numeros || numeros.length === 0)
        return null
    else{
        let suma:number = 0;
        for (let i:number = 0;i < numeros.length;i++){
            suma += numeros[i];
        }
        let promedio:number = suma / numeros.length;
        let min:number = Math.min(...numeros);
        let max:number = Math.max(...numeros);
        let longitud = numeros.length;
        return {promedio, min, max, longitud}
    }
}

const numeros = [15, 5, 20, 10, 34];
const analisis = analizarArray(numeros);

console.log(analisis);