## Week 2: Using Cheerio to Scrub

<b>Cheerio:</b><br /> 
Installed Cheerio which works like jQuery

Node Version for Cheerio:</b><br /> 
I was using an old version of node for another project. Cheerio was failing on version 8. Therefore I needed to make sure I used 
```nvm use 12```
<br><br>
<b>Making the Selection:</b><br />
```$('table table table tr td:first-of-type')```<br>
After some troubleshooting I noticed that I needed the third nested table and first td. This is very perscriptive for this file only. Will not translate well to other projects.
<br><br>
<b>Getting the Location Name:</b><br />
```let $elem = $(elem);

    streetAdd += ($elem.find('b').text().trim()) + '\n';
    });```<br>

The b tag has the location name. It needed to be trimmed. Added a new line at the end.
<br><br>
<b>Text in Cheerio:</b><br />
Text elements outside of tags can be targeted with<br>
```let $textNodes = $elem.contents().filter(function () {
        return this.nodeType == 3;
    });```
<br><br>
<b>Extracting the Address:</b><br />
```let count = 0;

    $textNodes.each((i, e) => {
        let line = $(e).text().trim();

        if (line.length) {
            if (count === 0) {
                line = line.slice(0, line.lastIndexOf(',') + 1);
            } else if (count === 1) {
                line = 'NY ' + line.slice(line.length - 5)
            }

            streetAdd += line + '\n';

            count++
        }
    });
```<br>

For each textNode, I trim the text on the element. I noticed a lot of extra empty lines in the output so I added a check to see if the ```line.length``` was greater than 0. I believe this is a biproduct of the Text in Cheerio method mentioned above. <br>

The next if ```if (count === 0)``` is really a one off for an address that had a weird character. I removed that with slice. <br>

The second if ```if (count === 1)``` is for formatting the NY and zip code of each entry to make them uniform.<br>
<br>
The count allows me to make sure I am on the correct line of the address.





