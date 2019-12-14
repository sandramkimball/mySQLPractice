
const ParseData = (arg, data, indexBy) => {
    let returnedItems = [];
    console.log('ReturnedItems in ParseData:', returnedItems)
    const indices = getIndex(data, 'gender', returnedItems);

    switch(arg){
        case('gender'):
            returnedItems.push(...setGender(data, indexBy, returnedItems))

        case('education'):
            returnedItems.push(...setEducation(data, indexBy, returnedItems))

        case('language'):
            returnedItems.push(...setLanguage(data, indexBy, returnedItems))
    }
    return returnedItems;
};   

const getIndex = (data, indexBy, array) => {
    const cleanedArr = data.map(item=> item = { [`${indexBy}`]: item[`${indexBy}`] })
    const reducedArr = [...new Set(cleanedArr.map(JSON.stringify))].map(JSON.parse);
    return reducedArr;
}

const setGender = data => {
    let femaleUsers = {};
    femaleUsers = {
        gender: 'Female',
        Female: data.filter(trader=>trader.gender==='Female').length
    }

    let maleUsers = {};
    maleUsers = {
        gender: 'Male',
        Male: data.filter(trader=>trader.gender==='Male').length
    }
    return [femaleUsers, maleUsers];
}

const setEducation = data => {
    let PrimaryEd = {}
    PrimaryEd = {
        education: 'Primary',
        Primary: data.filter(trader=>trader.education==='Primary').length
    }

    let SecondaryEd = {}
    SecondaryEd = {
        education: 'Secondary',
        Primary: data.filter(trader=>trader.education==='Secondary').length
    }

    let UniversityEd = {}
    UniversityEd = {
        education: 'University/College',
        Primary: data.filter(trader=>trader.education==='Primary').length
    }

    let NoEd = {}
    NoEd = {
        education: 'NoEducation',
        NoEducation: data.filter(trader=>trader.education==='No formal education').length
    }

    return [PrimaryEd, SecondaryEd, UniversityEd, NoEd]
}

const setLanguage = data => {
    let English = {}
    English = {
        education: 'English',
        English: data.filter(trader=>trader.language==='English').length
    }

    let Swahili = {}
    Swahili = {
        education: 'Swahili',
        Swahili: data.filter(trader=>trader.language==='Swahili').length
    }
}


export default ParseData;