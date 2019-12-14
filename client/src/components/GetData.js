//Here we define the Queries that will fetch the specified data we want.
import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import {gql} from 'apollo-boost'; 
import ParseData from './ParseData';
import FilterBy from './FilterBy';

const TRADERS_QUERY = gql`
    query getUsers($age: String){
        tradersUsers(age: $age){
            id
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
    // const [variables, setVariables] = useState({});
    const {loading, error, data} = useQuery(TRADERS_QUERY);

    if(loading) return <h2>Loading...</h2>
    if(error) console.log('YO\' SERVER GOT UH PROBLEM!', error)

    let chartData = ParseData('gender', data.tradersUsers)

    return(
        <div>
            <FilterBy chartData={chartData}/>
        </div>
    )     
};



export default GetData;