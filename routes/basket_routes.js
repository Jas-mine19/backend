const Router = require('express')
const router = new Router();


const basketController = require('../controller/basket_controller');



router.get('/basket/:id', basketController.getBasket);

router.get('/baskets', basketController.getBasketList);



module.exports = router