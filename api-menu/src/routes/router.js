const express = require('express')
const clienteController = require('../controllers/clienteController') 
const clienteMiddleware = require('../middlewares/clientesMiddleware')
const produtosController = require('../controllers/produtosController')
const produtosMiddleware = require('../middlewares/produtosMiddleware')
const funController = require('../controllers/funcionarioController')
const funMiddleware = require('../middlewares/funcionarioMiddleware')
const faleConoscoController = require('../controllers/faleConoscoController')
const faleConoscoMiddleware = require('../middlewares/faleConoscoMiddleware')
const pedidoController = require('../controllers/pedidoController')
const pedidoMiddleware = require('../middlewares/pedidoMiddleware')


const { route } = require('../app')

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

//-----------------------Fala Conosco------------------------------/

router.get('/faleConosco', faleConoscoController.getAll)

router.post('/faleConosco/cadastro', faleConoscoMiddleware.validateBodyMenssage, faleConoscoController.createMenssage)

//--------------------------Pedido_Produto-------------------------------------//

router.get('/pedido', pedidoController.getAll)

router.post('/pedido/cadastro', pedidoMiddleware.validateBodyPedido, pedidoController.criarPedido)



module.exports = router;

