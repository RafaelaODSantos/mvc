import express from 'express';
import index from './routes/index.js'

const app = express(); // esta variável recebe o express, e 


app.use(express.json());
app.use("/", index)


export default app