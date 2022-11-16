import mysql from "mysql2/promise"
import dotenv from "dotenv"
dotenv.config()

const { MYSQL_HOST,
    MYSQL_USER,
    MYSQL_PASS,
    MYSQL_SCHEMA, NUMBER_OF_CONNECTIONS = 10 } = process.env
const pool = mysql.createPool({
    host: MYSQL_HOST,
    user: MYSQL_USER,
    password: MYSQL_PASS,
    database: MYSQL_SCHEMA,
    connectionLimit: Number(NUMBER_OF_CONNECTIONS)
})
function getConnection() {
    return pool;
}
export { getConnection }