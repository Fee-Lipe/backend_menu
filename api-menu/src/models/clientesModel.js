const conn = require('./connection');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const getAll = async () => {
    const clientes = await conn.execute('SELECT * FROM clientes');
    return clientes[0];
}


const createCliente = async (cliente) => {
    const {nome, usuario, email, senha} = cliente
    const senhaCrypt = bcrypt.hash(senha, 10, (errBcrypt, hash) => {
        if(errBcrypt){return console.log("triste")}
        const query = 'INSERT INTO clientes(nome, usuario, email, senha) VALUES (?, ?, ?, ?)';
        const createCliente =  conn.execute(query, [nome, usuario, email, hash]);
        return {createCliente: createCliente.insertId};
    })   
    
}

const clientLogin = async (cliente, res) => {
    const{email, senha} = cliente;
    const query = 'SELECT * FROM clientes WHERE email = ?';
    const validaUser = await conn.execute(query, [email]);
    if(validaUser.length < 1){
        return res.status(401).send({mensage: 'falha'})
    }
    bcrypt.compare(senha, validaUser[0][0].senha, (err, resul) => {
        if(err){
            return res.status(401).send({mensage: 'falha'})
        }
        if(resul){
            const token = jwt.sign({
                id_cliente: validaUser[0][0].id_cliente,
                email: validaUser[0][0].email
            }, 
            process.env.JWT_KEY,
            {
                expiresIn: "1h"
            })
            console.log(validaUser[0][0].senha)
            return res.status(200).send({ 
                mensage: 'auntenticado',
                token: token
            })
        }
        return res.status(401).send({mensage: 'falha'})
    })
    
}

const deletaCliente = async (id) => {
    const removeCliente = await conn.execute('DELETE FROM clientes WHERE id_cliente = ?', [id]);
    return removeCliente;
}

const updateCliente = async (id, cliente) => {
    const query = 'UPDATE clientes SET nome = ?, usuario = ?, email = ?, senha = ? WHERE id_cliente = ?';
    const {nome, usuario, email, senha} = cliente
    const [updateCliente] = await conn.execute(query, [nome, usuario, email, senha, id]);
    return {updateCliente: updateCliente.insertId};
}


module.exports = {
    getAll,
    createCliente,
    deletaCliente,
    updateCliente,
    clientLogin
};