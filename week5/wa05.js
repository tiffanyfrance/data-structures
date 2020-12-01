const async = require('async');

var blogEntries = [];

// class BlogEntry {
//   constructor(postNum, date, postTitle, postEntry) {
//     this.post_num = {};
//     this.post_num.N = postNum.toString();
//     this.date = {}; 
//     this.date.S = new Date(date).toDateString();
//     this.post_title = {};
//     this.post_title.S = postTitle;
//     this.post_entry = {};
//     this.post_entry.S = postEntry;
//     this.month = {};
//     this.month.N = new Date(date).getMonth().toString();
//   }

class BlogEntry {
  constructor(postNum,dt,pain,mood,oxycodone,advil,tylenol,colace,cyclobenzaprine,amoxicillian,morphine,toradol,piperacillin,xanax) {
    this.post_num = {};
    this.post_num.N = postNum.toString();
    this.dt = {}; 
    this.dt.S = new Date(dt).toDateString();
    // this.post_title = {};
    // this.post_title.S = postTitle;
    // this.post_entry = {};
    // this.post_entry.S = postEntry;
    this.pain = {};
    this.pain.N = pain.toString();
    this.mood = {};
    this.mood.N = mood.toString();
    this.oxycodone = {};
    this.oxycodone.N = oxycodone.toString();
    this.advil = {};
    this.advil.N = advil.toString();
    this.tylenol = {};
    this.tylenol.N = tylenol.toString();
    this.colace = {};
    this.colace.N = colace.toString();
    this.cyclobenzaprine = {};
    this.cyclobenzaprine.N = cyclobenzaprine.toString();
    this.amoxicillian = {};
    this.amoxicillian.N = amoxicillian.toString();
    this.morphine = {};
    this.morphine.N = morphine.toString();
    this.toradol = {};
    this.toradol.N = toradol.toString();
    this.piperacillin = {};
    this.piperacillin.N = piperacillin.toString();
    this.xanax = {};
    this.xanax.N = xanax.toString();
    // this.month = {};
    // this.month.N = new Date(dt).getMonth().toString();
  }
}

// blogEntries.push(new BlogEntry(1, 'October 1, 2020', 'Be here now', `When I throw a pot<br>There is no magic<br>I am waiting, as one who believes in magic,<br>For the magic to be revealed<br>And a majestic pot to manifest forth<br>From the universe<br>But it does not come<br>No<br>Instead I must rely on listening<br>And learning<br>And feeling<br>And trial and error<br>I am impatient<br>The pot folds in on itself<br>Slip splashes onto my forearms<br>A wet revealer of my lazy intention<br>My punishment is starting over<br>My punishment is wedging again<br>My punishment is misspent time`));
// blogEntries.push(new BlogEntry(2, 'October 2, 2020', 'Unfinished', `I don’t know why so many things are and aren’t<br>Why some live and some die<br>I don’t know why<br>But I want to trust<br>In the story of the lady of Gudalupe<br>Because it’s a lovely story<br>In the revelation of the tarot<br>Because it’s mutes the constant thoughts<br>In the sun pressing through the thick crowded clouds<br>Creating long rays of light<br>All the way from outer space how could it not<br>Be something important<br>How could it not<br>Mean something<br>Because I don’t want to be in a world<br>Where it means nothing<br>Because I don’t want fall into man’s limited interpretation of science<br>As the only reality for humanity<br>And I don’t want to believe that humanity is<br>Only human`));
// blogEntries.push(new BlogEntry(3, 'October 3, 2020', 'Patched', `I am twisted inside<br>Like the roots of a live oak<br>Left too long unmaintained<br>Underground limbs, curl, squeeze around a 20th century<br>Sewage drain<br>The pipes - rusted through - time-eaten holes<br>Leaking waste into the soil beneath the surface<br>Where polluted water permeates<br>A poison throughout, we are in need of a mend<br>A patch of this section<br>Fused to sections of the old<br>Which in time will need patching of their own`));

// blogEntries.push(new BlogEntry(1,'October 1, 2020',9,4,6, 0,0,0,0,0,0,0,0,0));
// blogEntries.push(new BlogEntry(2,'October 2, 2020',9,4,4, 0,0,0,0,0,0,0,0,0));
// blogEntries.push(new BlogEntry(3,'October 3, 2020',8,3,6, 0,0,0,0,0,0,0,0,0));

