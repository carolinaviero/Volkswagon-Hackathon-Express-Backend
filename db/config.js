const mysql = require("mysql");
const keys = require("../keys");

const connection = mysql.createConnection({
  host: keys.MYSQL_HOST,
  user: keys.MYSQL_USER,
  password: keys.MYSQL_PASSWORD,
  database: keys.MYSQL_DATABASE
});

module.exports = connection;
