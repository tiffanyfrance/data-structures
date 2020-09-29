## Week 4: RDS, Postgres, and SQL

<b>Overview</b><br>
This assignment had us create a new database using RDS.
There were three parts to this assignment:<br />

- <b>PART 1: CREATE</b> - to create a new table for our postgres database using javascript<br />
```CREATE TABLE aalocations (address varchar(125), lat double precision, long double precision);```<br>

- <b>Part 2: INSERT</b> - to add the AA location data that we've been working with using the ```async.eachSeries``` 
to loop through the results of json (loaded from week 3 using ``fs``)<br />
```INSERT INTO aalocations VALUES (E'" + value.address + "', " + value.latLong.lat + ", " + value.latLong.lng + ");```<br>

- <b>Part 3: QUERY (SELECT)</b> - to view rows using the ```SELECT * aalocations``` command. I also chose to verify 
the table contents using PGAdmin.<br>
```SELECT * FROM aalocations;```<br>

## Local Problems
I am using a local instance rather than Cloud9.
As soon as I ran the js file in the terminal I recieved a timeout error. 
In my debug process, I did several things, but will list the main ones here:<br /> 

- <b>PGAdmin</b> - 
Downloaded and installed PGAdmin in order to have more control over the
request without the javascript code interferring.<br>

- <b>Reworked Configs</b> - 
I opened up the configs in AWS to make sure that all my database settings were correct. 
While in here I realized that changes don't appear immediately unless you tell 
Amazon to do so.<br />

- <b>Open to Public</b> - 
According to this article that I found, in order to use RDS locally 
for writing I had to set open to public. 
<b>Documentations:</b> https://aws.amazon.com/getting-started/tutorials/create-connect-postgresql-db/ <br />


## Escaping commas
I learned that ```E'``` will escape commas in a string

## Packages used
```javascript
const { Client } = require('pg');
var async = require('async');  
const fs = require('fs');
const dotenv = require('dotenv');
```

PG is used for postgres database. Async was used for looping through the data.
FS was used for writing and retrieving files.
Dotenv was used for storing variables locally.