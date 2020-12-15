const RAD_TO_DEG = 180 / Math.PI;

const width = 954;
const height = width;
const margin = 50;

const maxAngle = 2 * Math.PI * 0.9;
const innerRadius = width / 5;
const outerRadius = width / 2 - margin;
const outerRadiusData = outerRadius - 20;
const textRadius = outerRadius * 0.82;
const medicineRadius = outerRadius * 0.91;
const middleRadius = (innerRadius + outerRadiusData) / 2;

const format = d3.timeFormat('%b %d');

let halfAngle;

let x = d3.scaleUtc()
  .range([0, maxAngle]);

let y = d3.scaleLinear()
  .domain([10, 0])
  .range([innerRadius, outerRadiusData]);

let svg;

(async () => {
  window.data = await d3.csv('Process Blog.csv', d => {
    d = d3.autoType(d);
    d.dt = new Date(d.dt);
    return d;
  });

  data.sort((a, b) => a.dt - b.dt);

  x.domain(d3.extent(data, d => d.dt))

  let area = d3.areaRadial()
    .curve(d3.curveCatmullRom)
    .angle(d => ('angle' in d) ? d.angle : x(d.dt));

  svg = d3.select('#viz').append('svg')
    .attr('viewBox', [-width / 2, -height / 2, width, height])
    .attr('stroke-linejoin', 'round')
    .attr('stroke-linecap', 'round');

  // <radialGradient id="Gradient1">
  //    <stop offset="70%" stop-color="rgb(209, 60, 75)"/>
  //    <stop offset="100%" stop-color="rgb(253, 245, 172)"/>
  //  </radialGradient>
  // <radialGradient id="Gradient2">
  //   <stop offset="90%" stop-color="rgb(216, 239, 159)"/>
  //   <stop offset="100%" stop-color="rgb(131, 204, 165)"/>
  // </radialGradient>

  // <stop offset="70%" stop-color="hsl(10, 50%, 50%)"/>
  // <stop offset="100%" stop-color="hsl(60, 80%, 50%)"/>

  // <stop offset="90%" stop-color="hsl(70, 80%, 50%)"/>
  // <stop offset="100%" stop-color="hsl(120, 50%, 50%)"/>

  // svg.append('defs')
  //   .html(`<radialGradient id="Gradient1">
  //            <stop offset="70%" stop-color="#F17098"/>
  //            <stop offset="100%" stop-color="#FFDF9F"/>
  //          </radialGradient>`)

  // svg.append('defs')
  //   .html(`<radialGradient id="Gradient2">
  //           <stop offset="90%" stop-color="#B7F8DB"/>
  //           <stop offset="100%" stop-color="#50c9c3"/>
  //         </radialGradient>`)

  // svg.append('defs')
  //   .html(`<radialGradient id="Gradient1">
  //           <stop offset="70%" stop-color="hsl(10, 50%, 50%)"/>
  //           <stop offset="100%" stop-color="hsl(60, 80%, 50%)"/>
  //          </radialGradient>`)

  // svg.append('defs')
  //   .html(`<radialGradient id="Gradient2">
  //           <stop offset="90%" stop-color="hsl(70, 80%, 50%)"/>
  //           <stop offset="100%" stop-color="hsl(120, 50%, 50%)"/>
  //         </radialGradient>`)

  svg.append('defs')
    .html(`<radialGradient id="Gradient1">
              <stop offset="70%" stop-color="hsl(10, 50%, 50%)"/>
              <stop offset="100%" stop-color="hsl(60, 80%, 70%)"/>
           </radialGradient>`)

  svg.append('defs')
    .html(`<radialGradient id="Gradient2">
              <stop offset="90%" stop-color="#fee140"/>
              <stop offset="100%" stop-color="hsl(100, 50%, 60%)"/>
            </radialGradient>`)

  halfAngle = ((maxAngle) / data.length) / 2;

  const hospitalDays = [
    '2020-10-07',
    '2020-10-08',
    '2020-10-09',
    '2020-10-10',
    '2020-10-11',
    '2020-10-12',
    '2020-10-13',
    '2020-10-18',
    '2020-10-31',
  ];

  let hospitalData = data.filter(d => {
    let str = d.dt.toISOString().substr(0, 10);
    return hospitalDays.includes(str);
  });

  let arc = d3.arc()
    .innerRadius(middleRadius)
    .outerRadius(outerRadius);

  svg.append('g')
    .selectAll('path')
    .data(hospitalData)
    .enter()
    .append('path')
    .attr('fill', '#EADA8C')
    .attr('opacity', 0.15)
    .attr('d', d => arc({ startAngle: x(d.dt), endAngle: x(d.dt) + halfAngle + halfAngle + 0.0015 }))

  let dividerGroup = svg.append('g');

  dividerGroup.selectAll('.divider')
    .data(data)
    .enter()
    .append('path')
    .attr('class', 'divider')
    .attr('stroke', '#000')
    .attr('stroke-opacity', 0.1)
    .attr('d', d => `
            M${d3.pointRadial(x(d.dt), innerRadius + 110)}
            L${d3.pointRadial(x(d.dt), outerRadius)}
          `)

  dividerGroup.append('path')
    .attr('class', 'divider')
    .attr('stroke', '#000')
    .attr('stroke-opacity', 0.1)
    .attr('d', d => `
          M${d3.pointRadial(maxAngle + halfAngle + halfAngle, innerRadius + 110)}
          L${d3.pointRadial(maxAngle + halfAngle + halfAngle, outerRadius)}
        `)

  svg.append('g')
    .selectAll('.divider-text')
    .data(data)
    .enter()
    .append('text')
    .attr('class', 'divider-text')
    .attr('y', -(textRadius))
    .attr('text-anchor', 'middle')
    .attr('transform', d => `rotate(${(x(d.dt) + halfAngle) * RAD_TO_DEG})`)
    .text(d => format(d.dt))

  let hurtData = data.map(d => {
    let result = d;

    if (d.pain <= 5) {
      result = {
        pain: 5,
        dt: d.dt
      };
    }

    return result;
  });

  hurtData.unshift({
    pain: 5,
    angle: -halfAngle,
  });

  svg.append('path')
    .attr('fill', 'lightcoral')
    .attr("fill", "url(#Gradient1)")
    .attr('fill-opacity', 1)
    .attr('transform', `rotate(${halfAngle * RAD_TO_DEG})`)
    .attr('d', area
      .innerRadius(middleRadius)
      .outerRadius(d => y(d.pain))
      (hurtData));

  let lessHurtData = data.map(d => {
    let result = d;

    if (d.pain > 5) {
      result = {
        pain: 5,
        dt: d.dt
      };
    }

    return result;
  });

  lessHurtData.push({
    pain: 5,
    angle: maxAngle + halfAngle,
  });

  svg.append('path')
    .attr('fill', 'lightgreen')
    .attr("fill", "url(#Gradient2)")
    .attr('fill-opacity', 1)
    .attr('transform', `rotate(${halfAngle * RAD_TO_DEG})`)
    .attr('d', area
      .innerRadius(middleRadius)
      .outerRadius(d => y(d.pain))
      (lessHurtData));

  buildMedicine(data);


  svg.append('foreignObject')
    .attr('width', 100)
    .attr('height', 50)
    .attr('x', -500)
    .attr('y', -40)
    .html('Hospital<br/>ER')

  svg.append('foreignObject')
    .attr('width', 100)
    .attr('height', 50)
    .attr('x', 120)
    .attr('y', 410)
    .html('Hospital')

  svg.append('foreignObject')
    .attr('width', 100)
    .attr('height', 50)
    .attr('x', 340)
    .attr('y', -250)
    .html('Surgery<br/>Date')

  svg.append('foreignObject')
    .attr('width', 100)
    .attr('height', 50)
    .attr('x', 380)
    .attr('y', 150)
    .html('Released<br/>from<br/>Hospital')

})();

