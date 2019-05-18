var mysql = require('mysql')
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'xxmusic',
  multipleStatements: true
});

module.exports = connection; 