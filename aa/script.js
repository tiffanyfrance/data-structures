const serverless = require('serverless-http');
const express = require('express')
const app = express()
const { Pool } = require('pg');
var AWS = require('aws-sdk');
const moment = require('moment-timezone');
const handlebars = require('handlebars');
var fs = require('fs');
const dotenv = require('dotenv');
dotenv.config();

const indexSource = fs.readFileSync(__dirname + "/templates/sensor.txt").toString();
var template = handlebars.compile(indexSource, { strict: true });

const pbSource = fs.readFileSync(__dirname + "/templates/pb.txt").toString();
var pbtemplate = handlebars.compile(pbSource, { strict: true });

// AWS RDS credentials
var db_credentials = new Object();
db_credentials.user = process.env.AWSRDS_UN;
db_credentials.host = process.env.AWSRDS_HT;
db_credentials.database = process.env.AWSRDS_DB;
db_credentials.password = process.env.PG_PASSWORD;
db_credentials.port = 5432;

var hx = `<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8" />
  <title>AA Meetings</title>
  <meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no" />
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Assistant:wght@500&display=swap" rel="stylesheet">
  <script src="https://api.mapbox.com/mapbox-gl-js/v2.0.0/mapbox-gl.js"></script>
  <link href="https://api.mapbox.com/mapbox-gl-js/v2.0.0/mapbox-gl.css" rel="stylesheet" />

  <style>
    * {
      font-family: 'Assistant', sans-serif;
    }

    body {
      margin: 0;
      padding: 0;
    }

    #map {
      position: absolute;
      top: 0;
      bottom: 0;
      width: 100%;
    }

    #overlay {
      position: absolute;
      top: 0;
      right: 0;
      z-index: 1;
      width: 300px;
      height: calc(100vh - 40px);
      background-color: #333;
      padding: 20px;
      color: #fff;
    }

    #overlay img {
      max-width: 300px;
    }

    #today {
      margin-top: -15px;
    }

    button {
      background: #eee;
      border: none;
      padding: 8px 15px;
      border-radius: 5px;
    }

    select {
      border: none;
      padding: 8px 15px;
      border-radius: 5px;
      width: 80%;
    }

    @media screen and (max-width: 800px) {
      #overlay {
        height: 350px;
        bottom: 0px;
        top: auto;
        zoom: 0.75;
      }
    }
  </style>
</head>

<body>
  <div id="overlay">
    <img src="https://raw.githubusercontent.com/tiffanyfrance/data-structures/master/aa/aa-logo.png" alt="AA for New York City" />
    <div style="margin: 40px 0px;">
      <hr style="border-color: #888;">
      <div>
        <p>
          Today is:
        <h3 id="today"></h3>
        </p>
      </div>
      <hr style="border-color: #888;">
    </div>
    <div>
      <p>Looking for a specific day?</p>
      <p>Select day of the week:</p>
      <select name="weekdays" id="weekdays">
        <option value="all" selected="selected">All Days</option>
        <option value="0">Sunday</option>
        <option value="1">Monday</option>
        <option value="2">Tuesday</option>
        <option value="3">Wednesday</option>
        <option value="4">Thursday</option>
        <option value="5">Friday</option>
        <option value="6">Saturday</option>
      </select>
    </div>
  </div>
  <div id="map"></div>
  <script>
  var data =
  `;

var jx = `;
  mapboxgl.accessToken = '[MAPBOX KEY]';
  
  let weekdays = new Array(
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
  );

    let bounds = [
      [-74.04728500751165, 40.68392799015035], // Southwest coordinates
      [-73.84058699000139, 40.87764500765852] // Northeast coordinates
    ];

    let map = new mapboxgl.Map({
      style: 'mapbox://styles/mapbox/light-v10',
      center: [-74.0066, 40.7135],
      zoom: 15.5,
      pitch: 45,
      bearing: -17.6,
      container: 'map',
      antialias: true,
      maxBounds: bounds
    });

    map.on('load', function () {
      let layers = map.getStyle().layers;

      let labelLayerId;
      for (let i = 0; i < layers.length; i++) {
        if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
          labelLayerId = layers[i].id;
          break;
        }
      }

      let selectElem = document.getElementById("weekdays");
      let currentMarkers = [];
      
      function getResults() {
        if (currentMarkers!==null) {
            for (var i = currentMarkers.length - 1; i >= 0; i--) {
              currentMarkers[i].remove();
            }
        }

        let selectedDate = selectElem.options[selectElem.selectedIndex].value;

        for (var i = 0; i < data.length; i++) {
          let meetings = data[i].meetings;
          let popupStr = '';

          for (var j = 0; j < meetings.length; j++) {
            let m = meetings[j];
            
            if (m.day === selectedDate || selectedDate == 'all') {
              popupStr += '<b>' + m.venue + '</b><br>' +
                'Address: ' + m.address + '<br>' +  
                'Day: ' + weekdays[m.day] + ' Time: ' + m.time_formatted + '<br><br>';
            }

          }

          if (popupStr) {
            let marker = new mapboxgl.Marker()
              .setLngLat([data[i].long, data[i].lat])
              .setPopup(new mapboxgl.Popup().setHTML(popupStr)) 
              .addTo(map);
            
            currentMarkers.push(marker);
          }
        }
      }

      getResults();

      selectElem.addEventListener('change', (event) => {
        getResults();
      });

      map.addLayer(
        {
          'id': '3d-buildings',
          'source': 'composite',
          'source-layer': 'building',
          'filter': ['==', 'extrude', 'true'],
          'type': 'fill-extrusion',
          'minzoom': 15,
          'paint': {
            'fill-extrusion-color': '#aaa',

            // use an 'interpolate' expression to add a smooth transition effect to the
            // buildings as the user zooms in
            'fill-extrusion-height': [
              'interpolate',
              ['linear'],
              ['zoom'],
              15,
              0,
              15.05,
              ['get', 'height']
            ],
            'fill-extrusion-base': [
              'interpolate',
              ['linear'],
              ['zoom'],
              15,
              0,
              15.05,
              ['get', 'min_height']
            ],
            'fill-extrusion-opacity': 0.6
          }
        },
        labelLayerId
      );


    });


    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    let day = today.getDay();
    

    today = mm + '/' + dd + '/' + yyyy;

    document.getElementById('today')
      .append(weekdays[day] + ', ' + today);

  </script>
</body>
</html>`;

