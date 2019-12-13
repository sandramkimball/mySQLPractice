//Here we define the Queries that will fetch the specified data we want.
import React, {useState} from 'react';
import {useQuery} from '@apollo/react-hooks';
import {gql} from 'apollo-boost'; //used to create actual queries.
import Chart from './Chart';
import FilterBy from './FilterBy';

//Wrap in gql function to parse
const TRADERS_QUERY = gql`
    query getUsers($after: String){
        tradersUsers(age: $age){
            id
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

function GetData(){
    const [variables, setVariables] = useState({});
    const {loading, error, data} = useQuery(TRADERS_QUERY);

    if(loading) return <h2>Loading...</h2>
    if(error) console.log('YO QUERY DATA FAILED: ', error)
    if(data) console.log('YO QUERY DATA TRUE!', data)
        
    return(
        <div>
            <Chart data={data.tradersUsers}/>
            <button onClick={(e)=> !variables.hasOwnProperty('age') ? setVariables({age: '20-30'}) : setVariables({})}>change age state</button>
            {data.tradersUsers.map(trader=> console.log(trader))}
            
        </div>
    )     
};



export default GetData;