function buildMedicine(data) {
  let nodes = [];

  for (let d of data) {
    let point = d3.pointRadial(x(d.dt) + halfAngle, medicineRadius);

    addMedicine(nodes, d, 'morphine', point, 6, 1);
    addMedicine(nodes, d, 'toradol', point, 6, 1);
    addMedicine(nodes, d, 'oxycodone', point, 5, 0.75);
    addMedicine(nodes, d, 'tylenol', point, 4, 0.5);
    addMedicine(nodes, d, 'advil', point, 4, 0.5);
  }

  let g = svg.append('g');

  let simulation = d3.forceSimulation(nodes)
    .force('collision', d3.forceCollide().radius(d => d.radius))
    .force('x', d3.forceX().x(d => d.xValue))
    .force('y', d3.forceY().y(d => d.yValue))

  simulation.on('tick', () => {
    let item = g
      .attr('fill', '#e66300')
      .attr('stroke', '#fff')
      .attr('stroke-width', 1.5)
      .selectAll('circle')
      .data(nodes)

    item.enter()
      .append('circle')
      .attr('r', (d) => d.radius)
      .style('opacity', d => d.opacity)
      .merge(item)
      .attr('cx', d => d.x)
      .attr('cy', d => d.y)
  })
}

function addMedicine(nodes, d, name, point, radius, opacity) {
  for (let i = 0; i < d[name]; i++) {
    nodes.push({
      name,
      radius,
      opacity,
      xValue: point[0],
      yValue: point[1],
      x: point[0] + getRandom(-8, 8),
      y: point[1] + getRandom(-8, 8)
    });
  }
}

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}