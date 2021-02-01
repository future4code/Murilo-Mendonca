import { connection } from "../index";

export const selectUserById = async (id: string): Promise<any> => {
    try {
        const result = await connection("cookenu_users")
            .select("*")
            .where({ id })

        return result[0]

    } catch (error) {
        throw new Error(error.message || error.sqlMessage);
    }
}