import leia from 'readline-sync';

var Quantidades = 0;
var Total;
var Maiores;
var Menores;
var somaTotal;
while (Media !== 0) {
    var Media = leia.questionInt("Digite o numero: ")
    if (!Total) {
        Total = Media
        Maiores = Media
        Menores = Media
        Quantidades++
    }
    if (Media !== 0) {
        Total = Total + Media
        Quantidades++
    }
    if (Media > Maiores) {
        Maiores = Media
    }
    if (Media < Menores && Media!==0) {
        Menores = Media
    }
}
            somaTotal = Total / Quantidades
    
console.log("Numero Maior é: " + Maiores)
console.log("Numero Menor é: " + Menores)
console.log("Média: " + somaTotal)
