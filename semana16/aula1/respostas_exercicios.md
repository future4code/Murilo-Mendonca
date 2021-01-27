// EXERCÍCIO 01
// A) O id leva a tag VARCHAR que define strings com tamanho máximo de 255 caracteres, e PRIMARY KEY para dizer que aquela é uma key única e imutável.
// As tags NOT NULL significam que elas são obrigatórias.


// B) A tag SHOW TABLES mostra todas as tabelas criadas. Já a tag SHOW DATABASES mostra todos os databases criados.

// C) O comando retorna um FIELD com os campos da tabela, um TYPE contendo o tipo dos campos, um NULL dizendo sim ou não, um KEY mostrando qual deles é o primário, um DEFAULT null e um extra.

// EXERCÍCIO 02
// A) 

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);

// B) O erro 1062 retornado é de chave duplicada, pois uma primary key aceita somente um valor único.

// C) Retorna um erro 1136, que significa que as colunas não correspondem aos valores digitados.
O correto seria: INSERT INTO Actor (id, name, salary, age, gender)

// D) O erro 1364 diz que o campo nome não tem um valor, e ele é obrigatório na solicitação.
O correto seria: 

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "nome do ator",
  400000,
  "1949-04-18", 
  "male"
);

// E) O erro 1292 retorna que a data foi inserida incorretamente.
O correto seria:
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

// F)

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Fausto Silva",
  800000,
  "1928-10-06", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "Margot Robbie",
  500000000,
  "1990-05-02", 
  "female"
);

// EXERCÍCIO 03
// A) SELECT * from Actor WHERE gender = "female";

// B) SELECT salary from Actor WHERE name = "Tony Ramos";

// C) SELECT * from Actor WHERE gender = "invalid";
O retorno dos valores é null, pois o gender "invalid" não existe. Ele deveria ser "male" ou "female".

// D) SELECT id, name, salary from Actor WHERE salary < 500000;

// E) A query retorna um erro 1054, que diz que a tag "nome" é inválida.

O comando correto é: SELECT id, name from Actor WHERE id = "002";

// EXERCÍCIO 04

// A) A query seleciona todas as informações dos atores que possuem a letra "A" OU "J" no nome, e salário menor que 300000.

// B) SELECT * FROM Actor WHERE (name NOT LIKE "A%") AND salary < 350000;

// C) SELECT name FROM Actor WHERE name LIKE "G%" OR name LIKE "g";

// D) 
SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "a%" OR name LIKE "G%" or name LIKE "g%") 
AND salary BETWEEN 350000 AND 900000;

// EXERCÍCIO 05

// A) 

CREATE TABLE Filmes (
    id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR (255) NOT NULL,
    sinopse TEXT NOT NULL,
    data_de_lancamento DATE NOT NULL,
	avaliacao FLOAT NOT NULL
);

// B) 
INSERT INTO Filmes (id, titulo, sinopse, data_de_lancamento, avaliacao)
VALUES(
  "001", 
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos.",
  "2006-01-06", 
  7
);

// C) 
INSERT INTO Filmes (id, titulo, sinopse, data_de_lancamento, avaliacao)
VALUES(
  "004", 
  "D2 Coelhos",
  "Após um grave acidente de carro, no qual uma mulher e seu filho são mortos, Edgar (Fernando Alves Pinto) é indiciado, mas consegue escapar da prisão graças à influência de um deputado estadual, Jader Kerteis. Logo em seguida ele parte para uma temporada em Miami, Flórida, nos Estados Unidos. Dois anos depois, Edgar retorna para a cidade de São Paulo com um elaborado plano em que pretende atingir tanto o deputado Jader (Roberto Marchese) que o ajudou, ele é considerado símbolo da corrupção política, quanto o Maicon (Marat Descartes), um criminoso que consegue escapar da justiça graças ao suborno de políticos influentes. Instigado, Edgar resolve colocar seu plano em prática e se aventura em busca de redenção ao colocar criminosos e corruptos em rota de colisão.",
  "2012-01-20", 
  7.4
);


// EXERCÍCIO 06

// A) SELECT id, titulo, avaliacao FROM Filmes WHERE id = "003";

// B) SELECT titulo FROM Filmes WHERE titulo = "Dona Flor e Seus Dois Maridos";

// C) SELECT id, titulo, sinopse FROM Filmes WHERE avaliacao >= 7;


// EXERCÍCIO 07

// A) SELECT titulo FROM Filmes WHERE titulo LIKE "%vida";

// B) SELECT titulo, sinopse FROM Filmes WHERE titulo OR sinopse LIKE "%coelhos";

// C) SELECT * FROM Filmes WHERE data_de_lancamento > 2021-01-01;

// D) 
SELECT * FROM FIlmes WHERE data_de_lancamento > 2021-01-01
AND (titulo LIKE "%coelhos%" OR sinopse LIKE "%animada%")
AND avaliacao >= 7;


