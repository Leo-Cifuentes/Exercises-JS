var playList = ["Así vivo yo - Orquesta Colon", "Love Bites -  Deff Lepard", "Gaga - JBalvin"];
for (var i = 0; i < playList.length; i++) {
    console.log("Canci\u00F3n ".concat(i + 1, ": ").concat(playList[i]));
}
var secretNumber = 8;
while (true) {
    var ramdonNumber = Math.floor(Math.random() * 10) + 1;
    console.log("N\u00FAmero aleatorio: ".concat(ramdonNumber));
    if (ramdonNumber === secretNumber) {
        console.log("\u00A1Adivinaste! El n\u00FAmero secreto era ".concat(secretNumber));
        break;
    }
}
var numbers = [2, -5, 10, -3, 8, -1];
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
        continue;
    }
    console.log("N\u00FAmeros: ".concat(numbers[i]));
}
