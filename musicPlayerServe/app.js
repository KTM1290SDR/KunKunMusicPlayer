var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var fs = require('fs');
var https = require('https');
var privateKey  = fs.readFileSync('./private.pem', 'utf8');
var certificate = fs.readFileSync('./file.crt', 'utf8');
var credentials = {key: privateKey, cert: certificate};



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var myMusicRouter = require('./routes/myMusic');

var app = express();
var httpsServer = https.createServer(credentials, app);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/myMusic',myMusicRouter)

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
// app.listen(888,"192.168.43.79",(res,req)=>{
//   // app.listen(888,"10.0.34.39",(res,req)=>{
//   // app.listen(888,(res,req)=>{ 
//   console.log("服务器已启动...")
// });

httpsServer.listen(777,"192.168.43.79", ()=> {
  console.log('https服务器启动');
});

app.use(express.static('public'))
module.exports = app;
