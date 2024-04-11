var express = require('express');
const cap_controllers= require('../controllers/cap');
var router = express.Router();
/* GET cap */
router.get('/',cap_controllers.cap_view_all_Page );
 
/* GET detail cap page */
router.get('/detail', cap_controllers.cap_view_one_Page);
 
/* GET create cap page */
router.get('/create', cap_controllers.cap_create_Page);
/* GET create update page */
router.get('/update', cap_controllers.cap_update_Page);

 
 
module.exports = router;