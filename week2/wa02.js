// npm install cheerio

var fs = require('fs');
var cheerio = require('cheerio');

// load the thesis text file into a variable, `content`
// this is the file that we created in the starter code from last week
var content = fs.readFileSync('/Users/tiffanyfrance/Projects/Grad School/Parsons/data-structures/week2/data/m4.txt');

// load `content` into a cheerio object
var $ = cheerio.load(content);

// print (to the console) names of thesis students
// $('select option').each(function(i, elem) {
//     console.log($(elem).text());
// });

// write the project titles to a text file
// var streetAdd = ''; // this variable will hold the lines of text
var streetAdd = [];

$('table table table tr td:first-of-type').each(function (i, elem) {
    let $elem = $(elem);

    let $textNodes = $elem.contents().filter(function () {
        return this.nodeType == 3;
    });

    let count = 0;

    $textNodes.each((i, e) => {
        let line = $(e).text().trim();

        if (line.length) {
            if (count === 0) {
                line = line.slice(0, line.search(/[.,()]/)).trim();
                streetAdd.push(line);
            }

            count++
        }
    });
});

fs.writeFileSync('/Users/tiffanyfrance/Projects/Grad School/Parsons/data-structures/week2/data/street-address.json', JSON.stringify(streetAdd));