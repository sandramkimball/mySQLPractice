const db = require('../database/dbConfig');

const getData = () => {
    return db('platform_sessions as session')
    .leftJoin('information_demand as info', 'session.cell_num', 'info.cell_num')
    .leftJoin('request_type as req', 'info.request_type_id', 'req.id')
    .limit(50)
}

const getUsers = () => {
    return db('users').whereNotNull('args')
}


module.exports = {getData, getUsers};