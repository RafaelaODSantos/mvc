import mongoose from "mongoose";

mongoose.connect();

// a função connect guarda a tring de conexão dentro dos parenteses.

let db = mongoose.connection;

module.exports = db;

//Agora criamos uma variável que guarda a ação de conectar nosso usuário com o MongoDB.

let db = mongoose.connect;
