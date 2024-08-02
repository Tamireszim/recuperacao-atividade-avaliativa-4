const TENTATIVAS = 1000
var index = 0;
var copas = 0;
var espadas = 0;
var ouro = 0;
var paus = 0;

while (index < TENTATIVAS) {
    var valorSorteado = parseInt(Math.random() * 52);
    if (valorSorteado === 0) {
        ouro++;
    } else if(valorSorteado === 0) {
        copas++;
    } else if (valorSorteado === 0){
        paus++;
    } else {
        espadas++;
    }
    index++;

}
var espadasPorcent = (espadas / TENTATIVAS) * 100
var copasPorcent = (copas / TENTATIVAS) * 100
var ouroPorcent = (ouro / TENTATIVAS) * 100
var pausPorcent = (paus / TENTATIVAS) * 100

console.log("Espadas - porcentagem: " + espadasPorcent.toFixed(1) + " %")
console.log("Ouro - porcentagem: " + ouroPorcent.toFixed(1) + " %")
console.log("Copas - porcentagem: " + copasPorcent.toFixed(1) + " %")
console.log("Paus -  porcentagem: " + pausPorcent.toFixed(1) + " %")

var copasEsperadas = (13 / 52) * 100;
var ouroEsperadas = (13 / 52) * 100;
var espadasEsperadas = (13 / 52) * 100;
var pausEsperadas = (13 / 52) * 100;


if (copasPorcent > 30 ||
    espadasPorcent > 30 ||
    ouroPorcent > 30 ||
    pausPorcent > 30) {
    console.log(" Baralho pode estar viciado!!")
} else {
    console.log("Baralho não esta viciado!!")
}