const validateBodyMenssage = (req, res, next) => {
    const { body } = req;

    if(body.mensagem == undefined || body.mensagem == ""){
        return res.status(400).json({message: 'É obrigatorio o campo mensagem'})
    }
    next();
}

module.exports = {
    validateBodyMenssage
}