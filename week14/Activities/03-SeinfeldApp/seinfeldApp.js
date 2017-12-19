var express = require("express");
var mysql = require("mysql");

var app = express();

var port = 3000;

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "seinfeld_db"
});

app.get("/cast", function(req, res) {
    connection.query("SELECT *FROM actors order by id", function (err, result) {
        var html = "<h1>Actors Ordered BY ID<h1>";

        html += "<ul>";

        for (var i=0; i < result.length; i++) {
            html += "<li><p> ID: " + result[i].id + "</p>";
            html += "<li><p> Name: " + result[i].name + "</p>";
            html += "<li><p> ID: " + result[i]. + "</p>";
        }
    })
})