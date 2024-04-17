var express = require('express');
const cap_controllers= require('../controllers/cap');
var router = express.Router();
// A little function to check if we have an authorized user and continue on
// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
res.redirect("/login");
}

/* GET cap */
router.get('/',cap_controllers.cap_view_all_Page );
 
/* GET detail cap page */
router.get('/detail', cap_controllers.cap_view_one_Page);
 
/* GET create cap page */
router.get('/create',secured, cap_controllers.cap_create_Page);
/* GET create update page */
router.get('/update', secured, cap_controllers.cap_update_Page);
/* GET delete costume page */
router.get('/delete', secured, cap_controllers.cap_delete_Page);
 
module.exports = router;