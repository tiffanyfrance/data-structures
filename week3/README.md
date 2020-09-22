## Week 3: Using TAMU to get geolocation data

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

<b>Questions</b><br />
- I don't know why the file is called first.json but I didn't rename.
- The output has a lot of extra stuff, but it wasn't clear if I was supposed to clean it up.
