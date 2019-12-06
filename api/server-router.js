const router = require('express').Router();
const db = require('../database/dbConfig.js');

//GET
router.get('/', (req, res)=> {
    db
    .select('*')
    .from('')
    .then(data=> {
        res.status(200).json(data)
    });
});