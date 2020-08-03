
var sqlite3 = require('sqlite3');

var file = "../Ilista.db";
var db=new sqlite3.Database(file);

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.get('/api/hello/:param', (req, res) => {
    var str;
    console.log("gird"+req.params.param);
    res.header('Access-Control-Allow-Origin', "*")

 
  });

  app.get('/ilista/addnote/:id/:title/:content', (req, res) => {

    var id = id;
    var title = title;
    var content = content;

    

    res.header('Access-Control-Allow-Origin', "*")
    
  });


  app.get('/ilista/updatenote/:id/:title/:content', (req, res) => {

    var id = id;
    var title = title;
    var content = content;

    res.header('Access-Control-Allow-Origin', "*")
   
  });

  app.get('/ilista/deletenote/:id', (req, res) => {

    var id = id;

    res.header('Access-Control-Allow-Origin', "*")
   
  });


  app.get('/ilista/getallnotes' , (req, res) => {

    res.header('Access-Control-Allow-Origin', "*")
   
    var allNotes = [];
    db.all("SELECT id ,title , content FROM Notes" , function(err, rows){
        
        rows.forEach(function(row){
            var note ={
                id: row.id ,
                title: row.title,
                content: row.content
            }

            allNotes.push(note);

        })

        res.send(allNotes);
    });

    
  });



var server = app.listen(8000 , function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s",host,port);
});

db.close

