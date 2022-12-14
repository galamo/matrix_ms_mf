import { getConnection } from "../db/index"
async function loginUser(user: string, password: string) {
    const query = `SELECT 
            *
        FROM
            northwind.users
        WHERE
            email_address = ?
        AND password = ?`
    const result = await getConnection().execute(query, [user, password])
    const [data] = result;
    return data;

}

export { loginUser }