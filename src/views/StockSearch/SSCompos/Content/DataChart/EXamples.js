import React, { useEffect, useState } from 'react';
import Chart from "react-apexcharts";
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts/highstock';
const MyCharts = () => {
  const [averageTemp, setAverageTemp] = useState([]);
  const [date, setDate] = useState([]);


// 1st part
  useEffect(() => {
    const getData = async () => {
    const url = 'https://cloud.iexapis.com/stable/stock/spy/chart/2y?token=sk_09c6971dee1a4d28801956d73a114c5a';
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setAverageTemp(data?.map((item) => item.high));
      setDate(data?.map((item) => item.date)); 
    } catch (error) {
        console.log(error);
    }
  };
    getData();
  }, []);
// 2nd part
 const series = [ //data on the y-axis
    {
      name: "High",
      data: averageTemp
    },
  ];
  const options = { //data on the x-axis
  chart: { id: 'bar-chart'},
  xaxis: {
    categories: date
  },
};

    const options2 = {
      rangeSelector: {
        selected: 4,
      },

      title: {
        // text: `${graphTitle} stock market`,
      },

      tooltip: {
        style: {
          width: '200px',
        },
        valueDecimals: 4,
        shared: true,
      },

      yAxis: {
        title: {
          text: 'stock value',
        },
      }, fillColor: { linearGradient: [205, 0, 0, 300], stops: [[0, 'rgb(255, 255, 255)'], [1, 'rgb(240, 240, 255)']] },
      xaxis: {
        categories: date
      },
      series,
      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 300,
            },
          },
        ],
      },

    };

// 3rd part
return (



    <div>

      {/* <Chart
        options={options}
        series={series}
        type="bar"
        width="100%"      /> */}

      <HighchartsReact
        highcharts={Highcharts}
        options={options2}
        constructorType={'stockChart'}
        />
    </div> 
    );
  };

export default MyCharts;
