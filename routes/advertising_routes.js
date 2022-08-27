const Router = require('express')
const router = new Router();


const advertisingController = require('../controller/advertising_controller');

router.post('/advertising', advertisingController.createAdvertising);

router.get('/advertising/:id', advertisingController.getAdvertising);

router.get('/advertisings', advertisingController.getAdvertisingList);



module.exports = router