var express = require('express');
const newspaper_controllers=require('../controllers/newspaper');
var router = express.Router();
// A little function to check if we have an authorized user and continue on
// or
// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
req.session.returnTo = req.originalUrl;
res.redirect("/login");
}

/* GET home page. */
router.get('/', newspaper_controllers.newspaper_view_all_Page);
/* GET detail newspaper page */
router.get('/detail', newspaper_controllers.newspaper_view_one_Page);
/* GET create newspaper page */
router.get('/create', secured, newspaper_controllers.newspaper_create_Page);
/* GET create update page */
router.get('/update', secured, newspaper_controllers.newspaper_update_Page);
/* GET create costume page */
router.get('/delete', secured, newspaper_controllers.newspaper_delete_Page);
module.exports = router;