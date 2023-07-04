import Router from 'express';


const router = Router();

router.get("/", function(req, res){
    res.status(200).sed({
        title: "Hello World. Bem vindas a turma Devas do Full-stack!",
        version "1.0.0"

    })

})

export default router;