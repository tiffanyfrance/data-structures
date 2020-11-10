## Week 10: Interface Designs

# Project 1: AA Map

I wanted to focus on the user and approach this one from a UX perspective. Therefore, I asked questions about how can the user find what they need as quickly as possible.

Basic design
<br />
<img src="map1.jpg" width="400px">

By Neighborhood
- extra click for users
- but may be a helpful navigation tool
<br />
<img src="map2.jpg" width="400px">

I know we are supposed to use leaflet, but wonder if maybe we can instead use something else? Mapbox, kepler, deckgl...

Deckgl - I don't know if this is possible in the layers, but it would be really neat to add a layer of color for the location of the building.
<br />
<img src="deckgl.png" width="400px">

Kepler - here is a mockup of how that might look in kepler:
<br />
<img src="kepler.png" width="400px">


# Project 2: Recovery Blog

Intitally for this project I wanted to write a daily poem, however because of a personal health issue, I decided to turn this into a visualization recording my recovery.

The fields include date, pain level, mood, and various medicines taken (through IV and orally) for the ~month that I was in recovery from emergency surgery.
<br />
<img src="recover.jpg"  width="400px">

- tooltips are the only interaction
- data will be mapped into line graphs and area charts that are curved into a layered ring. Pill numbers will be color coded and grouped by date. The circle represents days from Oct 1 - Nov 7.
- The first task is to figure out how to map the dates (which will need to be formmatted on output) into a circle. Once I know where the coordinates are (I am thinking I will need pythagorian therom to get the math right), I can layer the circles outward and place the line graph on an x axis.
- As seen in the picture
- Ideally I would like this to be a poster type visualization, but because its data structures my challenge will be able to make this nice looking on all device widths. My assumption about the user is that they will want to zoom and pan to see details.


# Project 3: Weather Sensor

I haven't recieved the magnetic field sensor yet so I am using the temperature/humidity gauge.
<br /><img src="weather.jpg" width="400px">

Interaction will be collective as seen in the multiple charts of this fivethirtyeight visualization: <a href="https://projects.fivethirtyeight.com/trump-approval-ratings/">https://projects.fivethirtyeight.com/trump-approval-ratings/</a>. 

