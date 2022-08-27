const db = require('../db');

class AdvertisingController {
	async createAdvertising(req, res) {
		
		try{
			const {discount,information} = req.body;
		  	await db.query('INSERT INTO advertising(discount,infromation) VALUES($1,$2);', [discount,information]);
			res.json('add it');
		}catch(err){
         throw Error (err.message)
		}
			
		
	}

	async getAdvertising(req, res) {
		
			const cardId = parseInt(req.params.cardId);
			const advertising = await db.query('select * from advertising where cardId = $1', [cardId]);
			res.json(advertising.rows);
		
	}

	async getAdvertisingList(req, res) {
		try{
			const listOfFlower = await db.query('SELECT * FROM advertising;');
			res.json(listOfAdvertising.rows);

		}catch(err){
         throw Error (err.message)
        // console.log(err.name, err.message)
		}
	}

	
	}


module.exports = new AdvertisingController();
