const Router = require('express')
const router = new Router();


const usersController = require('../controller/users_controller');

router.post('/users', usersController.createUsers);

router.get('/users/:id', usersController.getUsers);


router.get('/user', usersController.getUsersList);




module.exports = router