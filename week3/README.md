# Week 3: Using TAMU to get geolocation data

<b>Modifying last week's assignment:</b><br /> 
I modified last week's assignment for this week.
I cleaned up the file more now that I understand that Professor Hill wanted just the street address and not the building name and city/zip.
```
line = line.slice(0, line.search(/[.,()]/)).trim();
```
I am now exporting the results as the txt as well as a JSON file to work with this weeks assignments.
```
fs.writeFileSync('...street-address.json', JSON.stringify(streetAdd));
```

<b>.env</b><br /> 
I used .env package to store my API Key and then added that to the gitignore to prevent it from being published.

<b>Modifying data</b><br />
Before week 4 assignment, I modified the data in order to export it similiar to the example from the week 4 videos.
```javascript
    let newObj = {};

    newObj['address'] = tamuGeo.InputAddress.StreetAddress.replace(' New York NY', ', New York, NY').trim();
    
    newObj['latLong'] = {};
    newObj.latLong['lat'] = parseFloat(tamuGeo.OutputGeocodes[0].OutputGeocode.Latitude);
    newObj.latLong['lng'] = parseFloat(tamuGeo.OutputGeocodes[0].OutputGeocode.Longitude);
```
Because this is nested in the async.eachSeries, no further iterators were needed.