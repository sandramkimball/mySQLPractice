//Here we define the actual queries that will fetch specified data we want.

import React, {useState} from 'react';
import {Query} from 'react-apollo';//wrapping component
import {useQuery} from '@apollo/react-hooks';
import gql from 'graphql-tag';//used to create actual queries.
import axios from 'axios';
// import Chart from './Chart';

//Wrap in gql function to parse into AST
// const TRADERS_QUERY = gql`
//     tradersUsers{
//         age
//         gender
//         education
//         crossing_frequency
//         primary_income

//     }
// `;


const TRADERS_QUERY = gql`
    query Users{
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
    const [tradersUsers, setTradersUsers] = useState([])
    
    useQuery(
        
    )
    axios.get(`http://localhost:4000/api/data`).then(res=> {
        setTradersUsers(res.data);
        console.log('Did tradersData set?', tradersUsers)
    })
        .catch(err=>{console.log('Error getting data: ', err)
    })
        
    return(
        <div>
            {({loading, error, data}) => {
                if(loading) return <h2>Loading...</h2>
                if(error) console.log(error)
                if(data) console.log('QUERY DATA TRUE!', data)

                return(
                    <div>
                        <p>TradersUsers Mapping Below:</p>
                        {data.tradersUsers.map(trader=> (
                            <div>
                                <p>trader age: {trader.age}</p>
                                {/* <Chart key={trader.id} tradersUsers={tradersUsers}/> */}
                            </div>
                        ))}
                    </div>
                )
            }}
        </div>
    )     
};



export default Queries;