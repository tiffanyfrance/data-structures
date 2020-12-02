// Running in dev tools at https://www.nyintergroup.org/meetings/?tsml-day=any&tsml-region=manhattan&tsml-view=map 
var request = require('request');
var fs = require('fs');
const dotenv = require('dotenv');
dotenv.config();

var arr = fs.readFileSync('./week7/raw-data-full.json');

arr = JSON.parse(arr);

var newArr = [];

var i;
for (i = 0; i < arr.length; i++) {
  var newObj = {},
      address = arr[i].formatted_address;

  if (address.includes('New York, NY')) {
    newObj.id = arr[i].id;
    newObj.venue = arr[i].name;
    newObj.location_id = arr[i].location_id;
    newObj.address = arr[i].formatted_address;
    newObj.lat = arr[i].latitude;
    newObj.long = arr[i].longitude;
    newObj.notes = arr[i].location_notes;
    newObj.region = arr[i].region_id;
    newObj.sub_region = arr[i].sub_region;
    newObj.url = arr[i].url;
    newObj.day = arr[i].day;
    newObj.time = arr[i].time;
    newObj.end_time = arr[i].end_time;
    newObj.time_formatted = arr[i].time_formatted;

    newArr.push(newObj);
  }

}

// console.log(newArr);
console.log(newArr.length)

fs.writeFileSync('./week7/raw-data-modified.json', JSON.stringify(newArr));