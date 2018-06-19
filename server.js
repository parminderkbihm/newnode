var express =require('express');
var app = express();
var port=process.env.PORT || 3000;




app.get('/',function(req,res){
    // connection.query('select * from Attendence',function(error, results, fields){
    res.end(JSON.stringify(results))
    // });
});
app.listen(port)
console.log('Server Listening at port'+port);
// var mysql=require('mysql')
// var bodyParser = require('body-parser');


// var connection = mysql.createConnection
//    ({
//     host :   'kbihm.com',
//      user: 'kbihmcheckdb', // update me
//      password: '%lUy@Gl(&*2wlP', // update me
//      server: 'kbihm.com', 
//     database: 'kbihmcheckdb' //update me
         
//    });
  
// connection.connect(function (err) {
//     if (err) throw err
//     console.log('You are now connected with mysql database...')
//   })



//    app.use(bodyParser.json());       // to support JSON-encoded bodies
//    app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
//      extended: true
//    }));


