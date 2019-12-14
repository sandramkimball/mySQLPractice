
const ParseData = (arg, data, indexBy) => {
    let returnedItems = [];
    // console.log('ReturnedItems in ParseData:', returnedItems)
    const indices = getIndex(data, 'gender', returnedItems);

    switch(arg){
        case('gender'):
            returnedItems.push(...setGender(data, indexBy, returnedItems))

        case('education'):
            returnedItems.push(...setEducation(data, indexBy, returnedItems))

        case('language'):
            returnedItems.push(...setLanguage(data, indexBy, returnedItems))

        case('country_of_residence'):
            returnedItems.push(...setResidence(data, indexBy, returnedItems))
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
        language: 'English',
        English: data.filter(trader=>trader.language==='English').length
    }

    let Swahili = {}
    Swahili = {
        language: 'Swahili',
        Swahili: data.filter(trader=>trader.language==='Swahili').length
    }

    let Luganda = {}
    Luganda = { 
        language: 'Luganda', 
        Luganda: data.filter(trader=> trader.langauge === 'Luganda').length
    }

    let Kinyarawanda = {}
    Kinyarawanda = { 
        language: 'Kinyarawanda', 
        Luganda: data.filter(trader=> trader.langauge === 'Kinyarawanda').length
    }

    let Lukiga = {}
    Lukiga = { 
        language: 'Lukiga', 
        Luganda: data.filter(trader=> trader.langauge === 'Lukiga').length
    }

    return [English, Swahili, Luganda, Kinyarawanda, Lukiga];
}

const setResidence = data => {
    let Kenya = {}
    Kenya = {
        country_of_residence: 'KEN',
        Kenya: data.filter(trader=>trader.country_of_residence ==='KEN').length
    }

    let Uganda = {}
    Uganda ={
        country_of_residence: 'UGA',
        Uganda: data.filter(trader=> trader.country_of_residence === 'UGA').length
    }

    let Rwanda = {}
    Rwanda = {
        country_of_residence: 'RWA',
        Rwanda: data.filter(trader=> trader.country_of_residence === 'RWA').length
    }

    return [Kenya, Uganda, Rwanda]
}


export default ParseData;