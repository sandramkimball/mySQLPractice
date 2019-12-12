//Here we define the actual queries that will fetch specified data we want.
import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import gql from 'graphql-tag'; //used to create actual queries.
import Chart from './Chart';

//Wrap in gql function to parse
const TRADERS_QUERY = gql`
    query traderUsers($after: String){
        User(after: $after){
            age
            gender
            education
            crossing_frequency
            primary_income
            produce
            country_of_residence
            language
        }
    }
`;

function Queries(){
    const {loading, error, data} = useQuery(TRADERS_QUERY);

    if(loading) return <h2>Loading...</h2>
    if(error) console.log('YO QUERY DATA FAILED: ', error)
    if(data) console.log('YO QUERY DATA TRUE!', data)
        
    return(
        <div>
            <p>Queries.js TradersUsers Mapping Below:</p>
            {data.tradersUsers.tradersUsers.map(trader=> (
                <div>
                    <Chart key={trader.id} props={data.tradersUsers} />
                </div>
            ))}
        </div>
    )     
};



export default Queries;