// #### Curso: JavaScript: tipos, variáveis e funções ####

//  Tipos de dados: Null, boleano, number, undefined, string, ECNAscript6
var varNull = null ; // Como se fosse 0 ou falso  
var boleana = true ;
var number = 42 ;
var undefined ;
var strings = "teste" ;
var ECMAScript6 = Symbol();

// CONCEITOS DOS DADOS - String, Array, Lista
numeros = [1,2,3,4,5] //  Array Coleção de elementos do mesmo tipo:  
var lista_elementos = [10, "maça", 3.14, true, "banana"]; // Lista - Semelhante a Array mas pode conter outros tipos de elementos e tamanho dinâmico 
// CONVERSAO DE NÚMEROS
const numero = 10
let texto = numero.toString();    // Converter um número em uma string

const texto01 = "11";
const numero01 = parseInt(texto01) // Converter uma string em um número


const texto02 = '10.5'
const numero02 = parseFloat(texto02) // Converter uma string em um ponto flutuante ( Com vírgula )


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

// #### Manipulação e métodos #####

// Lenght : Utilizada para sabermos quantos caracteres uma string contém
var frase = "MY dog is very good!"
var tamanho = frase.length
console.log ("O tamanho da string é:",tamanho) // Log: O tamanho da string é: 20

// toLowerCase() : converte todos os caracteres da string para letras minusculas
var minusculas = frase.toLowerCase();
console.log(minusculas) // Log: my dog is very good!