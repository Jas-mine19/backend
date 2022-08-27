const Router = require('express')
const router = new Router();


const favoriteController = require('../controller/favorite_controller');



router.get('/favorite/:id', favoriteController.getFavorite);

router.get('/favorites', favoriteController.getFavoriteList);



module.exports = router