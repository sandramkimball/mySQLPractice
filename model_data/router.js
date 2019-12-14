const router = require('express').Router();
const knex = require('./model')

//GET
router.get('/', (req, res)=> {
    knex.getData()
    .then(data=> {
        res.status(200).json(data)
    })
    .catch(err=> {
        console.log('Error in Router: ', err)
        res.status(500).json({Error: 'Router.js has problem getting data.'});
    })
});

module.exports = router;