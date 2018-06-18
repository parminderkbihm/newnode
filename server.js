var express =require('express');
var app = express();
var port=process.env.PORT || 3000;
var Connection = require('tedious').Connection;
var Request = require('tedious').Request;

var config = 
   {
     userName: 'kbihmcheckdb', // update me
     password: '%lUy@Gl(&*2wlP', // update me
     server: 'kbihm.com', // update me
     options: 
        {
           database: 'kbihmcheckdb' //update me
           , encrypt: true
        }
   }
   var connection = new Connection(config);
// Attempt to connect and execute queries if connection goes through
connection.on('connect', function(err) 
   {
     if (err) 
       {
          console.log(err)
       }
    else
       {
           queryDatabase()
       }
   }
 );


 function queryDatabase()
 { console.log('Reading rows from the Table...');

     // Read all rows from table
   request = new Request(
        "select * from Attendence",
           function(err, rowCount, rows) 
              {
                  console.log(rowCount + ' row(s) returned');
                  process.exit();
              }
          );

   request.on('row', function(columns) {
      columns.forEach(function(column) {
          console.log("%s\t%s", column.metadata.colName, column.value);
       });
           });
   connection.execSql(request);
 }



app.get('/',function(req,res){
console.log('hello from server');
 res.end("hello server ");

});

app.listen(port);
console.log('Server Listening at port'+port);
