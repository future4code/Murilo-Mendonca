// EXERCÍCIO 1:
// O código está somando o valor de "valor" + 1, rodando 4 vezes o seu index.
// O resultado impresso será 10, pois ele gira 4x.  

// EXERCÍCIO 2:
// a)
// O console irá imprimir todos os números do array lista que forem maior que 18.

// b)
// Resposta: 

// DESAFIO INTERPRETAÇÃO DE CÓDIGO:

// Resposta: A cada linha de codigo gerada ela imprime um 0, e adiciona outra linha a baixo iniciando com um 0 mais um outro 0. Até o fim do loop.


// Exercício de escrita de código:

// EXERCICIO 3:
// a)
// const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// for (imprima of arrayOriginal) {
//     console.log(imprima)
// }

// b)
// const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// for (imprima of arrayOriginal) {
//     if(imprima >= 10){
//        imprima = imprima / 10
//        console.log(imprima)
//     }
// }


// c)
// const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// let imprimaPar = []

// for(let numeros of arrayOriginal) {
//     if(numeros % 2 === 0){
//         imprimaPar.push(numeros)
//     }
// }
// console.log(imprimaPar)

// d)
// const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// let arrayPalavras = []

// for(let i = 0; i < arrayOriginal.length; i++){
//     arrayPalavras.push ("'O elemento do índex " + i + " é: " + arrayOriginal[i])
// }
// console.log(arrayPalavras)

// e)
const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let arrayMaior = arrayOriginal[0]


for(let i = 0; i < arrayOriginal.length; i++){
    let elemento = arrayOriginal[i]

    if (elemento > arrayMaior) {
        arrayMaior = elemento
    }
}
console.log(`O maior número é ${arrayMaior}`)