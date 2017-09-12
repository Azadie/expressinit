var TempRouter = require('express').Router();
var tempController = require('../controller/temp.controller');

TempRouter.get('/:degisken', tempController.temp);
TempRouter.get('/', tempController.temp);



module.exports = TempRouter;