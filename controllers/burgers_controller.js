const express = require('express')
const burger = require('../models/burger')

const router = express.Router()

router.get('/', (req, res) => {
    burger.getAll(data => {
        const lists = {
            availableBurgers: [],
            eatenBurgers: []
        }

        for (const burger of data) {
            lists[`${burger.devoured ? 'eaten' : 'available'}Burgers`].push(burger)
        }

        res.render('index', lists)
    })
})
router.post('/newBurger', (req, res) => {
    burger.create(req.body.name, data => {
        res.json(data)
    })
})
router.post('/eatBurger', (req, res) => {
    burger.eat(req.body.id, data => {
        res.json(data)
    })
})

module.exports = router