const express = require('express')
const clienteController = require('../controllers/clienteController') 
const clienteMiddleware = require('../middlewares/clientesMiddleware')
const produtosController = require('../controllers/produtosController')
const produtosMiddleware = require('../middlewares/produtosMiddleware')
const funController = require('../controllers/funcionarioController')
const funMiddleware = require('../middlewares/funcionarioMiddleware')

const router = express.Router();
//-------------- Rotas dos clientes ---------------------------/
router.get('/', (req, res) => res.status(200).send('Router world'))

router.get('/clientes', clienteController.getAll)

router.post('/cadastro', clienteMiddleware.validateBody, clienteController.createCliente)

router.post('/login', clienteMiddleware.validPassAndEmail, clienteController.clientLogin)

router.delete('/clientes/:id', clienteController.deletaCliente)

router.put('/clientes/:id', clienteController.updateCliente)
//-----------------------ROTAS PRODUTOS------------------------------/

router.get('/produtos', produtosController.getAll)

router.get('/produtos/:id', produtosController.getOne)

router.post('/produtos/cadastro', produtosMiddleware.validateBody, produtosController.createProduto)

router.delete('/produtos/:id', produtosController.deleteProdutos)

//-----------------------ROTAS FUNCIONARIOS------------------------------/

router.get('/func', funController.getAll)

router.post('/func/cadastro', funMiddleware.validateBody, funController.createFunc)

module.exports = router;

