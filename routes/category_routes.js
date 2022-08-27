const Router = require('express')
const router = new Router();


const categoryController = require('../controller/category_controller');

router.post('/category', categoryController.createCategory);

router.get('/category/:id', categoryController.getCategory);

router.get('/categories', categoryController.getCategoryList);



module.exports = router