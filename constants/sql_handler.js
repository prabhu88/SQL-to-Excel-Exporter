'use-strict'
const mysql = require('mysql')
const { Promise } = require('bluebird')
const { host, user, password, database, userTable, sampleData, selectQuery } = require('./sql_tables')
const connection = mysql.createConnection({
    host: host,
    user: user,
    password: password,
    database: database
});
const insertData = async = () => {
    return new Promise(function (resolve, reject) {
        const users = [
            { name: 'John Doe', email: 'johndoe@example.com', phone: '555-1234' },
            { name: 'Jane Doe', email: 'janedoe@example.com', phone: '555-5678' },
            { name: 'Bob Smith', email: 'bobsmith@example.com', phone: '555-9876' },
            // Add more users here
        ];

        connection.connect((err) => {
            if (err) throw err;
            console.log('Connected to database.');

            users.forEach((user) => {
                const query = `INSERT INTO users (name, email, phone) SELECT '${user.name}', '${user.email}', '${user.phone}' FROM dual WHERE NOT EXISTS (SELECT * FROM users WHERE email='${user.email}');`;
                connection.query(query, (err, result) => {
                    if (err) throw err;
                    console.log(`User ${user.name} inserted.`);
                });
            });
        });
    })
}
const GetAllUsers = () => {
    return new Promise(function (resolve, reject) {
        connection.connect((err) => {
            if (err) {
                reject({
                    error: true,
                    status: 'failed',
                    info: err
                })
            }
            connection.query(selectQuery, (err, result) => {
                if (err) {
                    reject({
                        error: true,
                        status: 'failed',
                        info: err.message.toString()
                    })
                }
                resolve({
                    error: false,
                    status: 'success',
                    data: Object.values(JSON.parse(JSON.stringify(result)))
                })
            })
        })        
    })
}
module.exports = {
    insertData: insertData,
    GetAllUsers: GetAllUsers
}
