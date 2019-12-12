//Here we define the actual queries that will fetch specified data we want.

import React, {Fragnment} from 'react';
//Fragments groups children in a dummy DOM
import {Query} from 'react-apollo';//wrapping component
import gql from 'graphql-tag';//used to create actual queries.
import {Chart} from './Chart';

//wrapping in gql function to parse it into an AST
const TRADERS_QUERY = gql`
    query TRADERS_QUERY{
        tradersUsers{
            age
            gender
            education
            crossing_frequency
            primary_income
        }
    }
`;

function Queries(){

        return(
            <div>
                <p>Launching from Queries.js:</p>
                {/* set query below to abaove defined query */}
                <Query query={TRADERS_QUERY}>
                    {({loading, error, data}) => {
                            if(loading) return <h2>Loading...</h2>
                            if(error) console.log(error)
                            console.log(data)
                            return <h1>Test</h1>
                            // return <Chart data={data.tradersData}/>
                    }}
                </Query>
            </div>
        )     
};