import { unixToDateString } from "../../../utils/date";
import moment from "moment";

const setSeries = (data) => {
  const series = [
    {
          name: 'marketChangeOverTime',
          data: data.map((minutebar, index) => {
            // If the minutebar's closing value is null, use the previous non-null closing value
            if (minutebar.marketChangeOverTime === null && index !== 0) {
              minutebar.marketChangeOverTime = data[index - 1].marketChangeOverTime;
            }
            const datetime =
              Number(moment(`${minutebar.date} ${minutebar.minute}`).format("x")) -
              3 * 60 * 60 * 1000; // Subtract 3 hours in milliseconds to get Pacific time from Eastern time
            return [datetime, minutebar.marketChangeOverTime];
          }),
        },
      ];
      return series;
    };



  const setOptions = (priceChange) => {
      const colorBullish = "#00873c";
      const colorBearish = "#eb0f29";
      const chartColor = priceChange > 0 ? colorBullish : colorBearish;
    
      return {
    chart: {
      height: 350,
      type: 'area',
    },
    title: {
      text: 'Day Market Change Over Time Chart',
      align: 'center'
    },
    stroke: {
      width: [3, 1]
    },
    tooltip: {
      shared: true,
      custom: [function({seriesIndex, dataPointIndex, w}) {
        return w.globals.series[seriesIndex][dataPointIndex]
      }, function({ seriesIndex, dataPointIndex, w }) {
        var o = w.globals.seriesCandleO[seriesIndex][dataPointIndex]
        var h = w.globals.seriesCandleH[seriesIndex][dataPointIndex]
        var l = w.globals.seriesCandleL[seriesIndex][dataPointIndex]
        var c = w.globals.seriesCandleC[seriesIndex][dataPointIndex]
        return (
          ''
        )
      }]
    },
    xaxis: {
      type: 'datetime'
    },
    grid: {
      show: true,
      xaxis: {
        lines: { show: true },
      },
      yaxis: {
        lines: { show: true },
      },
    },
    stroke: {
      colors: [chartColor],
      width: 2,
    },
    fill: {
      type: "solid",
      colors: [chartColor],
      opacity: 0.3,
    },
    markers: {
      size: 0,
      colors: ["black"],
      strokeWidth: 0,
      showNullDataPoints: false,
      hover: {
        size: 4,
      },
      
      tooltip: {
        enabled: false,
        colors: ["red"],
      },
    },
  }
}

export { setSeries, setOptions };