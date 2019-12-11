require('dotenv').config();
const express = require('express');
const server = express();
const schema = require('./schema');
const graphQLHTTP= require('express-graphql');
const {getLanceData, getTradersUsers} = require ('./requests.js')

//Roots
const root = {
    tradersData: getLanceData, 
    tradersUsers: getTradersUsers,
}

//Express server with GraphQL Endpoint
server.use('/graphql', graphQLHTTP({
    schema,
    rootValue: root,
    graphiql: true
}));


const dataRouter = require('./api/router.js');
server.use('/api/data', dataRouter)
module.exports = server;