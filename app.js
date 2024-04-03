var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var cap = require("./models/cap");

 
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var capRouter = require('./routes/cap');
var gridRouter = require('./routes/grid');
var pickRouter = require('./routes/pick');
var resourceRouter = require('./routes/resource');
 
var app = express();
 
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
 
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
 
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/cap', capRouter);
app.use('/grid', gridRouter);
app.use('/pick', pickRouter);
app.use('/resource',resourceRouter);
require('dotenv').config();
const connectionString = process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString);


var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function(){
console.log("Connection to DB succeeded");

});


async function recreateDB(){
// Delete everything
await cap.deleteMany();

let instance1 = new cap({type:"basketball cap", size:'Medium',cost:20});
instance1.save().then(doc=>{console.log("First object saved")}).catch(err=>{
console.error(err)
});
let instance2 = new cap({type:"flat cap", size:'Large',cost:30});
instance2.save().then(doc=>{console.log("second object saved")}).catch(err=>{
console.error(err)
});
let instance3 = new cap({type:"cricket cap", size:'Small',cost:60});
instance3.save().then(doc=>{console.log("third object saved")}).catch(err=>{
console.error(err)
});
}





let reseed = true;
if (reseed) {recreateDB();
}


  



 
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
 
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
 
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
 
module.exports = app;
 