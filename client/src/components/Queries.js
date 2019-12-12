import React, {Fragnment} from 'react';
//Fragments groups list of child w/out adding extra nodes to DOM. same as useQuery?
import {useQuery} from '@apollo/react-hooks';
import gql from 'graphql-tag';
import {Chart} from './Chart';

//wrapping in gql function to parse it into an AST
const TRADERS_QUERY = gql`
    query TRADERS_QUERY{
        tradersUsers(age: '10-20'){
            age
            gender
            education
            crossing_frequency
            primary_income
        }
    }
`;

class Queries extends React.Component(){
    constructor(){
        super();
        this.state= {
            traderData: []
        }
    };

    render(){
        return(
            <useQuery query={TRADERS_QUERY}>
                {
                    ({loading, error, data}) => {
                        if(loading) return <h2>Loading...</h2>
                        if(error) console.log(error)
                        console.log(data)
                        return <Chart data={data.tradersData}/>
                    }
                }
            </useQuery>
        )
    }        
};