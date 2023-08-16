// Import necessary libraries and components
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import setChartData from "../../"; 


const LineChart = () => {
    const [data3, chartData] = useState([]);

    return (
        <div className="container full-width">
          <h2>Stock Chart for {ticker}</h2>
          <LineChart
            // Set the chart width based on the window width
            width={window.innerWidth - 50}
            height={300}
            data={chartData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="close"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </div>
      );
    };
    
    export default StockChart;
            
    