import {createPool} from "mysql2/promise";
//estudair createpool para conectar a la base de datos mysql
// y usar promesas en lugar de callbacks
import {
    DB_HOST,
    DB_USER,
    DB_PASSWORD,
    DB_NAME,
    DB_PORT
} from "./config.js";

export const pool = await createPool({
    user: DB_USER,
    password: DB_PASSWORD,
    host: DB_HOST,
    port: DB_PORT,
    database: DB_NAME
});
