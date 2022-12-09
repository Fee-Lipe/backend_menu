const validateBodyPedido = (req, res, next) =>{
    const { body } = req;
    if(body.id_cliente == undefined || body.id_cliente == ""){
        return res.status(400).json({message: 'É necessario o cliente para executar a criacao do pedido'})
    }
    next();
}

module.exports = {
    validateBodyPedido
}