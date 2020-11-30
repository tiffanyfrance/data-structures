// Running in dev tools at https://www.nyintergroup.org/meetings/?tsml-day=any&tsml-region=manhattan&tsml-view=map 

var arr = [
  {
    "value": "14th Street Y",
    "formatted_address": "344 E 14th St, New York, NY 10003, USA",
    "latitude": "40.7312884",
    "longitude": "-73.9832952",
    "region": "912",
    "notes": "Between 1st & 2nd Avenues",
    "tokens": [
      "14th",
      "Street",
      "Y"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/14th-street-y/"
  },
  {
    "value": "",
    "formatted_address": "2126 2nd Ave, New York, NY 10029, USA",
    "latitude": "40.7926781",
    "longitude": "-73.9406285",
    "region": "985",
    "notes": "1st Floor\nBetween 109th & 110th Streets",
    "tokens": [],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/2126-2nd-avenue/"
  },
  {
    "value": "",
    "formatted_address": "213 W 30th St, New York, NY 10001, USA",
    "latitude": "40.7489531",
    "longitude": "-73.9930785",
    "region": "1026",
    "notes": "St John's Hall Entrance",
    "tokens": [],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/213-west-30th-street/"
  },
  {
    "value": "220 W Houston St",
    "formatted_address": "220 W Houston St, New York, NY 10014, USA",
    "latitude": "40.7287153",
    "longitude": "-74.004578",
    "region": "894",
    "notes": "Between 6th and 7th Avenue; Opens to a stairway - Meeting is one flight up to the left.\n\nCOVID Notes: Limited capacity of 25 people per meeting. Proper mask placement is required for entry, and required throughout the duration of the meeting. Sign in on contact tracing forms is required for entry. No food or drink permitted.",
    "tokens": [
      "220",
      "W",
      "Houston",
      "St"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/220-w-houston-st/"
  },
  {
    "value": "",
    "formatted_address": "2290 2nd Ave, New York, NY 10035, USA",
    "latitude": "40.7979229",
    "longitude": "-73.9367858",
    "region": "985",
    "notes": "Between 117th and 118th Sts.",
    "tokens": [],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/2290-2nd-ave-new-york-ny-10035/"
  },
  {
    "value": "Hammer Building",
    "formatted_address": "Hammer Building, 701 W 168th St, New York, NY 10032, USA",
    "latitude": "40.8427426",
    "longitude": "-73.9425728",
    "region": "955",
    "notes": "Corner of Ft. Washington Avenue. Room #LL108B",
    "tokens": [
      "Hammer",
      "Building"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/26123/"
  },
  {
    "value": "",
    "formatted_address": "289 St Nicholas Ave, New York, NY 10027, USA",
    "latitude": "40.8105385",
    "longitude": "-73.952981",
    "region": "949",
    "notes": "Basement; To Enter Building Press Code 016 and Green Phone Icon",
    "tokens": [],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/27209/"
  },
  {
    "value": "",
    "formatted_address": "184 E 109th St, New York, NY 10029, USA",
    "latitude": "40.7935652",
    "longitude": "-73.9438924",
    "region": "919",
    "notes": "",
    "tokens": [],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/27967/"
  },
  {
    "value": "",
    "formatted_address": "30 E 35th St, New York, NY 10016, USA",
    "latitude": "40.7479205",
    "longitude": "-73.9817652",
    "region": "907",
    "notes": "Between Madison & Park Avenues",
    "tokens": [],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/30-east-35th-street/"
  },
  {
    "value": "",
    "formatted_address": "New York, NY 10027, USA",
    "latitude": "40.8138912",
    "longitude": "-73.9624327",
    "region": "1095",
    "notes": "recoverycoalition@columbia.edu for location",
    "tokens": [],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/30117/"
  },
  {
    "value": "",
    "formatted_address": "9 E 29th St, New York, NY 10016, USA",
    "latitude": "40.7450298",
    "longitude": "-73.9856455",
    "region": "928",
    "notes": "Enter through Glass Door, between Madison and 5th Ave.",
    "tokens": [],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/30241/"
  },
  {
    "value": "",
    "formatted_address": "648 Broadway, New York, NY 10012, USA",
    "latitude": "40.7265693",
    "longitude": "-73.9953363",
    "region": "894",
    "notes": "NE Corner of Broadway at Bleecker St. Floor 9, Suite 910; In the lobby enter code 00910# or Find 'Breather room 910' an automated voice will appear asking for the name of the reservation. Say any name, and the building will be unlocked. executive",
    "tokens": [],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/31976/"
  },
  {
    "value": "",
    "formatted_address": "35 Thayer St, New York, NY 10040, USA",
    "latitude": "40.862594",
    "longitude": "-73.926186",
    "region": "955",
    "notes": "Basement\nAt 200th Street, behind Dyckman Avenue\nBetween Sherman and Nagle Ave",
    "tokens": [],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/35-thayer-street/"
  },
  {
    "value": "418 E 75th Street",
    "formatted_address": "418 E 75th St, New York, NY 10021, USA",
    "latitude": "40.7692598",
    "longitude": "-73.953784",
    "region": "922",
    "notes": "Between First and York Ave.",
    "tokens": [
      "418",
      "E",
      "75th",
      "Street"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/41020/"
  },
  {
    "value": "",
    "formatted_address": "4111 Broadway, New York, NY 10033, USA",
    "latitude": "40.8451229",
    "longitude": "-73.9392062",
    "region": "955",
    "notes": "",
    "tokens": [],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/4111-broadway-new-york-new-york-10032/"
  },
  {
    "value": "46th Street Clubhouse",
    "formatted_address": "252 W 46th St, New York, NY 10036, USA",
    "latitude": "40.7593263",
    "longitude": "-73.9872739",
    "region": "915",
    "notes": "3rd Floor\nBetween Broadway & 8th Avenue",
    "tokens": [
      "46th",
      "Street",
      "Clubhouse"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/46th-street-club-house/"
  },
  {
    "value": "Addiction Institute",
    "formatted_address": "306 W 102nd St, New York, NY 10025, USA",
    "latitude": "40.7991395",
    "longitude": "-73.9711355",
    "region": "896",
    "notes": "2nd Floor\nBetween West End Avenue & Riverside Drive",
    "tokens": [
      "Addiction",
      "Institute"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/addiction-institute/"
  },
  {
    "value": "Advent Lutheran Church",
    "formatted_address": "2504 Broadway, New York, NY 10025, USA",
    "latitude": "40.792695",
    "longitude": "-73.97269",
    "region": "896",
    "notes": "Basement\nAt 93rd Street",
    "tokens": [
      "Advent",
      "Lutheran",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/advent-lutheran-church/"
  },
  {
    "value": "All Angels Church",
    "formatted_address": "251 W 80th St, New York, NY 10024, USA",
    "latitude": "40.7849956",
    "longitude": "-73.9800077",
    "region": "896",
    "notes": "",
    "tokens": [
      "All",
      "Angels",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/all-angels-church/"
  },
  {
    "value": "All Saints Church",
    "formatted_address": "230 E 60th St, New York, NY 10022, USA",
    "latitude": "40.7614473",
    "longitude": "-73.9650253",
    "region": "1018",
    "notes": "Between 2nd & 3rd Avenues",
    "tokens": [
      "All",
      "Saints",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/all-saints-church-3/"
  },
  {
    "value": "All Saints Ukrainian Orthodox Church",
    "formatted_address": "206 E 11th St, New York, NY 10003, USA",
    "latitude": "40.7308994",
    "longitude": "-73.9881087",
    "region": "912",
    "notes": "Btw 2nd & 3rd Avenues, Ground Floor",
    "tokens": [
      "All",
      "Saints",
      "Ukrainian",
      "Orthodox",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/all-saints-ukrainian-orthodox-church/"
  },
  {
    "value": "All Souls Church",
    "formatted_address": "88 St Nicholas Ave, New York, NY 10026, USA",
    "latitude": "40.8017227",
    "longitude": "-73.9521536",
    "region": "950",
    "notes": "West of AC Powell Blvd or 7th Ave",
    "tokens": [
      "All",
      "Souls",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/all-souls-church/"
  },
  {
    "value": "All Souls Uniterian Church",
    "formatted_address": "1157 Lexington Ave, New York, NY 10075, USA",
    "latitude": "40.7753286",
    "longitude": "-73.9581952",
    "region": "922",
    "notes": "At East 80th Street",
    "tokens": [
      "All",
      "Souls",
      "Uniterian",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/all-souls-uniterian-church/"
  },
  {
    "value": "Ansche Chesed Synagogue",
    "formatted_address": "251 W 100th St, New York, NY 10025, USA",
    "latitude": "40.7978378",
    "longitude": "-73.9708521",
    "region": "896",
    "notes": "At West End Avenue",
    "tokens": [
      "Ansche",
      "Chesed",
      "Synagogue"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/ansche-chesed-synagogue/"
  },
  {
    "value": "Apartment Building",
    "formatted_address": "538 W 47th St, New York, NY 10036, USA",
    "latitude": "40.7633341",
    "longitude": "-73.9948934",
    "region": "915",
    "notes": "Between 10th & 11th Avenues. Basement.",
    "tokens": [
      "Apartment",
      "Building"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/apartment-building/"
  },
  {
    "value": "Archdiocesan Cathedral of the Holy Trinity",
    "formatted_address": "337 E 74th St, New York, NY 10021, USA",
    "latitude": "40.7695505",
    "longitude": "-73.9559804",
    "region": "922",
    "notes": "Between First and Second Avenues",
    "tokens": [
      "Archdiocesan",
      "Cathedral",
      "of",
      "the",
      "Holy",
      "Trinity"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/archdiocesan-cathedral-of-the-holy-trinity/"
  },
  {
    "value": "Atmananda Yoga Center",
    "formatted_address": "112 E 23rd St, New York, NY 10010, USA",
    "latitude": "40.739628",
    "longitude": "-73.9859184",
    "region": "912",
    "notes": "",
    "tokens": [
      "Atmananda",
      "Yoga",
      "Center"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/atmananda-yoga-center/"
  },
  {
    "value": "Bethel Church",
    "formatted_address": "60 W 132nd St, New York, NY 10037, USA",
    "latitude": "40.8115125",
    "longitude": "-73.9410911",
    "region": "1063",
    "notes": "Basement",
    "tokens": [
      "Bethel",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/bethel-church/"
  },
  {
    "value": "Blessed Sacrament Church Rectory",
    "formatted_address": "152 W 71st St, New York, NY 10023, USA",
    "latitude": "40.77711",
    "longitude": "-73.981217",
    "region": "896",
    "notes": "Between Columbus Avenue & Broadway",
    "tokens": [
      "Blessed",
      "Sacrament",
      "Church",
      "Rectory"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/blessed-sacrament-church-rectory/"
  },
  {
    "value": "Brick Church Parish House",
    "formatted_address": "62 E 92nd St, New York, NY 10128, USA",
    "latitude": "40.7839599",
    "longitude": "-73.9552614",
    "region": "920",
    "notes": "Basement\nBetween Madison & Park Avenues",
    "tokens": [
      "Brick",
      "Church",
      "Parish",
      "House"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/brick-church-parish-house/"
  },
  {
    "value": "Broadway Presbyterian Church",
    "formatted_address": "601 W 114th St, New York, NY 10025, USA",
    "latitude": "40.8070418",
    "longitude": "-73.9651341",
    "region": "896",
    "notes": "2nd Red Door",
    "tokens": [
      "Broadway",
      "Presbyterian",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/broadway-presbyterian-church/"
  },
  {
    "value": "Brotherhood Synagogue",
    "formatted_address": "28 Gramercy Park S, New York, NY 10003, USA",
    "latitude": "40.7370361",
    "longitude": "-73.9853871",
    "region": "928",
    "notes": "2nd Floor, East 20th Street At Irving Place",
    "tokens": [
      "Brotherhood",
      "Synagogue"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/brotherhood-synagogue/"
  },
  {
    "value": "Calvary Church Parish House",
    "formatted_address": "61 Gramercy Park N, New York, NY 10010, USA",
    "latitude": "40.7389514",
    "longitude": "-73.9868257",
    "region": "928",
    "notes": "Between Park & Lexington Avenues",
    "tokens": [
      "Calvary",
      "Church",
      "Parish",
      "House"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/calvary-church-parish-house/"
  },
  {
    "value": "Casita Esperanza",
    "formatted_address": "557 W 156th St, New York, NY 10032, USA",
    "latitude": "40.8332853",
    "longitude": "-73.9446524",
    "region": "955",
    "notes": "",
    "tokens": [
      "Casita",
      "Esperanza"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/casita-esperanza/"
  },
  {
    "value": "Cathedral High School",
    "formatted_address": "350 E 56th St, New York, NY 10022, USA",
    "latitude": "40.7576496",
    "longitude": "-73.964016",
    "region": "1018",
    "notes": "Between 1st & 2nd Avenues.\n3rd Floor Library",
    "tokens": [
      "Cathedral",
      "High",
      "School"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/cathedral-high-school/"
  },
  {
    "value": "Center for Recovery and Wellness",
    "formatted_address": "29 Avenue D, New York, NY 10009, USA",
    "latitude": "40.7210218",
    "longitude": "-73.9781689",
    "region": "912",
    "notes": "25-29 Avenue D, Between 3rd and 4th Street, Room 304",
    "tokens": [
      "Center",
      "for",
      "Recovery",
      "and",
      "Wellness"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/center-for-recovery-and-wellness-2/"
  },
  {
    "value": "Central Presbyterian Church",
    "formatted_address": "593 Park Ave, New York, NY 10065, USA",
    "latitude": "40.7656978",
    "longitude": "-73.9672859",
    "region": "922",
    "notes": "5th Floor Library At 64th Street",
    "tokens": [
      "Central",
      "Presbyterian",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/central-presbyterian-church/"
  },
  {
    "value": "Christ & St Stephen's Church",
    "formatted_address": "120 W 69th St, New York, NY 10023, USA",
    "latitude": "40.7756527",
    "longitude": "-73.9813177",
    "region": "896",
    "notes": "Basement\nBetween Columbus Avenue & Bway",
    "tokens": [
      "Christ",
      "St",
      "Stephens",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/christ-st-stephens-church/"
  },
  {
    "value": "Christ United Methodist Church",
    "formatted_address": "524 Park Ave, New York, NY 10065, USA",
    "latitude": "40.7638679",
    "longitude": "-73.9696377",
    "region": "922",
    "notes": "At 60th Street",
    "tokens": [
      "Christ",
      "United",
      "Methodist",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/christ-united-methodist-church/"
  },
  {
    "value": "Christian Parish for Spiritual Renewal",
    "formatted_address": "2044 7th Ave, New York, NY 10027, USA",
    "latitude": "40.8072669",
    "longitude": "-73.9497074",
    "region": "950",
    "notes": "",
    "tokens": [
      "Christian",
      "Parish",
      "for",
      "Spiritual",
      "Renewal"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/christian-parish-for-spiritual-renewal/"
  },
  {
    "value": "Church of Notre Dame",
    "formatted_address": "405 W 114th St, New York, NY 10025, USA",
    "latitude": "40.805083",
    "longitude": "-73.960405",
    "region": "1095",
    "notes": "Rectory Merton Room. 1 block east of Amsterdam",
    "tokens": [
      "Church",
      "of",
      "Notre",
      "Dame"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/church-of-notre-dame/"
  },
  {
    "value": "Church of Saint Francis Xavier",
    "formatted_address": "55 W 15th St, New York, NY 10011, USA",
    "latitude": "40.7378853",
    "longitude": "-73.995525",
    "region": null,
    "notes": "Hurtado Hall, ring bell to enter",
    "tokens": [
      "Church",
      "of",
      "Saint",
      "Francis",
      "Xavier"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/church-of-saint-francis-xavier/"
  },
  {
    "value": "Church of Saint Thomas More",
    "formatted_address": "65 E 89th St, New York, NY 10128, USA",
    "latitude": "40.7827427",
    "longitude": "-73.9566698",
    "region": "920",
    "notes": "At Park & Madison Avenues Rectory Basement",
    "tokens": [
      "Church",
      "of",
      "Saint",
      "Thomas",
      "More"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/church-of-saint-thomas-more/"
  },
  {
    "value": "Church of St Matthew & St Timothy",
    "formatted_address": "26 W 84th St, New York, NY 10024, USA",
    "latitude": "40.7843147",
    "longitude": "-73.9717317",
    "region": "896",
    "notes": "Between Central Park West & Columbus Avenue\n\nCOVID NOTES: 25 person capacity and mask must be worn at all time.",
    "tokens": [
      "Church",
      "of",
      "St",
      "Matthew",
      "Timothy"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/church-of-st-matthew-st-timothy/"
  },
  {
    "value": "Church of St Paul & St Andrew",
    "formatted_address": "263 W 86th St, New York, NY 10024, USA",
    "latitude": "40.7888908",
    "longitude": "-73.9772512",
    "region": "896",
    "notes": "1st Floor\n@Corner of West End Avenue & 86th Street",
    "tokens": [
      "Church",
      "of",
      "St",
      "Paul",
      "Andrew"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/church-of-st-paul-st-andrew/"
  },
  {
    "value": "Church of the Ascension",
    "formatted_address": "221 W 107th St, New York, NY 10025, USA",
    "latitude": "40.8018597",
    "longitude": "-73.9663042",
    "region": "896",
    "notes": "Between Broadway and Amsterdam\nBasement",
    "tokens": [
      "Church",
      "of",
      "the",
      "Ascension"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/church-of-the-ascension-2/"
  },
  {
    "value": "Church of the Ascension Parish House",
    "formatted_address": "12 W 11th St, New York, NY 10011, USA",
    "latitude": "40.7341126",
    "longitude": "-73.9957561",
    "region": "894",
    "notes": "Ground Floor Between 5th Avenue & Avenue of the Americas",
    "tokens": [
      "Church",
      "of",
      "the",
      "Ascension",
      "Parish",
      "House"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/church-of-the-ascension-parish-house/"
  },
  {
    "value": "Church of the Epiphany",
    "formatted_address": "1393 York Ave, New York, NY 10021, USA",
    "latitude": "40.7685172",
    "longitude": "-73.9529983",
    "region": "922",
    "notes": "At 74th Street",
    "tokens": [
      "Church",
      "of",
      "the",
      "Epiphany"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/church-of-the-epiphany/"
  },
  {
    "value": "Church of the Good Shepherd",
    "formatted_address": "630 Isham St, New York, NY 10034, USA",
    "latitude": "40.8695555",
    "longitude": "-73.9210096",
    "region": "979",
    "notes": "2 blocks from Broadway on Seaman Ave",
    "tokens": [
      "Church",
      "of",
      "the",
      "Good",
      "Shepherd"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/church-of-the-good-shepherd/"
  },
  {
    "value": "Church of the Good Shepherd",
    "formatted_address": "240 E 31st St, New York, NY 10016, USA",
    "latitude": "40.7430863",
    "longitude": "-73.9781856",
    "region": "907",
    "notes": "",
    "tokens": [
      "Church",
      "of",
      "the",
      "Good",
      "Shepherd"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/church-of-the-good-shepherd-3/"
  },
  {
    "value": "Church of the Good Shepherd",
    "formatted_address": "236 E 31st St, New York, NY 10016, USA",
    "latitude": "40.7430458",
    "longitude": "-73.978217",
    "region": "907",
    "notes": "Basement\nBETWEEN 2nd and 3rd AVENUES",
    "tokens": [
      "Church",
      "of",
      "the",
      "Good",
      "Shepherd"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/church-of-the-good-shepherd-4/"
  },
  {
    "value": "Church of the Heavenly Rest",
    "formatted_address": "1085 5th Ave, New York, NY 10128, USA",
    "latitude": "40.7838507",
    "longitude": "-73.9584178",
    "region": "920",
    "notes": "@90th St., Chapel",
    "tokens": [
      "Church",
      "of",
      "the",
      "Heavenly",
      "Rest"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/church-of-the-heavenly-rest-2/"
  },
  {
    "value": "Church of the Incarnation",
    "formatted_address": "209 Madison Ave, New York, NY 10016, USA",
    "latitude": "40.7486231",
    "longitude": "-73.9820249",
    "region": "907",
    "notes": "2nd Floor\nEnter through side door At 35th Street",
    "tokens": [
      "Church",
      "of",
      "the",
      "Incarnation"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/church-of-the-incarnation/"
  },
  {
    "value": "Church of the Intercession",
    "formatted_address": "550 W 155th St, New York, NY 10032, USA",
    "latitude": "40.832229",
    "longitude": "-73.9452186",
    "region": "955",
    "notes": "2nd Floor Guild Room\nBetween Amsterdam Avenue & Bway",
    "tokens": [
      "Church",
      "of",
      "the",
      "Intercession"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/church-of-the-intercession/"
  },
  {
    "value": "Church of the Transfiguration",
    "formatted_address": "29 Mott St, New York, NY 10013, USA",
    "latitude": "40.7148115",
    "longitude": "-73.9991171",
    "region": "905",
    "notes": "Basement\nAt Mott & Mosco Streets",
    "tokens": [
      "Church",
      "of",
      "the",
      "Transfiguration"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/church-of-the-transfiguration/"
  },
  {
    "value": "Church of the Village",
    "formatted_address": "201 W 13th St, New York, NY 10011, USA",
    "latitude": "40.7381625",
    "longitude": "-74.0003771",
    "region": "894",
    "notes": "7th Ave and 13th St, Mezzanine",
    "tokens": [
      "Church",
      "of",
      "the",
      "Village"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/church-of-the-village/"
  },
  {
    "value": "Church Santa Rosa de Lima",
    "formatted_address": "510 W 165th St, New York, NY 10032, USA",
    "latitude": "40.8379319",
    "longitude": "-73.9391821",
    "region": "955",
    "notes": "Basement\nBetween Audubon & Amsterdam Avenues",
    "tokens": [
      "Church",
      "Santa",
      "Rosa",
      "de",
      "Lima"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/church-santa-rosa-de-lima/"
  },
  {
    "value": "Coatha Church on the Hill Senior Center",
    "formatted_address": "2005 Amsterdam Ave, New York, NY 10032, USA",
    "latitude": "40.8342672",
    "longitude": "-73.940788",
    "region": "955",
    "notes": "At 159th Street",
    "tokens": [
      "Coatha",
      "Church",
      "on",
      "the",
      "Hill",
      "Senior",
      "Center"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/coatha-church-on-the-hill-senior-center/"
  },
  {
    "value": "Community Church of New York",
    "formatted_address": "40 E 35th St, New York, NY 10016, USA",
    "latitude": "40.7478325",
    "longitude": "-73.9815796",
    "region": "907",
    "notes": "Downstairs (elevator) to Chapel; building closed Holidays, also Fridays in July and August",
    "tokens": [
      "Community",
      "Church",
      "of",
      "New",
      "York"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/community-church-of-new-york/"
  },
  {
    "value": "Congregational Kehilath Jeshurun",
    "formatted_address": "114 E 85th St, New York, NY 10028, USA",
    "latitude": "40.7789627",
    "longitude": "-73.9569926",
    "region": "922",
    "notes": "Ramaz School Entrance\nPhoto ID Required to enter Bldg.\nEntrance between Park & Lexington",
    "tokens": [
      "Congregational",
      "Kehilath",
      "Jeshurun"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/congregational-kehilath-jeshurun/"
  },
  {
    "value": "Temple Or Olam",
    "formatted_address": "308 E 55th St, New York, NY 10022, USA",
    "latitude": "40.7576231",
    "longitude": "-73.9657988",
    "region": "1018",
    "notes": "Between 1st & 2nd Avenues",
    "tokens": [
      "Temple",
      "Or",
      "Olam"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/conservative-synagogue/"
  },
  {
    "value": "Convent Baptist Church Education Building",
    "formatted_address": "425 W 144th St, New York, NY 10031, USA",
    "latitude": "40.8239538",
    "longitude": "-73.9462343",
    "region": "950",
    "notes": "1st Floor\nBetween Convent Avenue & Hamilton Terrace",
    "tokens": [
      "Convent",
      "Baptist",
      "Church",
      "Education",
      "Building"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/convent-baptist-church-education-building/"
  },
  {
    "value": "DC 37 (140 Murray Street / Park Place)",
    "formatted_address": "140 Murray Street, New York, NY 10007, USA",
    "latitude": "40.7150819",
    "longitude": "-74.012375",
    "region": "905",
    "notes": "The building is actually labeled 140 Park Place as this is a historical address",
    "tokens": [
      "DC",
      "37",
      "140",
      "Murray",
      "Street",
      "Park",
      "Place"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/dc-37/"
  },
  {
    "value": "East Midtown Plaza (Community Room H)",
    "formatted_address": "320 E 25th St, New York, NY 10010, USA",
    "latitude": "40.7386022",
    "longitude": "-73.9791003",
    "region": "928",
    "notes": "Between First and Second Avenues",
    "tokens": [
      "East",
      "Midtown",
      "Plaza",
      "Community",
      "Room",
      "H"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/east-midtown-plaza-community-room-h/"
  },
  {
    "value": "East Midtown Plaza (Community Room H)",
    "formatted_address": "320 E 24th St, New York, NY 10010, USA",
    "latitude": "40.738182",
    "longitude": "-73.9795334",
    "region": "928",
    "notes": "Between First and Second Avenues",
    "tokens": [
      "East",
      "Midtown",
      "Plaza",
      "Community",
      "Room",
      "H"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/east-midtown-plaza-community-room-h-2/"
  },
  {
    "value": "Epiphany Roman Catholic Church",
    "formatted_address": "373 2nd Ave, New York, NY 10010, USA",
    "latitude": "40.737172",
    "longitude": "-73.982038",
    "region": "912",
    "notes": "First Ave and East 22nd Street\nChurch Vestibule",
    "tokens": [
      "Epiphany",
      "Roman",
      "Catholic",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/epiphany-roman-catholic-church/"
  },
  {
    "value": "Fifth Av Presbyterian Church",
    "formatted_address": "7 W 55th St, New York, NY 10019, USA",
    "latitude": "40.762081",
    "longitude": "-73.9752496",
    "region": "1026",
    "notes": "",
    "tokens": [
      "Fifth",
      "Av",
      "Presbyterian",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/fifth-av-presbyterian-church/"
  },
  {
    "value": "First Presbyterian Church",
    "formatted_address": "12 W 12th St, New York, NY 10011, USA",
    "latitude": "40.7347542",
    "longitude": "-73.9950052",
    "region": "894",
    "notes": "Roof Level",
    "tokens": [
      "First",
      "Presbyterian",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/first-presbyterian-church-10/"
  },
  {
    "value": "Fort Washington Collegiate Church",
    "formatted_address": "729 W 181st St, New York, NY 10033, USA",
    "latitude": "40.8509803",
    "longitude": "-73.9375743",
    "region": "955",
    "notes": "At Fort Washington",
    "tokens": [
      "Fort",
      "Washington",
      "Collegiate",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/fort-washington-collegiate-church/"
  },
  {
    "value": "Fourth Universalist Church",
    "formatted_address": "4 W 76th St, New York, NY 10023, USA",
    "latitude": "40.7788723",
    "longitude": "-73.974793",
    "region": "896",
    "notes": "Between Central Park West & Columbus Avenue\nMeeting in the gym",
    "tokens": [
      "Fourth",
      "Universalist",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/fourth-universalist-church/"
  },
  {
    "value": "Franciscan Community Center",
    "formatted_address": "214 W 97th St, New York, NY 10025, USA",
    "latitude": "40.7948388",
    "longitude": "-73.9706749",
    "region": "896",
    "notes": "Basement\nBetween Broadway & Amsterdam Avenues",
    "tokens": [
      "Franciscan",
      "Community",
      "Center"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/franciscan-community-center/"
  },
  {
    "value": "Freedom Institute",
    "formatted_address": "DuMont Building, 515 Madison Ave, New York, NY 10022, USA",
    "latitude": "40.7597893",
    "longitude": "-73.9737557",
    "region": "906",
    "notes": "13th Floor",
    "tokens": [
      "Freedom",
      "Institute"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/freedom-institute/"
  },
  {
    "value": "Friends Meeting House",
    "formatted_address": "15 Rutherford Pl, New York, NY 10003, USA",
    "latitude": "40.7338148",
    "longitude": "-73.9853449",
    "region": "912",
    "notes": "Basement\nBetween 2nd & 3rd Avenues",
    "tokens": [
      "Friends",
      "Meeting",
      "House"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/friends-meeting-house/"
  },
  {
    "value": "General Theological Seminary",
    "formatted_address": "440 W 21st St, New York, NY 10011, USA",
    "latitude": "40.7458439",
    "longitude": "-74.0039926",
    "region": "894",
    "notes": "1st and 2nd Floor. Enter thru gate on 21st Street Between 9th & 10th Avenues.",
    "tokens": [
      "General",
      "Theological",
      "Seminary"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/general-theological-seminary-2/"
  },
  {
    "value": "German Evangelist Lutheran Church of St Paul",
    "formatted_address": "315 W 22nd St, New York, NY 10011, USA",
    "latitude": "40.7450964",
    "longitude": "-73.9996904",
    "region": "980",
    "notes": "1st Floor\nBetween 8th & 9th Avenues",
    "tokens": [
      "German",
      "Evangelist",
      "Lutheran",
      "Church",
      "of",
      "St",
      "Paul"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/german-evangelist-lutheran-church-of-st-paul/"
  },
  {
    "value": "GMHC",
    "formatted_address": "307 W 38th St, New York, NY 10018, USA",
    "latitude": "40.7550995",
    "longitude": "-73.9922329",
    "region": "1026",
    "notes": "Near 8th Avenue. ID Required.",
    "tokens": [
      "GMHC"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/gmhc-2/"
  },
  {
    "value": "Goddard Riverside Community Center",
    "formatted_address": "595 Columbus Ave, New York, NY 10024, USA",
    "latitude": "40.7880097",
    "longitude": "-73.9707093",
    "region": "896",
    "notes": "88th Street,Ground Level, Art Room",
    "tokens": [
      "Goddard",
      "Riverside",
      "Community",
      "Center"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/goddard-riverside-community-center/"
  },
  {
    "value": "Good Shepherd Faith Church",
    "formatted_address": "152 W 66th St, New York, NY 10023, USA",
    "latitude": "40.7743229",
    "longitude": "-73.9839099",
    "region": "896",
    "notes": "Entrance changed: Please use street level entrance at 152 West 66th Street. Doors located past the main steps to the church. Please note there are no children or pets allowed.",
    "tokens": [
      "Good",
      "Shepherd",
      "Faith",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/good-shepherd-faith-church/"
  },
  {
    "value": "Grace Church Office Building",
    "formatted_address": "802 Broadway, New York, NY 10003, USA",
    "latitude": "40.7319869",
    "longitude": "-73.9909307",
    "region": "912",
    "notes": "3rd Floor Conference Room\nAt 10th Street",
    "tokens": [
      "Grace",
      "Church",
      "Office",
      "Building"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/grace-church-office-building/"
  },
  {
    "value": "Grace Congregational Baptist Church",
    "formatted_address": "310 W 139th St, New York, NY 10030, USA",
    "latitude": "40.8191319",
    "longitude": "-73.9454349",
    "region": "950",
    "notes": "Basement ,Use front entrance",
    "tokens": [
      "Grace",
      "Congregational",
      "Baptist",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/grace-congregational-baptist-church/"
  },
  {
    "value": "Gustavus Adolphus Lutheran Church",
    "formatted_address": "155 E 22nd St, New York, NY 10010, USA",
    "latitude": "40.7385571",
    "longitude": "-73.9840372",
    "region": "928",
    "notes": "Ground Floor Between Lexington & 3rd Avenues",
    "tokens": [
      "Gustavus",
      "Adolphus",
      "Lutheran",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/gustavus-adolphus-lutheran-church/"
  },
  {
    "value": "Hamilton House",
    "formatted_address": "141 W 73rd St, New York, NY 10023, USA",
    "latitude": "40.7789434",
    "longitude": "-73.9797758",
    "region": "896",
    "notes": "Between Columbus & Amsterdam Avenues.",
    "tokens": [
      "Hamilton",
      "House"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/hamilton-house/"
  },
  {
    "value": "Hammer Building",
    "formatted_address": "701 W 168th St, New York, NY 10032, USA",
    "latitude": "40.842751",
    "longitude": "-73.9426461",
    "region": "955",
    "notes": "Corner of Ft. Washington Avenue. Room #LL106",
    "tokens": [
      "Hammer",
      "Building"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/hammer-building-2/"
  },
  {
    "value": "Hargrave House",
    "formatted_address": "111 W 71st St, New York, NY 10023, USA",
    "latitude": "40.777061",
    "longitude": "-73.9795466",
    "region": "896",
    "notes": "At Columbus Avenue\n\nCOVID NOTES: Maximum of 30 attendees\nMasks required at all times in facility\nTemperature check at entry (99.9° or less)\nContact tracing sign in required\nNo food or drink due to mask restriction",
    "tokens": [
      "Hargrave",
      "House"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/hargrave-house/"
  },
  {
    "value": "Harlem Children's Zone Admin Offices",
    "formatted_address": "35 E 125th St, New York, NY 10035, USA",
    "latitude": "40.806204",
    "longitude": "-73.9410197",
    "region": "985",
    "notes": "1st Floor Conference Room\nAt Madison Avenue",
    "tokens": [
      "Harlem",
      "Childrens",
      "Zone",
      "Admin",
      "Offices"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/harlem-childrens-zone-admin-offices/"
  },
  {
    "value": "Harlem Hospital King Pavilion",
    "formatted_address": "506 Lenox Ave, New York, NY 10037, USA",
    "latitude": "40.8141351",
    "longitude": "-73.9397616",
    "region": "950",
    "notes": "Room #3101, 3rd Floor\nAt 135 Street",
    "tokens": [
      "Harlem",
      "Hospital",
      "King",
      "Pavilion"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/harlem-hospital-king-pavilion/"
  },
  {
    "value": "Hazelden Tribeca",
    "formatted_address": "283 W Broadway, New York, NY 10013, USA",
    "latitude": "40.7208017",
    "longitude": "-74.0048389",
    "region": "905",
    "notes": "Near Canal and 6th Avenue",
    "tokens": [
      "Hazelden",
      "Tribeca"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/hazelden-tribeca/"
  },
  {
    "value": "Holland House",
    "formatted_address": "351 W 42nd St, New York, NY 10036, USA",
    "latitude": "40.7583264",
    "longitude": "-73.9917492",
    "region": "915",
    "notes": "First Floor (Between 8th and 9th Avenues, closer to 8th)",
    "tokens": [
      "Holland",
      "House"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/holland-house/"
  },
  {
    "value": "Holy Apostles Church Rectory",
    "formatted_address": "296 9th Ave, New York, NY 10001, USA",
    "latitude": "40.7492284",
    "longitude": "-73.9987409",
    "region": "1026",
    "notes": "2nd Floor\nCorner of West 28th Street",
    "tokens": [
      "Holy",
      "Apostles",
      "Church",
      "Rectory"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/holy-apostles-church-rectory/"
  },
  {
    "value": "Holy Name Church",
    "formatted_address": "207 W 96th St, New York, NY 10025, USA",
    "latitude": "40.7944661",
    "longitude": "-73.9706389",
    "region": "896",
    "notes": "Basement Between Amsterdam Avenue & Bway\n\nCOVID NOTES: 10 people Capacity, Masks Required, Social Distancing, No eating or drinking, No Bathroom, Temp Check Optional",
    "tokens": [
      "Holy",
      "Name",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/holy-name-church/"
  },
  {
    "value": "Holy Name Church",
    "formatted_address": "75 Lispenard Ave, New Rochelle, NY 10801, USA",
    "latitude": "40.9182017",
    "longitude": "-73.7723236",
    "region": "1010",
    "notes": "Entrance is on Halligan Street (Between Lispenard and Petersville)",
    "tokens": [
      "Holy",
      "Name",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/holy-name-church-2/"
  },
  {
    "value": "Holy Name Church Rectory",
    "formatted_address": "245 Prospect Park West, Brooklyn, NY 11215, USA",
    "latitude": "40.659057",
    "longitude": "-73.9811284",
    "region": "968",
    "notes": "Basement\nBetween Prospect Avenue & Windsor Place",
    "tokens": [
      "Holy",
      "Name",
      "Church",
      "Rectory"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/holy-name-church-rectory/"
  },
  {
    "value": "Holy Name of Mary School",
    "formatted_address": "114 Grand St, Croton-On-Hudson, NY 10520, USA",
    "latitude": "41.2086307",
    "longitude": "-73.8847339",
    "region": "1047",
    "notes": "2nd Floor Library\nEnter thru front of school",
    "tokens": [
      "Holy",
      "Name",
      "of",
      "Mary",
      "School"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/holy-name-of-mary-school/"
  },
  {
    "value": "Holy Name School",
    "formatted_address": "202 W 97th St, New York, NY 10025, USA",
    "latitude": "40.7946776",
    "longitude": "-73.9703228",
    "region": "896",
    "notes": "Basement\nAt Amsterdam Avenue",
    "tokens": [
      "Holy",
      "Name",
      "School"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/holy-name-school/"
  },
  {
    "value": "Holy Rood Church",
    "formatted_address": "715 W 179th St, New York, NY 10033, USA",
    "latitude": "40.849431",
    "longitude": "-73.938404",
    "region": "955",
    "notes": "Between Bway & Fort Washington Avenue",
    "tokens": [
      "Holy",
      "Rood",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/holy-rood-church/"
  },
  {
    "value": "Holy Rosary Church",
    "formatted_address": "41 Windermere Ave, Greenwood Lake, NY 10925, USA",
    "latitude": "41.2213665",
    "longitude": "-74.2954947",
    "region": "921",
    "notes": "",
    "tokens": [
      "Holy",
      "Rosary",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/holy-rosary-church/"
  },
  {
    "value": "Holy Spirit Church",
    "formatted_address": "1969 Crompond Rd, Cortlandt, NY 10567, USA",
    "latitude": "41.29183",
    "longitude": "-73.896424",
    "region": "1043",
    "notes": "Classroom\nIn the Community Building",
    "tokens": [
      "Holy",
      "Spirit",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/holy-spirit-church/"
  },
  {
    "value": "Holy Trinity Church",
    "formatted_address": "341 E 87th St, New York, NY 10128, USA",
    "latitude": "40.7780831",
    "longitude": "-73.9496753",
    "region": "920",
    "notes": "Choir Room Ring Bell\nBtw 1st & 2nd Avenues",
    "tokens": [
      "Holy",
      "Trinity",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/holy-trinity-church-2/"
  },
  {
    "value": "Holy Trinity Church",
    "formatted_address": "213 W 82nd St, New York, NY 10024, USA",
    "latitude": "40.7856431",
    "longitude": "-73.977637",
    "region": "896",
    "notes": "Between Amsterdam Avenue & Bway",
    "tokens": [
      "Holy",
      "Trinity",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/holy-trinity-church-3/"
  },
  {
    "value": "Holy Trinity Church",
    "formatted_address": "246-55 87th Ave, Jamaica, NY 11426, USA",
    "latitude": "40.730415",
    "longitude": "-73.719755",
    "region": "989",
    "notes": "Commonwealth Blvd & 87th Ave",
    "tokens": [
      "Holy",
      "Trinity",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/holy-trinity-church-4/"
  },
  {
    "value": "Holy Trinity Episcopal Church",
    "formatted_address": "24 Coulter Ave, Pawling, NY 12564, USA",
    "latitude": "41.5634287",
    "longitude": "-73.5972941",
    "region": "901",
    "notes": "Church Hall\nAt Townsend Blvd",
    "tokens": [
      "Holy",
      "Trinity",
      "Episcopal",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/holy-trinity-episcopal-church/"
  },
  {
    "value": "Holy Trinity Lutheran Church",
    "formatted_address": "4125 Avenue R, Brooklyn, NY 11234, USA",
    "latitude": "40.6156849",
    "longitude": "-73.930845",
    "region": "988",
    "notes": "Between Hendrickson & Coleman Streets",
    "tokens": [
      "Holy",
      "Trinity",
      "Lutheran",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/holy-trinity-lutheran-church/"
  },
  {
    "value": "Holy Trinity Lutheron Church",
    "formatted_address": "3 W 65th St, New York, NY 10023, USA",
    "latitude": "40.7720088",
    "longitude": "-73.9794105",
    "region": "896",
    "notes": "Upstairs",
    "tokens": [
      "Holy",
      "Trinity",
      "Lutheron",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/holy-trinity-lutheron-church/"
  },
  {
    "value": "Holy Trinity Rectory",
    "formatted_address": "215 W 82nd St, New York, NY 10024, USA",
    "latitude": "40.7855074",
    "longitude": "-73.9778653",
    "region": "896",
    "notes": "Between Amsterdam Avenue & Bway",
    "tokens": [
      "Holy",
      "Trinity",
      "Rectory"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/holy-trinity-rectory/"
  },
  {
    "value": "Holy Trinity Slovak Lutheran Church",
    "formatted_address": "334 E 20th St, New York, NY 10003, USA",
    "latitude": "40.735284",
    "longitude": "-73.9809483",
    "region": "912",
    "notes": "Between 1st and 2nd Avenues",
    "tokens": [
      "Holy",
      "Trinity",
      "Slovak",
      "Lutheran",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/holy-trinity-slovak-lutheran-church/"
  },
  {
    "value": "Hopewell Reformed Church",
    "formatted_address": "143 Beekman Rd, Hopewell Junction, NY 12533, USA",
    "latitude": "41.588752",
    "longitude": "-73.7888179",
    "region": "901",
    "notes": "Between Clove Branch & Carpenter Road",
    "tokens": [
      "Hopewell",
      "Reformed",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/hopewell-reformed-church/"
  },
  {
    "value": "House of Hope Presbyterian Church",
    "formatted_address": "84-54 248th St, Queens, NY 11426, USA",
    "latitude": "40.733407",
    "longitude": "-73.7189369",
    "region": "1049",
    "notes": "At 85th Avenue",
    "tokens": [
      "House",
      "of",
      "Hope",
      "Presbyterian",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/house-of-hope-presbyterian-church/"
  },
  {
    "value": "HOW Club",
    "formatted_address": "552 Port Richmond Ave, Staten Island, NY 10302, USA",
    "latitude": "40.6295941",
    "longitude": "-74.1408747",
    "region": "959",
    "notes": "1st Floor Assembly Hall\nAt Clinton Avenuel",
    "tokens": [
      "HOW",
      "Club"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/how-club/"
  },
  {
    "value": "Hudson Guild",
    "formatted_address": "441 W 26th St, New York, NY 10001, USA",
    "latitude": "40.749552",
    "longitude": "-74.0022443",
    "region": "1026",
    "notes": "2nd Fl, Activity Room A\nBetween 9th & 10th Avenues",
    "tokens": [
      "Hudson",
      "Guild"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/hudson-guild/"
  },
  {
    "value": "Hudson Valley Community Center",
    "formatted_address": "110 S Grand Ave, Poughkeepsie, NY 12603, USA",
    "latitude": "41.6887109",
    "longitude": "-73.9076706",
    "region": "901",
    "notes": "",
    "tokens": [
      "Hudson",
      "Valley",
      "Community",
      "Center"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/hudson-valley-community-center/"
  },
  {
    "value": "I Can Club",
    "formatted_address": "110-54 Farmers Blvd, Jamaica, NY 11412, USA",
    "latitude": "40.701872",
    "longitude": "-73.765981",
    "region": "972",
    "notes": "Club Room\nAt Jordan Avenue",
    "tokens": [
      "I",
      "Can",
      "Club"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/i-can-club/"
  },
  {
    "value": "Iglesia de la Encarnacion",
    "formatted_address": "1290 St Nicholas Ave, New York, NY 10033, USA",
    "latitude": "40.8450591",
    "longitude": "-73.936413",
    "region": "955",
    "notes": "School Cafeteria",
    "tokens": [
      "Iglesia",
      "de",
      "la",
      "Encarnacion"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/iglesia-de-la-encarnacion/"
  },
  {
    "value": "Iglesia Metodista Grace",
    "formatted_address": "125 W 104th St, New York, NY 10025, USA",
    "latitude": "40.798687",
    "longitude": "-73.9649288",
    "region": "896",
    "notes": "1st Floor\nBetween Columbus & Amsterdam Avenues",
    "tokens": [
      "Iglesia",
      "Metodista",
      "Grace"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/iglesia-metodista-grace/"
  },
  {
    "value": "Iglesia Presbyterian",
    "formatted_address": "1954 Grand Concourse, Bronx, NY 10457, USA",
    "latitude": "40.8506618",
    "longitude": "-73.9044485",
    "region": "1070",
    "notes": "At 178th Street",
    "tokens": [
      "Iglesia",
      "Presbyterian"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/iglesia-presbyterian/"
  },
  {
    "value": "Iglesia San Miguel/St Michael's Church",
    "formatted_address": "136-49 41st Ave, Flushing, NY 11355, USA",
    "latitude": "40.7591722",
    "longitude": "-73.8278233",
    "region": "930",
    "notes": "At Union Street, Basement",
    "tokens": [
      "Iglesia",
      "San",
      "Miguel",
      "St",
      "Michaels",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/iglesia-san-miguel-st-michaels-church/"
  },
  {
    "value": "Iglesia San Pedro y San Pablo",
    "formatted_address": "833 St Ann's Ave, Bronx, NY 10456, USA",
    "latitude": "40.8216179",
    "longitude": "-73.9099632",
    "region": "942",
    "notes": "159th St, detras de la corte vieja",
    "tokens": [
      "Iglesia",
      "San",
      "Pedro",
      "y",
      "Pablo"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/iglesia-san-pedro-y-san-pablo/"
  },
  {
    "value": "Iglesia Santa Elizabeth",
    "formatted_address": "268 Wadsworth Ave, New York, NY 10033, USA",
    "latitude": "40.8532192",
    "longitude": "-73.9326917",
    "region": "955",
    "notes": "187th Street",
    "tokens": [
      "Iglesia",
      "Santa",
      "Elizabeth"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/iglesia-santa-elizabeth/"
  },
  {
    "value": "Iglesia Santa Juana de Arco",
    "formatted_address": "1372 Stratford Ave, Bronx, NY 10472, USA",
    "latitude": "40.8332948",
    "longitude": "-73.876145",
    "region": "1037",
    "notes": "",
    "tokens": [
      "Iglesia",
      "Santa",
      "Juana",
      "de",
      "Arco"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/iglesia-santa-juana-de-arco/"
  },
  {
    "value": "Iglesia St. Lukes",
    "formatted_address": "623 E 138th St, Bronx, NY 10454, USA",
    "latitude": "40.8062674",
    "longitude": "-73.9155279",
    "region": "1064",
    "notes": "",
    "tokens": [
      "Iglesia",
      "St",
      "Lukes"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/iglesia-st-lukes/"
  },
  {
    "value": "Immaculate Conception Church",
    "formatted_address": "389 E 150th St, Bronx, NY 10455, USA",
    "latitude": "40.8168418",
    "longitude": "-73.9177431",
    "region": "1008",
    "notes": "Between Melrose & Cortland Avenues",
    "tokens": [
      "Immaculate",
      "Conception",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/immaculate-conception-church/"
  },
  {
    "value": "Immaculate Conception School",
    "formatted_address": "21-47 29th St, Long Island City, NY 11105, USA",
    "latitude": "40.7769407",
    "longitude": "-73.9111992",
    "region": "940",
    "notes": "Basement\nBetween 29th & Ditmars Blvd, enter back parking lot",
    "tokens": [
      "Immaculate",
      "Conception",
      "School"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/immaculate-conception-school/"
  },
  {
    "value": "Immaculate Heart of Mary Church Rectory",
    "formatted_address": "2805 Fort Hamilton Pkwy, Brooklyn, NY 11218, USA",
    "latitude": "40.649305",
    "longitude": "-73.976919",
    "region": "1072",
    "notes": "Basement\nEntrance is on the side on East 4th Street",
    "tokens": [
      "Immaculate",
      "Heart",
      "of",
      "Mary",
      "Church",
      "Rectory"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/immaculate-heart-of-mary-church-rectory/"
  },
  {
    "value": "Immanuel Lutheran Church",
    "formatted_address": "2018 Richmond Ave, Staten Island, NY 10314, USA",
    "latitude": "40.5984823",
    "longitude": "-74.1627435",
    "region": "1021",
    "notes": "Between Signs Rd and Rockland Ave",
    "tokens": [
      "Immanuel",
      "Lutheran",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/immanuel-lutheran-church-2/"
  },
  {
    "value": "Immanuel Lutheran Church",
    "formatted_address": "124 E 88th St, New York, NY 10128, USA",
    "latitude": "40.780698",
    "longitude": "-73.954994",
    "region": "920",
    "notes": "Basement\nEnter through red door on Lexington Avenue & 88th Street",
    "tokens": [
      "Immanuel",
      "Lutheran",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/immanuel-lutheran-church-3/"
  },
  {
    "value": "Incarnation Roman Catholic Church",
    "formatted_address": "89-45 Francis Lewis Blvd, Queens Village, NY 11427, USA",
    "latitude": "40.7185976",
    "longitude": "-73.7575535",
    "region": "1066",
    "notes": "North of 90th Avenue",
    "tokens": [
      "Incarnation",
      "Roman",
      "Catholic",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/incarnation-roman-catholic-church/"
  },
  {
    "value": "Intercare",
    "formatted_address": "51 E 25th St, New York, NY 10010, USA",
    "latitude": "40.7419984",
    "longitude": "-73.9861092",
    "region": "928",
    "notes": "Lower Level\nBetween Madison & Park Avenues",
    "tokens": [
      "Intercare"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/intercare/"
  },
  {
    "value": "Inwood Community Services Center",
    "formatted_address": "651 Academy St, New York, NY 10034, USA",
    "latitude": "40.866179",
    "longitude": "-73.9245466",
    "region": "979",
    "notes": "",
    "tokens": [
      "Inwood",
      "Community",
      "Services",
      "Center"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/inwood-community-services-center/"
  },
  {
    "value": "Irish Community Centre",
    "formatted_address": "990 McLean Ave, Yonkers, NY 10704, USA",
    "latitude": "40.9030231",
    "longitude": "-73.8647623",
    "region": "956",
    "notes": "Across from St Barnabas",
    "tokens": [
      "Irish",
      "Community",
      "Centre"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/irish-community-centre/"
  },
  {
    "value": "J-Cap",
    "formatted_address": "164-4 Tuskegee Airmen Way, Jamaica, NY 11433, USA",
    "latitude": "40.7002993",
    "longitude": "-73.7927737",
    "region": "989",
    "notes": "Back of York College - 1st Floor, Main Room",
    "tokens": [
      "J",
      "Cap"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/j-cap/"
  },
  {
    "value": "Jackson Memorial Ame Zion Church",
    "formatted_address": "60 Peninsula Blvd, Hempstead, NY 11550, USA",
    "latitude": "40.7079262",
    "longitude": "-73.6180381",
    "region": "897",
    "notes": "Basement\nAt Front Street, Rear of Parking Lot",
    "tokens": [
      "Jackson",
      "Memorial",
      "Ame",
      "Zion",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/jackson-memorial-ame-zion-church/"
  },
  {
    "value": "Jacobi Medical Center",
    "formatted_address": "1400 Pelham Pkwy S, Bronx, NY 10461, USA",
    "latitude": "40.8556769",
    "longitude": "-73.8462363",
    "region": "982",
    "notes": "Building #1, Room #9w1\nBetween Wilson Avenue & Eastchester Road\nAsk security for location of best elevator banks to take upstairs.",
    "tokens": [
      "Jacobi",
      "Medical",
      "Center"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/jacobi-medical-center/"
  },
  {
    "value": "Jamaica Hospital",
    "formatted_address": "8900 Van Wyck Expy, Richmond Hill, NY 11418, USA",
    "latitude": "40.7009106",
    "longitude": "-73.8160255",
    "region": "1038",
    "notes": "Rear of Jamaica Hospital",
    "tokens": [
      "Jamaica",
      "Hospital"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/jamaica-hospital/"
  },
  {
    "value": "Jan Hus Church",
    "formatted_address": "351 E 74th St, New York, NY 10021, USA",
    "latitude": "40.7695575",
    "longitude": "-73.9555091",
    "region": "922",
    "notes": "2nd Floor\nJune 3rd address change to Madison Avenue Presbyterian Church 921 Madison Ave, NYC, NY 10021",
    "tokens": [
      "Jan",
      "Hus",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/jan-hus-church/"
  },
  {
    "value": "Jan Hus Moravian Church",
    "formatted_address": "153 Ocean Ave, Brooklyn, NY 11225, USA",
    "latitude": "40.6591106",
    "longitude": "-73.9622195",
    "region": "1011",
    "notes": "Basement\nBetween Lincoln Road & Parkside Avenue",
    "tokens": [
      "Jan",
      "Hus",
      "Moravian",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/jan-hus-moravian-church/"
  },
  {
    "value": "Jeanne Jugan Residence",
    "formatted_address": "2999 Schurz Ave, Bronx, NY 10465, USA",
    "latitude": "40.815305",
    "longitude": "-73.812708",
    "region": "964",
    "notes": "At Tremont Ave. 1st Floor Cafe",
    "tokens": [
      "Jeanne",
      "Jugan",
      "Residence"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/jeanne-jugan-residence/"
  },
  {
    "value": "Jewish Center",
    "formatted_address": "574 E Meadow Ave, East Meadow, NY 11554, USA",
    "latitude": "40.7104091",
    "longitude": "-73.5550188",
    "region": "897",
    "notes": "",
    "tokens": [
      "Jewish",
      "Center"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/jewish-center/"
  },
  {
    "value": "John Street Church",
    "formatted_address": "44 John St, New York, NY 10038, USA",
    "latitude": "40.7091344",
    "longitude": "-74.0081019",
    "region": "913",
    "notes": "between Nassau and William. Downstairs.",
    "tokens": [
      "John",
      "Street",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/john-street-church/"
  },
  {
    "value": "Judge Gilbert Ramirez Houses",
    "formatted_address": "455 E 138th St, Bronx, NY 10454, USA",
    "latitude": "40.8085756",
    "longitude": "-73.9209382",
    "region": "1064",
    "notes": "1st Floor",
    "tokens": [
      "Judge",
      "Gilbert",
      "Ramirez",
      "Houses"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/judge-gilbert-ramirez-houses/"
  },
  {
    "value": "Judson Memorial Church",
    "formatted_address": "239 Thompson St, New York, NY 10012, USA",
    "latitude": "40.7299755",
    "longitude": "-73.9985295",
    "region": "894",
    "notes": "",
    "tokens": [
      "Judson",
      "Memorial",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/judson-memorial-church/"
  },
  {
    "value": "King of Glory Tabernacle",
    "formatted_address": "2019 Grand Ave, Bronx, NY 10453, USA",
    "latitude": "40.853708",
    "longitude": "-73.909989",
    "region": "1065",
    "notes": "Btw Burnside Ave & West Tremont Ave",
    "tokens": [
      "King",
      "of",
      "Glory",
      "Tabernacle"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/king-of-glory-tabernacle/"
  },
  {
    "value": "King of Kings Lutheran Church",
    "formatted_address": "2601 New York Ave, Melville, NY 11747, USA",
    "latitude": "40.795218",
    "longitude": "-73.403374",
    "region": "898",
    "notes": "At Old Country Road",
    "tokens": [
      "King",
      "of",
      "Kings",
      "Lutheran",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/king-of-kings-lutheran-church/"
  },
  {
    "value": "King of Kings Lutheran Church",
    "formatted_address": "543 Union Ave, New Windsor, NY 12553, USA",
    "latitude": "41.4829937",
    "longitude": "-74.0612602",
    "region": "921",
    "notes": "Main Floor\nEnter on the right side of the church",
    "tokens": [
      "King",
      "of",
      "Kings",
      "Lutheran",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/king-of-kings-lutheran-church-2/"
  },
  {
    "value": "Kingston Hospital",
    "formatted_address": "396 Broadway, Kingston, NY 12401, USA",
    "latitude": "41.9264785",
    "longitude": "-73.9940912",
    "region": "957",
    "notes": "",
    "tokens": [
      "Kingston",
      "Hospital"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/kingston-hospital/"
  },
  {
    "value": "Knights of Columbus Hall",
    "formatted_address": "24 Boulevard Ave, Greenlawn, NY 11740, USA",
    "latitude": "40.869188",
    "longitude": "-73.363208",
    "region": "898",
    "notes": "",
    "tokens": [
      "Knights",
      "of",
      "Columbus",
      "Hall"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/knights-of-columbus-hall-2/"
  },
  {
    "value": "Ksciol Sw. Krzyza",
    "formatted_address": "6221 56th Rd, Maspeth, NY 11378, USA",
    "latitude": "40.7282267",
    "longitude": "-73.9255361",
    "region": "1076",
    "notes": "Between 61st & 64th Streets",
    "tokens": [
      "Ksciol",
      "Sw",
      "Krzyza"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/ksciol-sw-krzyza/"
  },
  {
    "value": "La Salida",
    "formatted_address": "214 Warwick St, Brooklyn, NY 11207, USA",
    "latitude": "40.6788764",
    "longitude": "-73.8873603",
    "region": "1074",
    "notes": "",
    "tokens": [
      "La",
      "Salida"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/la-salida/"
  },
  {
    "value": "Labetti Post Building",
    "formatted_address": "390 Hylan Blvd, Staten Island, NY 10305, USA",
    "latitude": "40.6095283",
    "longitude": "-74.0743585",
    "region": "1068",
    "notes": "Basement",
    "tokens": [
      "Labetti",
      "Post",
      "Building"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/labetti-post-building/"
  },
  {
    "value": "Lakeview Community Church - Steeple Center",
    "formatted_address": "1118 N Horsepound Rd, Carmel Hamlet, NY 10512, USA",
    "latitude": "41.5042174",
    "longitude": "-73.6866387",
    "region": "901",
    "notes": "",
    "tokens": [
      "Lakeview",
      "Community",
      "Church",
      "Steeple",
      "Center"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/lakeview-community-church-steeple-center/"
  },
  {
    "value": "Larchmont Avenue Presbyterian Church",
    "formatted_address": "60 Forest Park Ave, Larchmont, NY 10538, USA",
    "latitude": "40.9299257",
    "longitude": "-73.7544889",
    "region": "997",
    "notes": "Basement Carhart Room or Room #202 Upstairs\n@Larchmont Avenue",
    "tokens": [
      "Larchmont",
      "Avenue",
      "Presbyterian",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/larchmont-avenue-presbyterian-church/"
  },
  {
    "value": "Larchmont Temple-Blum Building",
    "formatted_address": "24 Willow Ave, Larchmont, NY 10538, USA",
    "latitude": "40.924621",
    "longitude": "-73.748457",
    "region": "997",
    "notes": "Library",
    "tokens": [
      "Larchmont",
      "Temple",
      "Blum",
      "Building"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/larchmont-temple-blum-building/"
  },
  {
    "value": "Lemuel Haynes Congregational Church",
    "formatted_address": "146-9 116th Ave, Jamaica, NY 11436, USA",
    "latitude": "40.6819985",
    "longitude": "-73.7950293",
    "region": "989",
    "notes": "Supthin Blvd, Basement of Church",
    "tokens": [
      "Lemuel",
      "Haynes",
      "Congregational",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/lemuel-haynes-congregational-church/"
  },
  {
    "value": "Lenox Hill Hospital",
    "formatted_address": "130 E 77th St, New York, NY 10075, USA",
    "latitude": "40.7736644",
    "longitude": "-73.9602972",
    "region": "922",
    "notes": "Enter Emergency door ,left into small waiting room. Ask security for Carmel Conference Room",
    "tokens": [
      "Lenox",
      "Hill",
      "Hospital"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/lenox-hill-hospital/"
  },
  {
    "value": "Lenox Hill Neighborhood House",
    "formatted_address": "331 E 70th St, New York, NY 10021, USA",
    "latitude": "40.7670844",
    "longitude": "-73.9577554",
    "region": "922",
    "notes": "Between 1st & 2nd Avenues",
    "tokens": [
      "Lenox",
      "Hill",
      "Neighborhood",
      "House"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/lenox-hill-neighborhood-house/"
  },
  {
    "value": "Leo Mintzer Community Center",
    "formatted_address": "251 Underhill Ave, White Plains, NY 10604, USA",
    "latitude": "41.0414716",
    "longitude": "-73.7499335",
    "region": "995",
    "notes": "2nd Floor\nMeeting is in West Harrison At Corner of Madison Street",
    "tokens": [
      "Leo",
      "Mintzer",
      "Community",
      "Center"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/leo-mintzer-community-center/"
  },
  {
    "value": "Levittown Community Church",
    "formatted_address": "100 Periwinkle Rd, Levittown, NY 11756, USA",
    "latitude": "40.7342247",
    "longitude": "-73.5262971",
    "region": "897",
    "notes": "",
    "tokens": [
      "Levittown",
      "Community",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/levittown-community-church/"
  },
  {
    "value": "LGBT Center",
    "formatted_address": "300 Wall St, Kingston, NY 12401, USA",
    "latitude": "41.9339557",
    "longitude": "-74.0194854",
    "region": "957",
    "notes": "",
    "tokens": [
      "LGBT",
      "Center"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/lgbt-center/"
  },
  {
    "value": "LGBT Community Center",
    "formatted_address": "208 W 13th St, New York, NY 10011, USA",
    "latitude": "40.7380161",
    "longitude": "-74.0011104",
    "region": "894",
    "notes": "Between 7th & 8th Avenues and 13th St. Mezzanine",
    "tokens": [
      "LGBT",
      "Community",
      "Center"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/lgbt-community-center/"
  },
  {
    "value": "Life Recovery Center",
    "formatted_address": "1285 Fulton Ave, Bronx, NY 10456, USA",
    "latitude": "40.832127",
    "longitude": "-73.903936",
    "region": "942",
    "notes": "169th Street",
    "tokens": [
      "Life",
      "Recovery",
      "Center"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/life-recovery-center/"
  },
  {
    "value": "Lincoln Hospital",
    "formatted_address": "234 E 149th St, Bronx, NY 10451, USA",
    "latitude": "40.8168904",
    "longitude": "-73.9244407",
    "region": "1008",
    "notes": "First Floor Conference Room at Morris Avenue",
    "tokens": [
      "Lincoln",
      "Hospital"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/lincoln-hospital/"
  },
  {
    "value": "Long Beach Ice Arena",
    "formatted_address": "150 W Bay Dr, Long Beach, NY 11561, USA",
    "latitude": "40.5928992",
    "longitude": "-73.6686043",
    "region": "897",
    "notes": "",
    "tokens": [
      "Long",
      "Beach",
      "Ice",
      "Arena"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/long-beach-ice-arena/"
  },
  {
    "value": "Long Island Rail Road Eap Office",
    "formatted_address": "300 Old Country Rd, Mineola, NY 11501, USA",
    "latitude": "40.738284",
    "longitude": "-73.6443875",
    "region": "897",
    "notes": "",
    "tokens": [
      "Long",
      "Island",
      "Rail",
      "Road",
      "Eap",
      "Office"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/long-island-rail-road-eap-office-2/"
  },
  {
    "value": "Lutheran Church of Dobbs Ferry",
    "formatted_address": "43 Ashford Ave, Dobbs Ferry, NY 10522, USA",
    "latitude": "41.0159449",
    "longitude": "-73.8664474",
    "region": "1059",
    "notes": "",
    "tokens": [
      "Lutheran",
      "Church",
      "of",
      "Dobbs",
      "Ferry"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/lutheran-church-of-dobbs-ferry/"
  },
  {
    "value": "Lutheran Church of the Good Shepherd",
    "formatted_address": "7420 4th Ave, Brooklyn, NY 11209, USA",
    "latitude": "40.6313717",
    "longitude": "-74.0252441",
    "region": "1063",
    "notes": "Basement\nBetween 74th Street & Bay Ridge Parkway",
    "tokens": [
      "Lutheran",
      "Church",
      "of",
      "the",
      "Good",
      "Shepherd"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/lutheran-church-of-the-good-shepherd/"
  },
  {
    "value": "Lutheran Church of the Resurrection",
    "formatted_address": "44-16 192nd St, Flushing, NY 11358, USA",
    "latitude": "40.756047",
    "longitude": "-73.789546",
    "region": "930",
    "notes": "Church Downstairs Front Entrance",
    "tokens": [
      "Lutheran",
      "Church",
      "of",
      "the",
      "Resurrection"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/lutheran-church-of-the-resurrection/"
  },
  {
    "value": "Macedonia Community Center",
    "formatted_address": "103 W 2nd St, Mt Vernon, NY 10550, USA",
    "latitude": "40.9083969",
    "longitude": "-73.840223",
    "region": "992",
    "notes": "At 8th Avenue",
    "tokens": [
      "Macedonia",
      "Community",
      "Center"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/macedonia-community-center/"
  },
  {
    "value": "Madison Avenue Presbyterian Church",
    "formatted_address": "921 Madison Ave, New York, NY 10021, USA",
    "latitude": "40.7725016",
    "longitude": "-73.9645065",
    "region": "922",
    "notes": "",
    "tokens": [
      "Madison",
      "Avenue",
      "Presbyterian",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/madison-avenue-presbyterian-church/"
  },
  {
    "value": "Mamaroneck United Methodist Church",
    "formatted_address": "546 E Boston Post Rd, Mamaroneck, NY 10543, USA",
    "latitude": "40.9516179",
    "longitude": "-73.7290551",
    "region": "1027",
    "notes": "Enter through the Thompkins Avenue side\n\nCOVID NOTES: Masks and social distancing required. Capacity is 26 people.",
    "tokens": [
      "Mamaroneck",
      "United",
      "Methodist",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/mamaroneck-united-methodist-church/"
  },
  {
    "value": "Manhattan Church of Christ",
    "formatted_address": "48 E 80th St, New York, NY 10075, USA",
    "latitude": "40.7766859",
    "longitude": "-73.9613107",
    "region": "922",
    "notes": "2nd Floor Library, Ring Bell Next to Sign\nBetween Park & Madison Avenues",
    "tokens": [
      "Manhattan",
      "Church",
      "of",
      "Christ"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/manhattan-church-of-christ/"
  },
  {
    "value": "Manhattan Church of the Seventh-Day Adventist",
    "formatted_address": "232 W 11th St, New York, NY 10014, USA",
    "latitude": "40.7360929",
    "longitude": "-74.0027593",
    "region": "894",
    "notes": "",
    "tokens": [
      "Manhattan",
      "Church",
      "of",
      "the",
      "Seventh",
      "Day",
      "Adventist"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/manhattan-church-of-the-seventh-day-adventist/"
  },
  {
    "value": "Manhattan College Engineering Building",
    "formatted_address": "3825 Corlear Ave #1, Bronx, NY 10463, USA",
    "latitude": "40.8864819",
    "longitude": "-73.9015451",
    "region": "924",
    "notes": "Cafeteria\n1 Block West of Broadway",
    "tokens": [
      "Manhattan",
      "College",
      "Engineering",
      "Building"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/manhattan-college-engineering-building/"
  },
  {
    "value": "Manhattan Plaza",
    "formatted_address": "482 W 43rd St, New York, NY 10036, USA",
    "latitude": "40.7599669",
    "longitude": "-73.9945849",
    "region": "915",
    "notes": "",
    "tokens": [
      "Manhattan",
      "Plaza"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/manhattan-plaza-health-club-2/"
  },
  {
    "value": "Manse Barn at Tappan Reformed Church",
    "formatted_address": "32 Old Tappan Rd, Tappan, NY 10983, USA",
    "latitude": "41.0225281",
    "longitude": "-73.9507307",
    "region": "961",
    "notes": "",
    "tokens": [
      "Manse",
      "Barn",
      "at",
      "Tappan",
      "Reformed",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/manse-barn-at-tappan-reformed-church/"
  },
  {
    "value": "Marien Heim Senior Home",
    "formatted_address": "4520 4th Ave, Brooklyn, NY 11220, USA",
    "latitude": "40.6491465",
    "longitude": "-74.0103609",
    "region": "1088",
    "notes": "Between 45th & 46th Streets\nCafeteria",
    "tokens": [
      "Marien",
      "Heim",
      "Senior",
      "Home"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/marien-heim-senior-home/"
  },
  {
    "value": "Mariners Temple Baptist Church",
    "formatted_address": "3 Henry St, New York, NY 10038, USA",
    "latitude": "40.7129498",
    "longitude": "-73.9977864",
    "region": "913",
    "notes": "Entrance on Oliver Street",
    "tokens": [
      "Mariners",
      "Temple",
      "Baptist",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/mariners-temple-baptist-church/"
  },
  {
    "value": "Mary Taylor Methodist Church",
    "formatted_address": "168-176 Broad St, Milford, CT 06460, USA",
    "latitude": "41.2196748",
    "longitude": "-73.0609168",
    "region": "1019",
    "notes": "Education Building, 1st Floor",
    "tokens": [
      "Mary",
      "Taylor",
      "Methodist",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/mary-taylor-methodist-church/"
  },
  {
    "value": "Maryknoll Sisters of St. Dominic",
    "formatted_address": "10 Pinesbridge Rd, Ossining, NY 10562, USA",
    "latitude": "41.180018",
    "longitude": "-73.8302815",
    "region": "1033",
    "notes": "Enter Main House",
    "tokens": [
      "Maryknoll",
      "Sisters",
      "of",
      "St",
      "Dominic"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/maryknoll-sisters-of-st-dominic/"
  },
  {
    "value": "Masonic Lodge",
    "formatted_address": "1814 College Point Blvd, Flushing, NY 11356, USA",
    "latitude": "40.782728",
    "longitude": "-73.846162",
    "region": "1022",
    "notes": "Basment\nAt 18th Avenue",
    "tokens": [
      "Masonic",
      "Lodge"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/masonic-lodge/"
  },
  {
    "value": "McBurney YMCA",
    "formatted_address": "125 W 14th St, New York, NY 10011, USA",
    "latitude": "40.7380198",
    "longitude": "-73.9977568",
    "region": "894",
    "notes": "Ground Floor\nBetween 6th & 7th Avenues",
    "tokens": [
      "McBurney",
      "YMCA"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/mcburney-ymca/"
  },
  {
    "value": "Memorial Lutheran Church",
    "formatted_address": "1232 NY-308, Rhinebeck, NY 12572, USA",
    "latitude": "41.970093",
    "longitude": "-73.822392",
    "region": null,
    "notes": "Meet inside Fellowship Hall",
    "tokens": [
      "Memorial",
      "Lutheran",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/memorial-lutheran-church/"
  },
  {
    "value": "Memorial Presbyterian Church",
    "formatted_address": "189 Babylon Turnpike, Roosevelt, NY 11575, USA",
    "latitude": "40.6755307",
    "longitude": "-73.5834648",
    "region": "897",
    "notes": "At Frederickson Avenue",
    "tokens": [
      "Memorial",
      "Presbyterian",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/memorial-presbyterian-church/"
  },
  {
    "value": "Mercy Family Counseling Center",
    "formatted_address": "385 Oak St, Garden City, NY 11530, USA",
    "latitude": "40.7271413",
    "longitude": "-73.6095855",
    "region": "897",
    "notes": "",
    "tokens": [
      "Mercy",
      "Family",
      "Counseling",
      "Center"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/mercy-family-counseling-center/"
  },
  {
    "value": "Mercy Medical Center",
    "formatted_address": "1000 N Village Ave, Rockville Centre, NY 11570, USA",
    "latitude": "40.6859077",
    "longitude": "-73.633483",
    "region": "897",
    "notes": "Blue Wing, 3rd Floor Craft Room",
    "tokens": [
      "Mercy",
      "Medical",
      "Center"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/mercy-medical-center/"
  },
  {
    "value": "Messiah Lutheran Church",
    "formatted_address": "195 Jefferson Blvd, Staten Island, NY 10312, USA",
    "latitude": "40.5444536",
    "longitude": "-74.1814648",
    "region": "981",
    "notes": "Kroon Center Parish House\nAt Drumgoole Road East",
    "tokens": [
      "Messiah",
      "Lutheran",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/messiah-lutheran-church/"
  },
  {
    "value": "Methodist Church",
    "formatted_address": "25 Church St, Phoenicia, NY 12464, USA",
    "latitude": "42.0847068",
    "longitude": "-74.3148205",
    "region": "957",
    "notes": "",
    "tokens": [
      "Methodist",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/methodist-church-2/"
  },
  {
    "value": "Metropolitan Ame Church",
    "formatted_address": "58 W 135th St, New York, NY 10037, USA",
    "latitude": "40.8136145",
    "longitude": "-73.9403807",
    "region": "950",
    "notes": "Between Malcolm X Boulevard & 5th Avenue",
    "tokens": [
      "Metropolitan",
      "Ame",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/metropolitan-ame-church/"
  },
  {
    "value": "Middle Collegiate Church",
    "formatted_address": "50 E 7th St, New York, NY 10003, USA",
    "latitude": "40.727553",
    "longitude": "-73.987661",
    "region": "912",
    "notes": "Must Sign In and Show ID 3rd and 4th Floors @2nd Avenue",
    "tokens": [
      "Middle",
      "Collegiate",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/middle-collegiate-church/"
  },
  {
    "value": "Monestary of St. Clare",
    "formatted_address": "70 Nelson Ave, Wappingers Falls, NY 12590, USA",
    "latitude": "41.606564",
    "longitude": "-73.925334",
    "region": "901",
    "notes": "",
    "tokens": [
      "Monestary",
      "of",
      "St",
      "Clare"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/monestary-of-st-clare/"
  },
  {
    "value": "Monroe United Methodist Church",
    "formatted_address": "47 Maple Ave, Monroe, NY 10950, USA",
    "latitude": "41.3251522",
    "longitude": "-74.186502",
    "region": "921",
    "notes": "2nd Floor\nBuilding next to the Church",
    "tokens": [
      "Monroe",
      "United",
      "Methodist",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/monroe-united-methodist-church/"
  },
  {
    "value": "Monsignor Farrell High School",
    "formatted_address": "2900 Amboy Rd, Staten Island, NY 10306, USA",
    "latitude": "40.5673492",
    "longitude": "-74.1254917",
    "region": "932",
    "notes": "Cafeteria",
    "tokens": [
      "Monsignor",
      "Farrell",
      "High",
      "School"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/monsignor-farrell-high-school/"
  },
  {
    "value": "Monsignor Ruvo Center",
    "formatted_address": "2410 Hughes Ave, Bronx, NY 10458, USA",
    "latitude": "40.8554932",
    "longitude": "-73.8866303",
    "region": "1023",
    "notes": "between 187th and 188th Street",
    "tokens": [
      "Monsignor",
      "Ruvo",
      "Center"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/monsignor-ruvo-center/"
  },
  {
    "value": "Most Holy Redeemer Church",
    "formatted_address": "173 E 3rd St, New York, NY 10009, USA",
    "latitude": "40.7234082",
    "longitude": "-73.9843026",
    "region": "912",
    "notes": "Between Avenue A and B\nChapel to the Left of the front door\nChurch closed on federal holidays falling on Mondays",
    "tokens": [
      "Most",
      "Holy",
      "Redeemer",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/most-holy-redeemer-church/"
  },
  {
    "value": "Mount Hope Ame Zion Church",
    "formatted_address": "65 Lake St, White Plains, NY 10604, USA",
    "latitude": "41.0400303",
    "longitude": "-73.7562882",
    "region": "995",
    "notes": "At Across from Delfino Park",
    "tokens": [
      "Mount",
      "Hope",
      "Ame",
      "Zion",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/mount-hope-ame-zion-church/"
  },
  {
    "value": "Mount Sinai Congregational Church",
    "formatted_address": "233 N Country Rd, Mt Sinai, NY 11766, USA",
    "latitude": "40.9526449",
    "longitude": "-73.0186324",
    "region": "898",
    "notes": "",
    "tokens": [
      "Mount",
      "Sinai",
      "Congregational",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/mount-sinai-congregational-church/"
  },
  {
    "value": "Mount Sinai-Roosevelt Hospital",
    "formatted_address": "1000 10th Ave, New York, NY 10019, USA",
    "latitude": "40.7697168",
    "longitude": "-73.9868805",
    "region": "915",
    "notes": "Front entrance Between 58th St & 59th St.",
    "tokens": [
      "Mount",
      "Sinai",
      "Roosevelt",
      "Hospital"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/mount-sinai-roosevelt-hospital/"
  },
  {
    "value": "Mt. Washington Presbyterian Church",
    "formatted_address": "84 Vermilyea Ave, New York, NY 10034, USA",
    "latitude": "40.8660417",
    "longitude": "-73.9232711",
    "region": "979",
    "notes": "At 204th Street, 1 Block East of Broadway",
    "tokens": [
      "Mt",
      "Washington",
      "Presbyterian",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/mount-washington-presbyterian-church/"
  },
  {
    "value": "Mountaindale Firehouse",
    "formatted_address": "132 Main St, Mountain Dale, NY 12763, USA",
    "latitude": "41.6909357",
    "longitude": "-74.5327209",
    "region": "957",
    "notes": "",
    "tokens": [
      "Mountaindale",
      "Firehouse"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/mountaindale-firehouse/"
  },
  {
    "value": "Mountainside Hospital",
    "formatted_address": "1 Bay Ave, Glen Ridge, NJ 07028, USA",
    "latitude": "40.8121043",
    "longitude": "-74.2039549",
    "region": "962",
    "notes": "Private Dining Room\nAt Highland",
    "tokens": [
      "Mountainside",
      "Hospital"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/mountainside-hospital/"
  },
  {
    "value": "Mountainside Treatment Center",
    "formatted_address": "243 W 18th St, New York, NY 10011, USA",
    "latitude": "40.7420067",
    "longitude": "-73.9996689",
    "region": "980",
    "notes": "",
    "tokens": [
      "Mountainside",
      "Treatment",
      "Center"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/mountainside-treatment-center/"
  },
  {
    "value": "Mt Carmel Baptist Church",
    "formatted_address": "76 Gleneida Ave, Carmel, NY 10512, USA",
    "latitude": "41.4281735",
    "longitude": "-73.6790055",
    "region": "901",
    "notes": "",
    "tokens": [
      "Mt",
      "Carmel",
      "Baptist",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/mt-carmel-baptist-church/"
  },
  {
    "value": "Mt Carmel Baptist Church",
    "formatted_address": "76 Gleneida Ave, Carmel Hamlet, NY 10512, USA",
    "latitude": "41.4282194",
    "longitude": "-73.6789366",
    "region": "901",
    "notes": "",
    "tokens": [
      "Mt",
      "Carmel",
      "Baptist",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/mt-carmel-baptist-church-2/"
  },
  {
    "value": "Mt Lebanon Baptist Church",
    "formatted_address": "648 Harrison Ave, Peekskill, NY 10566, USA",
    "latitude": "41.2988519",
    "longitude": "-73.919811",
    "region": "1043",
    "notes": "At Warren Street",
    "tokens": [
      "Mt",
      "Lebanon",
      "Baptist",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/mt-lebanon-baptist-church/"
  },
  {
    "value": "Mt Lebanon Baptist Church",
    "formatted_address": "228 Decatur St, Brooklyn, NY 11233, USA",
    "latitude": "40.6811614",
    "longitude": "-73.9341911",
    "region": "960",
    "notes": "2nd Floor",
    "tokens": [
      "Mt",
      "Lebanon",
      "Baptist",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/mt-lebanon-baptist-church-2/"
  },
  {
    "value": "Mt Loretto Gymnasium",
    "formatted_address": "6581 Hylan Blvd, Staten Island, NY 10309, USA",
    "latitude": "40.5103092",
    "longitude": "-74.2197684",
    "region": "934",
    "notes": "Cunningham Rd",
    "tokens": [
      "Mt",
      "Loretto",
      "Gymnasium"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/mt-loretto-gymnasium/"
  },
  {
    "value": "Mt Vernon Civic Center",
    "formatted_address": "43 Gramatan Ave, Mt Vernon, NY 10550, USA",
    "latitude": "40.9130016",
    "longitude": "-73.8369949",
    "region": "992",
    "notes": "Suite #2",
    "tokens": [
      "Mt",
      "Vernon",
      "Civic",
      "Center"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/mt-vernon-civic-center/"
  },
  {
    "value": "Mt Vernon Salvation Army Center",
    "formatted_address": "745 S 3rd Ave, Mt Vernon, NY 10550, USA",
    "latitude": "40.8926024",
    "longitude": "-73.8272278",
    "region": "992",
    "notes": "2nd Floor",
    "tokens": [
      "Mt",
      "Vernon",
      "Salvation",
      "Army",
      "Center"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/mt-vernon-salvation-army-center/"
  },
  {
    "value": "Muhlenberg Residence",
    "formatted_address": "510 Atlantic Ave, Brooklyn, NY 11217, USA",
    "latitude": "40.6854062",
    "longitude": "-73.9813436",
    "region": "1015",
    "notes": "Cafeteria\nBetween 3rd Avenue & Nevins Street",
    "tokens": [
      "Muhlenberg",
      "Residence"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/muhlenberg-residence/"
  },
  {
    "value": "Munger Cottage",
    "formatted_address": "395 Hudson St, Cornwall, NY 12518, USA",
    "latitude": "41.4418178",
    "longitude": "-74.0259703",
    "region": "921",
    "notes": "Riverlight Park\nBehind Cornwall Library",
    "tokens": [
      "Munger",
      "Cottage"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/munger-cottage/"
  },
  {
    "value": "Mustard Seed",
    "formatted_address": "122 E 37th St, New York, NY 10016, USA",
    "latitude": "40.7483197",
    "longitude": "-73.978851",
    "region": "907",
    "notes": "Between Park & Lexington Avenues. Basement floor.",
    "tokens": [
      "Mustard",
      "Seed"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/mustard-seed/"
  },
  {
    "value": "Nauraushaun Presbyterian Church",
    "formatted_address": "51 Sickletown Rd, Pearl River, NY 10965, USA",
    "latitude": "41.059318",
    "longitude": "-73.99092",
    "region": "961",
    "notes": "",
    "tokens": [
      "Nauraushaun",
      "Presbyterian",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/nauraushaun-presbyterian-church/"
  },
  {
    "value": "New Apostolic Church",
    "formatted_address": "30-60 47th St, Long Island City, NY 11103, USA",
    "latitude": "40.760008",
    "longitude": "-73.910948",
    "region": "940",
    "notes": "Near the Astoria Heights playground, between 30th Road and 31st Avenue",
    "tokens": [
      "New",
      "Apostolic",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/new-apostolic-church/"
  },
  {
    "value": "New Beginnings Church",
    "formatted_address": "35 De Garmo Rd, Arlington, NY 12603, USA",
    "latitude": "41.7016113",
    "longitude": "-73.8672947",
    "region": "901",
    "notes": "Meeting is in rear of church",
    "tokens": [
      "New",
      "Beginnings",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/new-beginnings-church/"
  },
  {
    "value": "United Methodist Church of New City",
    "formatted_address": "76 Congers Rd, New City, NY 10956, USA",
    "latitude": "41.1469757",
    "longitude": "-73.9833492",
    "region": "961",
    "notes": "",
    "tokens": [
      "United",
      "Methodist",
      "Church",
      "of",
      "New",
      "City"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/new-city-united-methodist-church/"
  },
  {
    "value": "New Dorp Moravian Church",
    "formatted_address": "2205 Richmond Rd, Staten Island, NY 10306, USA",
    "latitude": "40.5803768",
    "longitude": "-74.1149813",
    "region": "932",
    "notes": "Conference Room, Ground Floor\nAt Todt Hill Road",
    "tokens": [
      "New",
      "Dorp",
      "Moravian",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/new-dorp-moravian-church/"
  },
  {
    "value": "New Hempstead Presbyterian Church",
    "formatted_address": "484 New Hempstead Rd, New City, NY 10956, USA",
    "latitude": "41.1498215",
    "longitude": "-74.032469",
    "region": "961",
    "notes": "At Route 45",
    "tokens": [
      "New",
      "Hempstead",
      "Presbyterian",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/new-hempstead-presbyterian-church/"
  },
  {
    "value": "New Hyde Park Holy Spirit Church",
    "formatted_address": "500 Jericho Turnpike, New Hyde Park, NY 11040, USA",
    "latitude": "40.7311081",
    "longitude": "-73.6886172",
    "region": "897",
    "notes": "Basement\nAt South 5th Street & 1st Avenue",
    "tokens": [
      "New",
      "Hyde",
      "Park",
      "Holy",
      "Spirit",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/new-hyde-park-holy-spirit-church/"
  },
  {
    "value": "New Utrecht Reformed Church",
    "formatted_address": "1827 84th St, Brooklyn, NY 11214, USA",
    "latitude": "40.6079994",
    "longitude": "-74.0004267",
    "region": "1020",
    "notes": "At 18th Avenue",
    "tokens": [
      "New",
      "Utrecht",
      "Reformed",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/new-utrecht-reformed-church/"
  },
  {
    "value": "New York Blood Center",
    "formatted_address": "310 E 67th St, New York, NY 10065, USA",
    "latitude": "40.7650502",
    "longitude": "-73.960054",
    "region": "922",
    "notes": "Auditorium\nBetween 1st & 2nd Avenues",
    "tokens": [
      "New",
      "York",
      "Blood",
      "Center"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/new-york-blood-center/"
  },
  {
    "value": "New York Irish Center",
    "formatted_address": "10-40 Jackson Ave, Long Island City, NY 11101, USA",
    "latitude": "40.7420907",
    "longitude": "-73.9530761",
    "region": "1079",
    "notes": "Basement",
    "tokens": [
      "New",
      "York",
      "Irish",
      "Center"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/new-york-irish-center/"
  },
  {
    "value": "New York Manhattan Church of the Advent Hope Seventh-day Adventist Church",
    "formatted_address": "111 E 87th St, New York, NY 10128, USA",
    "latitude": "40.7807999",
    "longitude": "-73.9560271",
    "region": "922",
    "notes": "First Floor",
    "tokens": [
      "New",
      "York",
      "Manhattan",
      "Church",
      "of",
      "the",
      "Advent",
      "Hope",
      "Seventh",
      "day",
      "Adventist"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/new-york-manhattan-church-of-the-advent-hope-seventh-day-adventist-church/"
  },
  {
    "value": "New York Presbyterian Church",
    "formatted_address": "9402 101st Ave, Ozone Park, NY 11416, USA",
    "latitude": "40.6840432",
    "longitude": "-73.8463517",
    "region": "938",
    "notes": "Corner of Woodhaven & 101st Avenue",
    "tokens": [
      "New",
      "York",
      "Presbyterian",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/new-york-presbyterian-church/"
  },
  {
    "value": "New York Times Building",
    "formatted_address": "25-70 Whitestone Expy, Flushing, NY 11357, USA",
    "latitude": "40.775235",
    "longitude": "-73.831113",
    "region": "1022",
    "notes": "Main Floor South Service Road, South of 20th Avenue",
    "tokens": [
      "New",
      "York",
      "Times",
      "Building"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/new-york-times-building/"
  },
  {
    "value": "North Central Bronx Hospital",
    "formatted_address": "3424 Kossuth Ave, Bronx, NY 10467, USA",
    "latitude": "40.8805308",
    "longitude": "-73.8816424",
    "region": "978",
    "notes": "Room 6-M-06; 6th Floor; at 210th Street",
    "tokens": [
      "North",
      "Central",
      "Bronx",
      "Hospital"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/north-central-bronx-hospital/"
  },
  {
    "value": "North Salem Community Center",
    "formatted_address": "1 Titicus Rd, North Salem, NY 10560, USA",
    "latitude": "41.3278942",
    "longitude": "-73.6551897",
    "region": "1078",
    "notes": "At Route 22",
    "tokens": [
      "North",
      "Salem",
      "Community",
      "Center"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/north-salem-community-center/"
  },
  {
    "value": "North Woodmere Park Administration Building",
    "formatted_address": "750 Hungry Harbor Rd, Valley Stream, NY 11581, USA",
    "latitude": "40.643477",
    "longitude": "-73.7356154",
    "region": "897",
    "notes": "",
    "tokens": [
      "North",
      "Woodmere",
      "Park",
      "Administration",
      "Building"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/north-woodmere-park-administration-building/"
  },
  {
    "value": "Northern Westchester Hospital",
    "formatted_address": "400 E Main St, Mt Kisco, NY 10549, USA",
    "latitude": "41.1966564",
    "longitude": "-73.7244792",
    "region": "1012",
    "notes": "North Building, 3rd Floor Conference Room\nRoute 117 at Route 172",
    "tokens": [
      "Northern",
      "Westchester",
      "Hospital"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/northern-westchester-hospital/"
  },
  {
    "value": "Norwalk United Methodist Church",
    "formatted_address": "718 West Ave, Norwalk, CT 06850, USA",
    "latitude": "41.1163416",
    "longitude": "-73.4150976",
    "region": "1019",
    "notes": "Mott Ave",
    "tokens": [
      "Norwalk",
      "United",
      "Methodist",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/norwalk-united-methodist-church/"
  },
  {
    "value": "Brownsville Health Center",
    "formatted_address": "259 Bristol St, Brooklyn, NY 11212, USA",
    "latitude": "40.6646618",
    "longitude": "-73.9111354",
    "region": "1074",
    "notes": "2nd Floor",
    "tokens": [
      "Brownsville",
      "Health",
      "Center"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/nyc-department-of-health/"
  },
  {
    "value": "Oakwood Heights Community Church",
    "formatted_address": "345 Guyon Ave, Staten Island, NY 10306, USA",
    "latitude": "40.5592811",
    "longitude": "-74.1182085",
    "region": "932",
    "notes": "Basement\nAt Guyon & Falcon Avenue, Side Entrance",
    "tokens": [
      "Oakwood",
      "Heights",
      "Community",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/oakwood-heights-community-church/"
  },
  {
    "value": "Oasis Church",
    "formatted_address": "539 Greeley Ave, Staten Island, NY 10306, USA",
    "latitude": "40.571217",
    "longitude": "-74.0963194",
    "region": "932",
    "notes": "Basement",
    "tokens": [
      "Oasis",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/oasis-church/"
  },
  {
    "value": "Odyssey House",
    "formatted_address": "715 Sound View Ave, Bronx, NY 10473, USA",
    "latitude": "40.8200147",
    "longitude": "-73.8649386",
    "region": "1092",
    "notes": "Basement\nAt Lafayette and Seward Aves",
    "tokens": [
      "Odyssey",
      "House"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/odyssey-house/"
  },
  {
    "value": "Office Building 95",
    "formatted_address": "95 Croton Ave, Ossining, NY 10562, USA",
    "latitude": "41.1661352",
    "longitude": "-73.8566916",
    "region": "1056",
    "notes": "",
    "tokens": [
      "Office",
      "Building",
      "95"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/office-building-95/"
  },
  {
    "value": "Old First Church",
    "formatted_address": "125 Main St, Huntington, NY 11743, USA",
    "latitude": "40.8746562",
    "longitude": "-73.4197592",
    "region": "898",
    "notes": "",
    "tokens": [
      "Old",
      "First",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/old-first-church/"
  },
  {
    "value": "Old First Reformed Church",
    "formatted_address": "729 Carroll St, Brooklyn, NY 11215, USA",
    "latitude": "40.6733419",
    "longitude": "-73.9766889",
    "region": "968",
    "notes": "At 7th Avenue",
    "tokens": [
      "Old",
      "First",
      "Reformed",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/old-first-reformed-church/"
  },
  {
    "value": "Old Melrose School",
    "formatted_address": "118 Federal Hill Rd, Brewster, NY 10509, USA",
    "latitude": "41.4062835",
    "longitude": "-73.5504413",
    "region": "901",
    "notes": "COVID NOTES: No hand holding, mask can be worn but we have plenty of space to appropriately socially distance.",
    "tokens": [
      "Old",
      "Melrose",
      "School"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/old-melrose-school-2/"
  },
  {
    "value": "Old Schoolhouse of Verplanck",
    "formatted_address": "210 6th St, Verplanck, NY 10803, USA",
    "latitude": "41.2534268",
    "longitude": "-73.9612975",
    "region": "1042",
    "notes": "Between Broadway & Highland\n1st Floor",
    "tokens": [
      "Old",
      "Schoolhouse",
      "of",
      "Verplanck"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/old-schoolhouse-of-verplanck/"
  },
  {
    "value": "Old South Haven Presbyterian Church",
    "formatted_address": "329 S Country Rd, Brookhaven, NY 11719, USA",
    "latitude": "40.7728893",
    "longitude": "-72.9209326",
    "region": "898",
    "notes": "Meeting is in the Gallery Building",
    "tokens": [
      "Old",
      "South",
      "Haven",
      "Presbyterian",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/old-south-haven-presbyterian-church/"
  },
  {
    "value": "Old Whalers Presbyterian Church",
    "formatted_address": "44 Union St, Sag Harbor, NY 11963, USA",
    "latitude": "40.997463",
    "longitude": "-72.293763",
    "region": "898",
    "notes": "Lower Level",
    "tokens": [
      "Old",
      "Whalers",
      "Presbyterian",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/old-whalers-presbyterian-church/"
  },
  {
    "value": "Olivet Presbyterian Church",
    "formatted_address": "97 Myrtle Ave, Staten Island, NY 10310, USA",
    "latitude": "40.6301638",
    "longitude": "-74.1160735",
    "region": "1039",
    "notes": "Entrance on Broadway",
    "tokens": [
      "Olivet",
      "Presbyterian",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/olivet-presbyterian-church/"
  },
  {
    "value": "On the Beach at Broadway (in Fair Harbor)",
    "formatted_address": "119 Broadway, Bay Shore, NY 11706, USA",
    "latitude": "40.6377669",
    "longitude": "-73.184538",
    "region": "898",
    "notes": "The meeting is on the beach at Broadway In Fair Harbor",
    "tokens": [
      "On",
      "the",
      "Beach",
      "at",
      "Broadway",
      "in",
      "Fair",
      "Harbor"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/on-the-beach-at-broadway-in-fair-harbor/"
  },
  {
    "value": "Order of Hibernians",
    "formatted_address": "2750 Gerritsen Ave, Brooklyn, NY 11229, USA",
    "latitude": "40.5924066",
    "longitude": "-73.9246404",
    "region": "1044",
    "notes": "Between Avenues O & P",
    "tokens": [
      "Order",
      "of",
      "Hibernians"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/order-of-hibernians/"
  },
  {
    "value": "Lenox Hill Health - Greenwich Village",
    "formatted_address": "200 W 13th St, New York, NY 10011, USA",
    "latitude": "40.7378675",
    "longitude": "-74.0008189",
    "region": "894",
    "notes": "6th Floor",
    "tokens": [
      "Lenox",
      "Hill",
      "Health",
      "Greenwich",
      "Village"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/otoole-building/"
  },
  {
    "value": "Our Lady of Angels School Cafeteria",
    "formatted_address": "336 73rd St, Brooklyn, NY 11209, USA",
    "latitude": "40.632374",
    "longitude": "-74.0262702",
    "region": "1063",
    "notes": "73rd St Between 3rd & 4th Ave\nSchool Yard Entrance",
    "tokens": [
      "Our",
      "Lady",
      "of",
      "Angels",
      "School",
      "Cafeteria"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/our-lady-of-angels-school-cafeteria/"
  },
  {
    "value": "Our Lady of Assumption Church",
    "formatted_address": "1634 Mahan Ave, Bronx, NY 10461, USA",
    "latitude": "40.8456502",
    "longitude": "-73.8281666",
    "region": "982",
    "notes": "Off Roberts Avenue entrance through parking lot side of church\n\nCOVID NOTES: 50 max, masks must be worn, maintain 6ft apart.",
    "tokens": [
      "Our",
      "Lady",
      "of",
      "Assumption",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/our-lady-of-assumption-church/"
  },
  {
    "value": "Our Lady of Assumption Parish Hall",
    "formatted_address": "17 High St, Bloomingburg, NY 12721, USA",
    "latitude": "41.5569116",
    "longitude": "-74.4435025",
    "region": "957",
    "notes": "",
    "tokens": [
      "Our",
      "Lady",
      "of",
      "Assumption",
      "Parish",
      "Hall"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/our-lady-of-assumption-parish-hall/"
  },
  {
    "value": "Our Lady of Charity Church",
    "formatted_address": "1669 Dean St, Brooklyn, NY 11213, USA",
    "latitude": "40.6759344",
    "longitude": "-73.9325364",
    "region": "926",
    "notes": "Near Schenectady Avenue",
    "tokens": [
      "Our",
      "Lady",
      "of",
      "Charity",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/our-lady-of-charity-church/"
  },
  {
    "value": "Our Lady of Czestochowa Church",
    "formatted_address": "115 S 3rd St, Harrison, NJ 07029, USA",
    "latitude": "40.7449243",
    "longitude": "-74.1583618",
    "region": "962",
    "notes": "At Jersey St",
    "tokens": [
      "Our",
      "Lady",
      "of",
      "Czestochowa",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/our-lady-of-czestochowa-church/"
  },
  {
    "value": "Our Lady of Fatima School",
    "formatted_address": "25-38 80th St, East Elmhurst, NY 11370, USA",
    "latitude": "40.7616326",
    "longitude": "-73.8886838",
    "region": "946",
    "notes": "Basement Cafeteria\nBetween 25th & 30th Avenues",
    "tokens": [
      "Our",
      "Lady",
      "of",
      "Fatima",
      "School"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/our-lady-of-fatima-school/"
  },
  {
    "value": "Our Lady of Good Council School",
    "formatted_address": "42 Austin Pl, Staten Island, NY 10304, USA",
    "latitude": "40.6310735",
    "longitude": "-74.0863714",
    "region": "993",
    "notes": "School Cafeteria\nAt Victory Blvd",
    "tokens": [
      "Our",
      "Lady",
      "of",
      "Good",
      "Council",
      "School"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/our-lady-of-good-council-school/"
  },
  {
    "value": "Our Lady of Good Counsel Church",
    "formatted_address": "230 E 90th St, New York, NY 10128, USA",
    "latitude": "40.7806798",
    "longitude": "-73.9509647",
    "region": "922",
    "notes": "Between 2nd & 3rd ave. Main Floor.",
    "tokens": [
      "Our",
      "Lady",
      "of",
      "Good",
      "Counsel",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/our-lady-of-good-counsel-church-2/"
  },
  {
    "value": "Our Lady of Grace Rectory",
    "formatted_address": "430 Avenue W, Brooklyn, NY 11223, USA",
    "latitude": "40.592794",
    "longitude": "-73.967077",
    "region": "944",
    "notes": "Basement\nCorner of East 4th Street",
    "tokens": [
      "Our",
      "Lady",
      "of",
      "Grace",
      "Rectory"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/our-lady-of-grace-rectory/"
  },
  {
    "value": "Our Lady of Guadalupe Church",
    "formatted_address": "7201 15th Ave, Brooklyn, NY 11228, USA",
    "latitude": "40.6191",
    "longitude": "-74.00109",
    "region": "1029",
    "notes": "Basement\nAt 73rd Street, Between 15th & 16th Avenues",
    "tokens": [
      "Our",
      "Lady",
      "of",
      "Guadalupe",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/our-lady-of-guadalupe-church-2/"
  },
  {
    "value": "Our Lady of Lebanon Maronite Cathedral",
    "formatted_address": "111 Remsen St, Brooklyn, NY 11201, USA",
    "latitude": "40.6940326",
    "longitude": "-73.9940054",
    "region": "911",
    "notes": "Parish Hall Basement\nbetween Henry and Clinton Streets",
    "tokens": [
      "Our",
      "Lady",
      "of",
      "Lebanon",
      "Maronite",
      "Cathedral"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/our-lady-of-lebanon-maronite-cathedral/"
  },
  {
    "value": "Our Lady of Lourdes",
    "formatted_address": "469 W 142nd St, New York, NY 10031, USA",
    "latitude": "40.823305",
    "longitude": "-73.948402",
    "region": "950",
    "notes": "Basement\nBetween Convent & Amsterdam Avenues",
    "tokens": [
      "Our",
      "Lady",
      "of",
      "Lourdes"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/our-lady-of-lourdes/"
  },
  {
    "value": "Our Lady of Lourdes Church Rectory",
    "formatted_address": "65 Wright Ave, Malverne, NY 11565, USA",
    "latitude": "40.6735113",
    "longitude": "-73.6681889",
    "region": "897",
    "notes": "",
    "tokens": [
      "Our",
      "Lady",
      "of",
      "Lourdes",
      "Church",
      "Rectory"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/our-lady-of-lourdes-church-rectory/"
  },
  {
    "value": "Our Lady of Lourdes Roman Catholic Church",
    "formatted_address": "92-96 220th St, Queens Village, NY 11428, USA",
    "latitude": "40.7230402",
    "longitude": "-73.7362541",
    "region": "1066",
    "notes": "Enter Thru School Parking Lot\n@93rd Avenue & Springfield Blvd",
    "tokens": [
      "Our",
      "Lady",
      "of",
      "Lourdes",
      "Roman",
      "Catholic",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/our-lady-of-lourdes-roman-catholic-church/"
  },
  {
    "value": "Our Lady of Mercy Church",
    "formatted_address": "70-01 Kessel St, Forest Hills, NY 11375, USA",
    "latitude": "40.7141929",
    "longitude": "-73.8509663",
    "region": "970",
    "notes": "School Basement\nAt 70th Avenue",
    "tokens": [
      "Our",
      "Lady",
      "of",
      "Mercy",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/our-lady-of-mercy-church/"
  },
  {
    "value": "Our Lady of Mercy Convent",
    "formatted_address": "500 S Oyster Bay Rd, Hicksville, NY 11801, USA",
    "latitude": "40.7756082",
    "longitude": "-73.5026801",
    "region": "897",
    "notes": "Bsmt",
    "tokens": [
      "Our",
      "Lady",
      "of",
      "Mercy",
      "Convent"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/our-lady-of-mercy-convent/"
  },
  {
    "value": "Our Lady of Mount Carmel Church",
    "formatted_address": "1 Havemeyer St, Brooklyn, NY 11211, USA",
    "latitude": "40.7162696",
    "longitude": "-73.9529276",
    "region": "994",
    "notes": "Msgr. Cassato Hall, downstairs, entrance on Havemeyer St",
    "tokens": [
      "Our",
      "Lady",
      "of",
      "Mount",
      "Carmel",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/our-lady-of-mount-carmel-church/"
  },
  {
    "value": "Our Lady of Mount Carmel Parish Center",
    "formatted_address": "23-20 Newtown Ave, Long Island City, NY 11102, USA",
    "latitude": "40.770717",
    "longitude": "-73.924467",
    "region": "940",
    "notes": "Between Crescent & 23rd Streets (Basement)",
    "tokens": [
      "Our",
      "Lady",
      "of",
      "Mount",
      "Carmel",
      "Parish",
      "Center"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/our-lady-of-mount-carmel-parish-center/"
  },
  {
    "value": "Our Lady of Perpetual Help Church",
    "formatted_address": "111-50 115th St, Jamaica, NY 11420, USA",
    "latitude": "40.67814",
    "longitude": "-73.824475",
    "region": "998",
    "notes": "Basement\nBetween 111th Avenue & Linden Blvd",
    "tokens": [
      "Our",
      "Lady",
      "of",
      "Perpetual",
      "Help",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/our-lady-of-perpetual-help-church/"
  },
  {
    "value": "Our Lady of Perpetual Help Church",
    "formatted_address": "535 Ashford Ave, Ardsley, NY 10502, USA",
    "latitude": "41.0106136",
    "longitude": "-73.8440281",
    "region": "1107",
    "notes": "Basement",
    "tokens": [
      "Our",
      "Lady",
      "of",
      "Perpetual",
      "Help",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/our-lady-of-perpetual-help-church-2/"
  },
  {
    "value": "Our Lady of Refuge Church",
    "formatted_address": "290 E 196th St, Bronx, NY 10458, USA",
    "latitude": "40.8666302",
    "longitude": "-73.8905863",
    "region": "1023",
    "notes": "Basement - entrance on 196th Street",
    "tokens": [
      "Our",
      "Lady",
      "of",
      "Refuge",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/our-lady-of-refuge-church/"
  },
  {
    "value": "Our Lady of Refuge Church (Rectory Basement)",
    "formatted_address": "720 E 21st St, Brooklyn, NY 11210, USA",
    "latitude": "40.6362026",
    "longitude": "-73.9573155",
    "region": "967",
    "notes": "Rectory Basement\nBetween Foster & Farragut",
    "tokens": [
      "Our",
      "Lady",
      "of",
      "Refuge",
      "Church",
      "Rectory",
      "Basement"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/our-lady-of-refuge-church-rectory-basement/"
  },
  {
    "value": "Our Lady of the Blessed Sacrament School",
    "formatted_address": "3445 202nd St, Bayside, NY 11361, USA",
    "latitude": "40.7665497",
    "longitude": "-73.7853382",
    "region": "1041",
    "notes": "1st Floor Cafeteria",
    "tokens": [
      "Our",
      "Lady",
      "of",
      "the",
      "Blessed",
      "Sacrament",
      "School"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/our-lady-of-the-blessed-sacrament-school-2/"
  },
  {
    "value": "Our Lady of the Isle Rc Church",
    "formatted_address": "5 Prospect Ave, Sag Harbor, NY 11963, USA",
    "latitude": "41.0823308",
    "longitude": "-72.3566057",
    "region": "898",
    "notes": "In Shelter Island Heights",
    "tokens": [
      "Our",
      "Lady",
      "of",
      "the",
      "Isle",
      "Rc",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/our-lady-of-the-isle-rc-church/"
  },
  {
    "value": "Our Lady of Victory Church",
    "formatted_address": "163 MacDonough St, Brooklyn, NY 11216, USA",
    "latitude": "40.6817039",
    "longitude": "-73.9399433",
    "region": "960",
    "notes": "Throop Ave, 1st Floor",
    "tokens": [
      "Our",
      "Lady",
      "of",
      "Victory",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/our-lady-of-victory-church/"
  },
  {
    "value": "Our Lady Queen of Martyrs",
    "formatted_address": "91 Arden St, New York, NY 10040, USA",
    "latitude": "40.8638267",
    "longitude": "-73.928037",
    "region": "979",
    "notes": "2 blocks South of Dyckman Street, Between Broadway & Sherman Avenue",
    "tokens": [
      "Our",
      "Lady",
      "Queen",
      "of",
      "Martyrs"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/our-lady-queen-of-martyrs/"
  },
  {
    "value": "Our Lady Queen of Peace Church",
    "formatted_address": "59 New Dorp Ln, Staten Island, NY 10306, USA",
    "latitude": "40.5748689",
    "longitude": "-74.1178114",
    "region": "932",
    "notes": "Hopkins Hall\nAt 3rd Street",
    "tokens": [
      "Our",
      "Lady",
      "Queen",
      "of",
      "Peace",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/our-lady-queen-of-peace-church/"
  },
  {
    "value": "Our Lady Star of the Sea Church Rectory",
    "formatted_address": "5371 Amboy Rd, Staten Island, NY 10312, USA",
    "latitude": "40.5332799",
    "longitude": "-74.1890123",
    "region": "981",
    "notes": "Rectory Basement\nOff of Huguenot Avenue",
    "tokens": [
      "Our",
      "Lady",
      "Star",
      "of",
      "the",
      "Sea",
      "Church",
      "Rectory"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/our-lady-star-of-the-sea-church-rectory/"
  },
  {
    "value": "Our Savior Lutheran Church",
    "formatted_address": "140 Mark Tree Rd, Centereach, NY 11720, USA",
    "latitude": "40.8644975",
    "longitude": "-73.0839198",
    "region": "898",
    "notes": "",
    "tokens": [
      "Our",
      "Savior",
      "Lutheran",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/our-savior-lutheran-church/"
  },
  {
    "value": "Our Savior Lutheran Church",
    "formatted_address": "58 Cleveland Dr, Croton-On-Hudson, NY 10520, USA",
    "latitude": "41.1976469",
    "longitude": "-73.8785335",
    "region": "1047",
    "notes": "Located at rotary circle in round school building.",
    "tokens": [
      "Our",
      "Savior",
      "Lutheran",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/our-savior-lutheran-church-2/"
  },
  {
    "value": "Our Savior Lutheran Church",
    "formatted_address": "557 Bard Ave, Staten Island, NY 10310, USA",
    "latitude": "40.6299357",
    "longitude": "-74.1052783",
    "region": "1039",
    "notes": "At Forest Avenue",
    "tokens": [
      "Our",
      "Savior",
      "Lutheran",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/our-savior-lutheran-church-3/"
  },
  {
    "value": "Our Savior Lutheran School",
    "formatted_address": "1734 Williamsbridge Rd, Bronx, NY 10461, USA",
    "latitude": "40.8497371",
    "longitude": "-73.8509328",
    "region": "982",
    "notes": "Between Yates and Mossis Park. Enter Thru Parking Lot At Back of Building At Morris Park Avenue\nCOVID NOTES: 30 participants max, masks and 6 foot distancing required, temperature check at door, no fellowship in building, no food or drinks at meeting.",
    "tokens": [
      "Our",
      "Savior",
      "Lutheran",
      "School"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/our-savior-lutheran-school/"
  },
  {
    "value": "Our Savior Lutheran School",
    "formatted_address": "64-33 Woodhaven Blvd, Flushing, NY 11374, USA",
    "latitude": "40.7207269",
    "longitude": "-73.8653549",
    "region": "1091",
    "notes": "",
    "tokens": [
      "Our",
      "Savior",
      "Lutheran",
      "School"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/our-savior-lutheran-school-2/"
  },
  {
    "value": "Our Savior Roman Catholic Church",
    "formatted_address": "59 Park Ave, New York, NY 10016, USA",
    "latitude": "40.7492416",
    "longitude": "-73.9792736",
    "region": "907",
    "notes": "buzz door at rectory on 38th St.--2 levels down in basement",
    "tokens": [
      "Our",
      "Savior",
      "Roman",
      "Catholic",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/our-savior-roman-catholic-church-2/"
  },
  {
    "value": "Our Saviour's Atonement Church",
    "formatted_address": "178 Bennett Ave, New York, NY 10040, USA",
    "latitude": "40.8560299",
    "longitude": "-73.934364",
    "region": "955",
    "notes": "",
    "tokens": [
      "Our",
      "Saviours",
      "Atonement",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/our-saviours-atonement-church/"
  },
  {
    "value": "Outreach Project",
    "formatted_address": "960 Manhattan Ave, Brooklyn, NY 11222, USA",
    "latitude": "40.7320181",
    "longitude": "-73.9545612",
    "region": "918",
    "notes": "Ring Bell for access to building. Take elevator and ring bell for access.\nBetween India & Java Streets",
    "tokens": [
      "Outreach",
      "Project"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/outreach-project/"
  },
  {
    "value": "Park Church Co-Op",
    "formatted_address": "129 Russell St, Brooklyn, NY 11222, USA",
    "latitude": "40.7248276",
    "longitude": "-73.9446616",
    "region": "1103",
    "notes": "Meeting is downstairs in basement, to the right of main door",
    "tokens": [
      "Park",
      "Church",
      "Co",
      "Op"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/park-church-co-op/"
  },
  {
    "value": "Park Slope United Methodist Church",
    "formatted_address": "410 6th Ave, Brooklyn, NY 11215, USA",
    "latitude": "40.6687755",
    "longitude": "-73.983332",
    "region": "968",
    "notes": "Basement",
    "tokens": [
      "Park",
      "Slope",
      "United",
      "Methodist",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/park-slope-united-methodist-church/"
  },
  {
    "value": "Parkway Community Church",
    "formatted_address": "95 Stewart Ave, Hicksville, NY 11801, USA",
    "latitude": "40.7478726",
    "longitude": "-73.5434661",
    "region": "897",
    "notes": "Off Levittown Parkway",
    "tokens": [
      "Parkway",
      "Community",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/parkway-community-church/"
  },
  {
    "value": "Pascack Reformed Church",
    "formatted_address": "65 Pascack Rd, Park Ridge, NJ 07656, USA",
    "latitude": "41.032263",
    "longitude": "-74.042897",
    "region": "962",
    "notes": "Back of Building",
    "tokens": [
      "Pascack",
      "Reformed",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/pascack-reformed-church/"
  },
  {
    "value": "Patterson Baptist Church",
    "formatted_address": "595 NY-311, Patterson, NY 12563, USA",
    "latitude": "41.487887",
    "longitude": "-73.627189",
    "region": "901",
    "notes": "1.9 miles from I-84, exit 61 (formerly exit 18)",
    "tokens": [
      "Patterson",
      "Baptist",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/patterson-baptist-church/"
  },
  {
    "value": "Pawling Trinity Lutheran Church",
    "formatted_address": "14 Pine Dr, Pawling, NY 12564, USA",
    "latitude": "41.5663939",
    "longitude": "-73.5934181",
    "region": "901",
    "notes": "Rectory Classroom\nAt Route 22",
    "tokens": [
      "Pawling",
      "Trinity",
      "Lutheran",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/pawling-trinity-lutheran-church/"
  },
  {
    "value": "Perry Street Workshop",
    "formatted_address": "50 Perry St, New York, NY 10014, USA",
    "latitude": "40.7355145",
    "longitude": "-74.0031001",
    "region": "894",
    "notes": "Ground Floor Between 7th Avenue South & West 4th Street",
    "tokens": [
      "Perry",
      "Street",
      "Workshop"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/perry-street-workshop/"
  },
  {
    "value": "Peter Jay Sharpe Building",
    "formatted_address": "223 E 117th St, New York, NY 10035, USA",
    "latitude": "40.7982895",
    "longitude": "-73.9382489",
    "region": "985",
    "notes": "1st Floor Dining Room\nBetween 2nd & 3rd Avenues",
    "tokens": [
      "Peter",
      "Jay",
      "Sharpe",
      "Building"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/peter-jay-sharpe-building/"
  },
  {
    "value": "Mt Sinai Downtown",
    "formatted_address": "10 Union Square E, New York, NY 10003, USA",
    "latitude": "40.7347942",
    "longitude": "-73.9895321",
    "region": "912",
    "notes": "",
    "tokens": [
      "Mt",
      "Sinai",
      "Downtown"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/phillips-ambulatory-care-center-mount-sinai-beth-israel/"
  },
  {
    "value": "Pilgrim Baptist Church",
    "formatted_address": "80 N Franklin St, Nyack, NY 10960, USA",
    "latitude": "41.0926109",
    "longitude": "-73.9214031",
    "region": "961",
    "notes": "Basement\nAt High Ave",
    "tokens": [
      "Pilgrim",
      "Baptist",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/pilgrim-baptist-church/"
  },
  {
    "value": "Pilgrim Congregational Church",
    "formatted_address": "102-35 89th Ave, Jamaica, NY 11418, USA",
    "latitude": "40.6936088",
    "longitude": "-73.8430464",
    "region": "1038",
    "notes": "1 Flight Up\nBetween 102nd & 104th Streets",
    "tokens": [
      "Pilgrim",
      "Congregational",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/pilgrim-congregational-church/"
  },
  {
    "value": "Plymouth Church",
    "formatted_address": "75 Hicks St, Brooklyn, NY 11201, USA",
    "latitude": "40.699338",
    "longitude": "-73.9937211",
    "region": "911",
    "notes": "At Orange Street",
    "tokens": [
      "Plymouth",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/plymouth-church/"
  },
  {
    "value": "Poppenhuasen Institute",
    "formatted_address": "114-4 14th Rd, College Point, NY 11356, USA",
    "latitude": "40.7844935",
    "longitude": "-73.8529359",
    "region": "1022",
    "notes": "Between 114th & 115th Streets",
    "tokens": [
      "Poppenhuasen",
      "Institute"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/poppenhuasen-institute/"
  },
  {
    "value": "Power House",
    "formatted_address": "99-15 Rockaway Beach Blvd, Rockaway Park, NY 11694, USA",
    "latitude": "40.583894",
    "longitude": "-73.8207303",
    "region": "936",
    "notes": "Building next to the rectory of St. Camillus Church",
    "tokens": [
      "Power",
      "House"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/power-house/"
  },
  {
    "value": "Pratt Institute, South Hall",
    "formatted_address": "219 Ryerson St, Brooklyn, NY 11205, USA",
    "latitude": "40.6910385",
    "longitude": "-73.964123",
    "region": "1054",
    "notes": "South Hall, Room 105",
    "tokens": [
      "Pratt",
      "Institute",
      "South",
      "Hall"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/pratt-institute-south-hall/"
  },
  {
    "value": "Presbyterian Church",
    "formatted_address": "705 South St, Peekskill, NY 10566, USA",
    "latitude": "41.2886211",
    "longitude": "-73.9239036",
    "region": "1043",
    "notes": "@Washington Street, Fellowship Hall",
    "tokens": [
      "Presbyterian",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/presbyterian-church/"
  },
  {
    "value": "Presbyterian Church of Mt Kisco",
    "formatted_address": "605 Millwood Rd, Mt Kisco, NY 10549, USA",
    "latitude": "41.2071828",
    "longitude": "-73.7459987",
    "region": "1012",
    "notes": "Upstairs\nRoute 133 & Crow Hill Road",
    "tokens": [
      "Presbyterian",
      "Church",
      "of",
      "Mt",
      "Kisco"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/presbyterian-church-of-mt-kisco/"
  },
  {
    "value": "Presbyterian Church of New Rochelle",
    "formatted_address": "50 Pintard Ave, New Rochelle, NY 10801, USA",
    "latitude": "40.904632",
    "longitude": "-73.785228",
    "region": "1010",
    "notes": "At Main Street",
    "tokens": [
      "Presbyterian",
      "Church",
      "of",
      "New",
      "Rochelle"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/presbyterian-church-of-new-rochelle/"
  },
  {
    "value": "Presbyterian Church of Pleasantville",
    "formatted_address": "400 Bedford Rd, Pleasantville, NY 10570, USA",
    "latitude": "41.1341048",
    "longitude": "-73.7891301",
    "region": "1083",
    "notes": "Between Tompkins and Martling Aves , Room 104",
    "tokens": [
      "Presbyterian",
      "Church",
      "of",
      "Pleasantville"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/presbyterian-church-of-pleasantville/"
  },
  {
    "value": "Preston High School",
    "formatted_address": "2780 Schurz Ave, Bronx, NY 10465, USA",
    "latitude": "40.8136755",
    "longitude": "-73.8198673",
    "region": "964",
    "notes": "1st Floor Cafeteria\nAt Huntington Avenue",
    "tokens": [
      "Preston",
      "High",
      "School"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/preston-high-school/"
  },
  {
    "value": "Princes Bay Reformed Church",
    "formatted_address": "239 Seguine Ave, Staten Island, NY 10309, USA",
    "latitude": "40.5208829",
    "longitude": "-74.1974568",
    "region": "981",
    "notes": "Basement",
    "tokens": [
      "Princes",
      "Bay",
      "Reformed",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/princes-bay-reformed-church/"
  },
  {
    "value": "Project Hospitality",
    "formatted_address": "100 Central Ave, Staten Island, NY 10301, USA",
    "latitude": "40.6390516",
    "longitude": "-74.0767483",
    "region": "959",
    "notes": "Cafeteria",
    "tokens": [
      "Project",
      "Hospitality"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/project-hospitality/"
  },
  {
    "value": "Providence Rest Home",
    "formatted_address": "3304 Waterbury Ave, Bronx, NY 10465, USA",
    "latitude": "40.8371883",
    "longitude": "-73.8188351",
    "region": "964",
    "notes": "At Stadium Avenue",
    "tokens": [
      "Providence",
      "Rest",
      "Home"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/providence-rest-home/"
  },
  {
    "value": "PS 150 Learning Center",
    "formatted_address": "334 Greenwich St, New York, NY 10013, USA",
    "latitude": "40.7180827",
    "longitude": "-74.010942",
    "region": "905",
    "notes": "near intersection of Greenwich and Jay St. across from Sarabeth's, up the stairs to the right",
    "tokens": [
      "PS",
      "150",
      "Learning",
      "Center"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/ps-150-learning-center/"
  },
  {
    "value": "Putnam Hospital Center",
    "formatted_address": "670 Stoneleigh Ave, Carmel, NY 10512, USA",
    "latitude": "41.3832085",
    "longitude": "-73.6637171",
    "region": "901",
    "notes": "Cafeteria",
    "tokens": [
      "Putnam",
      "Hospital",
      "Center"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/putnam-hospital-center/"
  },
  {
    "value": "Queen of All Saints Church",
    "formatted_address": "300 Vanderbilt Ave, Brooklyn, NY 11205, USA",
    "latitude": "40.6882606",
    "longitude": "-73.9688401",
    "region": "1054",
    "notes": "Between Lafayette & DeKalb Avenues",
    "tokens": [
      "Queen",
      "of",
      "All",
      "Saints",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/queen-of-all-saints-church/"
  },
  {
    "value": "Queen of Angels Parish Center",
    "formatted_address": "44-04 Skillman Ave, Long Island City, NY 11104, USA",
    "latitude": "40.7465188",
    "longitude": "-73.9194895",
    "region": "1087",
    "notes": "At 44th Street, Corner Building",
    "tokens": [
      "Queen",
      "of",
      "Angels",
      "Parish",
      "Center"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/queen-of-angels-parish-center/"
  },
  {
    "value": "Queens Pride House",
    "formatted_address": "76-11 37th Ave, Jackson Heights, NY 11372, USA",
    "latitude": "40.749476",
    "longitude": "-73.8895085",
    "region": "946",
    "notes": "Suite #206\nMeeting is in Jackson Heights At 76th Street",
    "tokens": [
      "Queens",
      "Pride",
      "House"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/queens-pride-house/"
  },
  {
    "value": "Rainbow Center",
    "formatted_address": "293 Buffalo Ave, Lindenhurst, NY 11757, USA",
    "latitude": "40.690678",
    "longitude": "-73.388405",
    "region": "898",
    "notes": "Off of Strong Avenue",
    "tokens": [
      "Rainbow",
      "Center"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/rainbow-center/"
  },
  {
    "value": "Ready, Willing & Able Building",
    "formatted_address": "520 Gates Ave, Brooklyn, NY 11216, USA",
    "latitude": "40.6868424",
    "longitude": "-73.9451578",
    "region": "960",
    "notes": "1st Floor\nBetween Marcy & Thompkins Avenue",
    "tokens": [
      "Ready",
      "Willing",
      "Able",
      "Building"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/ready-willing-able-building/"
  },
  {
    "value": "Realization Center",
    "formatted_address": "25 E 15th St, New York, NY 10003, USA",
    "latitude": "40.7361603",
    "longitude": "-73.9914763",
    "region": "912",
    "notes": "Please do not bring any beverages (especially coffee) into the Realization Center. We are in danger of losing our space because of this, so please discard them before you come in.",
    "tokens": [
      "Realization",
      "Center"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/realization-center/"
  },
  {
    "value": "Redeemer Lutheran Church",
    "formatted_address": "92-10 217th St, Queens Village, NY 11428, USA",
    "latitude": "40.7224968",
    "longitude": "-73.7417817",
    "region": "1066",
    "notes": "Basement @92nd Avenue",
    "tokens": [
      "Redeemer",
      "Lutheran",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/redeemer-lutheran-church/"
  },
  {
    "value": "Redeemer Lutheran Church",
    "formatted_address": "69-07 Cooper Ave, Flushing, NY 11385, USA",
    "latitude": "40.7011698",
    "longitude": "-73.8821869",
    "region": "1013",
    "notes": "Corner 69th St & Cooper Ave, Meets in Basement",
    "tokens": [
      "Redeemer",
      "Lutheran",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/redeemer-lutheran-church-2/"
  },
  {
    "value": "Church on the Hill",
    "formatted_address": "167-7 35th Ave, Flushing, NY 11358, USA",
    "latitude": "40.7653102",
    "longitude": "-73.7981124",
    "region": "930",
    "notes": "",
    "tokens": [
      "Church",
      "on",
      "the",
      "Hill"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/reformed-church/"
  },
  {
    "value": "Reformed Church of Cortlandtown",
    "formatted_address": "2124 Albany Post Rd, Montrose, NY 10548, USA",
    "latitude": "41.248461",
    "longitude": "-73.931346",
    "region": "1042",
    "notes": "",
    "tokens": [
      "Reformed",
      "Church",
      "of",
      "Cortlandtown"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/reformed-church-of-cortlandtown/"
  },
  {
    "value": "Reformed Church of the Comforter",
    "formatted_address": "26 Wynkoop Pl, Kingston, NY 12401, USA",
    "latitude": "41.9299802",
    "longitude": "-73.9935646",
    "region": "957",
    "notes": "Fellowship Hall",
    "tokens": [
      "Reformed",
      "Church",
      "of",
      "the",
      "Comforter"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/reformed-church-of-the-comforter/"
  },
  {
    "value": "Reformed Church of the Tarrytowns",
    "formatted_address": "42 Broadway, Tarrytown, NY 10591, USA",
    "latitude": "41.0773803",
    "longitude": "-73.8574376",
    "region": "1030",
    "notes": "At Route 9 , 1 Block North of Main Street. Upstairs in church hall.",
    "tokens": [
      "Reformed",
      "Church",
      "of",
      "the",
      "Tarrytowns"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/reformed-church-of-the-tarrytowns/"
  },
  {
    "value": "Rego Park Jewish Center",
    "formatted_address": "97-30 Queens Blvd, Flushing, NY 11374, USA",
    "latitude": "40.7283679",
    "longitude": "-73.8592766",
    "region": "1091",
    "notes": "63rd Dr and Queens Blvd",
    "tokens": [
      "Rego",
      "Park",
      "Jewish",
      "Center"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/rego-park-jewish-center/"
  },
  {
    "value": "Resurrection Church",
    "formatted_address": "96 Milton Rd, Rye, NY 10580, USA",
    "latitude": "40.976551",
    "longitude": "-73.684743",
    "region": "990",
    "notes": "Between Milton Road & Midland Avenue",
    "tokens": [
      "Resurrection",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/resurrection-church/"
  },
  {
    "value": "Ridgewood Presbyterian Church",
    "formatted_address": "59-14 70th Ave, Flushing, NY 11385, USA",
    "latitude": "40.7010657",
    "longitude": "-73.8998403",
    "region": "1013",
    "notes": "At Forest Avenue",
    "tokens": [
      "Ridgewood",
      "Presbyterian",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/ridgewood-presbyterian-church/"
  },
  {
    "value": "Ripley-Grier Studios",
    "formatted_address": "131 W 72nd St, New York, NY 10023, USA",
    "latitude": "40.7781299",
    "longitude": "-73.979758",
    "region": "896",
    "notes": "3rd Floor, Room #2f\nBetween Columbus & Amsterdam Avenues",
    "tokens": [
      "Ripley",
      "Grier",
      "Studios"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/ripley-grier-studios/"
  },
  {
    "value": "Riverdale Presbyterian Church",
    "formatted_address": "4763 Henry Hudson Pkwy W, Bronx, NY 10471, USA",
    "latitude": "40.8953125",
    "longitude": "-73.9083634",
    "region": "1034",
    "notes": "At Riverdale Avenue, Between 247th & 248th Streets",
    "tokens": [
      "Riverdale",
      "Presbyterian",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/riverdale-presbyterian-church/"
  },
  {
    "value": "Riverdale Temple",
    "formatted_address": "4545 Independence Ave, Bronx, NY 10471, USA",
    "latitude": "40.8917252",
    "longitude": "-73.9127824",
    "region": "1034",
    "notes": "Room 301 at West 246 Street",
    "tokens": [
      "Riverdale",
      "Temple"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/riverdale-temple/"
  },
  {
    "value": "Riverside Church",
    "formatted_address": "490 Riverside Dr, New York, NY 10027, USA",
    "latitude": "40.8118356",
    "longitude": "-73.9630243",
    "region": "950",
    "notes": "Between Broadway & Riverside Drive",
    "tokens": [
      "Riverside",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/riverside-church/"
  },
  {
    "value": "Riverside Church",
    "formatted_address": "91 Claremont Ave, New York, NY 10027, USA",
    "latitude": "40.8118487",
    "longitude": "-73.9631608",
    "region": "950",
    "notes": "Between Broadway & Riverside Drive",
    "tokens": [
      "Riverside",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/riverside-church-2/"
  },
  {
    "value": "Rockland County Pride Center",
    "formatted_address": "28 S Franklin St, Nyack, NY 10960, USA",
    "latitude": "41.0905241",
    "longitude": "-73.9219058",
    "region": "961",
    "notes": "",
    "tokens": [
      "Rockland",
      "County",
      "Pride",
      "Center"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/rockland-county-pride-center/"
  },
  {
    "value": "Roslyn Presbyterian Church",
    "formatted_address": "140 E Broadway, Roslyn, NY 11576, USA",
    "latitude": "40.7975065",
    "longitude": "-73.6465448",
    "region": "897",
    "notes": "",
    "tokens": [
      "Roslyn",
      "Presbyterian",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/roslyn-presbyterian-church/"
  },
  {
    "value": "Rossville Ame Zion Church",
    "formatted_address": "584 Bloomingdale Rd, Staten Island, NY 10309, USA",
    "latitude": "40.539434",
    "longitude": "-74.218268",
    "region": "934",
    "notes": "Basement\nCorner of Claypit Road",
    "tokens": [
      "Rossville",
      "Ame",
      "Zion",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/rossville-ame-zion-church/"
  },
  {
    "value": "Rust Temple Ame Church",
    "formatted_address": "119-48 Sutphin Blvd, Jamaica, NY 11434, USA",
    "latitude": "40.6780565",
    "longitude": "-73.7912338",
    "region": "1003",
    "notes": "At 147th Street",
    "tokens": [
      "Rust",
      "Temple",
      "Ame",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/rust-temple-ame-church/"
  },
  {
    "value": "Rutgers Church",
    "formatted_address": "236 W 73rd St, New York, NY 10023, USA",
    "latitude": "40.7795884",
    "longitude": "-73.9822695",
    "region": "896",
    "notes": "5th Floor. West of Broadway",
    "tokens": [
      "Rutgers",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/rutgers-church/"
  },
  {
    "value": "Rye Presbyterian Church",
    "formatted_address": "882 Boston Post Rd, Rye, NY 10580, USA",
    "latitude": "40.974618",
    "longitude": "-73.685945",
    "region": "990",
    "notes": "",
    "tokens": [
      "Rye",
      "Presbyterian",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/rye-presbyterian-church/"
  },
  {
    "value": "Sacred Heart Chapel",
    "formatted_address": "137 Stage Rd, Monroe, NY 10950, USA",
    "latitude": "41.3259279",
    "longitude": "-74.1870288",
    "region": "921",
    "notes": "",
    "tokens": [
      "Sacred",
      "Heart",
      "Chapel"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/sacred-heart-chapel/"
  },
  {
    "value": "Sacred Heart Church",
    "formatted_address": "414 Haviland Dr, Patterson, NY 12563, USA",
    "latitude": "41.4809882",
    "longitude": "-73.5417274",
    "region": "901",
    "notes": "",
    "tokens": [
      "Sacred",
      "Heart",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/sacred-heart-church/"
  },
  {
    "value": "Sacred Heart Church Rectory",
    "formatted_address": "1253 Shakespeare Ave, Bronx, NY 10452, USA",
    "latitude": "40.838601",
    "longitude": "-73.923549",
    "region": "1065",
    "notes": "Basement Community Room\nAt 168th Street & Woodycrest Avenue",
    "tokens": [
      "Sacred",
      "Heart",
      "Church",
      "Rectory"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/sacred-heart-church-rectory/"
  },
  {
    "value": "Sacred Heart Church Rectory",
    "formatted_address": "31-50 21st St, Astoria, NY 11106, USA",
    "latitude": "40.7661455",
    "longitude": "-73.9308043",
    "region": "1100",
    "notes": "",
    "tokens": [
      "Sacred",
      "Heart",
      "Church",
      "Rectory"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/sacred-heart-church-rectory-2/"
  },
  {
    "value": "Sacred Heart Elementary/High School",
    "formatted_address": "34 Convent Ave, Yonkers, NY 10703, USA",
    "latitude": "40.9493379",
    "longitude": "-73.8857344",
    "region": "956",
    "notes": "Ground Floor\nAt Shonnard Place, Entrance at end of Driveway",
    "tokens": [
      "Sacred",
      "Heart",
      "Elementary",
      "High",
      "School"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/sacred-heart-elementaryhigh-school/"
  },
  {
    "value": "Sacred Heart School",
    "formatted_address": "216-01 38th Ave, Bayside, NY 11361, USA",
    "latitude": "40.7677003",
    "longitude": "-73.7671719",
    "region": "1041",
    "notes": "216 Street betw 37th & 38th Avenues Bayside",
    "tokens": [
      "Sacred",
      "Heart",
      "School"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/sacred-heart-school/"
  },
  {
    "value": "Sacred Hearts-St Stephen RC Church",
    "formatted_address": "108 Carroll St, Brooklyn, NY 11231, USA",
    "latitude": "40.682216",
    "longitude": "-74.0018685",
    "region": "1069",
    "notes": "between Hicks and Henry",
    "tokens": [
      "Sacred",
      "Hearts",
      "St",
      "Stephen",
      "RC",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/sacred-hearts-st-stephen-rc-church/"
  },
  {
    "value": "Sage Center Harlem",
    "formatted_address": "220 W 143rd St, New York, NY 10030, USA",
    "latitude": "40.8206553",
    "longitude": "-73.941213",
    "region": "950",
    "notes": "",
    "tokens": [
      "Sage",
      "Center",
      "Harlem"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/sage-center-harlem/"
  },
  {
    "value": "Saint Agnes Church",
    "formatted_address": "141 E 43rd St, New York, NY 10017, USA",
    "latitude": "40.7517635",
    "longitude": "-73.974693",
    "region": "1062",
    "notes": "Basement Hall, Elevator Is Available\nBetween Lexington & 3rd Avenues\nEnter front door, see door to left\ngo downstairs, in mtg hall room",
    "tokens": [
      "Saint",
      "Agnes",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/saint-agnes-church/"
  },
  {
    "value": "Saint Angela Merci Church Rectory",
    "formatted_address": "917 Morris Ave, Bronx, NY 10451, USA",
    "latitude": "40.8269036",
    "longitude": "-73.9177377",
    "region": "1008",
    "notes": "Basement\nAt East 163rd Street",
    "tokens": [
      "Saint",
      "Angela",
      "Merci",
      "Church",
      "Rectory"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/saint-angela-merci-church-rectory/"
  },
  {
    "value": "St. Barnabas Considine Parish Center",
    "formatted_address": "409 E 241st St, Bronx, NY 10470, USA",
    "latitude": "40.9020814",
    "longitude": "-73.8652926",
    "region": "1002",
    "notes": "COVID NOTES: Limit 25 persons; masks required in building all times as per landlord.\n• 3rd Floor\n• Between McLean Ave. & Martha Ave.",
    "tokens": [
      "St",
      "Barnabas",
      "Considine",
      "Parish",
      "Center"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/saint-barnabas-considine-parish-center/"
  },
  {
    "value": "Saint James Episcopal Church",
    "formatted_address": "7 Mountain View Dr, Callicoon, NY 12723, USA",
    "latitude": "41.7651302",
    "longitude": "-75.0529225",
    "region": "957",
    "notes": "At Route 17B",
    "tokens": [
      "Saint",
      "James",
      "Episcopal",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/saint-james-episcopal-church/"
  },
  {
    "value": "Saint Johns Episcopal Church",
    "formatted_address": "139 St Johns Pl, Brooklyn, NY 11217, USA",
    "latitude": "40.6769518",
    "longitude": "-73.9748454",
    "region": "1015",
    "notes": "",
    "tokens": [
      "Saint",
      "Johns",
      "Episcopal",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/saint-johns-episcopal-church/"
  },
  {
    "value": "Saint Joseph's Church",
    "formatted_address": "141 Ashburton Ave, Yonkers, NY 10701, USA",
    "latitude": "40.939748",
    "longitude": "-73.890692",
    "region": "956",
    "notes": "Cafeteria\nAt Saint Joseph & Ashburton Avenues\nParking Lot Available or St. Joseph Ave Parking",
    "tokens": [
      "Saint",
      "Josephs",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/saint-josephs-church/"
  },
  {
    "value": "Saint Joseph's Roman Catholic School",
    "formatted_address": "1346 Broadway, Hewlett, NY 11557, USA",
    "latitude": "40.641558",
    "longitude": "-73.6995159",
    "region": "897",
    "notes": "School Cafeteria\nMeeting is in Hewlett, NY",
    "tokens": [
      "Saint",
      "Josephs",
      "Roman",
      "Catholic",
      "School"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/saint-josephs-roman-catholic-church/"
  },
  {
    "value": "St. Mark's Episcopal Church",
    "formatted_address": "33-50 82nd St, Jackson Heights, NY 11372, USA",
    "latitude": "40.7539849",
    "longitude": "-73.8855047",
    "region": "946",
    "notes": "Elmhurst",
    "tokens": [
      "St",
      "Marks",
      "Episcopal",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/saint-marks-episcopal-church/"
  },
  {
    "value": "Saint Mary's Episcopal Church",
    "formatted_address": "26 St Mary's Rd, Shelter Island, NY 11964, USA",
    "latitude": "41.0726297",
    "longitude": "-72.3318766",
    "region": "898",
    "notes": "",
    "tokens": [
      "Saint",
      "Marys",
      "Episcopal",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/saint-marys-episcopal-church/"
  },
  {
    "value": "Saint Mel's School",
    "formatted_address": "15424 26th Ave, Flushing, NY 11354, USA",
    "latitude": "40.7737025",
    "longitude": "-73.8088639",
    "region": "1022",
    "notes": "COVID NOTES: Limit 25 person. Same restrictions as Walmart or Home Depot.\nBasement At 154th Street, Rear Entrance",
    "tokens": [
      "Saint",
      "Mels",
      "School"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/saint-mels-school-2/"
  },
  {
    "value": "Saint Nikolaus Cathedral",
    "formatted_address": "15 E 97th St, New York, NY 10029, USA",
    "latitude": "40.7883619",
    "longitude": "-73.9541443",
    "region": "922",
    "notes": "Basement",
    "tokens": [
      "Saint",
      "Nikolaus",
      "Cathedral"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/saint-nikolaus-cathedral/"
  },
  {
    "value": "Saints Simon & Jude Parish",
    "formatted_address": "185 Van Sicklen St, Brooklyn, NY 11223, USA",
    "latitude": "40.5995478",
    "longitude": "-73.974057",
    "region": "944",
    "notes": "enter through parking lot downstairs",
    "tokens": [
      "Saints",
      "Simon",
      "Jude",
      "Parish"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/saints-simon-jude-parish/"
  },
  {
    "value": "Salem United Methodist Church Community Center",
    "formatted_address": "211 W 129th St, New York, NY 10027, USA",
    "latitude": "40.812",
    "longitude": "-73.947053",
    "region": "950",
    "notes": "Downstairs in the Gym\nAt Adam Clayton Powell Blvd",
    "tokens": [
      "Salem",
      "United",
      "Methodist",
      "Church",
      "Community",
      "Center"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/salem-united-methodist-church-community-center/"
  },
  {
    "value": "Salvation Army Adult Rehabilitation Center",
    "formatted_address": "62 Hanson Pl, Brooklyn, NY 11217, USA",
    "latitude": "40.6851912",
    "longitude": "-73.9749874",
    "region": "1054",
    "notes": "Dining Room",
    "tokens": [
      "Salvation",
      "Army",
      "Adult",
      "Rehabilitation",
      "Center"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/salvation-army-adult-rehabilitation-center/"
  },
  {
    "value": "Salvation Army Building",
    "formatted_address": "69-23 Cypress Hills St, Flushing, NY 11385, USA",
    "latitude": "40.7029794",
    "longitude": "-73.8946947",
    "region": "1013",
    "notes": "2nd Flr",
    "tokens": [
      "Salvation",
      "Army",
      "Building"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/salvation-army-building/"
  },
  {
    "value": "Salvation Army Men's Shelter",
    "formatted_address": "194 Front St, Hempstead, NY 11550, USA",
    "latitude": "40.7045546",
    "longitude": "-73.6283302",
    "region": "897",
    "notes": "2nd Floor",
    "tokens": [
      "Salvation",
      "Army",
      "Mens",
      "Shelter"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/salvation-army-mens-shelter/"
  },
  {
    "value": "San Damiano Mission",
    "formatted_address": "85 N 15th St, Brooklyn, NY 11222, USA",
    "latitude": "40.7229849",
    "longitude": "-73.9541116",
    "region": "918",
    "notes": "Sanctuary",
    "tokens": [
      "San",
      "Damiano",
      "Mission"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/san-damiano-mission/"
  },
  {
    "value": "San Pablo United Methodist Church",
    "formatted_address": "14-54 31st Rd, Long Island City, NY 11106, USA",
    "latitude": "40.7667739",
    "longitude": "-73.9306111",
    "region": "940",
    "notes": "Basement entrance on 21st Street next to the McDonald's",
    "tokens": [
      "San",
      "Pablo",
      "United",
      "Methodist",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/san-pablo-united-methodist/"
  },
  {
    "value": "San Pablo United Methodist Church",
    "formatted_address": "14-54 31st Ave, Long Island City, NY 11106, USA",
    "latitude": "40.767247",
    "longitude": "-73.930332",
    "region": "940",
    "notes": "Basement entrance on 21st Street next to the McDonald's",
    "tokens": [
      "San",
      "Pablo",
      "United",
      "Methodist",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/san-pablo-united-methodist-church/"
  },
  {
    "value": "Santa Maria School",
    "formatted_address": "1510 Zerega Ave, Bronx, NY 10462, USA",
    "latitude": "40.838388",
    "longitude": "-73.8486379",
    "region": "1000",
    "notes": "Enter Through Glebe Avenue Side Gate\nBetween Glebe & Frisby Avenues",
    "tokens": [
      "Santa",
      "Maria",
      "School"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/santa-maria-school/"
  },
  {
    "value": "Sarah Lawrence College",
    "formatted_address": "1 Mead Way, Bronxville, NY 10708, USA",
    "latitude": "40.9340953",
    "longitude": "-73.8438499",
    "region": "983",
    "notes": "2nd Floor, Sheffield Hall #22\nAt Mead Way & Bronxville Road",
    "tokens": [
      "Sarah",
      "Lawrence",
      "College"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/sarah-lawrence-college/"
  },
  {
    "value": "Scarborough Presbyterian Church",
    "formatted_address": "655 Scarborough Rd, Briarcliff Manor, NY 10510, USA",
    "latitude": "41.1351437",
    "longitude": "-73.8601148",
    "region": "1033",
    "notes": "Near intersection of Route 9 and Scarborough Road",
    "tokens": [
      "Scarborough",
      "Presbyterian",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/scarborough-presbyterian-church/"
  },
  {
    "value": "Scarsdale Congregational Church",
    "formatted_address": "1 Heathcote Rd, Scarsdale, NY 10583, USA",
    "latitude": "40.9896949",
    "longitude": "-73.7950565",
    "region": "951",
    "notes": "Enter Kitchen entrance - right side of main building",
    "tokens": [
      "Scarsdale",
      "Congregational",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/scarsdale-congregational-church/"
  },
  {
    "value": "Fort Schuyler House",
    "formatted_address": "3077 Cross Bronx Expy, Bronx, NY 10465, USA",
    "latitude": "40.8223077",
    "longitude": "-73.8167902",
    "region": "982",
    "notes": "Take elevator to lower level",
    "tokens": [
      "Fort",
      "Schuyler",
      "House"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/schuyler-house/"
  },
  {
    "value": "Seafarers & Intl House",
    "formatted_address": "123 E 15th St, New York, NY 10003, USA",
    "latitude": "40.7346311",
    "longitude": "-73.9879732",
    "region": "912",
    "notes": "2nd Floor Conference Room At Irving Place.",
    "tokens": [
      "Seafarers",
      "Intl",
      "House"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/seafarers-intl-house/"
  },
  {
    "value": "Second Presbyterian Church",
    "formatted_address": "3 W 95th St, New York, NY 10025, USA",
    "latitude": "40.7912092",
    "longitude": "-73.9653891",
    "region": "896",
    "notes": "Lower Level Auditorium\nBetween Central Park West & Columbus Avenue",
    "tokens": [
      "Second",
      "Presbyterian",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/second-presbyterian-church/"
  },
  {
    "value": "Senior Citizens Center",
    "formatted_address": "126 Springs Fireplace Rd, East Hampton, NY 11937, USA",
    "latitude": "40.9793668",
    "longitude": "-72.1755349",
    "region": "898",
    "notes": "",
    "tokens": [
      "Senior",
      "Citizens",
      "Center"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/senior-citizens-center/"
  },
  {
    "value": "Shakitbarre",
    "formatted_address": "449 Keap St, Brooklyn, NY 11211, USA",
    "latitude": "40.7124466",
    "longitude": "-73.9527667",
    "region": "1103",
    "notes": "",
    "tokens": [
      "Shakitbarre"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/shakitbarre/"
  },
  {
    "value": "Simple Studios Rehearsal Space",
    "formatted_address": "134 W 29th St, New York, NY 10001, USA",
    "latitude": "40.7471514",
    "longitude": "-73.9917766",
    "region": "1026",
    "notes": "2nd Floor Studio 203",
    "tokens": [
      "Simple",
      "Studios",
      "Rehearsal",
      "Space"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/simple-studios-rehearsal-space/"
  },
  {
    "value": "Simpson Methodist Church",
    "formatted_address": "30 Locust Ave, Amityville, NY 11701, USA",
    "latitude": "40.687973",
    "longitude": "-73.421502",
    "region": "898",
    "notes": "",
    "tokens": [
      "Simpson",
      "Methodist",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/simpson-methodist-church/"
  },
  {
    "value": "Sirovich Center",
    "formatted_address": "331 E 12th St, New York, NY 10003, USA",
    "latitude": "40.73055",
    "longitude": "-73.9843416",
    "region": "912",
    "notes": "Small Dining Room on Top Floor.\nBetween 1st and 2nd Avenues",
    "tokens": [
      "Sirovich",
      "Center"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/sirovich-center/"
  },
  {
    "value": "Soundview Preparatory School",
    "formatted_address": "370 Underhill Ave, Yorktown Heights, NY 10598, USA",
    "latitude": "41.268863",
    "longitude": "-73.7852",
    "region": "903",
    "notes": "Pull straight into the school grounds and proceed past the main (white) building on the right, and park in the traffic circle in front of the Arts & Sciences Bldg. (the middle of the 3 brown bldgs.)",
    "tokens": [
      "Soundview",
      "Preparatory",
      "School"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/soundview-preparatory-school/"
  },
  {
    "value": "South Presbyterian Church",
    "formatted_address": "343 Broadway, Dobbs Ferry, NY 10522, USA",
    "latitude": "41.0146542",
    "longitude": "-73.8725196",
    "region": "1059",
    "notes": "At Oak Street",
    "tokens": [
      "South",
      "Presbyterian",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/south-presbyterian-church/"
  },
  {
    "value": "South Salem Presbyterian Church",
    "formatted_address": "111 Spring St, South Salem, NY 10590, USA",
    "latitude": "41.2734118",
    "longitude": "-73.5544988",
    "region": "1073",
    "notes": "",
    "tokens": [
      "South",
      "Salem",
      "Presbyterian",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/south-salem-presbyterian-church/"
  },
  {
    "value": "Southampton Veterans Memorial Hall",
    "formatted_address": "25 Pond Ln, Southampton, NY 11968, USA",
    "latitude": "40.8826517",
    "longitude": "-72.3933147",
    "region": "898",
    "notes": "Basement",
    "tokens": [
      "Southampton",
      "Veterans",
      "Memorial",
      "Hall"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/southampton-veterans-memorial-hall/"
  },
  {
    "value": "Southern Baptist Church",
    "formatted_address": "820 Stanley Ave, Brooklyn, NY 11207, USA",
    "latitude": "40.6612301",
    "longitude": "-73.8788627",
    "region": "976",
    "notes": "between Ashford and Cleveland",
    "tokens": [
      "Southern",
      "Baptist",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/southern-baptist-church/"
  },
  {
    "value": "Sparrow Bush Fire House",
    "formatted_address": "79 Main St, Sparrow Bush, NY 12780, USA",
    "latitude": "41.402005",
    "longitude": "-74.7287769",
    "region": "921",
    "notes": "Basement",
    "tokens": [
      "Sparrow",
      "Bush",
      "Fire",
      "House"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/sparrow-bush-fire-house/"
  },
  {
    "value": "Spiritual Renewal Church",
    "formatted_address": "2044 Adam Clayton Powell Jr Blvd, New York, NY 10027, USA",
    "latitude": "40.807284",
    "longitude": "-73.9499595",
    "region": "950",
    "notes": "At 122nd Street",
    "tokens": [
      "Spiritual",
      "Renewal",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/spiritual-renewal-church/"
  },
  {
    "value": "Spring Studio",
    "formatted_address": "6 St Johns Ln, New York, NY 10013, USA",
    "latitude": "40.7208392",
    "longitude": "-74.0059727",
    "region": "905",
    "notes": "Near Canal and 6th Avenue and York St. Across the street from Hazeldon.",
    "tokens": [
      "Spring",
      "Studio"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/spring-studio/"
  },
  {
    "value": "Springfield Methodist Church",
    "formatted_address": "131-29 Farmers Blvd, Jamaica, NY 11434, USA",
    "latitude": "40.6779407",
    "longitude": "-73.7625843",
    "region": "1003",
    "notes": "",
    "tokens": [
      "Springfield",
      "Methodist",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/springfield-methodist-church/"
  },
  {
    "value": "SRO Building",
    "formatted_address": "109 W 129th St, New York, NY 10027, USA",
    "latitude": "40.8107528",
    "longitude": "-73.9441252",
    "region": "950",
    "notes": "Basement\nAt Lenox Avenue",
    "tokens": [
      "SRO",
      "Building"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/sro-building/"
  },
  {
    "value": "St Agatha's Roman Catholic Church",
    "formatted_address": "702 48th St, Brooklyn, NY 11220, USA",
    "latitude": "40.6434414",
    "longitude": "-74.0045392",
    "region": "1088",
    "notes": "Rectory Basement",
    "tokens": [
      "St",
      "Agathas",
      "Roman",
      "Catholic",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-agathas-roman-catholic-church/"
  },
  {
    "value": "St Alban's Episcopal Church",
    "formatted_address": "76 Old Amboy Rd, Staten Island, NY 10312, USA",
    "latitude": "40.5442208",
    "longitude": "-74.1608573",
    "region": "981",
    "notes": "Off of Amboy Road, behind Perkins Diner & Eckert Drugs",
    "tokens": [
      "St",
      "Albans",
      "Episcopal",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-albans-episcopal-church/"
  },
  {
    "value": "St Alban's Episcopal Church",
    "formatted_address": "76 St Albans Pl, Staten Island, NY 10312, USA",
    "latitude": "40.5442208",
    "longitude": "-74.1608573",
    "region": "981",
    "notes": "At Amboy Road",
    "tokens": [
      "St",
      "Albans",
      "Episcopal",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-albans-episcopal-church-2/"
  },
  {
    "value": "St Albans the Martyr-Episcopal Church",
    "formatted_address": "116-42 Farmers Blvd, Jamaica, NY 11412, USA",
    "latitude": "40.6926113",
    "longitude": "-73.7628577",
    "region": "972",
    "notes": "Corner of Dunkirk Dr and Farmers Blvd, Basement",
    "tokens": [
      "St",
      "Albans",
      "the",
      "Martyr",
      "Episcopal",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-albans-the-martyr-episcopal-church/"
  },
  {
    "value": "St Albans Veterans Hosp",
    "formatted_address": "1875 Linden Blvd, St. Albans, NY 11412, USA",
    "latitude": "40.6922616",
    "longitude": "-73.7652119",
    "region": "972",
    "notes": "1st Floor Conference Room",
    "tokens": [
      "St",
      "Albans",
      "Veterans",
      "Hosp"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-albans-veterans-hosp/"
  },
  {
    "value": "St Alban's Veterans Hospital",
    "formatted_address": "179-00 Linden Blvd, Jamaica, NY 11434, USA",
    "latitude": "40.6908402",
    "longitude": "-73.7685246",
    "region": "972",
    "notes": "2nd Floor\n179th St Between Merrick & Farmer Blvds",
    "tokens": [
      "St",
      "Albans",
      "Veterans",
      "Hospital"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-albans-veterans-hospital/"
  },
  {
    "value": "St Aloysius Parish Center",
    "formatted_address": "592 Middle Neck Rd, Great Neck, NY 11023, USA",
    "latitude": "40.8023896",
    "longitude": "-73.7364541",
    "region": "897",
    "notes": "School Building Basement\nEnter on Breuer Avenue",
    "tokens": [
      "St",
      "Aloysius",
      "Parish",
      "Center"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-aloysius-parish-center/"
  },
  {
    "value": "St Andrew's Church",
    "formatted_address": "781 Castle Hill Ave, Bronx, NY 10473, USA",
    "latitude": "40.8229292",
    "longitude": "-73.8489398",
    "region": "1092",
    "notes": "Enter the building on Lafayette Avenue",
    "tokens": [
      "St",
      "Andrews",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-andrews-church/"
  },
  {
    "value": "St Andrew's Church (in Saltaire)",
    "formatted_address": "109 Broadway Rd, Bay Shore, NY 11706, USA",
    "latitude": "40.6379639",
    "longitude": "-73.1848147",
    "region": "898",
    "notes": "",
    "tokens": [
      "St",
      "Andrews",
      "Church",
      "in",
      "Saltaire"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-andrews-church-in-saltaire/"
  },
  {
    "value": "St Andrew's Episcopal Church",
    "formatted_address": "26 Prospect St, Brewster, NY 10509, USA",
    "latitude": "41.3975779",
    "longitude": "-73.6167137",
    "region": "901",
    "notes": "Off of Route 6",
    "tokens": [
      "St",
      "Andrews",
      "Episcopal",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-andrews-episcopal-church/"
  },
  {
    "value": "St Andrew's Episcopal Church",
    "formatted_address": "40 Old Mill Rd, Staten Island, NY 10306, USA",
    "latitude": "40.5732129",
    "longitude": "-74.1472225",
    "region": "932",
    "notes": "Helmsley Hall\nAt Arthur Kill Road",
    "tokens": [
      "St",
      "Andrews",
      "Episcopal",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-andrews-episcopal-church-2/"
  },
  {
    "value": "St. Andrew's Evangelical Lutheran Church",
    "formatted_address": "2405 Crompond Rd, Yorktown Heights, NY 10598, USA",
    "latitude": "41.2852937",
    "longitude": "-73.7968156",
    "region": "903",
    "notes": "Corner of Hanover & Church Streets, Rear Basement",
    "tokens": [
      "St",
      "Andrews",
      "Evangelical",
      "Lutheran",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-andrews-evangelical-lutheran-church/"
  },
  {
    "value": "St Anne's School",
    "formatted_address": "1-30 Summit Ave, Fair Lawn, NJ 07410, USA",
    "latitude": "40.9221791",
    "longitude": "-74.1193881",
    "region": "962",
    "notes": "Basement\n@Bway, Off Route 4",
    "tokens": [
      "St",
      "Annes",
      "School"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-annes-school/"
  },
  {
    "value": "St Anthony of Padua Church",
    "formatted_address": "155 Sullivan St, New York, NY 10012, USA",
    "latitude": "40.7272199",
    "longitude": "-74.0013237",
    "region": "1055",
    "notes": "At Houston Street; meets in Basement\n50 max people, masks and participation in contact tracing required. No food. Dogs on leashes.",
    "tokens": [
      "St",
      "Anthony",
      "of",
      "Padua",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-anthony-of-padua-church/"
  },
  {
    "value": "St Anthony's of Padua",
    "formatted_address": "154 Sullivan St, New York, NY 10012, USA",
    "latitude": "40.7273049",
    "longitude": "-74.0013706",
    "region": "1055",
    "notes": "Downstairs. Enter on Sullivan Street.",
    "tokens": [
      "St",
      "Anthonys",
      "of",
      "Padua"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-anthonys-of-padua/"
  },
  {
    "value": "St Anthony's Roman Catholic Church",
    "formatted_address": "36 W Nyack Rd, Nanuet, NY 10954, USA",
    "latitude": "41.0977562",
    "longitude": "-74.0082703",
    "region": "961",
    "notes": "Downstairs in the Old Stone Church\nMeeting is in Nanuet",
    "tokens": [
      "St",
      "Anthonys",
      "Roman",
      "Catholic",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-anthonys-roman-catholic-church/"
  },
  {
    "value": "St Anthony's School",
    "formatted_address": "110 Anchor Ave, Oceanside, NY 11572, USA",
    "latitude": "40.6371969",
    "longitude": "-73.6430526",
    "region": "897",
    "notes": "",
    "tokens": [
      "St",
      "Anthonys",
      "School"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-anthonys-school/"
  },
  {
    "value": "St Anthony's School Hall",
    "formatted_address": "715 Leonard St, Brooklyn, NY 11222, USA",
    "latitude": "40.7289514",
    "longitude": "-73.952954",
    "region": "918",
    "notes": "Basement\nBetween Greenpoint Avenue & Calyer Street",
    "tokens": [
      "St",
      "Anthonys",
      "School",
      "Hall"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-anthonys-school-hall/"
  },
  {
    "value": "St Augustine Presbyterian Church",
    "formatted_address": "838 E 165th St, Bronx, NY 10459, USA",
    "latitude": "40.8241246",
    "longitude": "-73.9001279",
    "region": "942",
    "notes": "Basement\nBetween Prospect & Union Avenues",
    "tokens": [
      "St",
      "Augustine",
      "Presbyterian",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-augustine-presbyterian-church/"
  },
  {
    "value": "St Augustine's Church",
    "formatted_address": "292 Henry St, New York, NY 10002, USA",
    "latitude": "40.7137143",
    "longitude": "-73.983033",
    "region": "999",
    "notes": "Basement\nA la isquierda de la iglesia",
    "tokens": [
      "St",
      "Augustines",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-augustines-church/"
  },
  {
    "value": "St Augustine's Church",
    "formatted_address": "1508 Webster Ave, Bronx, NY 10457, USA",
    "latitude": "40.838738",
    "longitude": "-73.905381",
    "region": "1070",
    "notes": "Basement\nBetween 171st Street & Claremont Parkway",
    "tokens": [
      "St",
      "Augustines",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-augustines-church-2/"
  },
  {
    "value": "St. Augustine's R.C. Church (St. Monica's Hall)",
    "formatted_address": "47 Sterling Pl, Brooklyn, NY 11217, USA",
    "latitude": "40.6784471",
    "longitude": "-73.9768573",
    "region": "968",
    "notes": "St. Monica's Hall",
    "tokens": [
      "St",
      "Augustines",
      "R",
      "C",
      "Church",
      "Monicas",
      "Hall"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-augustines-r-c-church-st-monicas-hall/"
  },
  {
    "value": "St Augustine's School",
    "formatted_address": "111 Larchmont Ave, Larchmont, NY 10538, USA",
    "latitude": "40.9270522",
    "longitude": "-73.7505073",
    "region": "997",
    "notes": "Enter at the Rear of the Building\nIn Larchmont - Across from the police station\nCOVID NOTES: Masks and Social Distancing Required",
    "tokens": [
      "St",
      "Augustines",
      "School"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-augustines-school/"
  },
  {
    "value": "St Barbara's Church",
    "formatted_address": "227 Wilson Ave, Brooklyn, NY 11237, USA",
    "latitude": "40.6987397",
    "longitude": "-73.9219045",
    "region": "1084",
    "notes": "",
    "tokens": [
      "St",
      "Barbaras",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-barbaras-church-2/"
  },
  {
    "value": "St Barnabas Church",
    "formatted_address": "159-19 98th St, Jamaica, NY 11414, USA",
    "latitude": "40.6591528",
    "longitude": "-73.8347817",
    "region": "1089",
    "notes": "House next to Church",
    "tokens": [
      "St",
      "Barnabas",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-barnabas-church/"
  },
  {
    "value": "St Barnabas Church",
    "formatted_address": "954 Lake Ave, Greenwich, CT 06831, USA",
    "latitude": "41.1101474",
    "longitude": "-73.655435",
    "region": "1019",
    "notes": "",
    "tokens": [
      "St",
      "Barnabas",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-barnabas-church-2/"
  },
  {
    "value": "St Barnabas Episcopal Church",
    "formatted_address": "15 N Broadway, Irvington, NY 10533, USA",
    "latitude": "41.0398947",
    "longitude": "-73.8655404",
    "region": "1099",
    "notes": "At Main Street on the right side of the building",
    "tokens": [
      "St",
      "Barnabas",
      "Episcopal",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-barnabas-episcopal-church/"
  },
  {
    "value": "St. Barnabas Episcopal Church",
    "formatted_address": "15 Broadway, Irvington, NY 10533, USA",
    "latitude": "41.0375402",
    "longitude": "-73.8651973",
    "region": "1099",
    "notes": "In Parish Hall",
    "tokens": [
      "St",
      "Barnabas",
      "Episcopal",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-barnabas-episcopal-church-2/"
  },
  {
    "value": "St Bartholomew's Church",
    "formatted_address": "109 E 50th St, New York, NY 10022, USA",
    "latitude": "40.7569979",
    "longitude": "-73.9734971",
    "region": "1018",
    "notes": "Between Lexington and Park Ave / Red Door",
    "tokens": [
      "St",
      "Bartholomews",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-bartholomews-church-2/"
  },
  {
    "value": "St Bartholomew's Church",
    "formatted_address": "82 Prospect St, White Plains, NY 10606, USA",
    "latitude": "41.019546",
    "longitude": "-73.7731712",
    "region": "995",
    "notes": "1st Floor, Church Hall\nBetween Sterling & Soundview Avenues\nCOVID-19 Notes: Masks required. In-person capacity is currently limited to 20% so please arrive early.",
    "tokens": [
      "St",
      "Bartholomews",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-bartholomews-church-3/"
  },
  {
    "value": "St Benedict the Moor Church",
    "formatted_address": "171-11 Brinkerhoff Ave, Jamaica, NY 11433, USA",
    "latitude": "40.69636",
    "longitude": "-73.782432",
    "region": "989",
    "notes": "",
    "tokens": [
      "St",
      "Benedict",
      "the",
      "Moor",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-benedict-the-moor-church/"
  },
  {
    "value": "St Bernard's School",
    "formatted_address": "3100 Hempstead Turnpike, Levittown, NY 11756, USA",
    "latitude": "40.7247032",
    "longitude": "-73.5211714",
    "region": "897",
    "notes": "School Cafeteria",
    "tokens": [
      "St",
      "Bernards",
      "School"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-bernards-school/"
  },
  {
    "value": "St Camillus School/Gym",
    "formatted_address": "1-85 Beach 99th St, Rockaway Park, NY 11694, USA",
    "latitude": "40.5834923",
    "longitude": "-73.8198888",
    "region": "936",
    "notes": "Rockaway Beach Blvd / School",
    "tokens": [
      "St",
      "Camillus",
      "School",
      "Gym"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-camillus-schoolgym/"
  },
  {
    "value": "St. Catherine of Siena Church",
    "formatted_address": "411 E 68th St, New York, NY 10065, USA",
    "latitude": "40.7652649",
    "longitude": "-73.9570918",
    "region": "922",
    "notes": "Between York & 1st Avenues",
    "tokens": [
      "St",
      "Catherine",
      "of",
      "Siena",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-catherine-of-siena-church/"
  },
  {
    "value": "St Cecilia's Church Rectory",
    "formatted_address": "84 Herbert St, Brooklyn, NY 11222, USA",
    "latitude": "40.7203202",
    "longitude": "-73.9422224",
    "region": "918",
    "notes": "Basement\n1 Block off of the BQE",
    "tokens": [
      "St",
      "Cecilias",
      "Church",
      "Rectory"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-cecilias-church-rectory/"
  },
  {
    "value": "St Christopher Community Center",
    "formatted_address": "136 Midland Ave, Staten Island, NY 10306, USA",
    "latitude": "40.57973",
    "longitude": "-74.1061711",
    "region": "1057",
    "notes": "",
    "tokens": [
      "St",
      "Christopher",
      "Community",
      "Center"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-christopher-community-center/"
  },
  {
    "value": "St Christopher's Church",
    "formatted_address": "3094 Albany Post Rd, Buchanan, NY 10511, USA",
    "latitude": "41.2558492",
    "longitude": "-73.9346113",
    "region": "1042",
    "notes": "Classroom building in back\n",
    "tokens": [
      "St",
      "Christophers",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-christophers-church/"
  },
  {
    "value": "St Clare of Assisi Church",
    "formatted_address": "1025 Rhinelander Ave, Bronx, NY 10462, USA",
    "latitude": "40.8505888",
    "longitude": "-73.8566149",
    "region": "1000",
    "notes": "Basement\nEntrance is on Paulding Avenue",
    "tokens": [
      "St",
      "Clare",
      "of",
      "Assisi",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-clare-of-assisi-church/"
  },
  {
    "value": "St Columba Roman Catholic Church",
    "formatted_address": "2245 Kimball St, Brooklyn, NY 11234, USA",
    "latitude": "40.607546",
    "longitude": "-73.9239436",
    "region": "988",
    "notes": "Between Avenues U & V",
    "tokens": [
      "St",
      "Columba",
      "Roman",
      "Catholic",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-columba-roman-catholic-church/"
  },
  {
    "value": "St Columbanus Church",
    "formatted_address": "122 Oregon Rd, Cortlandt, NY 10567, USA",
    "latitude": "41.3129526",
    "longitude": "-73.9039832",
    "region": "1043",
    "notes": "Basement\nAt Gallows Hill Road Enter at the rear of the Church",
    "tokens": [
      "St",
      "Columbanus",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-columbanus-church/"
  },
  {
    "value": "St Columba Church",
    "formatted_address": "343 W 25th St, New York, NY 10001, USA",
    "latitude": "40.7474541",
    "longitude": "-73.9990319",
    "region": "1026",
    "notes": "Downstairs",
    "tokens": [
      "St",
      "Columba",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-columbia-church-2/"
  },
  {
    "value": "St. Fidelis Church",
    "formatted_address": "123-14 14th Ave, College Point, NY 11356, USA",
    "latitude": "40.7852661",
    "longitude": "-73.844202",
    "region": "1022",
    "notes": "15th Ave and 124th St. Parking Lot entrance on on 15th avenue. Basement.",
    "tokens": [
      "St",
      "Fidelis",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-fidelis-church/"
  },
  {
    "value": "St Frances de Chantal Roman Catholic Church",
    "formatted_address": "1273 58th St, Brooklyn, NY 11219, USA",
    "latitude": "40.630333",
    "longitude": "-73.9977166",
    "region": "1094",
    "notes": "Basement",
    "tokens": [
      "St",
      "Frances",
      "de",
      "Chantal",
      "Roman",
      "Catholic",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-frances-de-chantal-roman-catholic-church/"
  },
  {
    "value": "St Francis de Sales Church",
    "formatted_address": "135 E 96th St, New York, NY 10128, USA",
    "latitude": "40.7863738",
    "longitude": "-73.9514231",
    "region": "920",
    "notes": "Between Lexington and Park Avenues",
    "tokens": [
      "St",
      "Francis",
      "de",
      "Sales",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-francis-de-sales-church/"
  },
  {
    "value": "St Francis de Sales School",
    "formatted_address": "219 Beach 129th St, Belle Harbor, NY 11694, USA",
    "latitude": "40.576693",
    "longitude": "-73.8487123",
    "region": "936",
    "notes": "Meeting is in the School's small hall",
    "tokens": [
      "St",
      "Francis",
      "de",
      "Sales",
      "School"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-francis-de-sales-school/"
  },
  {
    "value": "St Francis Hospital",
    "formatted_address": "1 Webster Ave, Poughkeepsie, NY 12601, USA",
    "latitude": "41.7177862",
    "longitude": "-73.9274921",
    "region": "901",
    "notes": "Cafeteria",
    "tokens": [
      "St",
      "Francis",
      "Hospital"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-francis-hospital/"
  },
  {
    "value": "St. Francis of Assisi Church",
    "formatted_address": "St. Francis of Assisi Church, 135 W 31st St, New York, NY 10001, USA",
    "latitude": "40.7488781",
    "longitude": "-73.9905785",
    "region": "1026",
    "notes": "Between 6th & 7th Avenues",
    "tokens": [
      "St",
      "Francis",
      "of",
      "Assisi",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-francis-of-assisi-church/"
  },
  {
    "value": "St Francis of Assisi Church Rectory",
    "formatted_address": "2117 45th St, Queens, NY 11105, USA",
    "latitude": "40.7722787",
    "longitude": "-73.9010394",
    "region": "940",
    "notes": "Rectory Basement-Rear\nBetween 21st Avenue & Ditmas Blvd",
    "tokens": [
      "St",
      "Francis",
      "of",
      "Assisi",
      "Church",
      "Rectory"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-francis-of-assisi-church-rectory-2/"
  },
  {
    "value": "St Francis of Assisi Educational Center",
    "formatted_address": "129 W 31st St, New York, NY 10001, USA",
    "latitude": "40.7485677",
    "longitude": "-73.9904744",
    "region": "1026",
    "notes": "3rd Flr. Between 6th & 7th Avenues",
    "tokens": [
      "St",
      "Francis",
      "of",
      "Assisi",
      "Educational",
      "Center"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-francis-of-assisi-educational-center/"
  },
  {
    "value": "St Francis Residence",
    "formatted_address": "155 W 22nd St, New York, NY 10011, USA",
    "latitude": "40.7431787",
    "longitude": "-73.9952776",
    "region": "980",
    "notes": "1st Floor\nBetween 6th and 7th Ave.",
    "tokens": [
      "St",
      "Francis",
      "Residence"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-francis-residence/"
  },
  {
    "value": "St Francis Xavier",
    "formatted_address": "752 President St, Brooklyn, NY 11215, USA",
    "latitude": "40.6745682",
    "longitude": "-73.9777838",
    "region": "968",
    "notes": "Between 6th & 7th Avenues",
    "tokens": [
      "St",
      "Francis",
      "Xavier"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-francis-xavier/"
  },
  {
    "value": "St Francis Youth Center",
    "formatted_address": "310 Jefferson St, Hoboken, NJ 07030, USA",
    "latitude": "40.7418512",
    "longitude": "-74.0375786",
    "region": "962",
    "notes": "Between 3rd & 4th Streets",
    "tokens": [
      "St",
      "Francis",
      "Youth",
      "Center"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-francis-youth-center/"
  },
  {
    "value": "St Genevieve Church",
    "formatted_address": "6 Beach 178th St, Breezy Point, NY 11697, USA",
    "latitude": "40.5662253",
    "longitude": "-73.8891399",
    "region": "1067",
    "notes": "Parish Hall Behind Church\nMeeting is in Rockaway",
    "tokens": [
      "St",
      "Genevieve",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-genevieve-church/"
  },
  {
    "value": "St. George's Church",
    "formatted_address": "209 E 16th St, New York, NY 10003, USA",
    "latitude": "40.7343774",
    "longitude": "-73.9849701",
    "region": "912",
    "notes": "Between 3rd Ave and Rutherford Place. Basement",
    "tokens": [
      "St",
      "Georges",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-georges-church/"
  },
  {
    "value": "St Gabriel High School-Basement Cafeteria",
    "formatted_address": "50 Washington Ave, New Rochelle, NY 10801, USA",
    "latitude": "40.9116338",
    "longitude": "-73.7873632",
    "region": "1010",
    "notes": "parking entrance on Union Street",
    "tokens": [
      "St",
      "Gabriel",
      "High",
      "School",
      "Basement",
      "Cafeteria"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-grabriel-high-school-basement-cafeteria/"
  },
  {
    "value": "St Gregory's",
    "formatted_address": "215 Halstead Ave, Harrison, NY 10528, USA",
    "latitude": "40.9671104",
    "longitude": "-73.7150303",
    "region": "1048",
    "notes": "",
    "tokens": [
      "St",
      "Gregorys"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-gregorys/"
  },
  {
    "value": "St Gregory's Convent",
    "formatted_address": "88-19 Cross Island Pkwy, Queens, NY 11426, USA",
    "latitude": "40.7291726",
    "longitude": "-73.7232204",
    "region": "1049",
    "notes": "Basement\nEastern Side of Parkway",
    "tokens": [
      "St",
      "Gregorys",
      "Convent"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-gregorys-convent-bsmt/"
  },
  {
    "value": "St Helena's Church",
    "formatted_address": "1315 Olmstead Ave, Bronx, NY 10462, USA",
    "latitude": "40.8342",
    "longitude": "-73.854985",
    "region": "1000",
    "notes": "At Westchester Avenue",
    "tokens": [
      "St",
      "Helenas",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-helenas-church/"
  },
  {
    "value": "St Ignatius Church",
    "formatted_address": "552 West End Ave, New York, NY 10024, USA",
    "latitude": "40.7892789",
    "longitude": "-73.9771601",
    "region": "896",
    "notes": "Basement\nBetween Broadway & West End Avenue, Enter on 87th Street",
    "tokens": [
      "St",
      "Ignatius",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-ignatius-church/"
  },
  {
    "value": "St Ignatius Loyola School",
    "formatted_address": "48 E 84th St, New York, NY 10028, USA",
    "latitude": "40.7790809",
    "longitude": "-73.9592644",
    "region": "922",
    "notes": "Between Madison & Park Avenues. Sunday meets in Gymnasium & Tuesday meets in Cafeteria downstairs",
    "tokens": [
      "St",
      "Ignatius",
      "Loyola",
      "School"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-ignatius-loyola-school/"
  },
  {
    "value": "Church of St Ignatius Loyola",
    "formatted_address": "980 Park Ave, New York, NY 10028, USA",
    "latitude": "40.7788017",
    "longitude": "-73.95854",
    "region": "922",
    "notes": "Parish House, to the left of the church",
    "tokens": [
      "Church",
      "of",
      "St",
      "Ignatius",
      "Loyola"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-ignatius-loyola-school-2/"
  },
  {
    "value": "St Jacobus Lutheran Church",
    "formatted_address": "72-1 43rd Ave, Woodside, NY 11377, USA",
    "latitude": "40.7423849",
    "longitude": "-73.8915343",
    "region": "965",
    "notes": "At 72nd Street",
    "tokens": [
      "St",
      "Jacobus",
      "Lutheran",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-jacobus-lutheran-church/"
  },
  {
    "value": "St. James Church",
    "formatted_address": "4526 Albany Post Rd, Hyde Park, NY 12538, USA",
    "latitude": "41.8005632",
    "longitude": "-73.9388447",
    "region": "901",
    "notes": "",
    "tokens": [
      "St",
      "James",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-james-church/"
  },
  {
    "value": "St James Episcopal Church",
    "formatted_address": "865 Madison Ave, New York, NY 10021, USA",
    "latitude": "40.7710955",
    "longitude": "-73.9653648",
    "region": "922",
    "notes": "East 71st Street. 3rd Floor",
    "tokens": [
      "St",
      "James",
      "Episcopal",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-james-episcopal-church/"
  },
  {
    "value": "St James Episcopal Church",
    "formatted_address": "84-07 Broadway, Flushing, NY 11373, USA",
    "latitude": "40.7400094",
    "longitude": "-73.8779837",
    "region": "1031",
    "notes": "",
    "tokens": [
      "St",
      "James",
      "Episcopal",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-james-episcopal-church-2/"
  },
  {
    "value": "St James Episcopal Church",
    "formatted_address": "230 W Penn St, Long Beach, NY 11561, USA",
    "latitude": "40.5852249",
    "longitude": "-73.6709502",
    "region": "897",
    "notes": "At Magnolia Blvd",
    "tokens": [
      "St",
      "James",
      "Episcopal",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-james-episcopal-church-3/"
  },
  {
    "value": "St James Episcopal Church",
    "formatted_address": "260 Beaver Dam Rd, Brookhaven, NY 11719, USA",
    "latitude": "40.7736474",
    "longitude": "-72.9145739",
    "region": "898",
    "notes": "",
    "tokens": [
      "St",
      "James",
      "Episcopal",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-james-episcopal-church-4/"
  },
  {
    "value": "St James Episcopal Church",
    "formatted_address": "1 St James Pl, Goshen, NY 10924, USA",
    "latitude": "41.4003693",
    "longitude": "-74.3222248",
    "region": "921",
    "notes": "",
    "tokens": [
      "St",
      "James",
      "Episcopal",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-james-episcopal-church-5/"
  },
  {
    "value": "St James Episcopal Church",
    "formatted_address": "9001 NY-52, Cochecton, NY 12726, USA",
    "latitude": "41.7176845",
    "longitude": "-74.9668494",
    "region": "957",
    "notes": "",
    "tokens": [
      "St",
      "James",
      "Episcopal",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-james-episcopal-church-7/"
  },
  {
    "value": "St James Evangelical Lutheran Church",
    "formatted_address": "2776 Gerritsen Ave, Brooklyn, NY 11229, USA",
    "latitude": "40.591722",
    "longitude": "-73.924525",
    "region": "1044",
    "notes": "@Florence, entrance at rear",
    "tokens": [
      "St",
      "James",
      "Evangelical",
      "Lutheran",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-james-evangelical-lutheran-church/"
  },
  {
    "value": "St James Presbyterian Church",
    "formatted_address": "409 W 141st St, New York, NY 10031, USA",
    "latitude": "40.8215874",
    "longitude": "-73.9463486",
    "region": "950",
    "notes": "Basement\nAt St Nicholas Avenue",
    "tokens": [
      "St",
      "James",
      "Presbyterian",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-james-presbyterian-church/"
  },
  {
    "value": "St James School",
    "formatted_address": "80 Hicksville Rd, Seaford, NY 11783, USA",
    "latitude": "40.7223421",
    "longitude": "-73.487312",
    "region": "897",
    "notes": "Basement\n1 Block South of Hempstead Turnpike",
    "tokens": [
      "St",
      "James",
      "School"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-james-school/"
  },
  {
    "value": "St James & St Matthew's Lutheran Church",
    "formatted_address": "119-15 135th Ave, Jamaica, NY 11420, USA",
    "latitude": "40.6706935",
    "longitude": "-73.8200528",
    "region": "998",
    "notes": "Basement\nAt 120th Street in South Ozone Park",
    "tokens": [
      "St",
      "James",
      "Matthews",
      "Lutheran",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-james-st-matthews-lutheran-church-2/"
  },
  {
    "value": "St James the Less Church",
    "formatted_address": "10 Church Ln, Scarsdale, NY 10583, USA",
    "latitude": "40.989578",
    "longitude": "-73.8000787",
    "region": "951",
    "notes": "At Crane Road",
    "tokens": [
      "St",
      "James",
      "the",
      "Less",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-james-the-less-church/"
  },
  {
    "value": "St James the Less Episcopal Church",
    "formatted_address": "107-61 166th St, Jamaica, NY 11433, USA",
    "latitude": "40.6980668",
    "longitude": "-73.7881894",
    "region": "989",
    "notes": "Basement side entrance",
    "tokens": [
      "St",
      "James",
      "the",
      "Less",
      "Episcopal",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-james-the-less-episcopal-church-2/"
  },
  {
    "value": "St Joan of Arc's Ward Meehan Hall",
    "formatted_address": "3527 82nd St, Jackson Heights, NY 11372, USA",
    "latitude": "40.753696",
    "longitude": "-73.8850127",
    "region": "946",
    "notes": "Basement. 82nd St Btw 35th & 37th Avenues",
    "tokens": [
      "St",
      "Joan",
      "of",
      "Arcs",
      "Ward",
      "Meehan",
      "Hall"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-joan-of-arcs-ward-meehan-hall/"
  },
  {
    "value": "St John Chrysostom Church",
    "formatted_address": "1130-1198 Hoe Ave, Bronx, NY 10459, USA",
    "latitude": "40.8272877",
    "longitude": "-73.8908998",
    "region": "1006",
    "notes": "At East 167th Street",
    "tokens": [
      "St",
      "John",
      "Chrysostom",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-john-chrysostom-church-2/"
  },
  {
    "value": "St John & Mary Church",
    "formatted_address": "30 Poillon Dr, Chappaqua, NY 10514, USA",
    "latitude": "41.1591402",
    "longitude": "-73.7667576",
    "region": "1052",
    "notes": "",
    "tokens": [
      "St",
      "John",
      "Mary",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-john-mary-church/"
  },
  {
    "value": "St John of God Church",
    "formatted_address": "84 Carleton Ave, Central Islip, NY 11722, USA",
    "latitude": "40.7866029",
    "longitude": "-73.2006305",
    "region": "898",
    "notes": "",
    "tokens": [
      "St",
      "John",
      "of",
      "God",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-john-of-god-church/"
  },
  {
    "value": "St John the Baptist Church School",
    "formatted_address": "670 Yonkers Ave, Yonkers, NY 10704, USA",
    "latitude": "40.9245607",
    "longitude": "-73.8674859",
    "region": "956",
    "notes": "School Basement\nAt St John's Avenue & Clayton Place",
    "tokens": [
      "St",
      "John",
      "the",
      "Baptist",
      "Church",
      "School"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-john-the-baptist-church-school/"
  },
  {
    "value": "St John the Evangelist Roman Catholic Church",
    "formatted_address": "25 Ocean Ave, Center Moriches, NY 11934, USA",
    "latitude": "40.7992143",
    "longitude": "-72.7867682",
    "region": "898",
    "notes": "in the Red Barn Behind the Church At Montauk Hwy",
    "tokens": [
      "St",
      "John",
      "the",
      "Evangelist",
      "Roman",
      "Catholic",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-john-the-evangelist-roman-catholic-church/"
  },
  {
    "value": "St John's Boys Home",
    "formatted_address": "150 Beach 110th St, Rockaway Park, NY 11694, USA",
    "latitude": "40.5805183",
    "longitude": "-73.8311952",
    "region": "936",
    "notes": "Between Rockaway Beach Blvd & the Boardwalk\n2nd Floor",
    "tokens": [
      "St",
      "Johns",
      "Boys",
      "Home"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-johns-boys-home/"
  },
  {
    "value": "St John's Church",
    "formatted_address": "12 Main St, Sharon, CT 06069, USA",
    "latitude": "41.8777486",
    "longitude": "-73.4770306",
    "region": "1019",
    "notes": "Academy Street",
    "tokens": [
      "St",
      "Johns",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-johns-church/"
  },
  {
    "value": "St John's Church",
    "formatted_address": "58 Clinton St, Cornwall, NY 12518, USA",
    "latitude": "41.4365253",
    "longitude": "-74.0301597",
    "region": "921",
    "notes": "",
    "tokens": [
      "St",
      "Johns",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-johns-church-2/"
  },
  {
    "value": "St John's Episcopal Church",
    "formatted_address": "149-19 Sanford Ave, Flushing, NY 11355, USA",
    "latitude": "40.7605697",
    "longitude": "-73.8142946",
    "region": "930",
    "notes": "At 149th Place",
    "tokens": [
      "St",
      "Johns",
      "Episcopal",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-johns-episcopal-church/"
  },
  {
    "value": "St John's Episcopal Church",
    "formatted_address": "224 Waverly Pl, New York, NY 10014, USA",
    "latitude": "40.7360517",
    "longitude": "-74.0020724",
    "region": "894",
    "notes": "1st Floor Event Room. At 11th Street & 7th Avenue South.",
    "tokens": [
      "St",
      "Johns",
      "Episcopal",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-johns-episcopal-church-2/"
  },
  {
    "value": "St John's Episcopal Church",
    "formatted_address": "4 W Fountain Square, Larchmont, NY 10538, USA",
    "latitude": "40.9199407",
    "longitude": "-73.7504059",
    "region": "997",
    "notes": "COVID NOTES: We are meeting in the Parish Hall. Masks are required, maximum capacity of 25-30 people.",
    "tokens": [
      "St",
      "Johns",
      "Episcopal",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-johns-episcopal-church-3/"
  },
  {
    "value": "St John's Episcopal Church",
    "formatted_address": "15 St John St, Monticello, NY 12701, USA",
    "latitude": "41.6539207",
    "longitude": "-74.6852117",
    "region": "957",
    "notes": "Basement",
    "tokens": [
      "St",
      "Johns",
      "Episcopal",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-johns-episcopal-church-4/"
  },
  {
    "value": "St. John's Episcopal Church",
    "formatted_address": "11 Wilmot Rd, New Rochelle, NY 10804, USA",
    "latitude": "40.9545479",
    "longitude": "-73.7964831",
    "region": "1090",
    "notes": "Corner of Lincoln Avenue, 1 Block from White Plains Road. Parish house, park on Lovell Rd and walk down.",
    "tokens": [
      "St",
      "Johns",
      "Episcopal",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-johns-episcopal-church-5/"
  },
  {
    "value": "St John's Episcopal Church",
    "formatted_address": "1670 NY-25A, Syosset, NY 11791, USA",
    "latitude": "40.8563534",
    "longitude": "-73.4639513",
    "region": "898",
    "notes": "",
    "tokens": [
      "St",
      "Johns",
      "Episcopal",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-johns-episcopal-church-6/"
  },
  {
    "value": "St John's Episcopal Church",
    "formatted_address": "8 Sunnyside Ave, Pleasantville, NY 10570, USA",
    "latitude": "41.1348341",
    "longitude": "-73.7873541",
    "region": "1083",
    "notes": "At Corner of Bedford Road",
    "tokens": [
      "St",
      "Johns",
      "Episcopal",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-johns-episcopal-church-7/"
  },
  {
    "value": "St John's Hall",
    "formatted_address": "211 W 30th St, New York, NY 10001, USA",
    "latitude": "40.7487585",
    "longitude": "-73.9931456",
    "region": "1026",
    "notes": "Between 7th & 8th Avenues, Basement",
    "tokens": [
      "St",
      "Johns",
      "Hall"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-johns-hall/"
  },
  {
    "value": "St. John's Inter-Faith Hospital",
    "formatted_address": "1545 Atlantic Ave #108, Brooklyn, NY 11213, USA",
    "latitude": "40.6783744",
    "longitude": "-73.9374075",
    "region": "960",
    "notes": "1st Floor Cafeteria\nBetween Troy & Albany Avenues",
    "tokens": [
      "St",
      "Johns",
      "Inter",
      "Faith",
      "Hospital"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-johns-inter-faith-hospital/"
  },
  {
    "value": "St John's Lutheran Church",
    "formatted_address": "75 E Olive St, Long Beach, NY 11561, USA",
    "latitude": "40.5871547",
    "longitude": "-73.6614968",
    "region": "897",
    "notes": "Basement\nAt Riverside Blvd",
    "tokens": [
      "St",
      "Johns",
      "Lutheran",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-johns-lutheran-church/"
  },
  {
    "value": "St. John's Lutheran Church",
    "formatted_address": "155 Milton St, Brooklyn, NY 11222, USA",
    "latitude": "40.7295472",
    "longitude": "-73.9549657",
    "region": "918",
    "notes": "Basement / Fellowship Hall.\nEnter on right walkway, take stairs to basement fellowship hall.\nHigher Power Saturday meets in Sanctuary",
    "tokens": [
      "St",
      "Johns",
      "Lutheran",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-johns-lutheran-church-10/"
  },
  {
    "value": "St John's Lutheran Church",
    "formatted_address": "83 Christopher St, New York, NY 10014, USA",
    "latitude": "40.7336761",
    "longitude": "-74.0037703",
    "region": "894",
    "notes": "Left of Church,\nWest of 7th Avenue, Enter Left, Red Door, Ring Buzzer",
    "tokens": [
      "St",
      "Johns",
      "Lutheran",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-johns-lutheran-church-2/"
  },
  {
    "value": "St John's Lutheran Church",
    "formatted_address": "122 Fenimore Rd, Mamaroneck, NY 10543, USA",
    "latitude": "40.9460571",
    "longitude": "-73.7373623",
    "region": "1027",
    "notes": "At Cortland Avenue",
    "tokens": [
      "St",
      "Johns",
      "Lutheran",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-johns-lutheran-church-3/"
  },
  {
    "value": "St John's Lutheran Church",
    "formatted_address": "281 Prospect Ave, Brooklyn, NY 11215, USA",
    "latitude": "40.663377",
    "longitude": "-73.9892773",
    "region": "968",
    "notes": "Senior center, enter right side driveway, between 5th & 6th Aves. Air Conditioned.",
    "tokens": [
      "St",
      "Johns",
      "Lutheran",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-johns-lutheran-church-4/"
  },
  {
    "value": "St John's Lutheran Church",
    "formatted_address": "86-20 114th St, Richmond Hill, NY 11418, USA",
    "latitude": "40.6991497",
    "longitude": "-73.8352477",
    "region": "1038",
    "notes": "Basement\nBetween Jamaica & 86th Avenues\nPost COVID-19- Mask Required, Contact Tracing Required, temperature checks will be performed prior to entry.",
    "tokens": [
      "St",
      "Johns",
      "Lutheran",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-johns-lutheran-church-5/"
  },
  {
    "value": "St John's Lutheran Church",
    "formatted_address": "2150 Centre Ave, Bellmore, NY 11710, USA",
    "latitude": "40.6697859",
    "longitude": "-73.5316412",
    "region": "897",
    "notes": "",
    "tokens": [
      "St",
      "Johns",
      "Lutheran",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-johns-lutheran-church-6/"
  },
  {
    "value": "St Johns Lutheran Church",
    "formatted_address": "939 83rd St, Brooklyn, NY 11228, USA",
    "latitude": "40.6201713",
    "longitude": "-74.0191481",
    "region": "1029",
    "notes": "At Cortland Avenue",
    "tokens": [
      "St",
      "Johns",
      "Lutheran",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-johns-lutheran-church-7/"
  },
  {
    "value": "St John's Lutheran Church",
    "formatted_address": "86-20 114th St, Jamaica, NY 11418, USA",
    "latitude": "40.698775",
    "longitude": "-73.835442",
    "region": "1038",
    "notes": "Basement\nBetween Jamaica & 86th Avenues",
    "tokens": [
      "St",
      "Johns",
      "Lutheran",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-johns-lutheran-church-9/"
  },
  {
    "value": "St John's Outpatient Rehab",
    "formatted_address": "327 Beach 19th St, Far Rockaway, NY 11691, USA",
    "latitude": "40.5986896",
    "longitude": "-73.7532385",
    "region": "1028",
    "notes": "At Cornaga Avenue",
    "tokens": [
      "St",
      "Johns",
      "Outpatient",
      "Rehab"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-johns-outpatient-rehab/"
  },
  {
    "value": "St John - Visitation Church",
    "formatted_address": "275 W 230th St, Bronx, NY 10463, USA",
    "latitude": "40.8791012",
    "longitude": "-73.9086665",
    "region": "923",
    "notes": "Main Entrance -Ring Bell",
    "tokens": [
      "St",
      "John",
      "Visitation",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-johns-visitation-church/"
  },
  {
    "value": "St Joseph & St Thomas Church",
    "formatted_address": "50 Maguire Ave, Staten Island, NY 10309, USA",
    "latitude": "40.5263512",
    "longitude": "-74.2110916",
    "region": "934",
    "notes": "Church Basement\nOff of Amboy Road",
    "tokens": [
      "St",
      "Joseph",
      "Thomas",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-joseph-st-thomas-church/"
  },
  {
    "value": "St Joseph's Church",
    "formatted_address": "15 Cedar St, Bronxville, NY 10708, USA",
    "latitude": "40.9383132",
    "longitude": "-73.8343623",
    "region": "983",
    "notes": "At Kraft Avenue",
    "tokens": [
      "St",
      "Josephs",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-josephs-church/"
  },
  {
    "value": "St Joseph's Church",
    "formatted_address": "43-19 30th Ave, Long Island City, NY 11103, USA",
    "latitude": "40.7627086",
    "longitude": "-73.911763",
    "region": "940",
    "notes": "Astoria\n43rd St",
    "tokens": [
      "St",
      "Josephs",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-josephs-church-2/"
  },
  {
    "value": "St. Kevin's Church",
    "formatted_address": "45-21 194th St, Flushing, NY 11358, USA",
    "latitude": "40.7553591",
    "longitude": "-73.7869008",
    "region": "930",
    "notes": "Entrance on 194th St.",
    "tokens": [
      "St",
      "Kevins",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-kevins-church/"
  },
  {
    "value": "St Laurence Roman Catholic Church Rectory",
    "formatted_address": "1020 Van Siclen Ave, Brooklyn, NY 11207, USA",
    "latitude": "40.655152",
    "longitude": "-73.882021",
    "region": "976",
    "notes": "Down the Driveway\nBetween Flatlands & Van Siclen Avenue",
    "tokens": [
      "St",
      "Laurence",
      "Roman",
      "Catholic",
      "Church",
      "Rectory"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-laurence-roman-catholic-church-rectory/"
  },
  {
    "value": "St. Luke African Methodist Episcopal Church",
    "formatted_address": "1854 Amsterdam Ave, New York, NY 10031, USA",
    "latitude": "40.8296357",
    "longitude": "-73.9447467",
    "region": "950",
    "notes": "Basment\nCorner of 152nd Street",
    "tokens": [
      "St",
      "Luke",
      "African",
      "Methodist",
      "Episcopal",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-luke-african-methodist-episcopal-church/"
  },
  {
    "value": "St Luke's Church",
    "formatted_address": "85 Greenway S, Flushing, NY 11375, USA",
    "latitude": "40.713969",
    "longitude": "-73.844644",
    "region": "970",
    "notes": "Basement\nAt Ascan Avenue",
    "tokens": [
      "St",
      "Lukes",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-lukes-church/"
  },
  {
    "value": "St Luke's Church",
    "formatted_address": "65 Oscawana Lake Rd, Lake Peekskill, NY 10537, USA",
    "latitude": "41.341312",
    "longitude": "-73.876884",
    "region": "901",
    "notes": "COVID NOTES: 22 Person Capacity limit and Masks required",
    "tokens": [
      "St",
      "Lukes",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-lukes-church-2/"
  },
  {
    "value": "St Luke's Church",
    "formatted_address": "16-34 Clintonville St, Flushing, NY 11357, USA",
    "latitude": "40.7844542",
    "longitude": "-73.8093454",
    "region": "1050",
    "notes": "COVID NOTES: Must wear mask, BYOC (Bring your own Coffee), no hand holding, close with The Lord’s Prayer.",
    "tokens": [
      "St",
      "Lukes",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-lukes-church-4/"
  },
  {
    "value": "St Luke's Episcopal Church",
    "formatted_address": "331 NY-100, Somers, NY 10589, USA",
    "latitude": "41.3270265",
    "longitude": "-73.6865928",
    "region": "1016",
    "notes": "Basement",
    "tokens": [
      "St",
      "Lukes",
      "Episcopal",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-lukes-episcopal-church/"
  },
  {
    "value": "St Luke's Episcopal Church",
    "formatted_address": "253 Glen Ave, Sea Cliff, NY 11579, USA",
    "latitude": "40.8469382",
    "longitude": "-73.6455189",
    "region": "897",
    "notes": "Between Glen & Glenlawn Avenues",
    "tokens": [
      "St",
      "Lukes",
      "Episcopal",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-lukes-episcopal-church-3/"
  },
  {
    "value": "St Luke's Lutheran Church",
    "formatted_address": "95 Eastchester Rd, New Rochelle, NY 10801, USA",
    "latitude": "40.927314",
    "longitude": "-73.794173",
    "region": "1010",
    "notes": "Between North and Webster Avenues. Gym",
    "tokens": [
      "St",
      "Lukes",
      "Lutheran",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-lukes-lutheran-church/"
  },
  {
    "value": "St. Luke's Lutheran Church",
    "formatted_address": "308 W 46th St, New York, NY 10036, USA",
    "latitude": "40.7599406",
    "longitude": "-73.988818",
    "region": "915",
    "notes": "Between 8th & 9th Avenues",
    "tokens": [
      "St",
      "Lukes",
      "Lutheran",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-lukes-lutheran-church-2/"
  },
  {
    "value": "St Luke's Parish Hall",
    "formatted_address": "68 Bedford Rd, Katonah, NY 10536, USA",
    "latitude": "41.2556269",
    "longitude": "-73.684226",
    "region": "1053",
    "notes": "At Katonah Avenue",
    "tokens": [
      "St",
      "Lukes",
      "Parish",
      "Hall"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-lukes-parish-hall/"
  },
  {
    "value": "St Luke's School",
    "formatted_address": "487 Hudson St, New York, NY 10014, USA",
    "latitude": "40.7326198",
    "longitude": "-74.0068029",
    "region": "894",
    "notes": "Located at the intersection of Hudson Street and Grove Street.\nMeetings are held in the St. Lukes School Auditorium",
    "tokens": [
      "St",
      "Lukes",
      "School"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-lukes-school/"
  },
  {
    "value": "St Margaret Church",
    "formatted_address": "66-10 79th Pl, Flushing, NY 11379, USA",
    "latitude": "40.715547",
    "longitude": "-73.873325",
    "region": "948",
    "notes": "At 80th St, Cafeteria",
    "tokens": [
      "St",
      "Margaret",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-margaret-church/"
  },
  {
    "value": "St. Margaret Mary Church",
    "formatted_address": "9-18 27th Ave, Astoria, NY 11102, USA",
    "latitude": "40.7738141",
    "longitude": "-73.9305545",
    "region": "940",
    "notes": "Second Floor\nBetween 12th and 9th Streets",
    "tokens": [
      "St",
      "Margaret",
      "Mary",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-margaret-mary-church/"
  },
  {
    "value": "St Margaret's Church Rectory",
    "formatted_address": "6000 Riverdale Ave, Bronx, NY 10471, USA",
    "latitude": "40.9088727",
    "longitude": "-73.9032228",
    "region": "1034",
    "notes": "Rectory Basement\nAt 260th Street",
    "tokens": [
      "St",
      "Margarets",
      "Church",
      "Rectory"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-margarets-church-rectory/"
  },
  {
    "value": "St. Margaret's House",
    "formatted_address": "49 Fulton St, New York, NY 10038, USA",
    "latitude": "40.7081354",
    "longitude": "-74.0039452",
    "region": "913",
    "notes": "Near Water St.\nall transportation\nm15 bus 2, 3, 4, 5, A & C trains",
    "tokens": [
      "St",
      "Margarets",
      "House"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-margarets-residence/"
  },
  {
    "value": "St Mark's Church",
    "formatted_address": "105 Randall Rd, Shoreham, NY 11786, USA",
    "latitude": "40.9353349",
    "longitude": "-72.8946893",
    "region": "898",
    "notes": "",
    "tokens": [
      "St",
      "Marks",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-marks-church/"
  },
  {
    "value": "St. Marks Church in the Bowery",
    "formatted_address": "131 E 10th St, New York, NY 10003, USA",
    "latitude": "40.7303933",
    "longitude": "-73.9870892",
    "region": "912",
    "notes": "Parish Hall, enter on East 11th Street",
    "tokens": [
      "St",
      "Marks",
      "Church",
      "in",
      "the",
      "Bowery"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-marks-church-in-the-bowery/"
  },
  {
    "value": "St Mark's Episcopal Church",
    "formatted_address": "1373 Nepperhan Ave, Yonkers, NY 10703, USA",
    "latitude": "40.971046",
    "longitude": "-73.871977",
    "region": "956",
    "notes": "North of Executive Blvd",
    "tokens": [
      "St",
      "Marks",
      "Episcopal",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-marks-episcopal-church/"
  },
  {
    "value": "St Mark's Lutheran Church",
    "formatted_address": "30 Jefferson St, Brooklyn, NY 11206, USA",
    "latitude": "40.697787",
    "longitude": "-73.934127",
    "region": "986",
    "notes": "1st Floor\nBetween Broadway & Bushwick Avenue",
    "tokens": [
      "St",
      "Marks",
      "Lutheran",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-marks-lutheran-church/"
  },
  {
    "value": "St. Marks Church",
    "formatted_address": "7 St Marks Pl, Yonkers, NY 10704, USA",
    "latitude": "40.9032314",
    "longitude": "-73.8672704",
    "region": "956",
    "notes": "Corner of Kimball Avenue",
    "tokens": [
      "St",
      "Marks",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-marks-lutheran-school/"
  },
  {
    "value": "St Mark's Methodist Church",
    "formatted_address": "6144 Amboy Rd, Staten Island, NY 10309, USA",
    "latitude": "40.5243573",
    "longitude": "-74.211782",
    "region": "934",
    "notes": "Basement Side Entrance\nBetween Woodvale & Sharrott Avenues",
    "tokens": [
      "St",
      "Marks",
      "Methodist",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-marks-methodist-church/"
  },
  {
    "value": "St. Mark's Methodist Church",
    "formatted_address": "200 Hempstead Ave, Rockville Centre, NY 11570, USA",
    "latitude": "40.6663214",
    "longitude": "-73.6428131",
    "region": "897",
    "notes": "",
    "tokens": [
      "St",
      "Marks",
      "Methodist",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-marks-methodist-church-2/"
  },
  {
    "value": "St Mark's Roman Catholic Church",
    "formatted_address": "2609 E 19th St, Brooklyn, NY 11235, USA",
    "latitude": "40.5879592",
    "longitude": "-73.9504474",
    "region": "1017",
    "notes": "Rectory Basement\nBetween Avenue Z & Jerome Avenue",
    "tokens": [
      "St",
      "Marks",
      "Roman",
      "Catholic",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-marks-roman-catholic-church/"
  },
  {
    "value": "St. Mary Gate of Heaven Church",
    "formatted_address": "103-12 101st Ave, Jamaica, NY 11416, USA",
    "latitude": "40.6859426",
    "longitude": "-73.8393222",
    "region": "938",
    "notes": "",
    "tokens": [
      "St",
      "Mary",
      "Gate",
      "of",
      "Heaven",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-mary-gate-of-heaven-church-2/"
  },
  {
    "value": "St Mary Gate of Heaven Church",
    "formatted_address": "103-12 101st Ave, Ozone Park, NY 11416, USA",
    "latitude": "40.6859643",
    "longitude": "-73.8393218",
    "region": "938",
    "notes": "Church Basement\nAt 103rd Street, Meeting is in Ozone Park",
    "tokens": [
      "St",
      "Mary",
      "Gate",
      "of",
      "Heaven",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-mary-gate-of-heaven-church-3/"
  },
  {
    "value": "St Mary Star of the Sea Church",
    "formatted_address": "580 Minnieford Ave, Bronx, NY 10464, USA",
    "latitude": "40.854532",
    "longitude": "-73.78896",
    "region": "909",
    "notes": "Rectory Basement\nOff of City Island Avenue",
    "tokens": [
      "St",
      "Mary",
      "Star",
      "of",
      "the",
      "Sea",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-mary-star-of-the-sea-church/"
  },
  {
    "value": "St Mary the Virgin Church",
    "formatted_address": "133 W 46th St, New York, NY 10036, USA",
    "latitude": "40.7580119",
    "longitude": "-73.9837063",
    "region": "915",
    "notes": "Between 6th & 7th Avenues",
    "tokens": [
      "St",
      "Mary",
      "the",
      "Virgin",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-mary-the-virgin-church/"
  },
  {
    "value": "St Mary's Church",
    "formatted_address": "2326 84th St, Brooklyn, NY 11214, USA",
    "latitude": "40.6013646",
    "longitude": "-73.9897634",
    "region": "1020",
    "notes": "Basement\nAt 23rd Avenue, next to rectory entrance",
    "tokens": [
      "St",
      "Marys",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-marys-church/"
  },
  {
    "value": "St Mary's Church",
    "formatted_address": "1836 E Main St, Mohegan Lake, NY 10547, USA",
    "latitude": "41.3256822",
    "longitude": "-73.8496919",
    "region": "1032",
    "notes": "On Route 6",
    "tokens": [
      "St",
      "Marys",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-marys-church-2/"
  },
  {
    "value": "St Mary's Church",
    "formatted_address": "1 Chestnut St, Cold Spring, NY 10516, USA",
    "latitude": "41.419265",
    "longitude": "-73.9540321",
    "region": "901",
    "notes": "Parish Hall\nCorner of Route #'s 9D & 301",
    "tokens": [
      "St",
      "Marys",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-marys-church-3/"
  },
  {
    "value": "St Mary's Church",
    "formatted_address": "10-8 49th Ave, Long Island City, NY 11101, USA",
    "latitude": "40.7432387",
    "longitude": "-73.9534862",
    "region": "1079",
    "notes": "Basement\nBetween Vernon Blvd & Jackson Avenue",
    "tokens": [
      "St",
      "Marys",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-marys-church-4/"
  },
  {
    "value": "St Mary's Church",
    "formatted_address": "191 S Greeley Ave, Chappaqua, NY 10514, USA",
    "latitude": "41.1557316",
    "longitude": "-73.7721362",
    "region": "1052",
    "notes": "",
    "tokens": [
      "St",
      "Marys",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-marys-church-5/"
  },
  {
    "value": "St Mary's Episcopal",
    "formatted_address": "521 W 126th St, New York, NY 10027, USA",
    "latitude": "40.8149739",
    "longitude": "-73.9560186",
    "region": "950",
    "notes": "Amsterdam & Old Broadway",
    "tokens": [
      "St",
      "Marys",
      "Episcopal"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-marys-episcopal/"
  },
  {
    "value": "St Mary's Episcopal Church",
    "formatted_address": "230 Classon Ave, Brooklyn, NY 11205, USA",
    "latitude": "40.6926353",
    "longitude": "-73.9611064",
    "region": "1054",
    "notes": "At Emerson Place, Entrance is on Willoughby Avenue",
    "tokens": [
      "St",
      "Marys",
      "Episcopal",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-marys-episcopal-church/"
  },
  {
    "value": "St Mary's Episcopal Church",
    "formatted_address": "252 Rushmore Ave, Carle Place, NY 11514, USA",
    "latitude": "40.7511075",
    "longitude": "-73.6093972",
    "region": "897",
    "notes": "",
    "tokens": [
      "St",
      "Marys",
      "Episcopal",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-marys-episcopal-church-2/"
  },
  {
    "value": "St Mary's Star of the Sea",
    "formatted_address": "19-20 New Haven Ave, Far Rockaway, NY 11691, USA",
    "latitude": "40.600749",
    "longitude": "-73.752735",
    "region": "1028",
    "notes": "Rectory Basement\nBetween Beach 19th & 20th Streets",
    "tokens": [
      "St",
      "Marys",
      "Star",
      "of",
      "the",
      "Sea"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-marys-star-of-the-sea/"
  },
  {
    "value": "St Matthew's Catholic Church",
    "formatted_address": "616 Warburton Ave, Hastings-On-Hudson, NY 10706, USA",
    "latitude": "40.9970344",
    "longitude": "-73.8815837",
    "region": "1046",
    "notes": "",
    "tokens": [
      "St",
      "Matthews",
      "Catholic",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-matthews-catholic-church/"
  },
  {
    "value": "St Matthew's Lutheran Church of Canarsie",
    "formatted_address": "1187 E 92nd St, Brooklyn, NY 11236, USA",
    "latitude": "40.6408063",
    "longitude": "-73.9039013",
    "region": "1081",
    "notes": "Basement\nBetween Flatlands Avenue & Avenue J",
    "tokens": [
      "St",
      "Matthews",
      "Lutheran",
      "Church",
      "of",
      "Canarsie"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-matthews-lutheran-church-of-canarsie/"
  },
  {
    "value": "St Matthew's Parish",
    "formatted_address": "57 8th St, Hoboken, NJ 07030, USA",
    "latitude": "40.7457882",
    "longitude": "-74.0277316",
    "region": "962",
    "notes": "8th Street & Washington Avenue",
    "tokens": [
      "St",
      "Matthews",
      "Parish"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-matthews-parish/"
  },
  {
    "value": "St Michael's & All Angels Church",
    "formatted_address": "2197 Jackson Ave, Seaford, NY 11783, USA",
    "latitude": "40.6677226",
    "longitude": "-73.4867434",
    "region": "897",
    "notes": "North of Merrick Road & next to the Knights of Columbus Hall\n\nCOVID NOTES: Masks required, no handholding/hugging, maintain social distancing, no coffee service; bring your own",
    "tokens": [
      "St",
      "Michaels",
      "All",
      "Angels",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-michaels-all-angels-church/"
  },
  {
    "value": "St Michael's Church",
    "formatted_address": "225 W 99th St, New York, NY 10025, USA",
    "latitude": "40.7963534",
    "longitude": "-73.9690816",
    "region": "896",
    "notes": "1st Floor\nBetween Amsterdam Avenue & Broadway",
    "tokens": [
      "St",
      "Michaels",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-michaels-church-2/"
  },
  {
    "value": "St Michael's Church",
    "formatted_address": "41-4 Union St, Flushing, NY 11354, USA",
    "latitude": "40.7591105",
    "longitude": "-73.826162",
    "region": "930",
    "notes": "Union St. Side Entrance: Basement",
    "tokens": [
      "St",
      "Michaels",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-michaels-church-3/"
  },
  {
    "value": "St Monica's Church",
    "formatted_address": "413 E 79th St, New York, NY 10075, USA",
    "latitude": "40.7722008",
    "longitude": "-73.9517118",
    "region": "922",
    "notes": "Basement\nBetween 1st & York Avenues",
    "tokens": [
      "St",
      "Monicas",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-monicas-church/"
  },
  {
    "value": "St Nicholas Catholic Church",
    "formatted_address": "26 Olive St, Brooklyn, NY 11211, USA",
    "latitude": "40.713681",
    "longitude": "-73.9385079",
    "region": "994",
    "notes": "Msgr Vetro Parish Center (Church Basement)",
    "tokens": [
      "St",
      "Nicholas",
      "Catholic",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-nicholas-catholic-church/"
  },
  {
    "value": "St Nicholas of Tolentine",
    "formatted_address": "150-75 Goethals Ave, Jamaica, NY 11432, USA",
    "latitude": "40.7186495",
    "longitude": "-73.8096673",
    "region": "989",
    "notes": "School Cafeteria\nAt Union Tpke & Parsons Blvd",
    "tokens": [
      "St",
      "Nicholas",
      "of",
      "Tolentine"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-nicholas-of-tolentine/"
  },
  {
    "value": "St Nicholas of Tolentine",
    "formatted_address": "2345 University Ave, Bronx, NY 10468, USA",
    "latitude": "40.862164",
    "longitude": "-73.9054755",
    "region": "1061",
    "notes": "Fordham Road and Andrews Avenue",
    "tokens": [
      "St",
      "Nicholas",
      "of",
      "Tolentine"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-nicholas-of-tolentine-2/"
  },
  {
    "value": "St. Pascal of Baylon Church",
    "formatted_address": "112-43 199th St, St. Albans, NY 11412, USA",
    "latitude": "40.7015268",
    "longitude": "-73.7563687",
    "region": "972",
    "notes": "Basement, enter 113th ave",
    "tokens": [
      "St",
      "Pascal",
      "of",
      "Baylon",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-pascal-of-baylon-church/"
  },
  {
    "value": "St Patrick's Church",
    "formatted_address": "188 Church Pl, Yorktown Heights, NY 10598, USA",
    "latitude": "41.2707137",
    "longitude": "-73.7774006",
    "region": "903",
    "notes": "Corner of Hanover & Church Streets, Rear Basement",
    "tokens": [
      "St",
      "Patricks",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-patricks-church/"
  },
  {
    "value": "St. Patrick's Church",
    "formatted_address": "9511 4th Ave, Brooklyn, NY 11209, USA",
    "latitude": "40.6153958",
    "longitude": "-74.0314636",
    "region": "974",
    "notes": "",
    "tokens": [
      "St",
      "Patricks",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-patricks-church-2/"
  },
  {
    "value": "St Patrick's Church-Newburgh",
    "formatted_address": "156 Liberty St, Newburgh, NY 12550, USA",
    "latitude": "41.5008149",
    "longitude": "-74.0103748",
    "region": "921",
    "notes": "Meeting Entrance Back of Church",
    "tokens": [
      "St",
      "Patricks",
      "Church",
      "Newburgh"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-patricks-church-newburgh/"
  },
  {
    "value": "St Patrick's Roman Catholic Church",
    "formatted_address": "26 Hunter St, Highland Mills, NY 10930, USA",
    "latitude": "41.3438199",
    "longitude": "-74.1251047",
    "region": "921",
    "notes": "",
    "tokens": [
      "St",
      "Patricks",
      "Roman",
      "Catholic",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-patricks-roman-catholic-church-2/"
  },
  {
    "value": "St Patrick's School",
    "formatted_address": "3560 Richmond Rd, Staten Island, NY 10306, USA",
    "latitude": "40.5722462",
    "longitude": "-74.1398695",
    "region": "932",
    "notes": "Alternates weekly between the 3rd & 11th Step. Kensico St. School Cafeteria",
    "tokens": [
      "St",
      "Patricks",
      "School"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-patricks-school/"
  },
  {
    "value": "St Paul Lutheran Church",
    "formatted_address": "449 Stewart Ave, Bethpage, NY 11714, USA",
    "latitude": "40.7398571",
    "longitude": "-73.4818611",
    "region": "897",
    "notes": "",
    "tokens": [
      "St",
      "Paul",
      "Lutheran",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-paul-lutheran-church/"
  },
  {
    "value": "St Paul & St Luke's Church",
    "formatted_address": "186 Decker Ave, Staten Island, NY 10302, USA",
    "latitude": "40.628689",
    "longitude": "-74.137156",
    "region": "900",
    "notes": "Basement",
    "tokens": [
      "St",
      "Paul",
      "Lukes",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-paul-st-lukes-church/"
  },
  {
    "value": "St Paul the Apostle Catholic Church",
    "formatted_address": "602 McLean Ave, Yonkers, NY 10705, USA",
    "latitude": "40.9098126",
    "longitude": "-73.8798696",
    "region": "956",
    "notes": "Basement, Gym\nOff of Lee Avenue\nCOVID NOTES: Limit of 50 people. First, come basis. Masks Required. Social Distancing.",
    "tokens": [
      "St",
      "Paul",
      "the",
      "Apostle",
      "Catholic",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-paul-the-apostle-catholic-church/"
  },
  {
    "value": "St Paul the Apostle Church",
    "formatted_address": "231 Jackson Ave, Syosset, NY 11791, USA",
    "latitude": "40.816818",
    "longitude": "-73.500694",
    "region": "897",
    "notes": "Basement",
    "tokens": [
      "St",
      "Paul",
      "the",
      "Apostle",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-paul-the-apostle-church-2/"
  },
  {
    "value": "St Paul's Church",
    "formatted_address": "225 St Pauls Ave, Staten Island, NY 10304, USA",
    "latitude": "40.631919",
    "longitude": "-74.079018",
    "region": "993",
    "notes": "Entrance Is at the Back of the Church\nAt Clinton Street",
    "tokens": [
      "St",
      "Pauls",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-pauls-church/"
  },
  {
    "value": "St Paul's Church",
    "formatted_address": "200 Redwood Ave, Inwood, NY 11096, USA",
    "latitude": "40.6158431",
    "longitude": "-73.7449906",
    "region": "897",
    "notes": "Between Bayview & Wanser",
    "tokens": [
      "St",
      "Pauls",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-pauls-church-2/"
  },
  {
    "value": "St Paul's Episcopal Church",
    "formatted_address": "40 Ganung Dr, Ossining, NY 10562, USA",
    "latitude": "41.1679858",
    "longitude": "-73.8292515",
    "region": "1056",
    "notes": "",
    "tokens": [
      "St",
      "Pauls",
      "Episcopal",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-pauls-episcopal-church/"
  },
  {
    "value": "St Paul's Episcopal Church",
    "formatted_address": "60 East Ave, Norwalk, CT 06851, USA",
    "latitude": "41.1205525",
    "longitude": "-73.4075652",
    "region": "1019",
    "notes": "",
    "tokens": [
      "St",
      "Pauls",
      "Episcopal",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-pauls-episcopal-church-2/"
  },
  {
    "value": "St Paul's Episcopal Church",
    "formatted_address": "28 Highland Rd, Glen Cove, NY 11542, USA",
    "latitude": "40.8653471",
    "longitude": "-73.6277358",
    "region": "897",
    "notes": "Glen Cove\nBackdoor entrance",
    "tokens": [
      "St",
      "Pauls",
      "Episcopal",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-pauls-episcopal-church-3/"
  },
  {
    "value": "St Paul's Lutheran Church",
    "formatted_address": "3913 Avenue J, Brooklyn, NY 11210, USA",
    "latitude": "40.627784",
    "longitude": "-73.937794",
    "region": "1009",
    "notes": "Basement\nAt East 40th Street",
    "tokens": [
      "St",
      "Pauls",
      "Lutheran",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-pauls-lutheran-church/"
  },
  {
    "value": "St Paul's Lutheran Church",
    "formatted_address": "2134 Newbold Ave, Bronx, NY 10462, USA",
    "latitude": "40.8329",
    "longitude": "-73.853036",
    "region": "1000",
    "notes": "Meets in Church\nAt Castle Hill Avenue",
    "tokens": [
      "St",
      "Pauls",
      "Lutheran",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-pauls-lutheran-church-2/"
  },
  {
    "value": "St Paul's Lutheran Church",
    "formatted_address": "21 Still Rd, Monroe, NY 10950, USA",
    "latitude": "41.317778",
    "longitude": "-74.1787938",
    "region": "921",
    "notes": "1st Floor Classroom\nAt Route 17",
    "tokens": [
      "St",
      "Pauls",
      "Lutheran",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-pauls-lutheran-church-4/"
  },
  {
    "value": "St Paul's Lutheran Church",
    "formatted_address": "106 Vernon Valley Rd, East Northport, NY 11731, USA",
    "latitude": "40.8825614",
    "longitude": "-73.3250938",
    "region": "898",
    "notes": "",
    "tokens": [
      "St",
      "Pauls",
      "Lutheran",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-pauls-lutheran-church-5/"
  },
  {
    "value": "St Paul's Rectory",
    "formatted_address": "199 Carroll St, Brooklyn, NY 11231, USA",
    "latitude": "40.6810507",
    "longitude": "-73.9964935",
    "region": "911",
    "notes": "Behind church and rectory down an alleyway through a gate. Sometimes held in library of rectory 2nd floor when Parish hall rented out.",
    "tokens": [
      "St",
      "Pauls",
      "Rectory"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-pauls-rectory/"
  },
  {
    "value": "St Paul's United Methodist Church",
    "formatted_address": "58 W Main St, Middletown, NY 10940, USA",
    "latitude": "41.4451717",
    "longitude": "-74.4223947",
    "region": "921",
    "notes": "Across from Police Station",
    "tokens": [
      "St",
      "Pauls",
      "United",
      "Methodist",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-pauls-united-methodist-church/"
  },
  {
    "value": "St Peter Claver Roman Catholic Church",
    "formatted_address": "29 Claver Pl, Brooklyn, NY 11238, USA",
    "latitude": "40.6821025",
    "longitude": "-73.9572094",
    "region": "1011",
    "notes": "Basement\nAt Jefferson Avenue",
    "tokens": [
      "St",
      "Peter",
      "Claver",
      "Roman",
      "Catholic",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-peter-claver-roman-catholic-church/"
  },
  {
    "value": "St. Peter the Apostle Catholi Church",
    "formatted_address": "286 Montauk Hwy, Amagansett, NY 11930, USA",
    "latitude": "40.9762747",
    "longitude": "-72.1392954",
    "region": "898",
    "notes": "",
    "tokens": [
      "St",
      "Peter",
      "the",
      "Apostle",
      "Catholi",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-peter-the-apostle-catholi-church/"
  },
  {
    "value": "St. Peter's Church",
    "formatted_address": "137 N Division St, Peekskill, NY 10566, USA",
    "latitude": "41.292628",
    "longitude": "-73.919029",
    "region": "1043",
    "notes": "",
    "tokens": [
      "St",
      "Peters",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-peters-church/"
  },
  {
    "value": "St Peter's Episcopal Church",
    "formatted_address": "19 Smith St, Port Chester, NY 10573, USA",
    "latitude": "41.0015283",
    "longitude": "-73.6667143",
    "region": "996",
    "notes": "",
    "tokens": [
      "St",
      "Peters",
      "Episcopal",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-peters-episcopal-church/"
  },
  {
    "value": "St. Peter's Episcopal Church",
    "formatted_address": "137-28 244th St, Jamaica, NY 11422, USA",
    "latitude": "40.667796",
    "longitude": "-73.733423",
    "region": "1025",
    "notes": "",
    "tokens": [
      "St",
      "Peters",
      "Episcopal",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-peters-episcopal-church-2/"
  },
  {
    "value": "St Peters Episcopal Church-Rectory",
    "formatted_address": "346 W 20th St, New York, NY 10011, USA",
    "latitude": "40.7440891",
    "longitude": "-74.0019888",
    "region": "980",
    "notes": "Between 8th and 9th Avenue",
    "tokens": [
      "St",
      "Peters",
      "Episcopal",
      "Church",
      "Rectory"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-peters-episcopal-church-rectory/"
  },
  {
    "value": "St Peter's Lutheran Church @ Citicorp Center",
    "formatted_address": "619 Lexington Ave, New York, NY 10022, USA",
    "latitude": "40.7585654",
    "longitude": "-73.9703834",
    "region": "1018",
    "notes": "Lower Level Music Rooms\nEnter on 54th Street, Between Lexington & 3rd Avenues",
    "tokens": [
      "St",
      "Peters",
      "Lutheran",
      "Church",
      "Citicorp",
      "Center"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-peters-lutheran-church-citicorp-center/"
  },
  {
    "value": "St Philip's Episcopal Church",
    "formatted_address": "265 Decatur St, Brooklyn, NY 11233, USA",
    "latitude": "40.6814709",
    "longitude": "-73.9332165",
    "region": "960",
    "notes": "Between Lewis & Stuyvesant Avenues.\nSecond Floor",
    "tokens": [
      "St",
      "Philips",
      "Episcopal",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-philips-episcopal-church/"
  },
  {
    "value": "St Philip's in the Highlands Church",
    "formatted_address": "1101 NY-9D, Garrison, NY 10524, USA",
    "latitude": "41.38093",
    "longitude": "-73.9388206",
    "region": "901",
    "notes": "Parish Hall",
    "tokens": [
      "St",
      "Philips",
      "in",
      "the",
      "Highlands",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-philips-in-the-highlands-church/"
  },
  {
    "value": "St Phillip's Church",
    "formatted_address": "204 W 134th St, New York, NY 10030, USA",
    "latitude": "40.8147275",
    "longitude": "-73.9448825",
    "region": "950",
    "notes": "Between Adam C Powell & Frederick Douglas Blvds",
    "tokens": [
      "St",
      "Phillips",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-phillips-church/"
  },
  {
    "value": "St. Phillip's Episcopal Church",
    "formatted_address": "1072 80th St, Brooklyn, NY 11228, USA",
    "latitude": "40.6201334",
    "longitude": "-74.015346",
    "region": "1029",
    "notes": "Between 10th & 11th Avenues",
    "tokens": [
      "St",
      "Phillips",
      "Episcopal",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-phillips-episcopal-church/"
  },
  {
    "value": "St Raymond's School Cafeteria",
    "formatted_address": "1759 Castle Hill Ave, Bronx, NY 10462, USA",
    "latitude": "40.8416692",
    "longitude": "-73.8536213",
    "region": "1000",
    "notes": "At East Tremont Avenue / Enter on Purdy Street",
    "tokens": [
      "St",
      "Raymonds",
      "School",
      "Cafeteria"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-raymonds-school-cafeteria/"
  },
  {
    "value": "St Robert Bellarmine Church",
    "formatted_address": "56-15 213th St, Bayside, NY 11364, USA",
    "latitude": "40.7493043",
    "longitude": "-73.7650219",
    "region": "1071",
    "notes": "Basement\nAt 56th Avenue",
    "tokens": [
      "St",
      "Robert",
      "Bellarmine",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-robert-bellarmine-church/"
  },
  {
    "value": "St. Roch's Church",
    "formatted_address": "602 Port Richmond Ave, Staten Island, NY 10302, USA",
    "latitude": "40.6285967",
    "longitude": "-74.1419668",
    "region": "1021",
    "notes": "",
    "tokens": [
      "St",
      "Rochs",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-rochs-church/"
  },
  {
    "value": "St. Rose of Lima",
    "formatted_address": "1-31 Beach 84th St, Far Rockaway, NY 11693, USA",
    "latitude": "40.586364",
    "longitude": "-73.809268",
    "region": "1028",
    "notes": "Rectory Basement adjacent to parking lot",
    "tokens": [
      "St",
      "Rose",
      "of",
      "Lima"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-rose-of-lima/"
  },
  {
    "value": "St Sebastian School",
    "formatted_address": "39-76 58th St, Woodside, NY 11377, USA",
    "latitude": "40.745861",
    "longitude": "-73.9062914",
    "region": "965",
    "notes": "Basement",
    "tokens": [
      "St",
      "Sebastian",
      "School"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-sebastian-school/"
  },
  {
    "value": "St Sebastian School",
    "formatted_address": "39-76 58th St, Flushing, NY 11377, USA",
    "latitude": "40.7459848",
    "longitude": "-73.9064964",
    "region": "965",
    "notes": "Basement",
    "tokens": [
      "St",
      "Sebastian",
      "School"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-sebastian-school-2/"
  },
  {
    "value": "St Sebastian's Parish Center",
    "formatted_address": "39-60 57th St, Woodside, NY 11377, USA",
    "latitude": "40.7464919",
    "longitude": "-73.9070088",
    "region": "965",
    "notes": "Basement, St Patrick's Room\nBetween Woodside & 39th Avenues",
    "tokens": [
      "St",
      "Sebastians",
      "Parish",
      "Center"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-sebastians-parish-center/"
  },
  {
    "value": "St. Stanislaus B&M Church",
    "formatted_address": "101 E 7th St, New York, NY 10009, USA",
    "latitude": "40.7267707",
    "longitude": "-73.9849336",
    "region": "912",
    "notes": "",
    "tokens": [
      "St",
      "Stanislaus",
      "B",
      "M",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-stanislaus-bm-church-2/"
  },
  {
    "value": "St. Stanislaus Church Rectory",
    "formatted_address": "57-15 61st St, Flushing, NY 11378, USA",
    "latitude": "40.7225423",
    "longitude": "-73.9043508",
    "region": "930",
    "notes": "",
    "tokens": [
      "St",
      "Stanislaus",
      "Church",
      "Rectory"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-stanislaus-church-rectory-2/"
  },
  {
    "value": "St Stanislaus Kostka Church Rectory",
    "formatted_address": "189 Driggs Ave, Brooklyn, NY 11222, USA",
    "latitude": "40.7227605",
    "longitude": "-73.9457435",
    "region": "918",
    "notes": "At Humboldt Street, entrance to building is behind Church",
    "tokens": [
      "St",
      "Stanislaus",
      "Kostka",
      "Church",
      "Rectory"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-stanislaus-kostka-church-rectory/"
  },
  {
    "value": "St Stephen's Church",
    "formatted_address": "439 E 238th St, Bronx, NY 10470, USA",
    "latitude": "40.9000588",
    "longitude": "-73.8635841",
    "region": "1002",
    "notes": "At Corner of 238th Street & Vireo Avenue",
    "tokens": [
      "St",
      "Stephens",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-stephens-church/"
  },
  {
    "value": "St Stephen's Church",
    "formatted_address": "50 Bedford Rd, Armonk, NY 10504, USA",
    "latitude": "41.125012",
    "longitude": "-73.711418",
    "region": "1058",
    "notes": "",
    "tokens": [
      "St",
      "Stephens",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-stephens-church-2/"
  },
  {
    "value": "St Stephen's Church",
    "formatted_address": "84 Ehrhardt Rd, Pearl River, NY 10965, USA",
    "latitude": "41.0665928",
    "longitude": "-74.003767",
    "region": "961",
    "notes": "",
    "tokens": [
      "St",
      "Stephens",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-stephens-church-3/"
  },
  {
    "value": "St Stephen's Church",
    "formatted_address": "270 S Broadway, Hicksville, NY 11801, USA",
    "latitude": "40.7621629",
    "longitude": "-73.5178152",
    "region": "897",
    "notes": "@4th Street, 1 block South of Old Country Road",
    "tokens": [
      "St",
      "Stephens",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-stephens-church-4/"
  },
  {
    "value": "St. Teresa of Avila",
    "formatted_address": "109-55 128th St, South Ozone Park, NY 11420, USA",
    "latitude": "40.6832072",
    "longitude": "-73.8133715",
    "region": "998",
    "notes": "Parking Lot",
    "tokens": [
      "St",
      "Teresa",
      "of",
      "Avila"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-teresa-of-avila/"
  },
  {
    "value": "St. Teresa of Avila",
    "formatted_address": "563 Sterling Pl, Brooklyn, NY 11238, USA",
    "latitude": "40.6738344",
    "longitude": "-73.9595531",
    "region": "925",
    "notes": "Parking Lot. Big Hall",
    "tokens": [
      "St",
      "Teresa",
      "of",
      "Avila"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-teresa-of-avila-2/"
  },
  {
    "value": "St Thomas Church",
    "formatted_address": "1 E 53rd St, New York, NY 10022, USA",
    "latitude": "40.7603407",
    "longitude": "-73.9752205",
    "region": "1026",
    "notes": "Enter on West 53rd, meeting is on 3rd Floor",
    "tokens": [
      "St",
      "Thomas",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-thomas-church/"
  },
  {
    "value": "St Thomas Church",
    "formatted_address": "1 W 53rd St, New York, NY 10019, USA",
    "latitude": "40.7608321",
    "longitude": "-73.9763834",
    "region": "1026",
    "notes": "Enter on West 53rd, meeting is on 3rd Floor",
    "tokens": [
      "St",
      "Thomas",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-thomas-church-2/"
  },
  {
    "value": "St Thomas Episcopal Church",
    "formatted_address": "168 Boston Post Rd, Mamaroneck, NY 10543, USA",
    "latitude": "40.9480296",
    "longitude": "-73.7349063",
    "region": "1027",
    "notes": "",
    "tokens": [
      "St",
      "Thomas",
      "Episcopal",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-thomas-episcopal-church/"
  },
  {
    "value": "St Thomas the Apostle School",
    "formatted_address": "87-49 87th St, Woodhaven, NY 11421, USA",
    "latitude": "40.6914686",
    "longitude": "-73.8564708",
    "region": "1075",
    "notes": "Courtyard at side of church. ring bell (60 second wait)",
    "tokens": [
      "St",
      "Thomas",
      "the",
      "Apostle",
      "School"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-thomas-the-apostle-school-2/"
  },
  {
    "value": "St Uriel's Archangle Church",
    "formatted_address": "219 Philadelphia Blvd, Sea Girt, NJ 08750, USA",
    "latitude": "40.1325739",
    "longitude": "-74.034018",
    "region": "962",
    "notes": "",
    "tokens": [
      "St",
      "Uriels",
      "Archangle",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-uriels-archangle-church/"
  },
  {
    "value": "St Vincent Depaul Church Rectory",
    "formatted_address": "1500 Depaul St, Elmont, NY 11003, USA",
    "latitude": "40.71009",
    "longitude": "-73.696395",
    "region": "897",
    "notes": "Opposite Robert Avenue",
    "tokens": [
      "St",
      "Vincent",
      "Depaul",
      "Church",
      "Rectory"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-vincent-depaul-church-rectory/"
  },
  {
    "value": "St Vincent Ferrer Church",
    "formatted_address": "925 E 37th St, Brooklyn, NY 11210, USA",
    "latitude": "40.6342178",
    "longitude": "-73.9408883",
    "region": "1009",
    "notes": "Glenwood Ave & E 37th St",
    "tokens": [
      "St",
      "Vincent",
      "Ferrer",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-vincent-ferrer-church-2/"
  },
  {
    "value": "St William the Abbot Church",
    "formatted_address": "2001 Jackson Ave, Seaford, NY 11783, USA",
    "latitude": "40.6731653",
    "longitude": "-73.4866692",
    "region": "897",
    "notes": "Basement",
    "tokens": [
      "St",
      "William",
      "the",
      "Abbot",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/st-william-the-abbot-church/"
  },
  {
    "value": "Staten Island Christian Church",
    "formatted_address": "3980 Victory Blvd, Staten Island, NY 10314, USA",
    "latitude": "40.5935753",
    "longitude": "-74.1868068",
    "region": "1021",
    "notes": "At Church St",
    "tokens": [
      "Staten",
      "Island",
      "Christian",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/staten-island-christian-church/"
  },
  {
    "value": "Staten Island University Hospital",
    "formatted_address": "375 Seguine Ave, Staten Island, NY 10309, USA",
    "latitude": "40.5167578",
    "longitude": "-74.1963791",
    "region": "981",
    "notes": "South. Board Room.",
    "tokens": [
      "Staten",
      "Island",
      "University",
      "Hospital"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/staten-island-university-hospital/"
  },
  {
    "value": "Steinway Reformed Church",
    "formatted_address": "21-65 41st St, Long Island City, NY 11105, USA",
    "latitude": "40.772532",
    "longitude": "-73.904647",
    "region": "940",
    "notes": "Basement at Ditmars Blvd & 41st Street",
    "tokens": [
      "Steinway",
      "Reformed",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/steinway-reformed-church/"
  },
  {
    "value": "Stephen Wise Free Synagogue",
    "formatted_address": "30 W 68th St, New York, NY 10023, USA",
    "latitude": "40.7739911",
    "longitude": "-73.9791692",
    "region": "896",
    "notes": "Check Security Desk for Room #. Between Central Park West & Columbus Avenue.",
    "tokens": [
      "Stephen",
      "Wise",
      "Free",
      "Synagogue"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/stephen-wise-free-synagogue/"
  },
  {
    "value": "Still Mind Zendo",
    "formatted_address": "37 W 17th St, New York, NY 10011, USA",
    "latitude": "40.7388459",
    "longitude": "-73.9939961",
    "region": "912",
    "notes": "Call up for access: on key pad, scroll to 600 and press call. 6th Floor",
    "tokens": [
      "Still",
      "Mind",
      "Zendo"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/still-mind-zendo/"
  },
  {
    "value": "Stony Point Presbyterian Church",
    "formatted_address": "125 W Main St, Stony Point, NY 10980, USA",
    "latitude": "41.2298663",
    "longitude": "-73.9892927",
    "region": "961",
    "notes": "",
    "tokens": [
      "Stony",
      "Point",
      "Presbyterian",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/stony-point-presbyterian-church/"
  },
  {
    "value": "Stony Point Riverview Park",
    "formatted_address": "103 Grassy Point Rd, Stony Point, NY 10980, USA",
    "latitude": "41.226708",
    "longitude": "-73.974225",
    "region": "961",
    "notes": "E. Main Street across from BarMar Trailer Park",
    "tokens": [
      "Stony",
      "Point",
      "Riverview",
      "Park"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/stony-point-riverview-park/"
  },
  {
    "value": "Store Front",
    "formatted_address": "599 Main St, Poughkeepsie, NY 12601, USA",
    "latitude": "41.6989791",
    "longitude": "-73.9132848",
    "region": "901",
    "notes": "",
    "tokens": [
      "Store",
      "Front"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/store-front/"
  },
  {
    "value": "Suffern Presbyterian Church",
    "formatted_address": "81 Washington Ave, Suffern, NY 10901, USA",
    "latitude": "41.1119474",
    "longitude": "-74.1501976",
    "region": "961",
    "notes": "At East Maltbie Avenue",
    "tokens": [
      "Suffern",
      "Presbyterian",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/suffern-presbyterian-church/"
  },
  {
    "value": "Sunnyside Reformed Church",
    "formatted_address": "48-03 Skillman Ave, Long Island City, NY 11104, USA",
    "latitude": "40.7465104",
    "longitude": "-73.9159654",
    "region": "1087",
    "notes": "Basement\nAt 48th Street",
    "tokens": [
      "Sunnyside",
      "Reformed",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/sunnyside-reformed-church/"
  },
  {
    "value": "SUNY Maritime College Visitor Center",
    "formatted_address": "6 Pennyfield Ave, Bronx, NY 10465, USA",
    "latitude": "40.8092024",
    "longitude": "-73.8010583",
    "region": "964",
    "notes": "Go through Security Booth and make first left",
    "tokens": [
      "SUNY",
      "Maritime",
      "College",
      "Visitor",
      "Center"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/suny-maritime-college-visitor-center/"
  },
  {
    "value": "Sure Foundation Lutheran Church",
    "formatted_address": "64-20 Roosevelt Ave, Woodside, NY 11377, USA",
    "latitude": "40.7459902",
    "longitude": "-73.8992001",
    "region": "965",
    "notes": "Woodside",
    "tokens": [
      "Sure",
      "Foundation",
      "Lutheran",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/sure-foundation-lutheran-church/"
  },
  {
    "value": "Temple Israel",
    "formatted_address": "140 Central Ave, Lawrence, NY 11559, USA",
    "latitude": "40.613082",
    "longitude": "-73.7398517",
    "region": "897",
    "notes": "",
    "tokens": [
      "Temple",
      "Israel"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/temple-israel/"
  },
  {
    "value": "Temple Judea",
    "formatted_address": "333 Searingtown Rd, Manhasset, NY 11030, USA",
    "latitude": "40.7812543",
    "longitude": "-73.6638547",
    "region": "897",
    "notes": "",
    "tokens": [
      "Temple",
      "Judea"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/temple-judea/"
  },
  {
    "value": "Temple Kol-Ami",
    "formatted_address": "252 Soundview Ave, White Plains, NY 10606, USA",
    "latitude": "41.0044118",
    "longitude": "-73.768139",
    "region": "995",
    "notes": "Old Mamaroneck Road",
    "tokens": [
      "Temple",
      "Kol",
      "Ami"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/temple-kol-ami/"
  },
  {
    "value": "The Bronfman Center",
    "formatted_address": "7 E 10th St, New York, NY 10003, USA",
    "latitude": "40.7332774",
    "longitude": "-73.9946311",
    "region": "894",
    "notes": "",
    "tokens": [
      "The",
      "Bronfman",
      "Center"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/the-bronfman-center/"
  },
  {
    "value": "The Brooklyn Hospital Center",
    "formatted_address": "121 Dekalb Ave, Brooklyn, NY 11201, USA",
    "latitude": "40.6898195",
    "longitude": "-73.9779279",
    "region": "911",
    "notes": "Cafeteria (Dining Room \"A\")",
    "tokens": [
      "The",
      "Brooklyn",
      "Hospital",
      "Center"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/the-brooklyn-hospital-center/"
  },
  {
    "value": "The Caring Community",
    "formatted_address": "20 Washington Square N, New York, NY 10011, USA",
    "latitude": "40.7319414",
    "longitude": "-73.9976956",
    "region": "894",
    "notes": "2nd Floor\n5th Avenue & MacDougal Street",
    "tokens": [
      "The",
      "Caring",
      "Community"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/the-caring-community/"
  },
  {
    "value": "The Catholic Club",
    "formatted_address": "1884 Stuart St, Brooklyn, NY 11229, USA",
    "latitude": "40.6071209",
    "longitude": "-73.9400591",
    "region": "1044",
    "notes": "On corner of Stuart and Filmore",
    "tokens": [
      "The",
      "Catholic",
      "Club"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/the-catholic-club/"
  },
  {
    "value": "The Christopher",
    "formatted_address": "202 W 24th St, New York, NY 10011, USA",
    "latitude": "40.7448224",
    "longitude": "-73.9958574",
    "region": "980",
    "notes": "Mezzanine between 7th and 8th Avenues. See Desk Clerk",
    "tokens": [
      "The",
      "Christopher"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/the-christopher/"
  },
  {
    "value": "The Church of St Luke and St Matthew",
    "formatted_address": "520 Clinton Ave, Brooklyn, NY 11238, USA",
    "latitude": "40.6827079",
    "longitude": "-73.9673459",
    "region": "1054",
    "notes": "",
    "tokens": [
      "The",
      "Church",
      "of",
      "St",
      "Luke",
      "and",
      "Matthew"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/the-church-of-st-luke-and-st-matthew/"
  },
  {
    "value": "The Claremont",
    "formatted_address": "1431 College Ave, Bronx, NY 10456, USA",
    "latitude": "40.8386455",
    "longitude": "-73.9100667",
    "region": "942",
    "notes": "",
    "tokens": [
      "The",
      "Claremont"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/the-claremont/"
  },
  {
    "value": "The Dorm",
    "formatted_address": "175 W 72nd St, New York, NY 10023, USA",
    "latitude": "40.7786038",
    "longitude": "-73.981122",
    "region": "896",
    "notes": "Glass Door that says, \"the dorm\", between apt building and storefront. Door code needed, greeter will be present.",
    "tokens": [
      "The",
      "Dorm"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/the-dorm-2/"
  },
  {
    "value": "The Epiphany and St. Simon Episcopal Church",
    "formatted_address": "2910 Avenue M, Brooklyn, NY 11210, USA",
    "latitude": "40.6192844",
    "longitude": "-73.9461082",
    "region": "1017",
    "notes": "Entrance at the rear of the Church",
    "tokens": [
      "The",
      "Epiphany",
      "and",
      "St",
      "Simon",
      "Episcopal",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/the-epiphany-and-st-simon-episcopal-church/"
  },
  {
    "value": "The Episcopal Church of the Holy Communion",
    "formatted_address": "1055 US-6, Mahopac, NY 10541, USA",
    "latitude": "41.395471",
    "longitude": "-73.718365",
    "region": "901",
    "notes": "",
    "tokens": [
      "The",
      "Episcopal",
      "Church",
      "of",
      "the",
      "Holy",
      "Communion"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/the-episcopal-church-of-the-holy-communion/"
  },
  {
    "value": "The Greenpoint Shul",
    "formatted_address": "108 Noble St, Brooklyn, NY 11222, USA",
    "latitude": "40.7285547",
    "longitude": "-73.9563815",
    "region": "918",
    "notes": "Basement\n1 Block off of the BQE",
    "tokens": [
      "The",
      "Greenpoint",
      "Shul"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/the-greenpoint-shul/"
  },
  {
    "value": "The Invincible Hall",
    "formatted_address": "29 Forsyth St, New York, NY 10002, USA",
    "latitude": "40.7153378",
    "longitude": "-73.994253",
    "region": null,
    "notes": "Walk up stairs to top floor",
    "tokens": [
      "The",
      "Invincible",
      "Hall"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/the-invincible-hall/"
  },
  {
    "value": "The Italian Charities of America",
    "formatted_address": "83-20 Queens Blvd, Elmhurst, NY 11373, USA",
    "latitude": "40.7368667",
    "longitude": "-73.8797491",
    "region": "1031",
    "notes": "Ground Floor\nat Van Loon St",
    "tokens": [
      "The",
      "Italian",
      "Charities",
      "of",
      "America"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/the-italian-charities-of-america/"
  },
  {
    "value": "The Jaywalker Club",
    "formatted_address": "945 Post Ave, Staten Island, NY 10302, USA",
    "latitude": "40.631994",
    "longitude": "-74.132111",
    "region": "959",
    "notes": "1st Floor Assembly Hall\nAt Clinton Avenuel",
    "tokens": [
      "The",
      "Jaywalker",
      "Club"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/the-jaywalker-club/"
  },
  {
    "value": "The Learning Center",
    "formatted_address": "4 W 43rd St, New York, NY 10036, USA",
    "latitude": "40.7542709",
    "longitude": "-73.9812596",
    "region": "1026",
    "notes": "Off of 5th Avenue",
    "tokens": [
      "The",
      "Learning",
      "Center"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/the-learning-center/"
  },
  {
    "value": "The New York New Church",
    "formatted_address": "114 E 35th St, New York, NY 10016, USA",
    "latitude": "40.7471876",
    "longitude": "-73.9801095",
    "region": "907",
    "notes": "2nd Floor\nBetween Park & Lexington Avenues",
    "tokens": [
      "The",
      "New",
      "York",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/the-new-york-new-church/"
  },
  {
    "value": "The North Presbyterian Church of Flushing",
    "formatted_address": "25-33 154th St, Flushing, NY 11354, USA",
    "latitude": "40.7743771",
    "longitude": "-73.8093506",
    "region": "930",
    "notes": "Church Downstairs Front Entrance\nBasement",
    "tokens": [
      "The",
      "North",
      "Presbyterian",
      "Church",
      "of",
      "Flushing"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/the-north-presbyterian-church-of-flushing/"
  },
  {
    "value": "The Plaxall Gallery",
    "formatted_address": "5-25 46th Ave, Long Island City, NY 11101, USA",
    "latitude": "40.7474496",
    "longitude": "-73.9541673",
    "region": "1079",
    "notes": "Enter through parking lot entrance; located in warehouse at LIC Flea and Food Market\n\nCOVID NOTES: Masks required.",
    "tokens": [
      "The",
      "Plaxall",
      "Gallery"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/the-plaxall-gallery/"
  },
  {
    "value": "The River Org Church",
    "formatted_address": "253 Ehrhardt Rd, Pearl River, NY 10965, USA",
    "latitude": "41.0725184",
    "longitude": "-74.004304",
    "region": "961",
    "notes": "",
    "tokens": [
      "The",
      "River",
      "Org",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/the-river-org-church/"
  },
  {
    "value": "The Sheen Center for Thought & Culture",
    "formatted_address": "18 Bleecker St, New York, NY 10012, USA",
    "latitude": "40.7253458",
    "longitude": "-73.9934249",
    "region": "912",
    "notes": "Entrance on Elizabeth St, sign in at desk, downstairs room D",
    "tokens": [
      "The",
      "Sheen",
      "Center",
      "for",
      "Thought",
      "Culture"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/the-sheen-center-for-thought-culture/"
  },
  {
    "value": "The White Plains Presbyterian Church",
    "formatted_address": "39 N Broadway, White Plains, NY 10601, USA",
    "latitude": "41.0369062",
    "longitude": "-73.7660289",
    "region": "995",
    "notes": "Barker Avenue, lower level choir room",
    "tokens": [
      "The",
      "White",
      "Plains",
      "Presbyterian",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/the-white-plains-presbyterian-church/"
  },
  {
    "value": "Theatre 80",
    "formatted_address": "80 St Marks Pl, New York, NY 10003, USA",
    "latitude": "40.727506",
    "longitude": "-73.9858391",
    "region": "912",
    "notes": "2nd Floor Between 1st & 2nd Avenues",
    "tokens": [
      "Theatre",
      "80"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/theatre-80/"
  },
  {
    "value": "Tillman Senior Center",
    "formatted_address": "630 Mother Gaston Blvd, Brooklyn, NY 11212, USA",
    "latitude": "40.6634179",
    "longitude": "-73.9059223",
    "region": "1074",
    "notes": "corner of Livonia Ave",
    "tokens": [
      "Tillman",
      "Senior",
      "Center"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/tillman-senior-center/"
  },
  {
    "value": "Tomkins Memorial Church",
    "formatted_address": "326 N Liberty Dr, Tomkins Cove, NY 10986, USA",
    "latitude": "41.2527309",
    "longitude": "-73.9854002",
    "region": "961",
    "notes": "Across from Free Hill Road",
    "tokens": [
      "Tomkins",
      "Memorial",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/tomkins-memorial-church/"
  },
  {
    "value": "Town Hall Annex",
    "formatted_address": "281 Phelps Ln, North Babylon, NY 11703, USA",
    "latitude": "40.7280022",
    "longitude": "-73.3305945",
    "region": "898",
    "notes": "Room 17\nAt Deer Park Avenue",
    "tokens": [
      "Town",
      "Hall",
      "Annex"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/town-hall-annex/"
  },
  {
    "value": "Trinity Baptist Church",
    "formatted_address": "808 E 224th St, Bronx, NY 10466, USA",
    "latitude": "40.885742",
    "longitude": "-73.857422",
    "region": "1098",
    "notes": "Basement\nbetween Barnes and Bronxwood Avenues",
    "tokens": [
      "Trinity",
      "Baptist",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/trinity-baptist-church/"
  },
  {
    "value": "Trinity Baptist Church",
    "formatted_address": "250 E 61st St, New York, NY 10065, USA",
    "latitude": "40.761931",
    "longitude": "-73.9641152",
    "region": "922",
    "notes": "Between 2nd & 3rd Avenues. Class Room B",
    "tokens": [
      "Trinity",
      "Baptist",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/trinity-baptist-church-3/"
  },
  {
    "value": "Trinity Church",
    "formatted_address": "130 Main St, Northport, NY 11768, USA",
    "latitude": "40.90023",
    "longitude": "-73.349511",
    "region": "898",
    "notes": "",
    "tokens": [
      "Trinity",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/trinity-church/"
  },
  {
    "value": "Trinity Episcopal Church",
    "formatted_address": "5 Chapel St, Garnerville, NY 10923, USA",
    "latitude": "41.2088912",
    "longitude": "-73.9926639",
    "region": "961",
    "notes": "",
    "tokens": [
      "Trinity",
      "Episcopal",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/trinity-episcopal-church-2/"
  },
  {
    "value": "Trinity Evangelist Lutheran Church",
    "formatted_address": "716 NY-25A, Rocky Point, NY 11778, USA",
    "latitude": "40.9461062",
    "longitude": "-72.9175614",
    "region": "898",
    "notes": "",
    "tokens": [
      "Trinity",
      "Evangelist",
      "Lutheran",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/trinity-evangelist-lutheran-church/"
  },
  {
    "value": "Trinity Grace Church Williamsburg",
    "formatted_address": "231 Ainslie St, Brooklyn, NY 11211, USA",
    "latitude": "40.713262",
    "longitude": "-73.9447455",
    "region": "1103",
    "notes": "up the stairs",
    "tokens": [
      "Trinity",
      "Grace",
      "Church",
      "Williamsburg"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/trinity-grace-church-williamsburg/"
  },
  {
    "value": "Trinity Lutheran Church",
    "formatted_address": "602 E 9th St, New York, NY 10009, USA",
    "latitude": "40.7260263",
    "longitude": "-73.9801554",
    "region": "912",
    "notes": "At Avenue B, 1st Floor",
    "tokens": [
      "Trinity",
      "Lutheran",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/trinity-lutheran-church-4/"
  },
  {
    "value": "Trinity Lutheran Church Meeting Hall",
    "formatted_address": "1 Husted Rd, Carmel Hamlet, NY 10512, USA",
    "latitude": "41.4136457",
    "longitude": "-73.6530219",
    "region": "901",
    "notes": "Use the Husted entrance from Old Route 6",
    "tokens": [
      "Trinity",
      "Lutheran",
      "Church",
      "Meeting",
      "Hall"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/trinity-lutheran-church-meeting-hall/"
  },
  {
    "value": "Trinity Methodist Church",
    "formatted_address": "113 Bay St, Bronx, NY 10464, USA",
    "latitude": "40.8479154",
    "longitude": "-73.7874201",
    "region": "909",
    "notes": "1st Floor Auditorium\nAt City Island Avenue",
    "tokens": [
      "Trinity",
      "Methodist",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/trinity-methodist-church/"
  },
  {
    "value": "Trinity Presbyterian Church",
    "formatted_address": "422 W 57th St, New York, NY 10019, USA",
    "latitude": "40.7681523",
    "longitude": "-73.986936",
    "region": "915",
    "notes": "Upstairs\nBetween 9th & 10th Avenues",
    "tokens": [
      "Trinity",
      "Presbyterian",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/trinity-presbyterian-church/"
  },
  {
    "value": "Trinity & St John's Episcopal Church",
    "formatted_address": "1142 Broadway, Woodmere, NY 11598, USA",
    "latitude": "40.6344316",
    "longitude": "-73.7046985",
    "region": "897",
    "notes": "",
    "tokens": [
      "Trinity",
      "St",
      "Johns",
      "Episcopal",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/trinity-st-johns-episcopal-church/"
  },
  {
    "value": "Twelfth Street Workshop",
    "formatted_address": "411 E 12th St, New York, NY 10009, USA",
    "latitude": "40.7298724",
    "longitude": "-73.9827759",
    "region": "912",
    "notes": "Basement\nBetween 1st Avenue & Avenue A",
    "tokens": [
      "Twelfth",
      "Street",
      "Workshop"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/twelfth-street-workshop/"
  },
  {
    "value": "Union Baptist Church",
    "formatted_address": "240 W 145th St, New York, NY 10039, USA",
    "latitude": "40.8220986",
    "longitude": "-73.9408904",
    "region": "950",
    "notes": "Between 7th & 8th Avenues",
    "tokens": [
      "Union",
      "Baptist",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/union-baptist-church/"
  },
  {
    "value": "Union Church of Pocantico Hills",
    "formatted_address": "555 Bedford Rd, Sleepy Hollow, NY 10591, USA",
    "latitude": "41.0956417",
    "longitude": "-73.8323569",
    "region": "1030",
    "notes": "At Route 448",
    "tokens": [
      "Union",
      "Church",
      "of",
      "Pocantico",
      "Hills"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/union-church-of-pocantico-hills/"
  },
  {
    "value": "Union Free Church",
    "formatted_address": "754 Ocean Breeze Walk, Ocean Beach, NY 11770, USA",
    "latitude": "40.6473091",
    "longitude": "-73.1550622",
    "region": "898",
    "notes": "Enter through the side entrance on Midway",
    "tokens": [
      "Union",
      "Free",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/union-free-church/"
  },
  {
    "value": "Union Presbyterian Church",
    "formatted_address": "44 Old Balmville Rd, Newburgh, NY 12550, USA",
    "latitude": "41.5255702",
    "longitude": "-74.0137351",
    "region": "921",
    "notes": "At Beech Street, Enter thru rear Parking Lot",
    "tokens": [
      "Union",
      "Presbyterian",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/union-presbyterian-church/"
  },
  {
    "value": "Unitarian Universalist Fellowship",
    "formatted_address": "6 Orchard St, Middletown, NY 10940, USA",
    "latitude": "41.4459016",
    "longitude": "-74.417625",
    "region": "921",
    "notes": "At East Main St",
    "tokens": [
      "Unitarian",
      "Universalist",
      "Fellowship"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/unitarian-universalist-fellowship/"
  },
  {
    "value": "United Church of Rockville Centre",
    "formatted_address": "430 Morris Ave, Rockville Centre, NY 11570, USA",
    "latitude": "40.66983",
    "longitude": "-73.635695",
    "region": "897",
    "notes": "Corner of Princeton Street",
    "tokens": [
      "United",
      "Church",
      "of",
      "Rockville",
      "Centre"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/united-church-of-rockville-centre/"
  },
  {
    "value": "United Church of Spring Valley",
    "formatted_address": "11 E Church St, Spring Valley, NY 10977, USA",
    "latitude": "41.1132997",
    "longitude": "-74.0432603",
    "region": "961",
    "notes": "",
    "tokens": [
      "United",
      "Church",
      "of",
      "Spring",
      "Valley"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/united-church-of-spring-valley/"
  },
  {
    "value": "United Methodist Church",
    "formatted_address": "1200 North Ave, New Rochelle, NY 10804, USA",
    "latitude": "40.9428247",
    "longitude": "-73.7951415",
    "region": "1010",
    "notes": "",
    "tokens": [
      "United",
      "Methodist",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/united-methodist-church/"
  },
  {
    "value": "United Methodist Church",
    "formatted_address": "1176 E Main St, Shrub Oak, NY 10588, USA",
    "latitude": "41.3284823",
    "longitude": "-73.8311495",
    "region": "903",
    "notes": "",
    "tokens": [
      "United",
      "Methodist",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/united-methodist-church-13/"
  },
  {
    "value": "United Methodist Church",
    "formatted_address": "3087 Ocean Ave, Brooklyn, NY 11235, USA",
    "latitude": "40.5859771",
    "longitude": "-73.9488731",
    "region": "1017",
    "notes": "Basement\nAt Voorhees Avenue",
    "tokens": [
      "United",
      "Methodist",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/united-methodist-church-14/"
  },
  {
    "value": "United Methodist Church",
    "formatted_address": "192 Broadway, Bethpage, NY 11714, USA",
    "latitude": "40.7374098",
    "longitude": "-73.4788438",
    "region": "897",
    "notes": "",
    "tokens": [
      "United",
      "Methodist",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/united-methodist-church-15/"
  },
  {
    "value": "United Methodist Church",
    "formatted_address": "1040 Main St, Peekskill, NY 10566, USA",
    "latitude": "41.2921626",
    "longitude": "-73.9177627",
    "region": "1043",
    "notes": "",
    "tokens": [
      "United",
      "Methodist",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/united-methodist-church-16/"
  },
  {
    "value": "United Methodist Church",
    "formatted_address": "35 Middle Neck Rd, Port Washington, NY 11050, USA",
    "latitude": "40.8489373",
    "longitude": "-73.6895995",
    "region": "897",
    "notes": "",
    "tokens": [
      "United",
      "Methodist",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/united-methodist-church-18/"
  },
  {
    "value": "United Methodist Church",
    "formatted_address": "482 Middle Rd, Bayport, NY 11705, USA",
    "latitude": "40.7362525",
    "longitude": "-73.0557005",
    "region": "898",
    "notes": "",
    "tokens": [
      "United",
      "Methodist",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/united-methodist-church-2/"
  },
  {
    "value": "United Methodist Church",
    "formatted_address": "134 I U Willets Rd, Albertson, NY 11507, USA",
    "latitude": "40.7703481",
    "longitude": "-73.6540719",
    "region": "897",
    "notes": "Between Willis Avenue & Searingtown Road",
    "tokens": [
      "United",
      "Methodist",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/united-methodist-church-3/"
  },
  {
    "value": "Bayside United Methodist Church",
    "formatted_address": "38-20 Bell Blvd, Bayside, NY 11361, USA",
    "latitude": "40.7659107",
    "longitude": "-73.7722066",
    "region": "930",
    "notes": "entrance on 213th street",
    "tokens": [
      "Bayside",
      "United",
      "Methodist",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/united-methodist-church-4/"
  },
  {
    "value": "United Methodist Church",
    "formatted_address": "130 Franklin Ave, Pearl River, NY 10965, USA",
    "latitude": "41.0581903",
    "longitude": "-74.0162871",
    "region": "961",
    "notes": "Main Floor\nAt John Street",
    "tokens": [
      "United",
      "Methodist",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/united-methodist-church-6/"
  },
  {
    "value": "United Methodist Church",
    "formatted_address": "470 E Meadow Ave, East Meadow, NY 11554, USA",
    "latitude": "40.7124368",
    "longitude": "-73.5581146",
    "region": "897",
    "notes": "Basement\nAt Horton Avenue\nCOVID Notes: 50 people max, Masks required, No coffee or kitchen, bring your own beverages and snacks.",
    "tokens": [
      "United",
      "Methodist",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/united-methodist-church-7/"
  },
  {
    "value": "United Methodist Church Lake Ronkonkoma",
    "formatted_address": "792 Hawkins Ave, Ronkonkoma, NY 11779, USA",
    "latitude": "40.8376266",
    "longitude": "-73.110665",
    "region": "898",
    "notes": "Basement of Church",
    "tokens": [
      "United",
      "Methodist",
      "Church",
      "Lake",
      "Ronkonkoma"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/united-methodist-church-8/"
  },
  {
    "value": "United Methodist Church",
    "formatted_address": "407 Main St, Farmingdale, NY 11735, USA",
    "latitude": "40.7300413",
    "longitude": "-73.4446324",
    "region": "897",
    "notes": "At Grant Avenue",
    "tokens": [
      "United",
      "Methodist",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/united-methodist-church-9/"
  },
  {
    "value": "United Methodist Church of Mt Kisco",
    "formatted_address": "300 E Main St, Mt Kisco, NY 10549, USA",
    "latitude": "41.2002241",
    "longitude": "-73.7254446",
    "region": "1012",
    "notes": "1st Floor Rear Entrance\nAt Smith Street",
    "tokens": [
      "United",
      "Methodist",
      "Church",
      "of",
      "Mt",
      "Kisco"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/united-methodist-church-of-mt-kisco/"
  },
  {
    "value": "United Methodist Church of Pleasantville",
    "formatted_address": "70 Bedford Rd, Pleasantville, NY 10570, USA",
    "latitude": "41.1433331",
    "longitude": "-73.7781555",
    "region": "1083",
    "notes": "Maple Hill",
    "tokens": [
      "United",
      "Methodist",
      "Church",
      "of",
      "Pleasantville"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/united-methodist-church-of-pleasantville/"
  },
  {
    "value": "United Presbyterian Church",
    "formatted_address": "511 Ridge Rd, Lyndhurst, NJ 07071, USA",
    "latitude": "40.8042045",
    "longitude": "-74.1222948",
    "region": "962",
    "notes": "At Page Avenue",
    "tokens": [
      "United",
      "Presbyterian",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/united-presbyterian-church/"
  },
  {
    "value": "Fourth Universalist Church",
    "formatted_address": "160 Central Park West, New York, NY 10023, USA",
    "latitude": "40.7787917",
    "longitude": "-73.9746006",
    "region": "896",
    "notes": "Downstairs in the classroom to the left of the gym",
    "tokens": [
      "Fourth",
      "Universalist",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/universalist-church/"
  },
  {
    "value": "University Settlement",
    "formatted_address": "273 Bowery, New York, NY 10002, USA",
    "latitude": "40.7237496",
    "longitude": "-73.992395",
    "region": "912",
    "notes": "",
    "tokens": [
      "University",
      "Settlement"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/university-settlement/"
  },
  {
    "value": "Upper Manhattan Mental Health Center",
    "formatted_address": "1727 Amsterdam Ave, New York, NY 10031, USA",
    "latitude": "40.8254215",
    "longitude": "-73.946911",
    "region": "949",
    "notes": "At 145th Street, First Floor Room 153\n\nCOVID NOTES: 20 person max. Face covering must be worn at all times. Sign in/Contact Tracing required",
    "tokens": [
      "Upper",
      "Manhattan",
      "Mental",
      "Health",
      "Center"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/upper-manhattan-mental-health-center/"
  },
  {
    "value": "Penn South",
    "formatted_address": "367 W 28th St, New York, NY 10001, USA",
    "latitude": "40.7494875",
    "longitude": "-73.9984144",
    "region": "1026",
    "notes": "at Ninth Avenue",
    "tokens": [
      "Penn",
      "South"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/upright-citizens-brigade-theatre-2/"
  },
  {
    "value": "US Merchant Marine Academy",
    "formatted_address": "300 Steamboat Rd, Great Neck, NY 11024, USA",
    "latitude": "40.8127699",
    "longitude": "-73.7588596",
    "region": "897",
    "notes": "@Steam Boat Road\nMariners Chapel\nBasement Lounge",
    "tokens": [
      "US",
      "Merchant",
      "Marine",
      "Academy"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/us-merchant-marine-academy/"
  },
  {
    "value": "VA Hospital",
    "formatted_address": "423 E 23rd St, New York, NY 10010, USA",
    "latitude": "40.7371823",
    "longitude": "-73.9767127",
    "region": "928",
    "notes": "At 1st Avenue. 1st Floor (Federal Building, Bring ID)",
    "tokens": [
      "VA",
      "Hospital"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/va-hospital/"
  },
  {
    "value": "Va Medical Center",
    "formatted_address": "130 W Kingsbridge Rd, Bronx, NY 10468, USA",
    "latitude": "40.868521",
    "longitude": "-73.9052721",
    "region": "1061",
    "notes": "Sedgwick & Webb Ave\n5th Floor",
    "tokens": [
      "Va",
      "Medical",
      "Center"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/va-medical-center/"
  },
  {
    "value": "Valhalla United Methodist Church",
    "formatted_address": "200 Columbus Ave, Valhalla, NY 10595, USA",
    "latitude": "41.0845855",
    "longitude": "-73.7769517",
    "region": "1086",
    "notes": "",
    "tokens": [
      "Valhalla",
      "United",
      "Methodist",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/valhalla-united-methodist-church/"
  },
  {
    "value": "Van Cortlandville Community Church",
    "formatted_address": "296 Locust Ave, Cortlandt, NY 10567, USA",
    "latitude": "41.3130455",
    "longitude": "-73.9009018",
    "region": "1043",
    "notes": "",
    "tokens": [
      "Van",
      "Cortlandville",
      "Community",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/van-cortlandville-community-church/"
  },
  {
    "value": "Veteran's Administration Hospital",
    "formatted_address": "96-0 Linden Blvd, Ozone Park, NY 11417, USA",
    "latitude": "40.6740329",
    "longitude": "-73.8405855",
    "region": "1003",
    "notes": "2nd Floor",
    "tokens": [
      "Veterans",
      "Administration",
      "Hospital"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/veterans-administration-hospital/"
  },
  {
    "value": "Veterans Residence",
    "formatted_address": "22 E 119th St, New York, NY 10035, USA",
    "latitude": "40.80203",
    "longitude": "-73.9442569",
    "region": "985",
    "notes": "2nd Floor\nBetween Madison & 5th Avenues",
    "tokens": [
      "Veterans",
      "Residence"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/veterans-residence/"
  },
  {
    "value": "VFW Hall",
    "formatted_address": "65 Lake Rd, Congers, NY 10920, USA",
    "latitude": "41.1496288",
    "longitude": "-73.938271",
    "region": "961",
    "notes": "",
    "tokens": [
      "VFW",
      "Hall"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/vfw-hall/"
  },
  {
    "value": "Rocco Moretto VFW Post 2348",
    "formatted_address": "31-35 41st St, Astoria, NY 11103, USA",
    "latitude": "40.7600018",
    "longitude": "-73.9170595",
    "region": "940",
    "notes": "Off Broadway",
    "tokens": [
      "Rocco",
      "Moretto",
      "VFW",
      "Post",
      "2348"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/vfw-post-2348/"
  },
  {
    "value": "Vineyard Church",
    "formatted_address": "251 Merrick Rd, Rockville Centre, NY 11570, USA",
    "latitude": "40.6566051",
    "longitude": "-73.6462702",
    "region": "897",
    "notes": "",
    "tokens": [
      "Vineyard",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/vineyard-church/"
  },
  {
    "value": "The Three Arts Building",
    "formatted_address": "340 W 85th St, New York, NY 10024, USA",
    "latitude": "40.7886377",
    "longitude": "-73.979937",
    "region": "896",
    "notes": "1st Flr, inside front entrance\nBetween West End Avenue & Riverside Drive",
    "tokens": [
      "The",
      "Three",
      "Arts",
      "Building"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/volunteers-of-america/"
  },
  {
    "value": "Wainscott Chapel",
    "formatted_address": "65 Wainscott Main St, Wainscott, NY 11975, USA",
    "latitude": "40.9346743",
    "longitude": "-72.2480606",
    "region": null,
    "notes": "COVID Notes: 16 people in person in the chapel. WiFi available outside for overflow.",
    "tokens": [
      "Wainscott",
      "Chapel"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/wainscott-chapel/"
  },
  {
    "value": "Waldwick United Methodist Church",
    "formatted_address": "25 Franklin Turnpike, Waldwick, NJ 07463, USA",
    "latitude": "41.009277",
    "longitude": "-74.118598",
    "region": "962",
    "notes": "",
    "tokens": [
      "Waldwick",
      "United",
      "Methodist",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/waldwick-united-methodist-church/"
  },
  {
    "value": "Wantagh Memorial Congregational Church",
    "formatted_address": "1845 Wantagh Ave, Wantagh, NY 11793, USA",
    "latitude": "40.6759018",
    "longitude": "-73.5087335",
    "region": "897",
    "notes": "Basement",
    "tokens": [
      "Wantagh",
      "Memorial",
      "Congregational",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/wantagh-memorial-congregational-church/"
  },
  {
    "value": "Warwick United Methodist Church",
    "formatted_address": "135 Forester Ave, Warwick, NY 10990, USA",
    "latitude": "41.2513037",
    "longitude": "-74.3500424",
    "region": "921",
    "notes": "",
    "tokens": [
      "Warwick",
      "United",
      "Methodist",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/warwick-united-methodist-church/"
  },
  {
    "value": "Wesley Chapel",
    "formatted_address": "134 Sullivan St, Wurtsboro, NY 12790, USA",
    "latitude": "41.5765748",
    "longitude": "-74.4856473",
    "region": "957",
    "notes": "",
    "tokens": [
      "Wesley",
      "Chapel"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/wesley-chapel/"
  },
  {
    "value": "Wesley United Methodist Church",
    "formatted_address": "619 Fenworth Blvd, Franklin Square, NY 11010, USA",
    "latitude": "40.7022354",
    "longitude": "-73.6623713",
    "region": "897",
    "notes": "",
    "tokens": [
      "Wesley",
      "United",
      "Methodist",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/wesley-united-methodist-church/"
  },
  {
    "value": "West End Collegiate Church",
    "formatted_address": "368 West End Ave, New York, NY 10024, USA",
    "latitude": "40.7831667",
    "longitude": "-73.9815482",
    "region": "896",
    "notes": "1st Floor @77th Street",
    "tokens": [
      "West",
      "End",
      "Collegiate",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/west-end-collegiate-church-2/"
  },
  {
    "value": "West End Community Center",
    "formatted_address": "91 Maryland Ave, Long Beach, NY 11561, USA",
    "latitude": "40.5875598",
    "longitude": "-73.696258",
    "region": "897",
    "notes": "",
    "tokens": [
      "West",
      "End",
      "Community",
      "Center"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/west-end-community-center/"
  },
  {
    "value": "West End Presbyterian Church",
    "formatted_address": "165 W 105th St, New York, NY 10025, USA",
    "latitude": "40.7997979",
    "longitude": "-73.9656429",
    "region": "896",
    "notes": "Basement At Amsterdam Avenue",
    "tokens": [
      "West",
      "End",
      "Presbyterian",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/west-end-presbyterian-church/"
  },
  {
    "value": "West Side YMCA",
    "formatted_address": "5 W 63rd St, New York, NY 10023, USA",
    "latitude": "40.7709272",
    "longitude": "-73.9805759",
    "region": "896",
    "notes": "Between CPW & Bway.",
    "tokens": [
      "West",
      "Side",
      "YMCA"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/west-side-ymca/"
  },
  {
    "value": "Westbury Friends School",
    "formatted_address": "550 Post Ave, Westbury, NY 11590, USA",
    "latitude": "40.766964",
    "longitude": "-73.5856409",
    "region": "897",
    "notes": "Corner of Jericho Turnpike",
    "tokens": [
      "Westbury",
      "Friends",
      "School"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/westbury-friends-school/"
  },
  {
    "value": "Westchester Methodist Church",
    "formatted_address": "2547 E Tremont Ave, Bronx, NY 10461, USA",
    "latitude": "40.8430614",
    "longitude": "-73.8485261",
    "region": "982",
    "notes": "Basement\n\nCOVID NOTES: 30 men - wear masks- temperatures taken- men only",
    "tokens": [
      "Westchester",
      "Methodist",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/westchester-methodist-church/"
  },
  {
    "value": "Western Recovery Services",
    "formatted_address": "62-7 Woodside Ave, Woodside, NY 11377, USA",
    "latitude": "40.7447834",
    "longitude": "-73.9020356",
    "region": "965",
    "notes": "Between 61st 62nd Street - 4th Floor",
    "tokens": [
      "Western",
      "Recovery",
      "Services"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/western-recovery-services/"
  },
  {
    "value": "Williams Institutional AME Church",
    "formatted_address": "2239 Adam Clayton Powell Jr Blvd, New York, NY 10027, USA",
    "latitude": "40.813059",
    "longitude": "-73.944757",
    "region": "950",
    "notes": "Entrance on 132nd Street. 2nd floor",
    "tokens": [
      "Williams",
      "Institutional",
      "AME",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/williams-inst-cme-church-2/"
  },
  {
    "value": "Williamsburg Amez Church",
    "formatted_address": "40 Howard Ave, Brooklyn, NY 11221, USA",
    "latitude": "40.687213",
    "longitude": "-73.921139",
    "region": "1084",
    "notes": "Second Floor",
    "tokens": [
      "Williamsburg",
      "Amez",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/williamsburg-amez-church/"
  },
  {
    "value": "Woodhull Hospital",
    "formatted_address": "720 Flushing Ave, Brooklyn, NY 11206, USA",
    "latitude": "40.7004844",
    "longitude": "-73.9438359",
    "region": "986",
    "notes": "5th Floor",
    "tokens": [
      "Woodhull",
      "Hospital"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/woodhull-hospital/"
  },
  {
    "value": "Woodrow Methodist Church",
    "formatted_address": "1075 Woodrow Rd, Staten Island, NY 10312, USA",
    "latitude": "40.5430939",
    "longitude": "-74.2007233",
    "region": "981",
    "notes": "",
    "tokens": [
      "Woodrow",
      "Methodist",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/woodrow-methodist-church/"
  },
  {
    "value": "Wyckoff Heights Medical Center",
    "formatted_address": "374 Stockholm St, Brooklyn, NY 11237, USA",
    "latitude": "40.704082",
    "longitude": "-73.9177493",
    "region": "1084",
    "notes": "(Corner of Wyckoff Avenue)\n5th Flr Conference Room",
    "tokens": [
      "Wyckoff",
      "Heights",
      "Medical",
      "Center"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/wyckoff-heights-medical-center/"
  },
  {
    "value": "YMCA Counseling Center",
    "formatted_address": "3911 Richmond Ave, Staten Island, NY 10312, USA",
    "latitude": "40.5429203",
    "longitude": "-74.1638529",
    "region": "981",
    "notes": "2nd Floor Off of Amboy Road",
    "tokens": [
      "YMCA",
      "Counseling",
      "Center"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/ymca-counseling-center/"
  },
  {
    "value": "Yonkers Family YMCA",
    "formatted_address": "17 Riverdale Ave, Yonkers, NY 10701, USA",
    "latitude": "40.9333648",
    "longitude": "-73.9002779",
    "region": "956",
    "notes": "At Hudson Street",
    "tokens": [
      "Yonkers",
      "Family",
      "YMCA"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/yonkers-family-ymca/"
  },
  {
    "value": "Yorktown First Presbyterian Church",
    "formatted_address": "2880 Crompond Rd, Yorktown Heights, NY 10598, USA",
    "latitude": "41.2946157",
    "longitude": "-73.8091632",
    "region": "903",
    "notes": "Rtes 35, 202, & 132",
    "tokens": [
      "Yorktown",
      "First",
      "Presbyterian",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/yorktown-first-presbyterian-church/"
  },
  {
    "value": "Yorktown Grange Fair Building",
    "formatted_address": "99 Moseman Rd, Yorktown Heights, NY 10598, USA",
    "latitude": "41.2688064",
    "longitude": "-73.7714464",
    "region": "903",
    "notes": "",
    "tokens": [
      "Yorktown",
      "Grange",
      "Fair",
      "Building"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/yorktown-grange-fair-building/"
  },
  {
    "value": "Yorktown Jewish Center",
    "formatted_address": "2966 Crompond Rd, Yorktown Heights, NY 10598, USA",
    "latitude": "41.2939863",
    "longitude": "-73.8130394",
    "region": "903",
    "notes": "Basement at Mohansic Avenue",
    "tokens": [
      "Yorktown",
      "Jewish",
      "Center"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/yorktown-jewish-center/"
  },
  {
    "value": "Young Israel of Scarsdale",
    "formatted_address": "1313 Weaver St, Scarsdale, NY 10583, USA",
    "latitude": "40.9763979",
    "longitude": "-73.7753426",
    "region": "951",
    "notes": "Side Entrance\nAt Corner of Daisy Farms Road",
    "tokens": [
      "Young",
      "Israel",
      "of",
      "Scarsdale"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/young-israel-of-scarsdale/"
  },
  {
    "value": "Memorial United Methodist Church",
    "formatted_address": "250 Bryant Ave, White Plains, NY 10601, USA",
    "latitude": "41.0218811",
    "longitude": "-73.7468986",
    "region": "995",
    "notes": "Gisondi's nook--Enter Through the Courtyard\n\nCOVID Notes: Arrive early MUMC required COVID_19 check-in, Masks required, no outside beverages or snacks, temperature checks, covid questionnaire filled out at check in. We have a new room \"Gisondi's nook\" lower courtyard room , Covid cleaned in-between each meeting, both by fogging & UV-C lights & hepa-airfilltering system... keurig coffee & tea at meeting site. Follow all listed MUMC guidelines.",
    "tokens": [
      "Memorial",
      "United",
      "Methodist",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/youth-room/"
  },
  {
    "value": "Zion Episcopal Church",
    "formatted_address": "243-1 Northern Blvd, Little Neck, NY 11362, USA",
    "latitude": "40.7654093",
    "longitude": "-73.7429805",
    "region": "1045",
    "notes": "At 234th Street & 44th Avenue",
    "tokens": [
      "Zion",
      "Episcopal",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/zion-episcopal-church/"
  },
  {
    "value": "Zion Episcopal Church",
    "formatted_address": "12 Saterlee Pl, Wappingers Falls, NY 12590, USA",
    "latitude": "41.5975479",
    "longitude": "-73.9187823",
    "region": "901",
    "notes": "East Main St",
    "tokens": [
      "Zion",
      "Episcopal",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/zion-episcopal-church-2/"
  },
  {
    "value": "Zion Evangelical Lutheran Church",
    "formatted_address": "125 Henry St, Brooklyn, NY 11201, USA",
    "latitude": "40.696779",
    "longitude": "-73.9929772",
    "region": "911",
    "notes": "Basement-Enter last door on right by sign. Between Clark & Pierrepont Streets",
    "tokens": [
      "Zion",
      "Evangelical",
      "Lutheran",
      "Church"
    ],
    "type": "location",
    "url": "https://www.nyintergroup.org/locations/zion-evangelical-lutheran-church/"
  }
]

var newArr = [];

var i;
for (i = 0; i < arr.length; i++) {
  var newObj = {},
      address = arr[i].formatted_address;

  if (address.includes('New York, NY')) {
    newObj.venue = arr[i].value;
    newObj.address = arr[i].formatted_address;
    newObj.lat = arr[i].latitude;
    newObj.long = arr[i].longitude;
    newObj.notes = arr[i].notes;
    newObj.region = arr[i].region;
    newObj.url = arr[i].url;

    newArr.push(newObj);
  }

}

console.log(newArr);