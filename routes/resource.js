var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var newspaper_controller = require('../controllers/newspaper');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// NEWSPAPER ROUTES ///
// POST request for creating a Newspaper.
router.post('/newspapers', newspaper_controller.newspaper_create_post);
// DELETE request to delete Newspaper.
router.delete('/newspapers/:id', newspaper_controller.newspaper_delete);
// PUT request to update Newspaper.
router.put('/newspapers/:id', newspaper_controller.newspaper_update_put);
// GET request for one Newspaper.
router.get('/newspapers/:id', newspaper_controller.newspaper_detail);
// GET request for list of all Newspaper items.
router.get('/newspapers', newspaper_controller.newspaper_list);
module.exports = router;