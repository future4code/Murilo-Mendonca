let jogador = prompt("Digite seu nome: ")
let iniciarJogo = confirm("Deseja iniciar uma nova jogada?")
console.log(`Bem vindo ${jogador} ao jogo de Blackjack!`)

let carta1Jogador = comprarCarta()
let carta2Jogador = comprarCarta()
let carta1Pc = comprarCarta()
let carta2Pc = comprarCarta()

let somaJogador = 0
let somaPc = 0

if(iniciarJogo) {
   somaJogador = carta1Jogador.valor + carta2Jogador.valor
   somaPc = carta1Pc.valor + carta2Pc.valor
   console.log(`${jogador} suas cartas são: ${carta1Jogador.texto} ${carta2Jogador.texto} e o valor delas são: ${somaJogador}`)
   console.log(`Computador suas cartas são: ${carta1Pc.texto} ${carta2Pc.texto} e o valor delas são: ${somaPc}`)

   if(somaJogador === somaPc) {
      console.log("Vocês empataram")

   } else if (somaJogador > somaPc) {
      console.log(`${jogador} você ganhou!!!`)

   } else if (somaPc > somaJogador) {
      console.log(`O computador ganhou!`) 
}   
} else {
   console.log("O jogo acabou!")
}