//Here we define the actual queries that will fetch specified data we want.

import React, {useEffect, useState} from 'react';
import {Query} from 'react-apollo';//wrapping component
import gql from 'graphql-tag';//used to create actual queries.
import axios from 'axios';
// import Chart from './Chart';
require('dotenv').config();

//Wrap in gql function to parse into AST
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
    const [tradersData, setTradersData] = useState([])
    
    useEffect(()=> {
        axios
        // .get(`${process.env.REACT_APP_BACKEND_URL}`)
        .get(`http://localhost:4000/api/data`)
        .then(res=> {
            console.log('Response returned!', res);
            setTradersData(res.data);
            console.log('Did tradersData set?', tradersData)
        })
        .catch(err=>{
            console.log('Error getting data: ', err)
        })
    }, [tradersData])
        
    return(
        <div>
            {/* set query below to above defined query */}
            <Query query={TRADERS_QUERY}>
                {({loading, error, data}) => {
                    if(loading) return <h2>Loading...</h2>
                    if(error) console.log(error)
                    if(data) console.log('Data in Queries.js', data)

                    return(
                        <div>
                            <p>This should be the Chart</p>
                            {/* {data.tradersData.map(trader=> (
                                <div>
                                    <p>This should be the Chart</p>
                                    <Chart key={trader.id} tradersData={tradersData}/>
                                </div>
                            ))} */}
                        </div>
                    )
                }}
            </Query>
        </div>
    )     
};

export default Queries;