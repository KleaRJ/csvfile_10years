var mysql = require('mysql');

var con = mysql.createConnection({
host: "localhost",
user: "root",
password: "12345",
database: "kleasdb"
});

con.connect(function(err) {
if (err) throw err;
con.query("CREATE TABLE customers_krDate AS (SELECT Id, Number, Type, Gender, Fname, Lname, Address, City, State, Zip, Phone, DATE_ADD(Date, INTERVAL 10 YEAR) AS Date1, DATE_ADD(Date2, INTERVAL 10 YEAR) AS Date2New FROM customers_kr);",
function (err, result) {
if (err) throw err;
console.log(result);
});
});