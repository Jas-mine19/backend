const Pool = require('pg').Pool
const pool = new Pool({
	user : 'postgres',
	password : "juliya.04",
	host : "localhost",
	port : 5432,
	database : "flower_db"
})

module.exports = pool