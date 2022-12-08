const { response } = require('../app');
const produtosModel = require('../models/produtosModel')

const getAll = async (_req, res) => {
    const produtos = await produtosModel.getAll();
    return res.status(200).json(produtos)
}

const getOne = async (req, res) => {
    try {
        const {id} = req.params;
        await produtosModel.getOne(id , res);
        return res
    } catch (error) {
        res.status(401).json({
            code: 401,
            data: error.menssage
        })
    }
}

const createProduto = async (req, res) => {
    try {
        const produtos = await produtosModel.createProduto(req.body);
        return res.status(201).json(produtos)
    } catch (error) {
        res.status(400).json({
            code: 400,
            data: error.menssage
        })
    }
}

const deleteProdutos = async(req, res) => {
    const {id} = req.params;
    await produtosModel.deleteProdutos(id, res);
    return res;
}

module.exports = {
    getAll,
    getOne,
    createProduto,
    deleteProdutos
}