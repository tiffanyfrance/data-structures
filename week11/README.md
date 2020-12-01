# Week 11: Setting Up Connections for End Points

## Process Blog
First I had to finish loading the data I had been collecting 
over the last month and half. Once that was completed, I 
checked the data in dynamodb table.

When retrieving the data, I still had several problems with my query.
It might be the way I set up my PK in the table, but I couldn't
get your example, or any other found example on the web to 
pull back the data properly. 
My solution was to use ```dynamodb.scan()``` to get all the data.
I probably wouldn't use this on big projects but since this is
less than 40 rows, it seemed like an okay alternative.

I still see a lot of little problems (sorting, formatting), 
but think I will handle them in the front end code when 
creating the visualization.

## AA Map
The AA map was fairly straight forward with one hiccup. I was
unable to load the styles.css, however I noticed the main style
that was needed was a height on the mapid. Once I added that
the map showed up. 

I collected my data a little different, and in doing this assignment
realized my data was missing time and date information. 
Should I go back and find this?

## Temperature Sensor
For the temperature sensor, I was a little confused about the 
output. Why percentages? I went back and watched the class but 
couldn't find rational for what the percents meant. I would
assume the bars would be finding daily temperature values. 
Nonetheless, I left the percents for this particular assignment
to review in class on Wednesday.