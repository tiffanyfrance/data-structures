// npm install cheerio

var fs = require('fs');
var cheerio = require('cheerio');

// load the thesis text file into a variable, `content`
// this is the file that we created in the starter code from last week
var content = fs.readFileSync('data/m4.txt');

// load `content` into a cheerio object
var $ = cheerio.load(content);

// print (to the console) names of thesis students
// $('select option').each(function(i, elem) {
//     console.log($(elem).text());
// });

// write the project titles to a text file
var streetAdd = ''; // this variable will hold the lines of text

$('table table table tr td:first-of-type').each(function (i, elem) {
    let $elem = $(elem);

    streetAdd += ($elem.find('b').text().trim()) + '\n';

    let $textNodes = $elem.contents().filter(function () {
        return this.nodeType == 3;
    });

    let count = 0;

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

    streetAdd += '\n';
});

fs.writeFileSync('data/street-address.txt', streetAdd);