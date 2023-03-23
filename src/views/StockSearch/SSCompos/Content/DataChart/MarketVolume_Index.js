import Chart from "react-apexcharts";
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, Button,  } from 'reactstrap';
import { setSeries, setOptions } from './MarketVolume_Settings';
import "./style.css";


const MarketVolume_Chart = ({ data, priceChange }) => {
  const series = setSeries(data);
  const options = setOptions(priceChange);

  return (

    <section id="chart-section">

      <div >
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

export default MarketVolume_Chart;