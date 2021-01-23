const express = require('express')
const burger = require('../models/burger')

const router = express.Router()

router.get('/', function(req, res) {
    burger.getAll(function(data) {
        console.log('router > get > data:\n', data);
    })
})
router.post('/api/:name', function(req, res) {
    console.log('router > post > req.params:\n', req.params);
    // burger.create()
})
router.put('/api/:id', function(req, res) {
    console.log('router > put > req.params:\n', req.params);
    // burger.eat()
})

module.exports = router