//Here we define the Queries that will fetch the specified data we want.
import React, {useState} from 'react';
import {useQuery} from '@apollo/react-hooks';
import {gql} from 'apollo-boost'; 
// import ParseData from './ParseData';
// import FilterBy from './FilterBy';

const TRADERS_QUERY = gql`
    query Users($after: String){
        tradersUsers(age: $age){
            age
            gender
            education
            produce
            country_of_residence
            language
        }
    }
`;

const GetData = () => {
    const [variables, setVariables] = useState({});
    const {loading, error, data} = useQuery(TRADERS_QUERY);

    if(loading) return <h2>Loading...</h2>
    if(data) console.log('YO QUERY DATA TRUE!', data)
    if(error) console.log('YO QUERY DATA FAILED!', error)

    // let chartData = ParseData('gender', data.tradersUsers)
        
    return(
        <div>
            {/* <FilterBy chartData={data}/>
            {data.tradersUsers.map(trader=> console.log('Traders in GetData', trader))} */}
        </div>
    )     
};



export default GetData;