blogEntries.push(new BlogEntry(1,"October 1, 2020",9,4,6,0,0,0,0,0,0,0,0,0));
blogEntries.push(new BlogEntry(2,"October 2, 2020",9,4,4,0,0,0,0,0,0,0,0,0));
blogEntries.push(new BlogEntry(3,"October 3, 2020",8,3,6,0,0,0,0,0,0,0,0,0));
blogEntries.push(new BlogEntry(4,"October 4, 2020",9,3,4,0,0,0,0,0,0,0,0,0));
blogEntries.push(new BlogEntry(5,"October 5, 2020",9,2,6,0,0,0,0,0,0,0,0,0));
blogEntries.push(new BlogEntry(6,"October 6, 2020",10,3,6,0,0,0,0,0,0,0,0,0));
blogEntries.push(new BlogEntry(7,"October 7, 2020",10,3,6,6,6,2,0,0,4,4,2,0));
blogEntries.push(new BlogEntry(8,"October 8, 2020",9,3,6,6,6,2,0,0,4,4,2,2));
blogEntries.push(new BlogEntry(9,"October 9, 2020",10,1,6,6,6,2,0,0,4,4,2,2));
blogEntries.push(new BlogEntry(10,"October 10, 2020",9,1,6,6,6,2,0,0,4,4,2,2));
blogEntries.push(new BlogEntry(11,"October 11, 2020",9,3,6,6,6,2,0,0,4,4,2,2));
blogEntries.push(new BlogEntry(12,"October 12, 2020",9,3,6,6,6,2,0,0,2,4,2,1));
blogEntries.push(new BlogEntry(13,"October 13, 2020",9,2,6,6,6,2,0,0,2,2,2,0));
blogEntries.push(new BlogEntry(14,"October 14, 2020",8,3,6,6,6,2,0,0,1,1,2,0));
blogEntries.push(new BlogEntry(15,"October 15, 2020",8,3,6,3,4,2,0,2,0,0,0,0));
blogEntries.push(new BlogEntry(16,"October 16, 2020",9,2,6,3,4,2,0,2,0,0,0,0));
blogEntries.push(new BlogEntry(17,"October 17, 2020",8,0,2,3,4,2,0,2,0,0,0,1));
blogEntries.push(new BlogEntry(18,"October 18, 2020",10,0,2,3,4,2,0,2,0,0,0,2));
blogEntries.push(new BlogEntry(19,"October 19, 2020",8,0,2,3,4,2,0,2,0,0,0,1));
blogEntries.push(new BlogEntry(20,"October 20, 2020",9,0,2,3,4,2,0,2,0,0,0,1));
blogEntries.push(new BlogEntry(21,"October 21, 2020",9,0,2,3,4,2,0,2,0,0,0,2));
blogEntries.push(new BlogEntry(22,"October 22, 2020",8,2,2,3,4,2,0,2,0,0,0,1));
blogEntries.push(new BlogEntry(23,"October 23, 2020",7,5,2,2,2,2,0,2,0,0,0,1));
blogEntries.push(new BlogEntry(24,"October 24, 2020",7,5,2,2,2,1,0,2,0,0,0,0));
blogEntries.push(new BlogEntry(25,"October 25, 2020",7,4,1,2,0,1,0,0,0,0,0,0));
blogEntries.push(new BlogEntry(26,"October 26, 2020",5,5,1,2,0,1,0,0,0,0,0,0));
blogEntries.push(new BlogEntry(27,"October 27, 2020",8,7,1,2,0,1,0,0,0,0,0,0));
blogEntries.push(new BlogEntry(28,"October 28, 2020",7,6,1,2,0,1,0,0,0,0,0,0));
blogEntries.push(new BlogEntry(29,"October 29, 2020",6,4,0,2,0,0,0,0,0,0,0,0));
blogEntries.push(new BlogEntry(30,"October 30, 2020",5,4,0,2,2,0,0,0,0,0,0,0));
blogEntries.push(new BlogEntry(31,"October 31, 2020",5,4,1,2,0,0,2,2,0,0,0,2));
blogEntries.push(new BlogEntry(32,"November 1, 2020",4,5,0,2,0,0,2,2,0,0,0,2));
blogEntries.push(new BlogEntry(33,"November 2, 2020",3,7,0,2,0,0,2,2,0,0,0,0));
blogEntries.push(new BlogEntry(34,"November 3, 2020",3,6,1,2,0,0,0,2,0,0,0,0));
blogEntries.push(new BlogEntry(35,"November 4, 2020",4,7,0,2,2,0,0,2,0,0,0,0));
blogEntries.push(new BlogEntry(36,"November 5, 2020",4,7,0,2,0,0,0,2,0,0,0,1));
blogEntries.push(new BlogEntry(37,"November 6, 2020",3,7,0,2,0,0,0,2,0,0,0,0));

var AWS = require('aws-sdk');
AWS.config = new AWS.Config();
AWS.config.region = "us-east-1";

var dynamodb = new AWS.DynamoDB();

async.eachSeries(blogEntries, function(value, next) {
  var params = {};
  params.Item = value; 
  // params.TableName = "processblog";
  params.TableName = "processblog_recovery";
  
  dynamodb.putItem(params, function (err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log(data);           // successful response
    next();
  });
});