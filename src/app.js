import express from "express";
import {pool} from "./db.js";
import { PORT } from "./config.js";


const app = express();

app.get("/",  async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM users');     
    res.json(rows);
});

app.get("/ping", async (req, res) => {
 const [result] = await pool.query('SELECT "Hello word" as Result') //aqui podria ir la consulta de la base de datos para un login
  res.json(result[0]);
});

app.get("/create", async (req, res) => {
   const result = await pool.query('Insert into users (name) values ("John Doe")');
    res.json(result);
});


app.listen(PORT, () => {
  console.log("Server on PORT", PORT);
});

//EVITAR MENSAJES DE CONSOLA COMO MODULOS
//COMO  LOGGINS, MORGAN