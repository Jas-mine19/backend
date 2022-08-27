const Router = require('express')
const router = new Router();


const flowerController = require('../controller/flower_controller');

router.post('/flower', flowerController.createFlower);

router.get('/flower/:id', flowerController.getFlower);

router.get('/flowers', flowerController.getFlowerList);



module.exports = router