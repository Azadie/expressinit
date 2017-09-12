
var mysql = require('mysql');
var pool  = mysql.createPool({
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'Aza',
    password        : 'aza13',
    database        : 'test'
});
var _ = require('lodash');
var Promise = require('bluebird');



var getUsersv2 = function(){
    return new Promise(function(resolve,reject){
        pool.query("select * from users",function(err,res){
            if(!err)
            {
                resolve(res);
            }
            else
                reject(err);
        });
    })
};
var addUserv2 = function(user){
    return new Promise(function(resolve,reject){
        pool.query("insert into users (user) VALUE (?)",[user],function(err,res){
            if(!err)
            {
               resolve(res);
            }
            else
               reject(err);
        })
    })
};


var getUsers = function(cb){
   pool.query("select * from users",function(err,res){
       if(!err)
       {
           cb(err,res);
       }
       else
           throw err;
   });
};
var addUser = function(user,cb){

   pool.query("insert into users (user) VALUE (?)",[user],function(err,res){
       if(!err)
       {
           cb(err,res);
       }
       else
           throw err;
   })
};

exports.temp = function (req, res) {

    var degisken = req.params.degisken;
    console.log(typeof  degisken);
    if(!_.isUndefined(degisken))
    {
        /*addUser(degisken,function(err,user){
            getUsers(function(err,result){
                res.send(result);
            })
        });*/

        addUserv2(degisken).then(function(result){
            return result;
        }).then(getUsersv2).then(function(users){
            res.send(users);
        }).then()
    }
    else
    {
        getUsersv2().then(function(result){
            res.send(result);
        }).catch(function(err){

        })
    }
};