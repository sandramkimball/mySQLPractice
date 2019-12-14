require('dotenv').config();
const express = require('express');
const server = express();
const graphQLHTTP= require('express-graphql');
const cors = require('cors');
const dataRouter = require('./model_data/router.js');
const schema = require('./schema.js');
const {getLanceData, getTraderUsers} = require ('./requests.js');

//Roots
const root = {
    tradersData: getLanceData, 
    tradersUsers: getTraderUsers,
}

server.use(express.json())
server.use(cors());
server.use('/api/data', dataRouter)
server.use('/graphql', graphQLHTTP({
    schema,
    rootValue: root,
    graphiql: true
}));


module.exports = server;