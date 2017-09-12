
//var userMJodel =
function UserController(){

}

UserController.prototype.test = function(req,res){
    res.send('v1');
};

module.exports = UserController;