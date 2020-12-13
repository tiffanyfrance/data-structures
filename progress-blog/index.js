const RAD_TO_DEG = 180 / Math.PI;

const width = 954;
const height = width;
const margin = 10;

const maxAngle = 2 * Math.PI * 0.9;
const innerRadius = width / 5;
const outerRadius = width / 2 - margin;
const outerRadiusData = outerRadius - 20;
const middleRadius = (innerRadius + outerRadiusData) / 2;

const format = d3.timeFormat('%b %d');

(async () => {
  window.data = await d3.csv('Process Blog.csv', d => {
    d = d3.autoType(d);
    d.dt = new Date(d.dt);
    return d;
  });

  data.sort((a, b) => a.dt - b.dt);

  let x = d3.scaleUtc()
    .domain(d3.extent(data, d => d.dt))
    .range([0, maxAngle]);

  let y = d3.scaleLinear()
    .domain([10, 0])
    .range([innerRadius, outerRadiusData]);

  let area = d3.areaRadial()
    .curve(d3.curveCatmullRom)
    .angle(d => ('angle' in d) ? d.angle : x(d.dt));

  const svg = d3.select('#viz').append('svg')
    .attr('viewBox', [-width / 2, -height / 2, width, height])
    .attr('stroke-linejoin', 'round')
    .attr('stroke-linecap', 'round');

  svg.append('defs')
    .html(`<radialGradient id="Gradient1">
             <stop offset="70%" stop-color="rgb(209, 60, 75)"/>
             <stop offset="100%" stop-color="rgb(253, 245, 172)"/>
           </radialGradient>`)

  svg.append('defs')
    .html(`<radialGradient id="Gradient2">
            <stop offset="90%" stop-color="rgb(216, 239, 159)"/>
            <stop offset="100%" stop-color="rgb(131, 204, 165)"/>
          </radialGradient>`)


  const halfAngle = ((maxAngle) / data.length) / 2;

  let dividerGroup = svg.append('g');

  dividerGroup.selectAll('.divider')
    .data(data)
    .enter()
    .append('path')
    .attr('class', 'divider')
    .attr('stroke', '#000')
    .attr('stroke-opacity', 0.1)
    .attr('d', d => `
            M${d3.pointRadial(x(d.dt), innerRadius + 130)}
            L${d3.pointRadial(x(d.dt), outerRadius)}
          `)

  dividerGroup.append('path')
    .attr('class', 'divider')
    .attr('stroke', '#000')
    .attr('stroke-opacity', 0.1)
    .attr('d', d => `
          M${d3.pointRadial(maxAngle + halfAngle + halfAngle, innerRadius + 130)}
          L${d3.pointRadial(maxAngle + halfAngle + halfAngle, outerRadius)}
        `)

  svg.append('g')
    .selectAll('.divider-text')
    .data(data)
    .enter()
    .append('text')
    .attr('class', 'divider-text')
    .attr('y', -(outerRadius * 0.82))
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

  let arc = d3.arc()
    .innerRadius(middleRadius)
    .outerRadius(middleRadius);

  // svg.append('path')
  //   .attr('fill', 'none')
  //   .attr('stroke', '#000')
  //   .attr('stroke-opacity', 0.2)
  //   .attr('d', arc({ startAngle: 0, endAngle: maxAngle + halfAngle + halfAngle }))

  svg.append('circle')
    .attr('r', 4)
    .attr('fill', 'red')
})();