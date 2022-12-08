const conn = require('./connection');

const getAll = async () => {
    const produtos = await conn.execute('SELECT * FROM produtos');
    return produtos[0];
}

const getOne = async (id, res) => {
    const produtos = await conn.execute('SELECT * FROM produtos WHERE id_produto = ?', [id]);
    if(produtos[0].length < 1){
        console.log(produtos[0])
        return res.status(401).send({mensage: 'falha'})
    }
    console.log(produtos[0])
    return res.status(200).json(produtos[0]);
}

const createProduto = async(produto) => {
    const{nome, descricao, preco, tipo } = produto;
    const query = 'INSERT INTO produtos(nome, descricao, preco, tipo) VALUES (?, ?, ?, ?)';
    const [createProduto] = await conn.execute(query, [nome, descricao, preco, tipo])
    return {createProduto: createProduto.insertId};
}

const deleteProdutos = async(id, res) => {
    try {
        const removeProdutos = await conn.execute('DELETE FROM produtos WHERE id_produto = ?', [id]);
        return res.status(204).json();
    } catch (error) {
        return res.status(400).json({mensage: "Erro tabela"});
    }
}

module.exports = {
    getAll,
    createProduto,
    deleteProdutos,
    getOne
}