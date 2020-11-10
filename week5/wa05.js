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
  constructor(postNum,date,pain,mood,oxycodone,advil,tylenol,colace,cyclobenzaprine,amoxicillian,morphine,toradol,piperacillin,xanax) {
    this.post_num = {};
    this.post_num.N = postNum.toString();
    this.date = {}; 
    this.date.S = new Date(date).toDateString();
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
    this.month = {};
    this.month.N = new Date(date).getMonth().toString();
  }
}

// blogEntries.push(new BlogEntry(1, 'October 1, 2020', 'Be here now', `When I throw a pot<br>There is no magic<br>I am waiting, as one who believes in magic,<br>For the magic to be revealed<br>And a majestic pot to manifest forth<br>From the universe<br>But it does not come<br>No<br>Instead I must rely on listening<br>And learning<br>And feeling<br>And trial and error<br>I am impatient<br>The pot folds in on itself<br>Slip splashes onto my forearms<br>A wet revealer of my lazy intention<br>My punishment is starting over<br>My punishment is wedging again<br>My punishment is misspent time`));
// blogEntries.push(new BlogEntry(2, 'October 2, 2020', 'Unfinished', `I don’t know why so many things are and aren’t<br>Why some live and some die<br>I don’t know why<br>But I want to trust<br>In the story of the lady of Gudalupe<br>Because it’s a lovely story<br>In the revelation of the tarot<br>Because it’s mutes the constant thoughts<br>In the sun pressing through the thick crowded clouds<br>Creating long rays of light<br>All the way from outer space how could it not<br>Be something important<br>How could it not<br>Mean something<br>Because I don’t want to be in a world<br>Where it means nothing<br>Because I don’t want fall into man’s limited interpretation of science<br>As the only reality for humanity<br>And I don’t want to believe that humanity is<br>Only human`));
// blogEntries.push(new BlogEntry(3, 'October 3, 2020', 'Patched', `I am twisted inside<br>Like the roots of a live oak<br>Left too long unmaintained<br>Underground limbs, curl, squeeze around a 20th century<br>Sewage drain<br>The pipes - rusted through - time-eaten holes<br>Leaking waste into the soil beneath the surface<br>Where polluted water permeates<br>A poison throughout, we are in need of a mend<br>A patch of this section<br>Fused to sections of the old<br>Which in time will need patching of their own`));

blogEntries.push(new BlogEntry(1,'October 1, 2020',9,4,6, 0,0,0,0,0,0,0,0,0));
blogEntries.push(new BlogEntry(2,'October 2, 2020',9,4,4, 0,0,0,0,0,0,0,0,0));
blogEntries.push(new BlogEntry(3,'October 3, 2020',8,3,6, 0,0,0,0,0,0,0,0,0));

var AWS = require('aws-sdk');
AWS.config = new AWS.Config();
AWS.config.region = "us-east-1";

var dynamodb = new AWS.DynamoDB();

async.eachSeries(blogEntries, function(value, next) {
  var params = {};
  params.Item = value; 
  // params.TableName = "processblog";
  params.TableName = "processblog-recovery";
  
  dynamodb.putItem(params, function (err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log(data);           // successful response
    next();
  });
});