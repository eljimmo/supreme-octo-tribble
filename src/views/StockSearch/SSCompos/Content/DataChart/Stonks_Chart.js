

import Chart from "react-apexcharts";
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, Button,  } from 'reactstrap';
import { setSeries, setOptions } from './Stonks_Chart_Settings';
import "./style.css";


const Stonks_Chart = ({ data, priceChange }) => {
  const series = setSeries(data);
  const options = setOptions(priceChange);

  return (

    <section id="chart-section">

      <div class="col-md">
              <Chart
        options={options}
        series={series}
        type="radialBar"
        height={450}
        width="100%"
      />
      </div>

    </section>

      
    
  );
};

export default Stonks_Chart;