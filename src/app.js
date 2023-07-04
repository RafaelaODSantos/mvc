import express from 'express';
import index from './routes/index.js';
import db from './config/dbConnect.js';

const app = express(); // esta variável recebe o express, e será usada em outros arquivos.

app.use(json());

db.on("error", console.log.blind(console, 'Erro de conexão'))
db.once("open", () => {
    console.log('Conexão com o banco feita com sucesso')
});

export default app;