// respond to requests for /aa
app.get('/aa', function(req, res) {

  var now = moment.tz(Date.now(), "America/New_York"); 
  var dayy = now.day().toString(); 
  var hourr = now.hour().toString(); 

  // Connect to the AWS RDS Postgres database
  const client = new Pool(db_credentials);
  
  // SQL query 
  //id, venue, location_id, address, lat, long, notes, region, sub_region, url, day, time, end_time, time_formatted
  var thisQuery = `SELECT lat, long, json_agg(json_build_object('id', id, 'venue', venue, 'location_id', location_id, 'address', address, 'notes', notes, 'region', region, 'sub_region', sub_region, 'url', url, 'day', day, 'time', time, 'end_time', end_time, 'time_formatted', time_formatted)) as meetings
               FROM aalocations 
               GROUP BY lat, long;`;

  client.query(thisQuery, (qerr, qres) => {
      if (qerr) { throw qerr }
      
      else {
          var resp = hx + JSON.stringify(qres.rows) + jx;
          res.send(resp);
          client.end();
          console.log('2) responded to request for aa meeting data');
      }
  });
});

app.get('/temperature', function(req, res) {

  // Connect to the AWS RDS Postgres database
  const client = new Pool(db_credentials);

  // SQL query 
  var q = `SELECT EXTRACT(DAY FROM sensortime) as sensorday,
           AVG(sensortemp::int) as num_obs
           FROM sensordata
           GROUP BY sensorday
           ORDER BY sensorday;`;

  client.connect();
  client.query(q, (qerr, qres) => {
      if (qerr) { throw qerr }
      else {
          res.setHeader('content-type', 'text/html');
          res.end(template({ sensordata: JSON.stringify(qres.rows)}));
          client.end();
          console.log('1) responded to request for sensor graph');
      }
  });
});

app.get('/api/sensor', function(req, res) {

  // Connect to the AWS RDS Postgres database
  const client = new Pool(db_credentials);

  // SQL query
  var q = `SELECT * FROM sensordata WHERE sensortime > current_date - interval '20' day AND sensortime <= current_date;`;

  client.connect();
  client.query(q, (qerr, qres) => {
      if (qerr) { throw qerr }
      else {
          res.json(qres.rows);
          client.end();
          console.log('responded to request for /api/temperature');
      }
  });
}); 

app.get('/processblog', function(req, res) {
  // AWS DynamoDB credentials
  AWS.config = new AWS.Config();
  AWS.config.region = "us-east-1";

  // Connect to the AWS DynamoDB database
  var dynamodb = new AWS.DynamoDB();
  
  var params = {
      TableName: "processblog_recovery",
      // ProjectionExpression: "#yr, title, info.rating",
      // FilterExpression: "#pn between :start_pn and :end_pn",
      // ExpressionAttributeNames: {
      //     "#pn" : "post_num"
      // },
      // ExpressionAttributeValues: {
      //      ":start_pn": {N: "1"},
      //      ":end_pn": {N: "3"}
      // }
  };

  dynamodb.scan(params, function(err, data) {
  // dynamodb.query(params, function(err, data) {
      if (err) {
          console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
          throw (err);
      }
      else {
          console.log(data.Items)
          res.setHeader('content-type', 'text/html');
          res.end(pbtemplate({ pbdata: JSON.stringify(data.Items)}));
          console.log('3) responded to request for process blog data ');
      }
  });
});

app.get('/api/processblog', function(req, res) {
  AWS.config = new AWS.Config();
  AWS.config.region = "us-east-1";

  var dynamodb = new AWS.DynamoDB();

  var params = {
      TableName: "processblog_recovery",
  };

  dynamodb.scan(params, function(err, data) {
      if (err) {
          console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
          throw (err);
      }
      else {
          res.json(data.Items);
          console.log('responded to request for /api/processblog');
      }
  });
});

app.use(express.static('public'))

app.get('/foo', function (req, res) {
  res.send('Hello Foo!')
})

module.exports.indexHandler = serverless(app);