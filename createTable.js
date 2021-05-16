var mysql = require('mysql');

var con = mysql.createConnection({
host: "localhost",
user: "root",
password: "12345",
database: "kleasdb"
});


con.connect(function(err) {
if (err) throw err;
console.log("Connected!");

var sql = "CREATE TABLE customers_kr (ID int NOT NULL AUTO_INCREMENT, Number VARCHAR(30), Type VARCHAR(2), Fname VARCHAR(20), Lname VARCHAR(20), Address VARCHAR(35), City VARCHAR(20), State VARCHAR(2), Zip VARCHAR(5), Phone VARCHAR(10), Date DATE, Date2 DATE, PRIMARY KEY (ID))";
con.query(sql, function (err, result) {
if (err) throw err;
console.log("Table created");
});
});