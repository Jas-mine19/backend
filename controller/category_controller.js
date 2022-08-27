const db = require('../db');

class CategoryController {
	async createCategory(req, res) {
		
		try{
			const {categoryname} = req.body;
		  	await db.query('INSERT INTO category(categoryname) VALUES($1);', [categoryname]);
			res.json('add it');
		}catch(err){
         throw Error (err.message)
		}
			
		
	}

	async getCategory(req, res) {
		
			const categoryId = parseInt(req.params.categoryId);
			const category = await db.query('select * from category where categoryId = $1', [categoryId]);
			res.json(category.rows);
		
	}

	async getCategoryList(req, res) {
		try{
			const listOfCategory = await db.query('SELECT * FROM category;');
			res.json(listOfCategory.rows);

		}catch(err){
         throw Error (err.message)
        // console.log(err.name, err.message)
		}
	}

	
	}


module.exports = new CategoryController();
