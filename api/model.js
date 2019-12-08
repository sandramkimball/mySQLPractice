const db = require('../database/dbConfig');

const getData =()=> {
    return db
    .select('*')
    .from('platform_sessions').limit(50)
}

module.exports = {getData};