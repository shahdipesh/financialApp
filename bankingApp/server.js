var express = require ('express');
var path = require ('path');

var app = express();


app.use(express.static((path.join(__dirname,'dist','bankingApp'))));

// app.use('/home',home)

app.get ('/',(req,res)=>{
res.sendFile(path.join(__dirname,'dist','bankingApp','index.html'));
})





app.listen (3000,()=>{console.log("node server running on port 3000")})