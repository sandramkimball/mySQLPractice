require('dotenv').config();
const express = require('express');
const server = express();
const dataRouter = require('./api/router.js');
const data = require('./api/model.js');
const express_graphql = require('express-graphql');
const {buildSchema} = require('graphql');
// const cors = require('cors');

//Define GraphQL Schema: declare query types (and resolvers).
const schema = buildSchema(`
    type Query {
        tradersData(request_value: String): [SautiTrader]
        tradersUsers(gender: String, age: String): [User]
    }
    type Mutation {
        updateSautiTrader(): [SautiTrader]
    }
    type SautiTrader {
        sess_id: Int
        cell_num: String
        created_date: String
        update: String
        platform_id: String
        request_value: String
        request_type: String
    }
    type User {
        id: Int
        gender: String
        age: String
        education: String
        crossing_freq: String
        produce: String
        language: String
        country_of_residence: String
    }
`);



//Functions
var getLanceData = async args => {
    const lanceData = await data.getData();
    
    if (args.request_value) {
        const {request_value} = args;
        return lanceData.filter(trader=> trader.request_valie === request_value)
    } else return lanceData;
};

var getTradersUsers = async args => {
    let filtered = [];
    const traderUsers = await data.getUsers()

    if (args.gender){
        const {gender} = args;
        filtered = traderUsers.filter(trader=> trader.gender === gender)
    } 

    if (args.age) {
        const {age} = args;
        filtered = traderUsers.filter(trader=>trader.age === age)
    }
    return filtered;
};

var getTradersData = async args => {
    let filtered = [];
    const traderData = await data.getTraders()
    if (sess_id){
        const {sess_id} = args;
        filtered = traderData.filter(data=> data.sess_id === sess_id)
    }
    if (cell_num){
        const {cell_num} = args;
        filtered = traderData.filter(data=> data.cell_num === cell_num)
    }
    return filtered
};



//Root Resolver (decalre and assign required functions)
var root = {
    tradersData: getLanceData, 
    tradersUsers: getTradersUsers,
    tradersData: getTradersData,
    updateTradersUsers: updateTradersUsers
}

//Create Express server and GraphQL endpoint
server.use('/graphql', express_graphql({
//params with configuration obj
    schema: schema,
    rootValue: root,
    graphiql: true
}));

server.use('/api/data', dataRouter)
module.exports = server;