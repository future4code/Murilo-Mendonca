//importando express com Request e Response e cors
import express, { Request, Response } from 'express';
import cors from 'cors';

//extra: importando configuração de rede do node
import { AddressInfo } from "net";

//iniciando a aplicação web com express
const app = express();

//ativando os módulos de Bodyparser e cors
app.use(express.json());
app.use(cors());

type user = {
    id: number,
    name: string,
    email: string,
    type: string,
    age: number
}

enum UserType {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}

let users: user[] = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: UserType.ADMIN,
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: UserType.NORMAL,
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: UserType.NORMAL,
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: UserType.NORMAL,
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: UserType.ADMIN,
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: UserType.ADMIN,
        age: 60
    }
]

// getAllUsers

app.get("/user", (req: Request, res: Response) => {

    const result = users.map(
        users => ({
            id: users.id,
            name: users.name,
            email: users.email,
            type: users.type,
            age: users.age
        })
    )
    res.status(200).send(result)
})

// getUserByType
// app.get("/user/:type", (req: Request, res: Response) => {
//     let errorCode: number = 400

//     try {

//     } catch (error) {
//         res.status(errorCode).send(error.message);
//     }
// })

// getUserByName
app.get("/user", (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        const nome: string = req.query.name as string;

        if (!nome) {
            errorCode = 422;
            throw new Error("Nome inválido. Por favor preencha corretamente");
        }

        const myUser = users.find(((u: user) => u.name === nome));
        if (!myUser) {
            errorCode = 404;
            throw new Error("Usuário não encontrado");
        }

        res.status(200).send(myUser);

    } catch (error) {
        res.status(errorCode).send(error.message);
    }

});


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});

