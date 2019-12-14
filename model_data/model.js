const db = require('../database/dbconfig')

const getData = () => {
   return db('platform_sessions as ps')
      .leftJoin('information_demand as id', 'ps.cell_num', 'id.cell_num')
      .leftJoin('request_type as rt', 'id.request_type_id', 'rt.id')
      .limit(45)
}

const getUsers = () => {
   return db('users')
   .limit(45)
}


module.exports = { getData, getUsers }