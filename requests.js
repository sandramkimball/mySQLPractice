const data = require ('./model_data/model.js');

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

   for (let arg in args){
       filtered = filtered.filter(trader=>trader[arg] === args[arg])
   }

    return filtered;
};

module.export = {getLanceData, getTradersUsers};

