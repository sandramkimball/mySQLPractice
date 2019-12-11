const data = require ('./api/model.js');

//Functions
var getLanceData = async args => {
    const lanceData = await data.getData();
    if (args.request_value) {
        const {request_value} = args;
        return lanceData.filter(trader=> trader.request_value === request_value)
    } else return lanceData;
};

var getTradersUsers = async args => {
    const traderUsers = await data.getUsers()
    let filtered = traderUsers;
    
    var argsArray = Array.prototype.slice.call(arguments)
    
    if(!args.length){
        return filtered;
    }

    if(argsArray){
        argsArray.forEach(argument => {
            filtered = filtered.filter(trader => trader[`${argument}`] === argument);
    })

    return filtered;
    }
};

module.export = {getLanceData, getTradersUsers};

