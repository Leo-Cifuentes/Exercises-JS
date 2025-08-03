const playList:string [] = ["Así vivo yo - Orquesta Colon","Love Bites -  Deff Lepard", "Gaga - JBalvin"]; 

for (let i:number = 0 ; i < playList.length; i++) {
    console.log(`Canción ${i + 1}: ${playList[i]}`);
}

const secretNumber:number = 8;
while (true) {
    const ramdonNumber:number = Math.floor(Math.random() * 10) + 1;
    console.log(`Número aleatorio: ${ramdonNumber}`);
    if (ramdonNumber === secretNumber) {
        console.log(`¡Adivinaste! El número secreto era ${secretNumber}`);
        break;
    }
}

const numbers:number[] = [2, -5, 10, -3, 8, -1];
for (let i:number = 0; i < numbers.length; i++) {
    if (numbers[i] < 0){
        continue;
    }
    console.log(`Números: ${numbers[i]}`);  
}