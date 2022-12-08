const validateBody = (req, res, next) => {
    const { body } = req;
    
    if(body.nome == undefined || body.nome == ""){
        return res.status(400).json({message: 'É obrigatorio o campo nome'})
    }

    if(body.cpf == undefined || body.cpf == ""){
        return res.status(400).json({message: 'É obrigatorio o campo cpf'})
    }

    if(body.email == undefined || body.email == ""){
        return res.status(400).json({message: 'É obrigatorio o campo email'})
    }
    next()
}

module.exports = {
    validateBody
}