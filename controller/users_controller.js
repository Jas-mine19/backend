const db = require('../db');

class UsersController {
	async createUsers(req, res) {
		
		try{
			const {usersname,login,password} = req.body;
		  	await db.query('INSERT INTO users(usersname,login,password) VALUES($1,$2,$3);', [usersname,login,password]);
			res.json('add it');
		}catch(err){
         throw Error (err.message)
		}
			
		
	}

	async getUsers(req, res) {
		
			const usersId = parseInt(req.params.usersId);
			const users = await db.query('select * from users where usersId = $1', [usersId]);
			res.json(users.rows);
		
	}

	async getUsersList(req, res) {
		try{
			const listOfUsers = await db.query('SELECT * FROM users;');
			res.json(listOfUsers.rows);

		}catch(err){
         throw Error (err.message)
        // console.log(err.name, err.message)
		}
	}


	
	}


module.exports = new UsersController();
