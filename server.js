var express =require('express');
var app = express();
var port=process.env.PORT || 3000;


app.get('/',function(req,res){
console.log('hello from server');
 res.end(`
        <!doctype html>
        <html>
        <body>
            <form action="/" method="post">
                <input type="text" name="fname" /><br />
                <input type="number" name="age" /><br />
                <input type="file" name="photo" /><br />
 <input type="file" name="photo" /><br />

 <input type="file" name="photo" /><br />
 <input type="file" name="photo" /><br />
                <button>Save</button><br/>
 <button>Save</button><br/>
 <button>Save</button><br/>
 <button>Save</button><br/> <button>Save</button><br/> <button>Save</button><br/><button>Save</button><br/>
 <button>Save</button><br/>
            </form>
        </body>
        </html>
    `);

});

app.listen(port);
console.log('Server Listening at port'+port);
