const { response } = require('../app');
const pedidoModel = require('../models/pedidoModal');

const getAll = async (_req, res) => {
    const pedido= await pedidoModel.getAll();
    return res.status(200).json(pedido)
}

const criarPedido = async (req, res) => {
    try {
        const pedido = await pedidoModel.criarPedido(req.body);
        return res.status(201).json(pedido)
    } catch (error) {
        res.status(400).json({
            code: 400,
            data: error.menssage
        })
    }
}

module.exports = {
    getAll,
    criarPedido
}