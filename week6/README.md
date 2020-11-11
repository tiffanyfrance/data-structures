## Week 6: Queries

# SQL Query

For the SQL query, we are using ```SELECT``` statement. My table only has three columns so I included all three columns plus a check for addresses that are showing up multiple times.

```
var thisQuery = "SELECT address, lat, long FROM aalocations WHERE address = '122 E 37TH ST, New York, NY';";
```
This returned a response, no problem.

# NoSQL Query

I am having trouble with the dynamo query. I was able to get a single query by specifying a singe post_num (my primary key), however I was not able to get the date range to work, nor was I able to get multiple returns. I tried recreating my table but that didn't help.