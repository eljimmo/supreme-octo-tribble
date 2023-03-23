
import React from "react";
import PropTypes from "prop-types";

import { scaleTime } from "d3-scale";
import { utcDay } from "d3-time";

import { ChartCanvas, Chart } from "react-stockcharts";
import { CandlestickSeries } from "react-stockcharts/lib/series";
import { XAxis, YAxis } from "react-stockcharts/lib/axes";
import { fitWidth } from "react-stockcharts/lib/helper";
import { last, timeIntervalBarWidth } from "react-stockcharts/lib/utils";

//  create a class component to render the chart
class CandleChart extends React.Component {
	  render() {
	const { type, data: initialData, width, ratio } = this.props;

	const xAccessor = (d) => d.date;
	const xExtents = [
	  xAccessor(last(initialData)),
	  xAccessor(initialData[initialData.length - 100]),
	];

	return (
	  <ChartCanvas
		height={400}
		ratio={ratio}
		width={width}
		margin={{ left: 70, right: 70, top: 20, bottom: 30 }}
		type={type}
		seriesName="MSFT"
		data={initialData}
		xAccessor={xAccessor}
		xScale={scaleTime()}
		xExtents={xExtents}
	  >
		<Chart id={1} yExtents={(d) => [d.high, d.low]}>
		  <XAxis axisAt="bottom" orient="bottom" />
		  <YAxis axisAt="right" orient="right" ticks={5} />

		  <CandlestickSeries />
		</Chart>
	  </ChartCanvas>
	);
  }
}

export default fitWidth(CandleChart);