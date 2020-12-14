
let data = [
	[
		{ date: 'Tue Mar 24 2015 00:00:00 GMT-0400', value: 30 },
		{ date: 'Tue Mar 24 2015 02:00:00 GMT-0400', value: 40 },
		{ date: 'Tue Mar 24 2015 04:00:00 GMT-0400', value: 55 },
		{ date: 'Tue Mar 24 2015 06:00:00 GMT-0400', value: 60 },
		{ date: 'Tue Mar 24 2015 08:00:00 GMT-0400', value: 70 },
		{ date: 'Tue Mar 24 2015 10:00:00 GMT-0400', value: 80 },
		{ date: 'Tue Mar 24 2015 12:00:00 GMT-0400', value: 75 },
		{ date: 'Tue Mar 24 2015 14:00:00 GMT-0400', value: 60 },
		{ date: 'Tue Mar 24 2015 16:00:00 GMT-0400', value: 52 }
	],
	[
		{ date: 'Wed Mar 25 2015 00:00:00 GMT-0400', value: 40 },
		{ date: 'Wed Mar 25 2015 02:00:00 GMT-0400', value: 50 },
		{ date: 'Wed Mar 25 2015 04:00:00 GMT-0400', value: 55 },
		{ date: 'Wed Mar 25 2015 06:00:00 GMT-0400', value: 60 },
		{ date: 'Wed Mar 25 2015 08:00:00 GMT-0400', value: 70 },
		{ date: 'Wed Mar 25 2015 10:00:00 GMT-0400', value: 70 },
		{ date: 'Wed Mar 25 2015 12:00:00 GMT-0400', value: 75 },
		{ date: 'Wed Mar 25 2015 14:00:00 GMT-0400', value: 60 },
		{ date: 'Wed Mar 25 2015 16:00:00 GMT-0400', value: 42 }
	],
	[
		{ date: 'Thu Mar 26 2015 00:00:00 GMT-0400', value: 45 },
		{ date: 'Thu Mar 26 2015 02:00:00 GMT-0400', value: 55 },
		{ date: 'Thu Mar 26 2015 04:00:00 GMT-0400', value: 57 },
		{ date: 'Thu Mar 26 2015 06:00:00 GMT-0400', value: 62 },
		{ date: 'Thu Mar 26 2015 08:00:00 GMT-0400', value: 75 },
		{ date: 'Thu Mar 26 2015 10:00:00 GMT-0400', value: 72 },
		{ date: 'Thu Mar 26 2015 12:00:00 GMT-0400', value: 75 },
		{ date: 'Thu Mar 26 2015 14:00:00 GMT-0400', value: 70 },
		{ date: 'Thu Mar 26 2015 16:00:00 GMT-0400', value: 65 }
	]
];


let margin = { top: 20, right: 30, bottom: 30, left: 40 },
	width = 500 - margin.left - margin.right,
	height = 300 - margin.top - margin.bottom;

let total = 0;
let count = 0;
let max = 0;
let min = 100;
for (let item of data) {
	for (let item2 of item) {
		total += item2.value;
		count += 1;
		max = (item2.value > max) ? item2.value : max;
		min = (item2.value < min) ? item2.value : min;
	}
}

mean = total / count;

const tooltip = d3.select('body').append('div')
      .attr('class', 'svg-tooltip');

for (var day of data) {
	let svg = d3.select("#viz").append("svg")
		.attr('width', width)
		.attr('height', height)

	let x = d3.scaleUtc()
		.domain(d3.extent(day, d => new Date(d.date)))
		.range([margin.left, width - margin.right]);

	let y = d3.scaleLinear()
		.domain(([min, max])).nice()
		.range([height - margin.bottom, margin.top]);

	let xAxis = g => g
		.attr('class', 'x-axis')
		.call(d3.axisBottom(x)
			.ticks(5)
			.tickSizeOuter(0)
			.tickFormat(d3.timeFormat("%I %p")));

	let yAxis = g => g
		.attr("transform", `translate(${margin.left},0)`)
		.attr('class', 'y-axis')
		.call(d3.axisLeft(y).tickValues([20, 30, 40, 50, 60, 70, 80, 90]));

	let line = d3.line()
		.curve(d3.curveCardinal)
		.x(d => x(new Date(d.date)))
		.y(d => y(d.value));

	svg.append("g")
		.call(xAxis)
		.attr("transform", `translate(0,${((height - margin.bottom) / 2)})`);

	svg.append("g")
		.call(yAxis);

	svg.append("path")
		.datum(day)
		.attr("fill", "none")
		.attr("stroke", "steelblue")
		.attr("stroke-width", 2)
		.attr("stroke-linejoin", "round")
		.attr("stroke-linecap", "round")
		.attr("d", line)
		.on('mouseover', function (e, d) {
			// tooltip.style('visibility', 'visible');

			// // let bisectDate = d3.bisector(d => new Date(d.date)).right;
			// // let mouseDate = x.invert(d3.pointer(e)[0]);
			// // let closest = data[bisectDate(data, mouseDate)];
			
			// console.log(d)
			// tooltip
			// 	.style('top', (e.pageY - 10) + 'px')
			// 	.style('left', (e.pageX + 10) + 'px')
			// 	.html(d);
			// 	// .html(`${state.provinceState}<br>${closest.date}<br>${closest.count}`);
		})
		.on('mouseout', function () {
			tooltip.style('visibility', 'hidden')
		})
	
}

