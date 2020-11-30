## Week 7: All AA Locations in NYC

# Data
I retrieved the data from the source code on 
<a href="https://www.nyintergroup.org/">NY Intergroup's AA website</a>. 
The json as it was included all the meetings for the entire state of New York,
therefore I had to cleanup the file, first by looking for only objects
in the array that had a location of "New York, NY":
```if (address.includes('New York, NY'))```
Then I also renamed the keys, including only what I wanted out of the 
original dataset into a newObj:<br />
```newObj.venue = arr[i].value;
    newObj.address = arr[i].formatted_address;
    newObj.lat = arr[i].latitude;
    newObj.long = arr[i].longitude;
    newObj.notes = arr[i].notes;
    newObj.region = arr[i].region;
    newObj.url = arr[i].url;
    ```
Finally, I pushed that newObj to a newArr that was at a higher scope,
console.logging that array in order to run this code in Chrome's
developer tools, resulting in a new cleaned array with only the data 
I need. I copied the data in developer tools using `copy(newArr)` 
and pasted that data into a new file called <a href="locations.json">locations.json</a>.

The work for this section can be found at the bottom of <a href="wa07-modify-data.js">wa07-modify-data.js</a>. 
The top of this file shows the originial dataset as pulled from 
the NY AA website.

# Deleting, Creating, and Loading Data
1. I dropped my old aalocations table
2. I recreated the table using only the fields that were applicable 
to my locations.json
3. I updated the INSERT statement to reflect the new fields and to also use 
ES6 template literals: ```INSERT INTO aalocations VALUES (E'${value.venue}', '${value.address}'...```
4. I had some errors so debugging was required, done mostly through
console.log bits of the code to ensure it was working properly,
stepping through each section.
5. I checked that the entries were working and looked correct 
by using PGAdmin.