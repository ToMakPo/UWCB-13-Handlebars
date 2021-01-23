const orm = require('../config/orm')

const burger = {
    getAll: function(devoured) {
        return orm.selectAll(devoured)
    },
    create: function(name) {
        return orm.insertOne(name)
    },
    eat: function(id) {
        return orm.updateOne(id)
    }
}

module.exports = burger