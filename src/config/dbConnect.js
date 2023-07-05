import mongoose from "mongoose";

mongoose.connect("mongodb+srv://admin:fullstack2023@cluster0.twun7lt.mongodb.net/senac2");
// A função connect guarda a tring de conexão dentro dos parênteses.

let db = mongoose.connection;


export default db;
