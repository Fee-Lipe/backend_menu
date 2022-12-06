const express = require('express')
const router = require('./routes/router')
const cors = require('cors')

const app = express();

app.use(express.json())
app.use(cors({origin:true}))
app.use(router)

module.exports = app;