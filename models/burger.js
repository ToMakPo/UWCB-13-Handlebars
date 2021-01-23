const orm = require('../config/orm')

const burger = {
    getAll: function(cb) {
        orm.selectAll(cb)
    },
    create: function(name, cb) {
        return orm.insertOne(name, cb)
    },
    eat: function(id, cb) {
        return orm.updateOne(id, cb)
    }
}

module.exports = burger