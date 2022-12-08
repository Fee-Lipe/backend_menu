const conn = require('./connection');

const getAll = async () => {
    const func = await conn.execute('SELECT * FROM funcionarios');
    return func[0];
}

const createFunc = async(func) => {
    const{nome, cpf, email, telefone } = func;
    const query = 'INSERT INTO funcionarios(nome, cpf, email, telefone) VALUES (?, ?, ?, ?)';
    const [createFunc] = await conn.execute(query, [nome, cpf, email, telefone])
    return {insertId: createFunc.insertId};
}

module.exports = {
    getAll,
    createFunc
}