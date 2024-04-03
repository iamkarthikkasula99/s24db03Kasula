var cap = require('../models/cap');
// List of all cap
exports.cap_list = function(req, res) {
 res.send('NOT IMPLEMENTED: cap list');
};
// for a specific cap.
exports.cap_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: cap detail: ' + req.params.id);
};
// Handle cap create on POST.
exports.cap_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: cap create POST');
};
// Handle cap delete from on DELETE.
exports.cap_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: cap delete DELETE ' + req.params.id);
};
 
// Handle cap update form on PUT.
exports.cap_update_put = function(req, res) {
    res.send('NOT IMPLEMENTED: cap update PUT' + req.params.id);
   };
 
 
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
    res.render('cap', { title: 'cap Search Results', results: thecaps });
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
    // We are caping for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"cap_type":"goat", "cost":12, "size":"large"}
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
   
   // Handle cap create on POST.
exports.cap_create_post = async function(req, res) {
    console.log(req.body)
    let document = new cap();
    // We are caping for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"cap_type":"goat", "cost":12, "size":"large"}
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
   
