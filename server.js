require('dotenv').config();
const express = require('express');
const server = express();
const graphQLHTTP= require('express-graphql');
const cors = require('cors');
const dataRouter = require('./model_data/router.js');
const schema = require('./schema');
const {getLanceData, getTradersUsers} = require ('./requests.js');

//Roots
const root = {
    tradersData: getLanceData, 
    tradersUsers: getTradersUsers,
}

server.use(cors());
server.use(express.json())
server.use('/api/data', dataRouter)

//Express server with GraphQL Endpoint
server.use('/graphql', graphQLHTTP({
    schema,
    rootValue: root,
    graphiql: true
}));


server.listen(4000)
console.log('Port 4000 is Listening...')

module.exports = server;