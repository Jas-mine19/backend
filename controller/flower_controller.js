const db = require('../db');

class FlowerController {
	async createFlower(req, res) {
		
		try{
			const {flowername,flowerprice,flowerinformation,categoryid} = req.body;
		  	await db.query('INSERT INTO flower(flowername,flowerprice,flowerinformation,categoryid) VALUES($1,$2,$3,$4);', [flowername,flowerprice,flowerinformation,categoryid]);
			res.json('add it');
		}catch(err){
         throw Error (err.message)
		}
			
		
	}

	async getFlower(req, res) {
		
			const flowerId = parseInt(req.params.flowerId);
			const flower = await db.query('select * from flower where flowerId = $1', [flowerId]);
			res.json(flower.rows);
		
	}

	async getFlowerList(req, res) {
		try{
			const listOfFlower = await db.query('SELECT * FROM flower;');
			res.json(listOfFlower.rows);

		}catch(err){
         throw Error (err.message)
        // console.log(err.name, err.message)
		}
	}

	
	}


module.exports = new FlowerController();
