var mysql = require("mysql");

var connection = mysql.createConnection({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'musicDB',
    port: '8889',
    socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
});


connection.connect(function (err) {

    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    connection.end();
});

