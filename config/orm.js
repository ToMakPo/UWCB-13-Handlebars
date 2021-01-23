const connection = require('../config/connection.js')

const orm = {
    selectAll: function() {
        const query = 'SELECT * FROM burgers'
    },
    insertOne: function(burgerName) {
        const query = `INSERT INTO burgers (burger_name) VALUE ('${burgerName}')`
    },
    updateOne: function(id, devoured=true) {
        const query = `UPDATE burgers SET devoured = ${devoured} WHERE id = ${id}`
    },
}

module.exports = orm