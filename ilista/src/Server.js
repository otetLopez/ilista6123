
var sqlite3 = require('sqlite3');

var file = "../Ilista.db";
var db=new sqlite3.Database(file);

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



  app.get('/ilista/addnote/:id/:title/:content', (req, res) => {

     var id = req.params.id;
     var title = req.params.title;
     var content = req.params.content;

    res.header('Access-Control-Allow-Origin', "*")
    var query = 'INSERT INTO Notes (id ,title,content) VALUES (' + id + ',' + title + ','+ content + ')';
    // db.run('INSERT INTO Notes (id ,title,content) VALUES (?,?,?)',id,title,content,(err)=>{
      db.run('INSERT INTO Notes (title,content) VALUES (?,?)',title,content,(err)=>{

        console.log(query);
        if(err){
           throw err;
        }
        console.log("Succesfully insert");
    });
  });

  app.get('/ilista/updatenote/:id/:title/:content', (req, res) => {

    var id = req.params.id;
    var title = req.params.title;
    var content = req.params.content;


    res.header('Access-Control-Allow-Origin', "*")

    db.run('UPDATE Notes SET title = ? , content = ? WHERE id = ?',title,content,id,(err)=>{

        if(err){
           throw err;
        }
        console.log("Succesfully update");
    });
   
  });

  app.get('/ilista/deletenote/:id', (req, res) => {

    var id = req.params.id;
    // DELETE FROM Customers WHERE CustomerName='Alfreds Futterkiste';
    res.header('Access-Control-Allow-Origin', "*")

    db.run('DELETE FROM Notes WHERE id = ?',id,(err)=>{

        if(err){
           throw err;
        }
        console.log("Succesfully delete");
    });

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

