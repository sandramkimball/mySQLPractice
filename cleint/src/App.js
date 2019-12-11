import React from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo'
import {InMemoryCache} from 'apollo-cache-inmemory';
import {HttpLink} from 'apollo-link-http';


import gql from 'graphql-tag';
client
.query({
  query: gql`
  query GetUser{
    name
  }`
}).then(result=> console.log(result))

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'http://localhost:4000/'
});

const client = new ApolloClient({
  cache, 
  link
});

function App() {
  return (
    <div className="App">
      <h1>GraphQL - MySQL - Apollo App Test</h1>
    </div>
  );
}

export default App;
