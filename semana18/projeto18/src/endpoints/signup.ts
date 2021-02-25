import { Request, Response } from "express";
import insertUser from "../data/insertUser";
import { generateToken } from "../services/authenticator";
import { hash } from "../services/hashManager";
import { generateId } from "../services/idGenerator";

export default async function signup(req: Request, res: Response) {
    try {
        const password = req.body.password

        if (password.length < 6) {
            throw new Error('Sua senha deve conter no mínimo 6 caracteres.')
        }

        if (
            !req.body.name ||
            !req.body.email ||
            !req.body.password
        ) {
            throw new Error('Preencha os campos "nome", "email" e "senha".')
        }

        const id: string = generateId()

        const cypherPassword = await hash(req.body.password);

        await insertUser(
            id,
            req.body.name,
            req.body.email,
            cypherPassword,
        )

        const token: string = generateToken({ id })

        res.status(201)
            .send({ message: "Usuário criado!", token })

    } catch (error) {
        res.status(400)
            .send({ message: error.message || error.sqlMessage })
    }
} 