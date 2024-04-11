var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controllers = require('../controllers/api');
var cap_controllers = require('../controllers/cap');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controllers.api);
/// cap ROUTES ///
// POST request for creating a cap.
router.post('/cap', cap_controllers.cap_create_post);
// DELETE request to delete cap.
//router.delete('/cap/:id', cap_controllers.cap_delete);
// PUT request to update cap.
router.put('/cap/:id', cap_controllers.cap_update_put);
// GET request for one cap.
router.get('/cap/:id', cap_controllers.cap_detail);
// GET request for list of all cap items.
router.get('/cap', cap_controllers.cap_list);
module.exports = router;

