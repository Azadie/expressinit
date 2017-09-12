var UserRouter = require('express').Router();
var controller = require('../controller/user.controller');
var userController = new controller();
var userControllerv2 = require('../controller/user.controller2');

UserRouter.get('/test',userController.test);
UserRouter.get('/test',userControllerv2.test);









UserRouter.get('*',function(req,res){
    res.send('404 henüz böle bişey yok');
});

module.exports = UserRouter;