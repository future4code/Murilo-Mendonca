export enum TIPOCONTA {
    CONTACORRENTE = 'CONTACORRENTE',
    CONTAPOUPANCA = "CONTAPOUPANCA"
}

export type user = {
    cpf: number,
    nome: string,
    nascimento: string,
    tipo: TIPOCONTA,
    extrato: "0"
}

export type transactions = {
    deposit: string,
    withdraw: string,
    transfer: string
}

export const users: user[] = [
    {
        "cpf": 12345678900,
        "nome": "Murilo Mendonca",
        "nascimento": "09091989",
        "tipo": TIPOCONTA.CONTACORRENTE,
        "extrato": "0"
    },
    {
        "cpf": 78945612300,
        "nome": "Chica da Silva",
        "nascimento": "15081978",
        "tipo": TIPOCONTA.CONTAPOUPANCA,
        "extrato": "0"
    }
]