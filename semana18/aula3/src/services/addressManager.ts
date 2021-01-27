import axios from 'axios'

const URL = "https://viacep.com.br/ws"

export async function getAddressByCep(cep: string) {

    try {
        const result = await axios.get(`${URL}/${cep}/json`)

        const myAddress = {
            name: result.data.logradouro,
            neighbourhood: result.data.bairro,
            city: result.data.localidade,
            state: result.data.uf
        }

        return myAddress;

    } catch (error) {
        throw new Error(error.message)
    }

}