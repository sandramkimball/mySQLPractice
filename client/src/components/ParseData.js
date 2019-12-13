

 const ParseData = (arg, data, indexBy) => {
    let returnedItems = [];
    console.log('ReturnedItems in ParseData:', returnedItems)

    switch(arg){
        case('gender'):
            setGender(data);
            returnedItems.push(...setGender(data))

        case('education'):
            setEducation(data)
            returnedItems.push(...setEducation(data))

        case('language'):
            setLanguage(data)
            returnedItems.push(...setLanguage(data))
    }
};   

// export {returnedItems};


// const getIndex = (data, indexBy, array){
//     const sets = new Set{...data.gender};
//     return array;
// }

const setGender = data => {
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
    return [femaleUsers, maleUsers];
}

const setEducation = data => {
    let PrimaryEd = {}
    PrimaryEd = {
        education: 'Primary',
        Primary: data.tradersUsers.filter(trader=>trader.education==='Primary').length
    }

    let SecondaryEd = {}
    SecondaryEd = {
        education: 'Secondary',
        Primary: data.tradersUsers.filter(trader=>trader.education==='Secondary').length
    }

    let UniversityEd = {}
    UniversityEd = {
        education: 'University/College',
        Primary: data.tradersUsers.filter(trader=>trader.education==='Primary').length
    }

    let NoEd = {}
    NoEd = {
        education: 'NoEducation',
        NoEducation: data.tradersUsers.filter(trader=>trader.education==='No formal education').length
    }

    return [PrimaryEd, SecondaryEd, UniversityEd, NoEd]
}

const setLanguage = data => {
    let English = {}
    English = {
        education: 'English',
        English: data.tradersUsers.filter(trader=>trader.language==='English').length
    }

    let Swahili = {}
    Swahili = {
        education: 'Swahili',
        Swahili: data.tradersUsers.filter(trader=>trader.language==='Swahili').length
    }
}
