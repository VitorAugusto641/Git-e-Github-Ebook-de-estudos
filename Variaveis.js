var vitor = "First Name"
// Sobrescrição de dados e qualquer escopo

var vitor = "Primeiro nome"
// Exemplo, ele foi sobrescrito. E agora no console só sai 'Primeiro nome' o 'First Name não aparece mais.

const Augusto = "Last Name"
// Constante, não aceita modificação e é Escopo de Bloco {}

let dog = "Belinha"
//// É usada para declarar uma variável local com escopo de bloco:{}, e permite sobrescrição de dados

console.log(`dados: ${vitor},${Augusto},${dog}`) // Caso declarar assim, cuidado com a crase `` 
// node Variaveis.js para executar

// Testes de escopo
var globalVariavel = "É uma variável global"
function exemplo() {

    if (true) {
        let h = 12; 
        var g = 15;
        const  y = 10;
        console.log(g);
        console.log(h);
        console.log(y);
    }
    console.log(globalVariavel)
}
exemplo()
console.log(exemplo)