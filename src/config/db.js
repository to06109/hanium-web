const mysql = require("mysql");

const db = mysql.createConnection({
    host: "localhost",
    user: "knormal",
    password: "knormal@0102",
    database: "knormal"
});

db.connect(); //연결요청

module.exports = db;
