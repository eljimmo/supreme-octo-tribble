import Chart from "react-apexcharts";
import { setSeries, setOptions } from './MarketChangeOverTime_settings';
import "./style.css";


const MarketChangeOverTimeChart  = ({ data, priceChange }) => {
  const series = setSeries(data);
  const options = setOptions(priceChange);

  return (
    <section id="chart-section">
      <div>
      <Chart
        options={options}
        series={series}
        type="area"
        height={450}
        width="100%"
      />
      </div>
    </section>

      
    
  );
};

export default MarketChangeOverTimeChart;