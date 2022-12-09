const conn = require('./connection');

const getAll = async () => {
    const faleConosco = await conn.execute('SELECT * FROM faleConosco');
    return faleConosco[0];
}

const createMenssage = async (req) => {
    const{email, mensagem } = req;
    const query = 'INSERT INTO faleConosco(email, mensagem) VALUES (?, ?)';
    const [createMenssage] = await conn.execute(query, [email, mensagem]);
    return {insertId: createMenssage.insertId};
}

module.exports = {
    getAll,
    createMenssage
}