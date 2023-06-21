import express from 'express';


const router = express.Router;

router.get("/", function (req, res) {
    res.status(200).send({
        title: "Bem vindas a turma Devas do Full-stack!",
        version "1.0.0"

    })

})