import leia from 'readline-sync';

var nomes = []
var idades = []

for(var i = 0; i < 5; i++){
    var nome = leia.question("Digite o nome: ");
    var idade = parseInt(leia.questionInt("Digite o idade: "));

    nomes.push(nome);
    idades.push(idade);
}

var maisVelha = 0;
var maisNova = 0;

for(let i = 1; i < idades.lenght; i++){
    if(idades[i] < idades[maisNova]){
        maisNova = i;
    }
    if (idades[i] > idades[maisVelha]) {
        maisVelha = i;
}
}

console.log(`A pessoa mais nova é nomes"[maisNova]com ${idades[maisNova]} anos.`);
console.log(`A pessoa mais velha é ${nomes[maisVelha]} com ${idades[maisVelha]} anos.`);