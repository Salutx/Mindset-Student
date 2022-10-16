import { db_host, db_user, db_password, db_database } from './config.json';
import { createConnection } from 'mysql';

const connection = createConnection({
    host: db_host,
    user: db_user,
    password: db_password,
    database: db_database
});

connection.connect(function(err) {
    if (err) {
        return console.error('Error: ' + err.message)
    } else {
        console.log('Connected to the MySQL server.')
    }
});