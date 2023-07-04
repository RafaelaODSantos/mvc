import mongoose from "mongoose"

const apiSchema = new mongoose.Schema(
    {
        nome: {type: String, required: true},
        país: {type: String, required: true},
        idade: {type: Number, required: true},
        posição: {type: String, required: true},
        altura: {type: String, required: true},
        clubeAtual: {type: Array, required: true }
    }
)

const apis = mongoose.model("apis", apiSchema)
module.exports = apis