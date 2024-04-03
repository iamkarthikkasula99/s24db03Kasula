var express = require('express');
const cap_controlers= require('../controllers/cap');
var router = express.Router();
/* GET caps */
router.get('/', cap_controlers.cap_view_all_Page );
module.exports = router;
