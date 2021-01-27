import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import { user, users } from './users'

const app: Express = express();

app.use(express.json());
app.use(cors());

// ENDPOINT para cadastro de usuário
app.post("/users", (req: Request, res: Response) => {
    let errorCode: number = 400

    try {
        const reqBody: user = {
            cpf: req.body.cpf,
            nome: req.body.nome,
            nascimento: req.body.nascimento,
            tipo: req.body.tipo,
            extrato: req.body.extrato
        }

        const maiorIdade = parseInt(reqBody.nascimento)
        const anoAtual = 10012021;
        const verificaIdade = (anoAtual - maiorIdade)

        if (verificaIdade < 18) {
            errorCode = 401;
            throw new Error("Usuários menores de 18 anos não podem ser cadastrados.");
        }

        if (!reqBody.cpf || !reqBody.nome || !reqBody.nascimento) {
            errorCode = 422;
            throw new Error("Algum campo está inválido ou faltando. Preencha corretamente.");
        }

        users.push(reqBody)
        res.status(200).send({ message: "Usuário cadastrado com sucesso!" })

    } catch (error) {
        res.status(errorCode).send(error.message);
    }
})

// ENDPOINT pegar todos os usuários
app.get("/users", (req: Request, res: Response) => {
    let errorCode: number = 400

    try {
        if (users.length === 0) {
            errorCode = 422;
            throw new Error("Não existem contas cadastradas. Cadastre um novo usuário.");
        }

        res.status(200).send(users)

    } catch (error) {
        res.status(errorCode).send(error.message);
    }
})


import { AddressInfo } from "net";

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});