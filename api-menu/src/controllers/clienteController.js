const { response } = require('../app');
const clienteModels = require('../models/clientesModel')

const getAll = async (_req, res) => {
    const cliente = await clienteModels.getAll();
    return res.status(200).json(cliente)
}

const createCliente = async (req, res) => {
    try {
        const cliente = await clienteModels.createCliente(req.body);
        return res.status(201).json(cliente)
    } catch (error) {
        res.status(400).json({
            code: 400,
            data: error.menssage
        })
    }
}

const clientLogin = async (req, res) => {
    try {
        const cliente = await clienteModels.clientLogin(req.body, res);
        return res
    } catch (error) {
        res.status(400).json({
            code: 400,
            data: error.menssage
        })
    }
}

const deletaCliente = async(req, res) => {
    const {id} = req.params;

    await clienteModels.deletaCliente(id);
    return res.status(204).json();
}

const updateCliente = async (req, res) => {
    const {id} = req.params;

    await clienteModels.updateCliente(id, req.body);
    return res.status(204).json();
}

module.exports = {
    getAll,
    createCliente,
    deletaCliente,
    updateCliente,
    clientLogin
}