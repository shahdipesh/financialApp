var express = require ('express');
var userService = require('../service/user.service');

var router = express.Router();


router.post('/user',async (req,res)=>{
    var username=  req.body.username;
    var password =  req.body.password;
    const rows = await userService.getUser(username,password);
res.send (rows);
})


module.exports=router;