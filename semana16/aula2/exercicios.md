// EXERCÍCIO 01

A) Deleta a coluna salário, da tabela ACTOR.

B) Altera de gender da tabela Actor, para sex com limite de 6 caracteres string.

C) Altera o tamanho da string para o tamanho máximo de 255 caracteres. 

D) ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

// EXERCÍCIO 02

A) UPDATE Actor SET name = "Fernanda Montebranco", birth_date = "2000-01-01" WHERE id = "003";

B) UPDATE Actor SET name = "Juliana Paes" WHERE name = "JULIANA PÃES";
   UPDATE Actor SET name = "JULIANA PÃES" WHERE name = "Juliana Paes"; 

C) 
UPDATE Actor 
    SET 
        name = "Usuario Novo",
        salary = 500000,
        birth_date = "1999-10-10",
        gender = "female"
    WHERE id = "005";

D) Nada é alterado, pois o id não existe, não é retornado um erro, apenas um aviso de que nenhuma linha foi alterada.
"0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0"

UPDATE Actor 
SET 
	name = "Usuario Errado",
	salary = 900000,
	birth_date = "1950-02-02",
	gender = "female"
WHERE id = "008";

// EXERCÍCIO 03

A) DELETE FROM Actor WHERE name = "Fernanda Montenegro";

B) DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;

// EXERCÍCIO 04

A) SELECT MAX(salary) FROM Actor;

B) SELECT MIN(salary) FROM Actor WHERE gender = "female";

C) SELECT COUNT(*) FROM Actor WHERE gender = "female";

D) SELECT SUM(salary) FROM Actor;

// EXERCÍCIO 05

A) A query define a contagem de todos os atores através da função COUNT(*), separando-os por grupo através da função GROUP BY, em números dos atores em seus gêneros.

B) 
SELECT id, name 
FROM Actor 
ORDER BY name ASC;

C) 
SELECT * 
FROM Actor
ORDER BY salary ASC;

D) 
SELECT * 
FROM Actor
ORDER BY salary ASC
LIMIT 3;

E)
SELECT AVG(salary), gender
FROM Actor
GROUP BY gender;

// EXERCÍCIO 06

A) 
ALTER TABLE Movie 
ADD playing_limit_date 
DATE;

B)
ALTER TABLE Movie 
CHANGE rating rating FLOAT;

C) 
UPDATE Movie
SET playing_limit_date = "2021-05-01"
WHERE id = "001";

UPDATE Movie
SET playing_limit_date = "2020-10-21"
WHERE id = "002";

D) 