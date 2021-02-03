const connection = require('../config/connection.js')

function runQuery(query, cb) {
    connection.query(query, function(err, result) {
        if (err) throw err
        cb(result)
    })
}

const orm = {
    selectAll: function(cb) {
        runQuery('SELECT * FROM burgers', cb)
    },
    insertOne: function(burgerName, cb) {
        runQuery(`INSERT INTO burgers (burger_name) VALUE ('${burgerName}')`, cb)
    },
    updateOne: function(id, cb) {
        runQuery(`UPDATE burgers SET devoured = true WHERE id = ${id}`, cb)
    },
}

module.exports = orm