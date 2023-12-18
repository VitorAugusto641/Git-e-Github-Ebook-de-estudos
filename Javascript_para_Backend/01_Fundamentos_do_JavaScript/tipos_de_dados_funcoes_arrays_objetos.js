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
// Sobrescrição de dados e qualquer escopo - var conceito

var vitor = "Primeiro nome"
// Exemplo, ele foi sobrescrito. E agora no console só sai 'Primeiro nome' o 'First Name não aparece mais.

const Augusto = "Last Name"
// Constante, não aceita modificação e é Escopo de Bloco local {}

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

// // Console conceito - outros métodos
// console.error()                    | Para exibir mensagens de erro;
// console.table()                    | Para visualizar de forma mais organizada informações tabulares;
// console.time() e console.timeEnd() | Para temporizar período que uma operação de código leva para ser iniciada e concluída;
// console.trace()                    | Para exibir a stacktrace de todos os pontos (ou seja, os arquivos chamados) por onde o código executado passou durante a execução.


// ### Operadores ###

let a = 10             
const b = 15            
const c = 20            
console.log(a==b)                   //   | Compara valores
console.log(a===b)                  //   | Compara valores e tipos
console.log(a!=b)                   //   | Compara valores
console.log(a!==b)                  //   | Compara valores e tipos
console.log(a > b)                  //   | Maior que 
console.log(a < b)                  //   | Menor que
console.log(a >=b)                  //   | Maior ou igual que
console.log(a <= b)                 //   | Menor ou igual que
a += 5;                             //   | Atribuição com Adição - Equivale = a: a + 5
a -= 5;                             //   | Atribuição com Subtração
a *= 2;                             //   | Atribuição com multiplicação
a /= 4;                             //   | Atribuição com divisão
a %= 3;                             //   | Atribuição com resto da divisão
console.log(a > b && b>c)           //   | && - And 
console.log( a === b || b === c)    //   | || - Or
console.log(!(a<b))                 //   | ! - Not

//  ### Condicionais ###  

const idadeMinima= 18;
const idadeCliente= 16;
// IF:
if (idadeMinima >= idadeCliente) {
console.log("Cliente é de menor")    
}

//  IF E ELSE 
if (idadeMinima >= idadeCliente) {
console.log("Cliente é de menor, com if e else")    
} else {
console.log("Cliente é maior de idade")
}

// Operador Ternario ?
console.log(idadeMinima >= idadeCliente ? "sim, ele é menor de idade":"Ele é maior de idade") //console.log(condição >=  condição2 ? "true":"false")

// Switch
let diaSemana ="quarta"
switch (diaSemana) {
    case "segunda":
    console.log("É segunda, vai trabalhar")        
        break;
    case "terca":
        console.log("É terça, pode folgar")
        break
    default:
        console.log("Não é segunda e nem terça, hoje é quarta")
        break;
}

// ### FUNCOES ###
// As funções podem ser reaproveitadas
function imprimeTexto(texto) {
    console.log(texto);
  }

  imprimeTexto("Vitor")
  imprimeTexto("Augusto")

  function soma() {
    return 1.5 + 2;
  }
  console.log(soma())
  soma()

//   Outra Funções
let num = 3.5
let num2 = 4
let num3 = 5
let exp = 2
// ### Funcoes matematicas ###
let arredondamento = Math.round(num)          // | Math.round() - Arredonda um número flutuante
let arredonamentoMaior = Math.ceil(num)       // | Math.ceil()  - Faz o arredondamento para o valor mais alto
let arrendoamentoMenor = Math.floor(num)      // | Math.floor() - Faz o arredondamento para o valor mais baixo
let desconsideraDecimal = Math.trunc(num)     // | Desconsidera os números decimais
let exponencial = Math.pow(num,exp)           // | Faz a exponenciação de 2 números, quando for simples, como ao quadrado(2) ou cubo(3). Recomenda-se usar a multiplicação por ser mais rápido.
let raizQuad = Math.sqrt(num)                 // | Retorna a raiz quadrada de um número.
let valorMinimo = Math.min(num,num2,num3)     // | Retorna o maior valor entre os argumentos.
let valorMaximo = Math.max(num,num2,num3)     // | Retorna o maior valor entre os argumentos.
var aleatorio = Math.random()                 // | Retorna um valor randômico (random em inglês) entre 0 e 1, então não teremos um valor esperado para receber.
