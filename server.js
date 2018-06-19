var express =require('express');
var app = express();
var port=process.env.PORT || 3000;
var mysql=require('mysql')
var bodyParser = require('body-parser');


var connection = mysql.createConnection
   ({
    host :   'kbihm.com',
     user: 'kbihmcheckdb', // update me
     password: '%lUy@Gl(&*2wlP', // update me
     server: 'kbihm.com', 
    database: 'kbihmcheckdb' //update me
         
   });
  
connection.connect(function (err) {
    if (err) console.log('error occured')
    console.log('You are now connected with mysql database...')
  })



//    app.use(bodyParser.json());       // to support JSON-encoded bodies
//    app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
//      extended: true
//    }));

app.get('/',function(req,res){
    // connection.query('select * from Attendence',function(error, results, fields){
    // res.write(JSON.stringify(results))
        res.end('he;lo');
    
//   });
});
app.listen(port)
console.log('Server Listening at port'+port);
