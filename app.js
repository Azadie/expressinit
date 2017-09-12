const express = require('express');


var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//console.log(myckass.getClassMember(5));

const appex = express();


const UserRouter = require('./router/user.router');
const TempRouter = require('./router/temp.router');




appex.use('/user',UserRouter);
appex.use('/temp', TempRouter);



appex.get('/', function(req, res)
{
    res.send('<p>Main Page</p>');
});

appex.listen(3000, function()
{
    console.log('Dinliyorum..')
});