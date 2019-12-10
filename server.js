require('dotenv').config();
const express = require('express');
const dataRouter = require('./api/server-router.js');
const express_graphql = require('express-graphql');
const {buildSchema} = require('graphql');


//GraphQL Schema
const schema = buildSchema(`
    type Query {
        course(id:Int!): Course
        courses(topic: String): [Course]
    }

    type Course {
        id: Int
        title: String
        author: String
        description: String
        topic: String
        url: String
    }
`);

var coursesData =[
    {
        id: 1,
        title: 'String',
        author: 'String',
        description: 'String',
        topic: 'String',
        url: 'String',   
    },
    {
        id: 2,
        title: 'String',
        author: 'String',
        description: 'String',
        topic: 'String',
        url: 'String',   
    }
]


var getCourse = function(args){
    var id = args.id;
    return coursesData.filter(course=> {
        return course.id === id;
    })[0];
};

var getCourses = function(args){
    if (args.topic){
        var topic = args.topic;
        return coursesData.filter(course => course.topic === topic)
    } else {
        return coursesData;
    }
};

//Root Resolver (declare required functions)
var root = {
    course: getCourse, 
    courses: getCourses
}

//Create Express server and GraphQL endpoint
const server = express();
server.use('/graphql', express_graphql({
//param with configuration obj
    schema: schema,
    rootValue: root,
    graphiql: true
}));

module.exports = server;