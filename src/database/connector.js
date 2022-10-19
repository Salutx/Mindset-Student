const config = require('../config.json');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: config.db_host,
    user: config.db_user,
    password: config.db_password,
    database: config.db_database
});

module.exports = connection;