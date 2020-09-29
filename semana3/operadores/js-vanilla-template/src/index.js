// Exercícios de interpretação de código

/* Exercicio 1:

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)
// resultado = false

resultado = bool1 && bool2 && bool3
console.log("b. ", resultado)
// resultado = false

resultado = !resultado && (bool1 || bool1)
console.log("c. ", resultado)
// resultado = true

console.log("e. ", typeof resultado)
// resultado = boolean

*/

/* Exercicio 2:


let array
console.log('a. ', array)
// resposta = undefined

array = null
console.log('b. ', array)
// resposta = null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)
// resposta = 11

let i = 0
console.log('d. ', array[i])
// resposta = 0

array[i+1] = 19
console.log('e. ', array)
// resposta = 20

const valor = array[i+6]
console.log('f. ', valor)
// resposta = 6

*/



// Exercícios de Escrita de Código:

/* Exercício 1:

// a) 
let idadeUsuario = prompt("Qual é a sua idade?")

// b)
let idadeMelhorAmigo = prompt("Qual é a idade do seu melhor amigo?") 

// c)

let mensagem = Number(idadeUsuario) > Number (idadeMelhorAmigo)
console.log(`Sua idade é maior do que a do seu melhor amigo? ${mensagem}`)

// d)

let diferenca = Number(idadeUsuario) - Number (idadeMelhorAmigo)
console.log(`A diferença de idade entre vocês é de: ${diferenca}`)

*/

/* Exercício 2:


// a)

let numeroPar = prompt("Digite um número par")

// b)

let restoDivisao = numeroPar % 2
console.log(`O resto da divisão é de: ${restoDivisao}`)

// c)
// Resposta: Sempre que um número é par, não importe seu tamanho, ele retorna 0 no resultado da divisão.

// d)
// Resposta: Sempre que um número é impar, não importe seu tamanho, ele retorna 1 no resultado da divisão.

*/

/* Exercício 3:


// a)
let listaDeTarefas = []

// b)
let tarefa1 = prompt("Digite a primeira tarefa do seu dia")
let tarefa2 = prompt("Digite a segunda tarefa do seu dia")
let tarefa3 = prompt("Digite a terceira tarefa do seu dia")

// c)
listaDeTarefas.push (tarefa1)
listaDeTarefas.push (tarefa2)
listaDeTarefas.push (tarefa3)

console.log(listaDeTarefas)

// d)
let indice = prompt("Qual das tarefas você já concluiu? Digite: 0, 1, ou 2")

// e)
listaDeTarefas.splice(Number(indice), 1)
console.log(listaDeTarefas)

*/

/* Exercício 4:

let nomeDoUsuario = prompt("Digite seu nome")
let emailDoUsuario = prompt("Digite seu email")
console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem vinda(o), ${nomeDoUsuario}`)

*/

// Desafios Extras

// Desafio 1:
// a)



// Desafio 2:

let quilowattHora = 0.05

// a)
let consumo = quilowattHora * 280
console.log(`O valor total a pagar consumindo 280 kWh será de R$ ${consumo}`)

// b)

let desconto = consumo - (15 / 100) 
console.log(`O valor total com desconto é de R$ ${desconto}`)
