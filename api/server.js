const express = require('express');
const dataRouter = require('../api/server-router.js');


const server = express();
server.use(express.json());

server.get('/', (req, res)=> {
    res.send('Connected to Server')
})

server.use('/data', dataRouter)

module.exports = server;