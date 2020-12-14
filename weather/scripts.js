(async () => {
	let allData = await fetch('sensor.json');
	allData = await allData.json();

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

		d.sensortime = new Date(d.sensortime);

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


	let margin = { top: 40, right: 20, bottom: 20, left: 20 },
		width = 250 - margin.left - margin.right,
		height = 200 - margin.top - margin.bottom;

	let mouseMoves = [];



	let formatDate = d3.timeFormat("%b %d, %Y");

	for (let dbd of dataByDate) {
		let day = dbd.data;

		let realSvg = d3.select('#viz').append('svg')
			.attr('width', width + margin.left + margin.right)
			.attr('height', height + margin.top + margin.bottom);


		let svg = realSvg.append('g')
			.attr('transform', `translate(0,${margin.top})`)

		let newDate = new Date(dbd.date);
	
		svg.append('text')
			.text(formatDate(newDate))
			.attr('class', 'date')
			.attr('x', 0)
			.attr('y', -15)
			.attr('width', 100)
			.attr('height', 20)

		let x = d3.scaleUtc()
			.domain(d3.extent(day, d => d.sensortime))
			.range([margin.left, width - margin.right]);

		let y = d3.scaleLinear()
			.domain(([min, max])).nice()
			.range([height - margin.bottom, margin.top]);

		let xAxis = g => g
			.attr('class', 'x-axis')
			.call(d3.axisBottom(x)
				.ticks(5)
				.tickSizeOuter(0)
				.tickFormat(d3.utcFormat("%I %p")));

		let yAxis = g => g
			.attr('transform', `translate(${margin.left},0)`)
			.attr('class', 'y-axis')
			.call(d3.axisLeft(y).tickValues([20, 30, 40, 50, 60, 70, 80, 90]));

		let verticalLine = svg.append('line')
			.attr('class', 'vertical-line')
			.attr('x1', 0)
			.attr('y1', 0)
			.attr('x2', 0)
			.attr('y2', height)
			.style('stroke-dasharray', ('3, 3'))
			.style('stroke-opacity', 0.9)
			.style('stroke', '#333')
			.style('display', 'none');

		let line = d3.line()
			.curve(d3.curveCardinal)
			.x(d => x(d.sensortime))
			.y(d => y(d.sensortemp));

		svg.append('g')
			.call(xAxis)
			.attr('transform', `translate(0,${((height - margin.bottom) / 2)})`);

		svg.append('g')
			.call(yAxis);

		svg.append('path')
			.datum(day)
			.attr('fill', 'none')
			.attr('stroke', 'steelblue')
			.attr('stroke-width', 2)
			.attr('stroke-linejoin', 'round')
			.attr('stroke-linecap', 'round')
			.attr('d', line);

		let tooltip = svg.append('g')
			.attr('class', 'tooltip')
			.style('display', 'none');

		tooltip.append('rect')
			.attr('x', -27)
			.attr('width', 54)
			.attr('y', -32)
			.attr('height', 24)
			.attr('fill', 'white');

		let topText = tooltip.append('text')
			.attr('y', -28);

		let bottomText = tooltip.append('text')
			.attr('y', -12);

		tooltip.append('circle')
			.attr('r', 2.5)
			.attr('stroke', '#333')

		realSvg
			.on('mousemove', e => {
				if (e.offsetX < x.range()[0] || e.offsetX > x.range()[1]) {
					d3.selectAll('.tooltip').style('display', 'none');
					d3.selectAll('.vertical-line').style('display', 'none');
				} else {
					for (let mm of mouseMoves) {
						mm(e);
					}
				}
			})
			.on('mouseout', () => {
				d3.selectAll('.tooltip').style('display', 'none');
				d3.selectAll('.vertical-line').style('display', 'none');
			})

		mouseMoves.push((e) => {
			let nearest = bisect(day, x.invert(e.offsetX));

			if (!nearest) {
				return;
			}

			topText.text(d3.utcFormat('%I:%M %p')(nearest.sensortime));
			bottomText.text(`${Math.round(nearest.sensortemp)}°F`);

			let posX = x(nearest.sensortime);

			tooltip.attr('transform', `translate(${posX},${y(nearest.sensortemp)})`)
				.style('display', null);

			verticalLine.attr('x1', posX)
				.attr('x2', posX)
				.style('display', null);
		});
	}

	const bisectDate = d3.bisector(d => d.sensortime).left;

	function bisect(data, date) {
		const i = bisectDate(data, date, 1);
		const a = data[i - 1], b = data[i];

		if (!a || !b) {
			return null;
		}

		return date - a.sensortime > b.sensortime - date ? b : a;
	}

})();