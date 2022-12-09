const { response } = require('../app');
const faleConoscoModel = require('../models/faleConoscoModel')

const getAll = async (_req, res) => {
    const faleConosco = await faleConoscoModel.getAll();
    return res.status(200).json(faleConosco)
}

const createMenssage = async (req, res) => {
    try {
        const faleConosco = await faleConoscoModel.createMenssage(req.body);
        return res.status(201).json(faleConosco)
    } catch (error) {
        res.status(400).json({
            code: 400,
            data: error.menssage
        })
    }
}

module.exports = {
    getAll,
    createMenssage
}