import { connection } from '../index'

export async function getUserById(id: string) {
    const result = await
        connection
            .select("*")
            .from("cookenu_users")
            .where({ id });
    return result[0];
};