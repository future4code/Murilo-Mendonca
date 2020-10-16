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
// Não consegui encontrar a solução do problema.



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
// EXERCÍCIO 01: ***********************************************************


// EXERCÍCIO 02:
// let imprimirNaTela = (mensagem) => {
//     return alert("Hello Future4")
// }
// imprimirNaTela()


// -------------------------- OBJETOS ----------------
// EXERCÍCIO 01:
// R:  Objetos são grandes arrays que armazenam informações que o usuário digita no nosso site.


// EXERCÍCIO 02:
// let criarRetangulo = (lado1, lado2) =>{
//     return retangulo = {
//         largura: lado1,
//         altura: lado2,
//         perímetro: (2*(lado1 + lado2)),
//         área: (lado1 * lado2)
//     }
// }
// console.log(criarRetangulo(100, 50))


// EXERCÍCIO 03:
// const filmeFavorito = {
//     titulo: 'Pulp Fiction',
//     ano: 1994,
//     diretor: 'Quentin Tarantino',
//     atores: ['John Travolta', ' Samuel L. Jackson', ' Uma Thurman']    
// }

// console.log(`Venha assistir ao filme ${filmeFavorito.titulo}, de ${filmeFavorito.ano}, dirigido por ${filmeFavorito.diretor}, e estrelado por: ${filmeFavorito.atores}.`)


// EXERCÍCIO 04:
// const pessoa = {
//     nome: 'Murilo', 
//     idade: 31, 
//     email:'murilomendonca@live.com',
//     endereco: 'Avenida Rolândia' 
// } 

// const anonimizarPessoa = {
//     ...pessoa,
//     nome: "Anônimo"
// }


// -------------------------- FUNÇÕES DE ARRAY ----------------
// EXERCÍCIO 01:
// a)
// let arrayDePessoas = [
// 	{ nome: "Pedro", idade: 20 },
// 	{ nome: "João", idade: 10 },
// 	{ nome: "Paula", idade: 12 },
// 	{ nome: "Artur", idade: 89 } 
// ]

// const somenteAdultos = arrayDePessoas.filter ((pessoa) =>{
//     if (pessoa.idade >= 20) {
//         return true
//     }
//     return false
// })
// console.log(somenteAdultos)

// b)
// let arrayDePessoas = [
// 	{ nome: "Pedro", idade: 20 },
// 	{ nome: "João", idade: 10 },
// 	{ nome: "Paula", idade: 12 },
// 	{ nome: "Artur", idade: 89 } 
// ]

// const somenteAdolescentes = arrayDePessoas.filter ((pessoa) =>{
//     if (pessoa.idade < 20) {
//         return true
//     }
//     return false
// })
// console.log(somenteAdolescentes)



// EXERCÍCIO 02:
// a)
// const array = [1, 2, 3, 4, 5, 6]
//     const multiplicadosPorDois = array.filter((numero) => {
//         const resultado =  numero *2
//         console.log(resultado)
// })

// b)
// const array = [1, 2, 3, 4, 5, 6]
//     const multiplicadosPorTres = array.map((numero) => {
//         return String(numero * 3)        
// })
// console.log(multiplicadosPorTres)

// c)
// const array = [1, 2, 3, 4, 5, 6]
//     const arrayStrings = array.map((numero) => {
//         if(numero % 2 === 0){
//             return `${numero} é par`
//         }
//         return `${numero} é impar`
//     })
// console.log(arrayStrings)

// EXERCÍCIO 03:
// a)
// const pessoas = [
// 	{ nome: "Paula", idade: 12, altura: 1.8},
// 	{ nome: "João", idade: 20, altura: 1.3},
// 	{ nome: "Pedro", idade: 15, altura: 1.9},
// 	{ nome: "Luciano", idade: 22, altura: 1.8},
// 	{ nome: "Artur", idade: 10, altura: 1.2},
// 	{ nome: "Soter", idade: 70, altura: 1.9}
// ]

// const podeEntrar = pessoas.filter((pessoas) => {
//     if(pessoas.idade > 14 && pessoas.altura >= 1.5 && pessoas.idade < 60){
//         return true
//     }
//     return false
// })

// b)
// const naoPode = pessoas.filter((pessoas) => {
//     if(pessoas.idade <= 14 || pessoas.altura <= 1.5 || pessoas.idade >= 60){
//         return true
//     }
//     return false
// })
// console.log(naoPode)


// EXERCÍCIO 04:

// const consultas = [
// 	{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
// 	{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
// 	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
// 	{ nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
// ]

// const enviarEmail = consultas.filter ((paciente) => {
//     if (paciente.cancelada === true && paciente.genero === "masculino") {
//         console.log(`Olá Sr. ${paciente.nome}. Infelizmente, sua consulta marcada para o dia ${paciente.dataDaConsulta} foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la.`)

//     } else if (paciente.cancelada === true && paciente.genero === "feminino") {
//         console.log(`Olá Sra. ${paciente.nome}. Infelizmente, sua consulta marcada para o dia ${paciente.dataDaConsulta} foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la.`) 

//     } else if (paciente.cancelada === false && paciente.genero === "masculino") { 
//         console.log(`Olá Sr. ${paciente.nome}. Estamos enviando esta mensagem para lembrá-lo da sua consulta no dia ${paciente.dataDaConsulta}. Por favor, acuse o recebimento deste e-mail.`)
//     } else if (paciente.cancelada === false && paciente.genero === "feminino") { 
//         console.log(`Olá Sra. ${paciente.nome}. Estamos enviando esta mensagem para lembrá-la da sua consulta no dia ${paciente.dataDaConsulta}. Por favor, acuse o recebimento deste e-mail.`)
//     }   
// })


// EXERCÍCIO 05:
// Não consegui encontrar a solução do problema.


