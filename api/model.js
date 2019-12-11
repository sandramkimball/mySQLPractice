const db = require('../database/dbConfig');

const getData = () => {
    return db('platform_sessions as psess')
    .leftJoin('information_demand as info', 'psess.cell_num', 'id.cell_num')
    .leftJoin('request_type as req', 'info.request_type_id', 'req.id')
    .limit(50)
}

const getUsers = () => {
    return db('users')
}

const getTraders = () => {
    return db('traders')
}



module.exports = {getData, getUsers, getTraders};