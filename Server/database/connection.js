const mysql = require('mysql');

const connection = mysql.createConnection({
   host : 'localhost',
   user : 'root',
   password : 'password',
   database : 'studentinfor'
 }); 

connection.connect(); 

module.exports = connection;