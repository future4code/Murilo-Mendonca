## Exercicio 1
A: Creio que seja melhor, pois abre a possibilidade de usar números hexadecimais.

## Exercicio 2
A: O codigo inicia com a criação de uma const que recebe um User, logo a baixo está a connection com os
dados para ser utilizados pelo DB, e por fim, uma const para criação de um novo usuário, que recebe,
Id, email e password. inserindo eles na tabela userTableName.

B: 
CREATE TABLE User (
	id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

## Exercicio 3
A: É necessário utilizar o as string para declarar que o JWT_KEY tem que ser uma string e não um valor undefined.

