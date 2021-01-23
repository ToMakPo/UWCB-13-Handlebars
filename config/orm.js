const connection = require('../config/connection.js')

const orm = {
    selectAll: function(devoured) {
        let query = 'SELECT * FROM burgers'
        if (devoured != null) query += ' WHERE devoured = ' + devoured
    },
    insertOne: function(burgerName) {
        const query = `INSERT INTO burgers (burger_name) VALUE ('${burgerName}')`
    },
    updateOne: function(id) {
        const query = `UPDATE burgers SET devoured = true WHERE id = ${id}`
    },
}

module.exports = orm