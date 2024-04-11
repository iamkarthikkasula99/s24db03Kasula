var cap = require('../models/cap');
// List of all cap
exports.cap_list = function(req, res) {
 res.send('NOT IMPLEMENTED: cap list');
};
 // for a specific cap.
exports.cap_detail = async function(req, res) {
console.log("detail" + req.params.id)
try {
result = await cap.findById( req.params.id)
res.send(result)
} catch (error) {
res.status(500)
res.send(`{"error": document for id ${req.params.id} not found`);
}
};
 
 
// Handle cap delete on DELETE.
exports.cap_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await cap.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };
   
// Handle cap update form on PUT.
exports.cap_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await cap.findById( req.params.id)
// Do updates of properties
if(req.body.cap_type)
toUpdate.cap_type = req.body.cap_type;
if(req.body.cap_size) toUpdate.cap_size = req.body.cap_size;
if(req.body.cap_cost) toUpdate.cap_cost = req.body.cap_cost;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
};
 
//List of all caps
exports.cap_list = async function(req, res) {
    try{
    thecap = await cap.find();
    res.send(thecap);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
 
 
exports.cap_view_all_Page = async function(req, res) {
    try{
    thecaps = await cap.find();
    res.render('cap', { type: 'cap Search Results', results: thecaps });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
 
 
    // Handle cap create on POST.
exports.cap_create_post = async function(req, res) {
    console.log(req.body)
    let document = new cap();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    document.cap_type = req.body.cap_type;
    document.cap_size = req.body.cap_size;
    document.cap_cost = req.body.cap_cost;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
   
    //Handle a show one view with id specified by query
    exports.cap_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await cap.findById( req.query.id)
    res.render('capdetail',
    { type: 'cap Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
 
    // Handle building the view for creating a cap.
// No body, no in path parameter, no query.
// Does not need to be async
exports.cap_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('capcreate', { type: 'cap Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

    // Handle building the view for updating a cap.
// query provides the id
exports.cap_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await cap.findById(req.query.id)
    res.render('capupdate', { title: 'cap Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
// Handle a delete one view with id from query
exports.cap_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await cap.findById(req.query.id)
    res.render('capdelete', { title: 'cap Delete', toShow:
    result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    
    
    
   