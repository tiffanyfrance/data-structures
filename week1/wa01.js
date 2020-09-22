// npm install request
// mkdir data

var request = require('request');
var fs = require('fs');

var urlArr = [
    "https://parsons.nyc/aa/m01.html",  
    "https://parsons.nyc/aa/m02.html",  
    "https://parsons.nyc/aa/m03.html",  
    "https://parsons.nyc/aa/m04.html",  
    "https://parsons.nyc/aa/m05.html",  
    "https://parsons.nyc/aa/m06.html",  
    "https://parsons.nyc/aa/m07.html",  
    "https://parsons.nyc/aa/m08.html",  
    "https://parsons.nyc/aa/m09.html",  
    "https://parsons.nyc/aa/m10.html"
];

// the for loop uses let instead of var in order to properly scope the i
for(let i = 0; i < urlArr.length; i++) {
    request(urlArr[i], function(error, response, body){
        if (!error && response.statusCode == 200) {
            var urlPath = '/Users/tiffanyfrance/Projects/Grad School/Parsons/data-structures/week1/data/m' + i + '.txt';
            fs.writeFileSync(urlPath, body);
        }
        else {console.log("Request failed!")}
    });
}