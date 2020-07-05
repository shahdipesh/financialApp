var express = require ('express');
var path = require ('path');
var router = require ('../bankingApp/server/route/router');

var app = express();
app.use(express.json());


app.use(express.static((path.join(__dirname,'dist','bankingApp'))));

app.use('/',router);

app.get ('*',(req,res)=>{
res.sendFile(path.join(__dirname,'dist','bankingApp','index.html'));
})





app.listen (2000,()=>{console.log("node server running on port 3000")})