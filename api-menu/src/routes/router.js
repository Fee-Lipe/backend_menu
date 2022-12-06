const express = require('express')
const clienteController = require('../controllers/clienteController') 
const clienteMiddleware = require('../middlewares/clientesMiddleware')
const produtosController = require('../controllers/produtosController')
const produtosMiddleware = require('../middlewares/produtosMiddleware')

const router = express.Router();
//-------------- Rotas dos clientes ---------------------------/
router.get('/', (req, res) => res.status(200).send('Router world'))

router.get('/clientes', clienteController.getAll)

router.post('/cadastro', clienteMiddleware.validateBody, clienteController.createCliente)

router.post('/login', clienteMiddleware.validPassAndEmail, clienteController.clientLogin)

router.delete('/clientes/:id', clienteController.deletaCliente)

router.put('/clientes/:id', clienteController.updateCliente)
//-------------------------------------------------------------/

router.get('/produtos', produtosController.getAll)

router.post('/produtos/cadastro', produtosMiddleware.validateBody, produtosController.createProduto)
module.exports = router;

