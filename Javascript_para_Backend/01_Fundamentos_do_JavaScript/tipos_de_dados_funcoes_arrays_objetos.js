// #### Curso: JavaScript: tipos, variáveis e funções ####

//  Tipos de dados: Null, boleano, number, undefined, string, ECNAscript6
var varNull = null ; // Como se fosse 0 ou falso  
var boleana = true ;
var number = 42 ;
var undefined ;
var strings = "teste" ;
var ECMAScript6 = Symbol();

// String: São sequências de caracteres alfanuméricos (letras, números e/ou símbolos)
let frase= "Mergulhando em tecnologia"
const palavra="alura";
const nome = "Vitor Augusto"
let comunicao = "Olá, Sr. nomedousuario, informamos que você tem 50% de desconto"
let saudacoes =`Seja bem-vindo ${vitor}`              //     | Declarando com o ${}
const converteEmString = new String(number)           //     | Converte para String.
var tamanho = frase.length                            //     | Serve para nos informar o tamanho de uma string
console.log("Alura".charAt(3))                        //     | Acessar um caractere de uma string. No exemplo: // r 
console.log(strings[0])                               //     | Faz mesma função do charAt ()
console.log(strings.indexOf("s"))                     //     | Retorna a posição de um caractere dentro da string. No exemplo: // 2
console.log(palavra.toUpperCase())                    //     | ALURA - Deixa o texto em maiusculo 
console.log(palavra.toLowerCase())                    //     | alura - Deixa o texto em minusculo 
console.log(frase.slice(0,11))                        //     | Mergulhando - Retorna parte da string, falamos onde começa e onde termina
console.log(comunicao.replace("nomedousuario",nome)); //     | O "nomedousuario" será trocado pela palavra que estiver no 'nome', ela substitui parte de uma string por outra.
console.log(frase.concat("Concatenando String"))      //     | Adiciona a nova string ao fim da anterior.
let semEspaco = comunicao.trim()                      //     | Remove os espaços em branco no início ou fim de uma string
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

console.log(`declarando com $ {}: ${vitor},${Augusto},${dog}`) // Caso declarar assim, cuidado com a crase `` 
// node Variaveis.js para executar

// Testes de escopo
var globalVariavel = "É uma variável global"
function exemplo() {

    if (true) {
        let h = 12; 
        var g = 15;
        const  y = 10;
        console.log("Teste de escopo global",g);
        console.log("Teste de escopo global",h);
        console.log("Teste de escopo global",y);
    }
    console.log("Teste de escopo global",globalVariavel)
}
exemplo()

// #### Manipulação e métodos #####

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

// ############################################ Função sem retorno e sem Parâmetro - function

// Apenas executa uma instrução, sem a necessidade de disponibilizar o resultado para o restante do código.
function cumprimentar(){
    console.log('oi gente!')
   }
   cumprimentar()

// ---------------------------------------------------------------------------------------

// ############################################ Funcão sem retorno, mas com parâmetro

// Recebe o parâmetro da pessoa a ser cumprimetada, com isso pode ser reutlizada.
function cumprimentaPessoa(pessoa){
    console.log(`oi, ${pessoa}!`)
   }
   cumprimentaPessoa('Helena')
// ---------------------------------------------------------------------------------------

// ############################################ Funcão com return e sem parâmetro
function cumprimentar(){
    return 'Oi gente!'
   }
   function cumprimentaPessoa(nomePessoa) {
    console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
   }
   cumprimentaPessoa('Paula') // “Oi gente! Meu nome é Paula”

// ---------------------------------------------------------------------------------------

// ############################################ Funcão com retorno e mais de um parâmetro
function operacaoMatematica(numero1, numero2, numero3) {
    return numero1 + numero2 + numero3
   }
   operacaoMatematica(15, 30, 45) // 90
// ---------------------------------------------------------------------------------------

