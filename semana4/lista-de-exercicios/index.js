// -------------------------- LISTA DE EXERCÍCIOS ---------------------
// -------------------------- INTERPRETAÇÃO DE CODIGOS ----------------

// EXERCÍCIO 01:
//R: O console irá retornar o valor de R$100 vezes a cotação que o usuário irá digitar.

// EXERCÍCIO 02:
//R: O console.log de novoMontante vai receber o valor de 150*1.1
//R: O console.log de segundoMontante vai receber o valor de "Tipo de investimento informado incorreto!"

// EXERCÍCIO 03:
//R: O primeiro console.log irá receber o array total de números.
//R: O segundo console.log irá receber a quantidade total de números pares.
//R: O segundo console.log irá receber a quantidade total de números ímpares.

// EXERCÍCIO 04:
//R: O console.log(numero1) vai receber o menor número do array que é -10.
//R: O console.log(numero2) vai receber o maior número do array que é 1590.


// -------------------------- LÓGICA DE PROGRAMAÇÃO ----------------
// EXERCÍCIO 01:
// for, for of, while

// const arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    // for(let i = 0; i < 5; i++){
    //     let menoresQueCinco = arrayNumeros[i]
    //     console.log(menoresQueCinco)
    // }
    
    // for(let numerosPares of arrayNumeros){
    //     if(numerosPares % 2 === 0)
    //     console.log(numerosPares)
    // }

    //     let i = 0
    //     while (i < 5) {
    //     console.log(i)
    //     i++
    // }


// EXERCÍCIO 02:
// a) true
// b) true
// c) false
// d) false
// e) false


// EXERCÍCIO 03:



// EXERCÍCIO 04:

// let trigonometria = (lado1, lado2, lado3) =>{
//     if(lado1 === lado2 && lado2 === lado3){
//         console.log("Triangulo Equilátero")

//     } else if (lado1 !== lado2 && lado2 !== lado3 && lado1 !== lado3){
//         console.log("Triângulo Escaleno")

//     } else {
//         console.log("Triângulo Isósceles")
//     }
// }   
// trigonometria(13, 13, 13)


// EXERCÍCIO 05:

// let comparaNumeros = function (num1, num2){
//     if(num1 > num2){
//         console.log(`O maior é ${num1}`)
//     } else {
//         console.log(`O maior é ${num2}`)
//     }   

//     if(num1 % num2 === 0){
//         console.log(`${num1} é divisível por ${num2}`)
//     } else {
//         console.log(`${num1} não é divisível por ${num2}`)
//     }
    
//     if (num1 > num2){
//         let dividir = num1 - num2
//         console.log(`A diferença entre eles é ${dividir}`)
//     } else if (num2 > num1){
//         dividir = num2 - num1
//         console.log(`A diferença entre eles é ${dividir}`)
//     } else {
//         console.log(`Eles são iguais`)
//     }
// }
// comparaNumeros(14, 180)


// -------------------------- FUNÇÕES ----------------

// EXERCÍCIO 02:
// let imprimirNaTela = (mensagem) => {
//     return alert("Hello Future4")
// }
// imprimirNaTela()


// -------------------------- OBJETOS ----------------
// EXERCÍCIO 01:
// R:  Objetos são grandes arrays que armazenam informações que o usuário digita no nosso site.


// EXERCÍCIO 03:
// let titulo = prompt("Digite o NOME do seu filme favorito")
// let ano = prompt("Digite o ANO do seu filme favorito")
// let diretor = prompt("Digite o DIRETOR do seu filme favorito")



// EXERCÍCIO 04:
const pessoa = {
    nome: 'Murilo', 
    idade: 31, 
    email:'murilomendonca@live.com',
    endereco: 'Avenida Rolândia' 
} 

const anonimizarPessoa = {
    ...pessoa,
    nome: "Anônimo"
}
