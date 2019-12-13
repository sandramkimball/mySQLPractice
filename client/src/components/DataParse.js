import React from 'react'

const DataParse= (arg, data) => {
    letReturnedItems = [];
    switch(arg){
        case('gender'):
        setGender(data);
        returnedItems.push(setGender(data))
    }

}   

const setUserGender = data => {
    let femaleUsers = {};
    femaleUsers = {
        gender: 'Female',
        Female: data.tradersUsers.filter(trader=>trader.gender==='Female').length
    }

    let maleUsers = {};
    maleUsers = {
        gender: 'Male',
        Male: data.tradersUsers.filter(trader=>trader.gender==='Male').length
    }
    returns [femaleUsers, maleUsers]
}



export default DataParse;