// ############################################ Arrow Function
// É uma função de seta
// Exemplo 1:
const somaNumeros = (number1,number2) => number1 + number2
const resultado1 = somaNumeros(5,4)
console.log("Soma Arrow: ", resultado1)
// Exemplo 2:
const somaNumerosPequenos = (nume1,nume2) => {
    if (nume1 > 10 || nume2 > 10) {
    return "somente números de 1 a 9"        
    } else {
        return nume1 + nume2;
    }
}
const resultado02 = somaNumerosPequenos(2,1)
console.log(resultado02)
// --------------------------------------------------------------------------------------
// High order functions:
// São funções que recebem uma função ou mais como argumento, retornando outra função;
// Exemplo:
const acesso = (nome) => {
    return `${nome} logou com sucesso no sistema!`
  }
  
  const autentica = (cargo) => {
    let array = []
    for( i = 0; i < cargo; i++){
      array.push(i)
    }
    return true;
  }
  
  const login = (pessoa, autentica) => {
    if(pessoa.cargo === `funcionario`) {
       autentica(90000)
    } else if(pessoa.cargo === `diretoria`) {
       autentica(900000)
    }
   return acesso(pessoa.nome)
  }
//   -------------------------------------------------------------------------------------------------
// *********     Arrays  *************
const nums = [50,43,22,10]
const nums2 = [20,24,21]

// Arrays: Armazena diversos valores e podem ser acessados

// lenght - Fala quantidade de dados no Array.
nums.length                                         
console.log(nums); // 4

// push() - Adiciona elemento ao Array                                          
nums.push(15)                                       
console.log(nums.push) // Adiciona o valor "15" no fim do array

// pop() - Remove o ultimo elemnto do array 
nums.pop()                                             

// concat() - Junta dois arrays, colocando o array passado como argumento, logo depois do primeiro. Em português essa operação é conhecida como concatenação.
const numsConcat = nums.concat(nums2);
console.log(numsConcat); // [50, 43, 22, 10, 20, 24, 21]

// filter() - Retorna uma lista contando todos os elementos que passaram em um teste, ou seja, uma função escrita por nós.
const numsFilter = nums.filter(num => num > 30);
console.log(numsFilter); // [50, 43]

// find() - Funciona de forma parecida com o filter, porém retorna apenas o primeiro valor que satisfizer o teste, podendo ser uma string ou um número.
const numsFind = nums.find(num => num < 30);
console.log(numsFind); // 22

// findIndex() - Funciona igual o find(), mas retorna o índice em vez do elemento, possibilitando usá-lo em outras partes do código.
const numsFindIndex = nums.findIndex(num => num < 30);
console.log(numsFindIndex); // 2

// lastIndexOf() - É igual o findIndex() porém começa do último elemento, não no primeiro.
const numsLastIndexOf = numsConcat.lastIndexOf(20);
console.log(numsLastIndexOf); // 3

// forEach() - Executa uma função em cada elemento do array de forma individual.
nums.forEach(num => console.log(num)); // 50, 43, 22, 10

// shift() - Retira o primeiro elemento do array.
const numsShift = nums.shift();
console.log(numsShift); // 50

// unshift() - Funciona igual ao push(), porém adiciona na primeira posição e acaba trocando o índice de todos os elementos. Altera o array original com o novo valor.
const numsUnshift = nums.unshift(100);
console.log(numsUnshift); // [100, 43, 22, 10]

// reduce() - Utiliza uma função definida pelo usuário em cada um dos elementos, guardando o resultado em uma variável que pode ser acessada dentro da função que foi definida, retornando um único valor no final, reduzindo o array para um único valor.
const numsReduce = nums.reduce((a, b) => a + b, 0);
console.log(numsReduce); // 175

// reduceRight() - Funciona igual o reduce() porém começa do final do array e segue até o início.
const numsReduceRight = nums.reduceRight((a, b) => a + b, 0);
console.log(numsReduceRight); // 175

// reverse() - Inverte a ordem dos elementos do array, então o primeiro vira o último, o segundo o penúltimo e assim por diante.
const numsReverse = nums.reverse();
console.log(numsReverse); // [10, 22, 43, 100]

// slice() - Copia uma parte do array para outro array.
const numsSlice = nums.slice(1, 3);
console.log(numsSlice); // [22, 43]

// sort() - Organiza o array de acordo com a classificação Unicode, onde os números vêm antes das letras, porém não funciona corretamente para números, onde temos que definir uma função que irá auxiliar o comando.
const numsSort = nums.sort((a, b) => a - b);
console.log(numsSort); // [10, 22, 43, 100]

// splice() - Consegue remover, um ou mais elementos consecutivos caso o segundo parâmetro tenha um valor maior que 0, e incluir um ou mais elementos a partir de um índice escolhido.
const numsSplice = nums.splice(1, 2, 200, 300);
console.log(numsSplice); // [10, 200, 300, 100]
