const db = require('../db');

class BasketController {


	async getBasket(req, res) {
		
			const basketId = parseInt(req.params.categoryId);
			const basket = await db.query('select * from basket where categoryId = $1', [basketId]);
			res.json(category.rows);
		
	}

	async getBasketList(req, res) {
		try{
			const listOfCategory = await db.query('SELECT * FROM basket;');
			res.json(listOfBasket.rows);

		}catch(err){
         throw Error (err.message)
        // console.log(err.name, err.message)
		}
	}

	
	}


module.exports = new BasketController();
