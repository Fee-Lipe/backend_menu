const validateBody = (req, res, next) => {
    const { body } = req;

    if(body.nome == undefined){
        return res.status(400).json({message: 'É obrigatorio o campo nome'})
    }

    if(body.nome == ""){
        return res.status(400).json({message: 'É obrigatorio o campo nome'})
    }
    next();
};

const validPassAndEmail = (req, res, next) => {
    const { body } = req;

    if(body.email == undefined){
        return res.status(400).json({message: 'É obrigatorio o campo email'})
    }

    if(body.email == ""){
        return res.status(400).json({message: 'É obrigatorio o campo email'})
    }

    if(body.senha == undefined){
        return res.status(400).json({message: 'É obrigatorio o campo senha'})
    }

    if(body.senha == ""){
        return res.status(400).json({message: 'É obrigatorio o campo senha'})
    }

    next();
};


module.exports = {
    validateBody,
    validPassAndEmail
}