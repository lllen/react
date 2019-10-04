import React, { Component } from 'react';
import CanvasJSReact from '../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class LineChart extends Component {
	render() {
		const options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "light2", // "light1", "dark1", "dark2"
			title:{
				text: this.props.title
			},
			axisY: {
				title: "Bounce Rate",
				includeZero: false,
				suffix: "%"
			},
			axisX: {
				title: "Week of Year",
				prefix: "W",
				interval: 2
			},
			data: [{
				type: "line",
				toolTipContent: "Week {x}: {y}%",
				dataPoints: this.props.dataPoints
			}]
		}
		
		return (
		<div>
			<CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}

export default LineChart;                           