var express =require('express');
var app = express();
var port=process.env.PORT || 3000;


app.get('/',function(req,res){
console.log('hello from server');
 res.end("hello node server kbihm");

});

app.listen(port);
console.log('Server Listening at port'+port);
