import React, {Fragnment} from 'react';
//Fragments^^ groups list of child without adding extra nodes to DOM
import {useQuery} from '@apollo/react-hooks';
import gql from 'graphql-tag';
import {UserTile} from '../components';

//wrapping in gql function to parse it into an AST
const GET_USERS = gql`
    query users($after: String){
        users(after: $after){}
        }
`;

export default function Users(){
    const {data, loading, error} = useQuery(GET_USERS);
    if(loading) return <Loading/>;
    if(error) return <p>Error</p>;

    return(
        <Fragment>
            <Header/>
            {data.users &&
            data.users.usrs &&
            data.users.users.map(user=> (
                <UserTile
                    key={user.id}
                    user={user}
                />
            ))}
        </Fragment>
    );
};