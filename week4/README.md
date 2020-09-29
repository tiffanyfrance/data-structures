## Week 4: RDS, Postgres, and SQL

<b>Overview</b><br>
This assignment had us create a new database using RDS.<br>

There were three parts to this assignment:<br />
<b>PART 1: CREATE</b> - to create a new table for our postgres database using javascript<br />
<b>Part 2: INSERT</b> - to add the AA location data that we've been working with using the ```async.eachSeries``` 
to loop through the results of json (loaded from week 3 using ``fs``)<br />
<b>Part 3: QUERY (SELECT)</b> - to view rows using the ```SELECT * aalocations``` command. I also chose to verify 
the table contents using PGAdmin.

## Local Problems
I am using a local instance rather than Cloud9.
As soon as I ran the js file in the terminal I recieved a timeout error. 
In my debug process, I did several things, but will list the main ones here:<br /> 

## PGAdmin
Downloaded and installed PGAdmin in order to have more control over the
request without the javascript code interferring.

## Reworked Configs
I opened up the configs in AWS to make sure that all my database settings were correct. 
While in here I realized that changes don't appear immediately unless you tell 
Amazon to do so.

## Open to Public
According to this article that I found, in order to use RDS locally 
for writing I had to set open to public.<br>
<b>Documentations:</b> https://aws.amazon.com/getting-started/tutorials/create-connect-postgresql-db/ 

## Escaping commas
I learned that ```E'``` will escape commas in a string