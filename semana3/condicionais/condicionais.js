
// Exercícios de interpretação de código:

// Exercicio 1:
/*
O exercício realiza um teste para saber se o número é par ou impar, e se o numero é par, ele retorna "passou no teste", se o número for impar,
ele retorna a mensagem "não passou no teste".
*/


// Exercicio 2:

// a)
// O código serve para o usuário pesquisar por uma fruta e conferir o valor dela.

// b)
// A resposta será: O preço da fruta  Maçã  é  R$  2.25

// c)
// Ele iria retornar que o preço da Pêra é de R$5, porque a o código vai utilizar a ultima variável "preço" do código.

// Exercicio 3:

// a)
// A primeira linha está solicitando que o usuário digite um número, que será convertido para o formato "Number".

// b)
// No caso do usuário digitar 10, o console iria retornar a mensagem "Esse número passou no teste".
// Caso o número fosse -10, por ele ser menor que a condição, o console não iria retornar nenhuma mensagem.

// c)
// O console retornaria uma mensagem de erro, pois a variável mensagem não seria encontrada, 
// porque uma variável do filho, não pode ser encontrata pelo pai.


// Exercícios de escrita de código:

/* Exercício 4:
// a) + b)
let idade = Number(prompt("Qual é a sua idade?"))

// c)

if (idade >= 18) {
    console.log("Você pode dirigir.")
} else {
    console.log("Você não pode dirigir.")
}
*/

/* Exercício 5:

let turno = prompt("Digite o seu turno: M -> Matutino, V -> Vespertino  ou N -> Noturno.").toLocaleUpperCase()

if (turno === "M"){
    console.log("Bom Dia!")
} else if (turno === "V") {
    console.log("Boa Tarde!")
} else {
    console.log("Boa Noite!")
}

*/

/* Exercício 6:

let turno = prompt("Digite o seu turno: M -> Matutino, V -> Vespertino  ou N -> Noturno.").toLocaleUpperCase()
    switch (turno){
        case 'M':
            console.log("Bom Dia!")
            break
        case 'V':
            console.log("Boa Tarde!")
            break
        default:
            console.log("Boa Noite!")
            break
}

*/

/* Exercício 7:

let generoFilme = prompt("Qual o genero do filme que você vai assistir?")
let valorIngresso = Number(prompt("Qual o valor do ingresso?"))

if (generoFilme === "fantasia" && valorIngresso <= 15){
    console.log("Bom filme!")
} else {
    console.log("Escolha outro filme :(")
}

*/

// Desafios

/* Desafio 1:
let generoFilme = prompt("Qual o genero do filme que você vai assistir?").toLocaleLowerCase()
let valorIngresso = Number(prompt("Qual o valor do ingresso?"))

if (generoFilme === "fantasia" && valorIngresso <= 15){
    let snacks = prompt("Inclua algum snack: chocolate, refrigerante ou pipoca")
    console.log(`Bom filme! E aproveite seu ${snacks}`)
} else {
    console.log("Escolha outro filme :(")
}

*/

/* Desafio 2:
*/
