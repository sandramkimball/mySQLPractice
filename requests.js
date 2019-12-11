//Functions
var getLanceData = async args => {
    const lanceData = await data.getData();
    
    if (args.request_value) {
        const {request_value} = args;
        return lanceData.filter(trader=> trader.request_valie === request_value)
    } else return lanceData;
};

var getTradersUsers = async args => {
    let filtered = [];
    const traderUsers = await data.getUsers()

    if (args.gender){
        const {gender} = args;
        filtered = traderUsers.filter(trader=> trader.gender === gender)
    } 

    if (args.age) {
        const {age} = args;
        filtered = traderUsers.filter(trader=>trader.age === age)
    }
    return filtered;
};

var getTradersData = async args => {
    let filtered = [];
    const traderData = await data.getTraders()
    if (sess_id){
        const {sess_id} = args;
        filtered = traderData.filter(data=> data.sess_id === sess_id)
    }
    if (cell_num){
        const {cell_num} = args;
        filtered = traderData.filter(data=> data.cell_num === cell_num)
    }
    return filtered
};

module.export = requests;


//TIMEOUT FUNCTIONS
// function dataRefresh(){
//     setRefresh = setTimeout(alertFunc, 1000 * 60 * 60 * 24);
// }
// function alertFunc(){
//     alert("Hello")
// }