import { Request, Response } from 'express'
import { getAddressByCep } from '../services/addressManager';

export async function getAddressInfo(req: Request, res: Response) {
    let errorCode: number = 400;

    try {
        if (isNaN(Number(req.params.cep)) || req.params.cep.includes("-" || ".")) {
            throw new Error("Insira apenas números, sem prontos ou traços.")
        }
        const cep = req.params.cep

        const address = await getAddressByCep(cep)

        res.status(200).send(address);

    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}