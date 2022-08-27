const db = require('../db');

class FavoriteController {


	async getFavorite(req, res) {
		
			const favoriteId = parseInt(req.params.categoryId);
			const favorite = await db.query('select * from favorite where favoriteId = $1', [basketId]);
			res.json(favorite.rows);
		
	}

	async getFavoriteList(req, res) {
		try{
			const listOfFavorite = await db.query('SELECT * FROM favorite;');
			res.json(listOfFavorite.rows);

		}catch(err){
         throw Error (err.message)
        // console.log(err.name, err.message)
		}
	}

	
	}


module.exports = new FavoriteController();
