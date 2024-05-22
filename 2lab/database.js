const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    password: 'Justice32252bb',
    host: 'localhost',
    port: 5432,
    database: "equipment_failure"
})

module.exports = pool
