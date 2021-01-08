import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import { user, users } from './users'

const app: Express = express();

app.use(express.json());
app.use(cors());

app.post("/users", (req: Request, res: Response) => {

})

// ENDPOINT getAllUsers
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