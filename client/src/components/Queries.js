//Here we define the actual queries that will fetch specified data we want.

import React, {useEffect, useState} from 'react';
import {Query} from 'react-apollo';//wrapping component
import gql from 'graphql-tag';//used to create actual queries.
import axios from 'axios';
import Chart from './Chart';

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

        this.props.getDropDownDefault(this.props.pathname);


function Queries(){
    const [chartData, setChartData] = useState([])
    
        useEffect(()=> {
            axios
        .get(`${process.env.REACT_APP_BACKEND_URL}`)
        .then(res=> {
            console.log('Response returned!');
            setChartData(res);
            })
        }, [])

        // axios
        //     // For development: ${process.env.REACT_APP_BACKEND_URL}/sessions/products/1
        //     .get(`https://sa-stage.herokuapp.com/sessions/lance/all`)
        //     .then(res => {
        //       // Log to see the response from server: console.log(res.data);
        //       this.setState({
        //         ...this.state,
        //         realData: res.data
        //       });
        //     });
    //   }
        
        return(
            <div>
                <p>Launching from Queries.js:</p>
                {/* set query below to above defined query */}
                <Query query={TRADERS_QUERY}>
                    {({loading, error, data}) => {
                            if(loading) return <h2>Loading...</h2>
                            if(error) console.log(error)
                            console.log(data)
                            return <h1>Test</h1>
                    }}
                </Query>
                <Chart chartData={chartData}/>
            </div>
        )     
};

export default Queries;