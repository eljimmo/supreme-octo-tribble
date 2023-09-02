import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Plot from "react-plotly.js";

const StockChart = () => {
  const { ticker } = useParams();
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        const response = await fetch(
          `https://cloud.iexapis.com/stable/stock/${ticker}/chart/1m?token=sk_09c6971dee1a4d28801956d73a114c5a`
        );
        const data = await response.json();
        setChartData(data.map((d) => ({ x: d.date, y: d.close })));
      } catch (error) {
        console.error("Error fetching chart data:", error);
      }
    };

    fetchChartData();
  }, [ticker]);

  return (
    <div className="container full-width">
      <h2>Stock Chart for {ticker}</h2>
      <Plot
        data={[
          {
            x: chartData.map((d) => d.x),
            y: chartData.map((d) => d.y),
            type: "scatter",
            mode: "lines+markers",
            marker: { color: "#8884d8" },
          },
        ]}
        layout={{
          width: window.innerWidth - 50,
          height: 300,
          margin: { t: 5, r: 30, l: 20, b: 5 },
          xaxis: { title: "Date" },
          yaxis: { title: "Close Price" },
          legend: { orientation: "h" },
        }}
      />
    </div>
  );
};

export default StockChart;
