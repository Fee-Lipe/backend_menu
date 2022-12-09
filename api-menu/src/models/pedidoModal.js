const conn = require('./connection');

const getAll = async () => {
    const pedido = await conn.execute('SELECT * FROM pedido');
    return pedido[0];
}

const criarPedido = async (req) => {
    const{id_cliente} = req;
    console.log(id_cliente)
    const query = 'INSERT INTO pedido(id_cliente) VALUES (?)';
    const [criarPedido] = await conn.execute(query, [id_cliente]);
    console.log(criarPedido)
    return {insertId: criarPedido.insertId};
}
/*
const cadastrarPedidoProduto = (produto) => {
    const {id_pedido, id_produto, qtd_ind} = produto

}*/


module.exports = {
    getAll,
    criarPedido
}