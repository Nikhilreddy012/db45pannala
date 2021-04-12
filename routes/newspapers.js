var express = require('express');
const newspaper_controllers=require('../controllers/newspaper');
var router = express.Router();

/* GET home page. */
router.get('/', newspaper_controllers.newspaper_view_all_Page);
/* GET detail newspaper page */
router.get('/detail', newspaper_controllers.newspaper_view_one_Page);
/* GET create newspaper page */
router.get('/create', newspaper_controllers.newspaper_create_Page);
module.exports = router;