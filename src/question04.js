 import leia from "readline-sync";

var tamanho = leia.question("Digite o comprimento da senha desejada: ")
var char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&"
var senha = "";

for(var i = 0; i < tamanho; i++){
    var s = parseInt(math.random()*68)
    senha = senha + char[s]
}
 console.log(senha);