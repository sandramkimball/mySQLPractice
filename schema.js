const {buildSchema} = require('graphql');

//Define GraphQL Schema: declare query types (and resolvers).
const schema = buildSchema(`
    type Query {
        //This is the root object:
        tradersData(request_value: String): [SautiTrader]
        tradersUsers(gender: String, age: String): [User]
    }
    type Mutation {
        updateSautiTrader(): [SautiTrader]
    }
    //(this is a table?)
    type SautiTrader {
        //(these are columns)
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

module.export = schema;