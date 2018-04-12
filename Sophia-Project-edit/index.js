

var express = require('express');

var app = express();

var browserify = require('browserify');

var jquery = require('jquery');

var Pool = require('pg-pool');


//var Pool = require('pg').Pool;


var config = {
    host: 'localhost',
    port: 5433,
    user: 'postgres',
    password: 'pancakes',
    database: 'mydb'
};

var pool = new Pool(config);



async function getChords() {
    var response = await pool.query("select * from final.chords");
    console.log(response.rows);

app.get('/chords', function (req,res,next) {
    res.send(response.rows);
 });
}

app.listen(3000, () => console.log('Listening on port 3000!'))

getChords();
