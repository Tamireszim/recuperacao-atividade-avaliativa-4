import leia from 'readline-sync';

var texto = leia.question("DIGITE UM TEXTO: ")
texto = texto.toLowerCase();
var contadorConsoante = 0;

for (var i = 1; i < texto.length; i++) {
    if (
        texto[i] === 'b' ||
        texto[i] === 'c' ||
        texto[i] === 'd' ||
        texto[i] === 'f' ||
        texto[i] === 'g' ||
        texto[i] === 'h' ||
        texto[i] === 'j' ||
        texto[i] === 'k' ||
        texto[i] === 'l' ||
        texto[i] === 'm' ||
        texto[i] === 'n' ||
        texto[i] === 'p' ||
        texto[i] === 'q' ||
        texto[i] === 'r' ||
        texto[i] === 's' ||
        texto[i] === 't' ||
        texto[i] === 'v' ||
        texto[i] === 'w' ||
        texto[i] === 'x' ||
        texto[i] === 'y' ||
        texto[i] === 'z') {
        contadorConsoante++;
    }
}

console.log(`A PALAVRA/TEXTO TEM ${contadorConsoante} consoante`)