(async () => {
	let allData = await fetch('sensor.json');
	allData = await allData.json();

	allData = allData.filter(d => d.sensortemp < 200);

	for (let i = 1; i < allData.length; i++) {
		let diff = Math.abs(allData[i].sensortemp - allData[i - 1].sensortemp) / allData[i - 1].sensortemp;

		if (diff > 0.1) {
			allData.splice(i, 1);
			i--;
		}
	}

	let max = d3.max(allData, d => d.sensortemp);
	console.log('max', max);

	let min = d3.min(allData, d => d.sensortemp);
	console.log('min', min);

	let mean = d3.mean(allData, d => d.sensortemp);
	console.log('mean', mean);

	let dataMap = {};

	for (let d of allData) {
		let date = d.sensortime.substr(0, 10);

		let arr = dataMap[date];

		if (!arr) {
			arr = [];
			dataMap[date] = arr;
		}

		arr.push(d);
	}

	let dataByDate = [];

	for (let date in dataMap) {
		dataByDate.push({
			date,
			data: dataMap[date]
		});
	}

	console.log(dataByDate);

	window.foo = dataByDate;


	let margin = { top: 40, right: 20, bottom: 20, left: 20 },
		width = 250 - margin.left - margin.right,
		height = 200 - margin.top - margin.bottom;

	const tooltip = d3.select('body').append('div')
		.attr('class', 'svg-tooltip');

	for (let dbd of dataByDate) {
		let day = dbd.data;

		let svg = d3.select("#viz").append("svg")
			.attr('width', width + margin.left + margin.right)
			.attr('height', height + margin.top + margin.bottom)
			.append('g')
			.attr('transform', `translate(0,${margin.top})`)

		svg.append('text')
			.text(d => dbd.date)
			.attr('x', 0)
			.attr('y', -10)
			.attr('width', 100)
			.attr('height', 20)

		let x = d3.scaleUtc()
			.domain(d3.extent(day, d => new Date(d.sensortime)))
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
			.x(d => x(new Date(d.sensortime)))
			.y(d => y(d.sensortemp));

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

				console.log(d)
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

})();
