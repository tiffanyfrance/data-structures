// var request = require('request');
const fetch = require('node-fetch');
const { Client } = require('pg');
const dotenv = require('dotenv');
dotenv.config();

// PARTICLE PHOTON
var device_id = process.env.PHOTON_ID;
var access_token = process.env.PHOTON_TOKEN;

// var particle_variable = 'temp';
var particle_var_array = ['temp', 'humidity', 'heatIndex'];

// AWS RDS POSTGRESQL INSTANCE
var db_credentials = new Object();
db_credentials.user = 'postgres';
db_credentials.host = 'data-structures.cr3aqutdwbku.us-east-1.rds.amazonaws.com';
db_credentials.database = 'aa';
db_credentials.password = process.env.PG_PASSWORD;
db_credentials.port = 5432;

var getAndWriteData = async function() {
    
    var sensorVals = [];
    
    for (var particle_variable of particle_var_array) {
        
        var device_url = 'https://api.particle.io/v1/devices/' + device_id + '/' + particle_variable + '?access_token=' + access_token;
        
        // Make request to the Particle API to get sensor values
        var res = await fetch(device_url);
        
        var json = await res.json();
        
        // Store sensor value(s) in a variable
        sensorVals.push(json.result);
    }
    
    // Connect to the AWS RDS Postgres database
    const client = new Client(db_credentials);
    client.connect();

    // Construct a SQL statement to insert sensor values into a table
    var thisQuery = "INSERT INTO sensorData VALUES (" + sensorVals.join(',') + ", DEFAULT);";

    console.log(thisQuery); // for debugging

    // Connect to the AWS RDS Postgres database and insert a new row of sensor values
    client.query(thisQuery, (err, res) => {
        console.log(err, res);
        client.end();
    });
};

// write a new row of sensor data every five minutes
setInterval(getAndWriteData, 300000);