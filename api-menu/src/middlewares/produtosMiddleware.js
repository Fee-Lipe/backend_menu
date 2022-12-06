const validateBody = (req, res, next) => {
    const body = req;

    if(body.nome == undefined || body.nome == ""){
        return res.status(400).json({message: 'É obrigatorio o campo nome'})
    }

    if(body.descricao == undefined || body.descricao == ""){
        return res.status(400).json({message: 'É obrigatorio o campo descricao'})
    }

    if(body.preco == undefined || body.preco == ""){
        return res.status(400).json({message: 'É obrigatorio o campo preco'})
    }

    if(body.tipo == undefined || body.tipo == ""){
        return res.status(400).json({message: 'É obrigatorio o campo tipo'})
    }

}

module.exports = {
    validateBody
}