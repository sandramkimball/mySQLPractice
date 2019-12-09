require('dotenv').config();
const express = require('express');
const dataRouter = require('./api/server-router.js');
const express_graphql = require('express-graphql');
const {buildSchema} = require('graphyql');


//GraphQL Schema
const schema = buildSchema(`
    type Query {
        message: String
    }
`);

//Root Resolver
var root = {
    message: () => 'Sup World'
}

//Create Express server and GraphQL endpoint
const app = express();
app.use('/graphql', express_graphql({
//param with configuration obj
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(4000, ()=> console.log('Express GraphQL server on Port 4000'))


// const server = express();
// server.use('/graphql');









server.get('/', (req, res)=> {
    res.send('Connected to Server')
})

server.use('/api/data', dataRouter)






module.exports = server;