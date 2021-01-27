export enum TIPOCONTA {
    CONTACORRENTE = "CONTACORRENTE",
    CONTAPOUPANCA = "CONTAPOUPANCA"
}

export type user = {
    cpf: number,
    nome: string,
    nascimento: string,
    tipo: string,
    extrato: string
}

export type transactions = {
    deposit: number,
    withdraw: number,
    transfer: number
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
    },
    {
        "cpf": 45612378911,
        "nome": "Ambrosio Jaspion",
        "nascimento": "10012000",
        "tipo": TIPOCONTA.CONTACORRENTE,
        "extrato": "0"
    }
]