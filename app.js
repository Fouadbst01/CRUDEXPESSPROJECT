var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');






var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var articleRouter = require('./routes/article');
var LogRouter = require('./routes/login');
var home= require('./routes/manage');

var app = express();
app.use(express.json());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/home', home);
app.use('/users', usersRouter);
app.use('/article',articleRouter);
app.use('/login',LogRouter);

/*app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')*/

/*app.get('/',async function(req,res){
    res.render('Articale', {title : "test"})
})*/
module.exports = app;
