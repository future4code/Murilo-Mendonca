import { connection } from "../index";

export default async function insertAddress(
    logradouro: string,
    numero: string,
    complemento: string,
    bairro: string,
    cidade: string,
    estado: string

) {
    await connection.insert({
        logradouro,
        numero,
        complemento,
        bairro,
        cidade,
        estado
    }).into('to_do_list_address')
}