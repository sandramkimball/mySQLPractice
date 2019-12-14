//Here we define the Queries that will fetch the specified data we want.
import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import {gql} from 'apollo-boost'; 
// import ParseData from './ParseData';

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
    if(error) console.log('YO\' QUERY DATA FAILED!', error)
    if(data) console.log('SOMEBODY GOT QUERY DATA!', data)
    // let chartData = ParseData('gender', data.tradersUsers)

    return(
        <div>
            {/* <FilterBy chartData={data}/>*/}
        </div>
    )     
};



export default GetData;