var express = require('express');
const newspaper_controllers=require('../controllers/newspaper');
var router = express.Router();

/* GET home page. */
router.get('/', newspaper_controllers.newspaper_view_all_Page);
module.exports = router;