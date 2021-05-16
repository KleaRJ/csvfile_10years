const fs = require("fs");
const mysql = require("mysql");
const fastcsv = require("fast-csv");

let stream = fs.createReadStream("newCustomers.csv");
let csvData = [];
let csvStream = fastcsv
.parse()
.on("data", function(data) {
csvData.push(data);
})
.on("end", function() {

csvData.shift();


const connection = mysql.createConnection({
host: "localhost",
user: "root",
password: "12345",
database: "kleasdb"
});


connection.connect(error => {
if (error) {
console.error(error);
} else {
let query =
"INSERT INTO customers_kr (Number, Type, Gender, Fname, Lname, Address, City, State, Zip, Phone, Date, Date2) VALUES ?";
connection.query(query, [csvData], (error, response) => {
console.log(error || response);
});
}
});
});

stream.pipe(csvStream);