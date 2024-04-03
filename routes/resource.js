var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var cap_controller = require('../controllers/cap');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// cap ROUTES ///
// POST request for creating a cap.
router.post('/cap', cap_controller.cap_create_post);
// DELETE request to delete cap.
router.delete('/cap/:id', cap_controller.cap_delete);
// PUT request to update cap.
router.put('/cap/:id', cap_controller.cap_update_put);
// GET request for one cap.
router.get('/cap/:id', cap_controller.cap_detail);
// GET request for list of all cap items.
router.get('/cap', cap_controller.cap_list);
module.exports = router;

