const { response } = require('../app');

const funcModel = require('../models/funcionarioModel');

const getAll = async (_req, res) => {
    const func = await funcModel.getAll();
    return res.status(200).json(func)
}

const createFunc = async (req, res) => {
    try {
        const func = await funcModel.createFunc(req.body);
        return res.status(201).json(func)
    } catch (error) {
        res.status(400).json({
            code: 400,
            data: error.menssage
        })
    }
}
module.exports = {
    getAll,
    createFunc
}
