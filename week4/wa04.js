const { Client } = require('pg');
var async = require('async');  
const fs = require('fs');
const dotenv = require('dotenv');
dotenv.config();  

// AWS RDS POSTGRESQL INSTANCE
var db_credentials = new Object();
db_credentials.user = 'postgres';
db_credentials.host = 'data-structures.cr3aqutdwbku.us-east-1.rds.amazonaws.com';
db_credentials.database = 'aa';
db_credentials.password = process.env.PG_PASSWORD;
db_credentials.port = 5432;

// // PART A: CREATE
// // Connect to the AWS RDS Postgres database
// const client = new Client(db_credentials);
// client.connect();
//
// // Sample SQL statement to create a table: 
// var thisQuery = "CREATE TABLE aalocations (address varchar(125), lat double precision, long double precision);";
// // Sample SQL statement to delete a table: 
// // var thisQuery = "DROP TABLE aalocations;"; 

// client.query(thisQuery, (err, res) => {
//     console.log(err, res);
//     client.end();
// });


// // PART B: INSERT
// let rawdata = fs.readFileSync(process.env.LOCAL_DIR + 'week3/data/locations.json');
// let addressesForDb = JSON.parse(rawdata);

// async.eachSeries(addressesForDb, function(value, callback) {
//     const client = new Client(db_credentials);
//     client.connect();
//     var thisQuery = "INSERT INTO aalocations VALUES (E'" + value.address + "', " + value.latLong.lat + ", " + value.latLong.lng + ");";
//     client.query(thisQuery, (err, res) => {
//         console.log(err, res);
//         client.end();
//     });
//     setTimeout(callback, 1000); 
// }); 

// PART C: QUERY
// Connect to the AWS RDS Postgres database
const client = new Client(db_credentials);
client.connect();

// Sample SQL statement to query the entire contents of a table: 
var thisQuery = "SELECT * FROM aalocations;";

client.query(thisQuery, (err, res) => {
    console.log(err, res.rows);
    client.end();
});