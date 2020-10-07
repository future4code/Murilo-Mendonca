// EXEMPLO 1 

// function dizOi() {
//     console.log("oi")
// }

// dizOi()


// EXEMPLO 2

// ------------------------------------------- EXEMPLO DE FUNCAO NOMEADA -----------------

// const resultado1 = somaDoisNumeros(5, 6)
// const resultado2 = somaDoisNumeros(10, 20)

// console.log(resultado1)
// console.log(resultado2)

// function somaDoisNumeros(numero1, numero2) {
//     const soma = numero1 + numero2
//     return soma
// }




// ------------------------------------------- EXEMPLO DE FUNCAO NÃO NOMEADA -----------------


// const somaDoisNumeros = function(numero1, numero2) {
//     const soma = numero1 + numero2
//     return soma
// }
    
// const resultado1 = somaDoisNumeros(5, 6)
// const resultado2 = somaDoisNumeros(10, 20)

// console.log(resultado1)
// console.log(resultado2)



// ------------------------------------------- EXEMPLO DE ARROW FUNCTION (FUNCAO FLECHA) -----------------


// const somaDoisNumeros = (numero1, numero2) => {
//     const soma = numero1 + numero2
//     return soma
// }


// const resultado1 = somaDoisNumeros(5, 6)
// const resultado2 = somaDoisNumeros(10, 20)

// console.log(resultado1)
// console.log(resultado2)




// ------------------------------------------- EXERCÍCIO 1 -----------------

// function verificaArray(arrayDeParametro) {
//     for (let elemento of arrayDeParametro) {
//         console.log(elemento)
//     }

//     return arrayDeParametro.length 
// }


// ------------------------------------------- EXERCÍCIO 2 -----------------


// const verificaTamanhoDoArray = (arrayDeParametro) => {
//     for (let elemento of arrayDeParametro) {
//         console.log(elemento)
//     }

//     return arrayDeParametro.length
// }

// const profs = ["chijo", "paulinha", "sot", "caio", "severo"]

// const tamanhoDoArray = verificaTamanhoDoArray(profs)


// EXERCÍCIOS SEMANA 4 AULA 13

// Exercício 1:
// a) Vai ser impresso o valor 10 e 50. (referentes a multiplicação entre 2*5 e 10*5)
// b) Ele não retornaria nada pelo console, porém estaria funcionando normalmente.

// Exercício 2:
// a) Irão aparecer os nomes: Darvas, Caio.
// b) Serão impressoas: Amanda, Caio.

// Exercício 3:
//R: O código é de um programa que recebe um número e verifica se ele é par, e sendo par ele inclui seu valor vezes ele mesmo no array final.
// Seu nome poderia ser numeroPar, e "x" poderia ser "numero".

// Exercício 4:
// a)

// function dadosUsuario() {
//     console.log("Eu sou Murilo, tenho 31 anos, moro em Umuarama e sou estudante da Labenu.")
// }

// b)

// function apresentarUsuario (nome, idade, cidade, estudante) {
//     if(estudante){
//         estudante = "sou estudante da Labenu"
//     } else {
//         estudante = "não sou estudante."
//     }
//     console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e ${estudante}.`)
// }

// apresentarUsuario ("Murilo", 31, "Umuarama", true)

// Exercício 5:
// a)
// let doisNumeros = (num1, num2) => {
//     return num1 + num2
// }

// const resultado = doisNumeros (20, 50)
// console.log(resultado)

// b)
// let doisNum = (numero1, numero2) => {
//     return numero1 >= numero2
// }

// const resposta = doisNum (15, 12)
// console.log(resposta)

// c)
// const msgRepetir = (msg) => {
//     for (let i = 0; i < 10; i++)
//     console.log(msg)
// }
// msgRepetir ("teste")


// Exercício 6:
// a)
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

// let meuArray = () => {
//     return array.length
// }
// console.log(meuArray())

// b)
// let informaParidade = (numero) => {
//     if (numero % 2 === 0) {
//         return true
//     } else {
//         return false
//     }
// }
// console.log(informaParidade(12))

// c)
// let numerosPares = []
// let checarNumeros = () => {
//     for (let i of array) {
//         if (i % 2 === 0) {
//             numerosPares.push(i)
//         }
//     }
// }
// checarNumeros(numerosPares)
// console.log(`A quantidade de números pares é: ${numerosPares.length}`)

// d)
// let arrayPares = [];
// let informaParidade = () => {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 0) {
//       arrayPares.push(true)
//     }
//   }
//   return arrayPares
// }
// console.log(informaParidade())
