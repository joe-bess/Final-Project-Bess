const express = require('express');
const mysql = require('mysql');

const db = mysql.createConnection ({
    host: 'localhost',
    user: 'postgres',
    password: 'pancakes',
    database: 'mydb'
});

db.connect(function(err) {
  if(err){
    console.log('MySql error');
  }

  if(!err){
  console.log('MySql connected');
  }});


const app = express();

app.get('/mydb', function(req, res) {
  let sql = 'SELECT * FROM test'; 
  let query = db.query(sql, (err, results) => {
      if ('err') {
      console.log('Error in the query'); 
      return; 
      }
      console.log('results');
      res.send('Connected');
    });
});


app.listen('5433', () => {
    console.log('Server started on port 5433');
});

