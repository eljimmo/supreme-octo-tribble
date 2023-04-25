import Quote from '../Quote/QuoteIndex';
import DataChart from '../DataChart/DC_Index';
import MarketChangeOverTimeChart from '../DataChart/MarketChangeOverTime_Index';
import MarketNotional_Chart from '../DataChart/MarketNotional_Chart_Index';
import MarketVolume_Chart from '../DataChart/MarketVolume_Index';
import News from '../News/NewsIndex';
import Error from '../Error/E_Index';
import Company from "../Company/C_Index";
// import { Carousel } from '@mantine/carousel';
import MyCharts from "../DataChart/EXamples";

import '../style.css';
import { Row, Col } from 'reactstrap';
import { Grid } from '@mantine/core';


const Content4 = ({ data }) => {
  const { quote, company } = data;

  const hideMissingLogo = () => {
    const logo = document.querySelector(".company-logo");
    logo.style.display = "none";
  };

  if (data.error) return <Error data={data} />;

  return (
    <>
        <h6>
    Stock Valuation & Analysis
  </h6>
  <Row xs="10">

  </Row>
  <Col className="">
    {/* <News data={news} /> */}
    </Col>
    <div className="main-item">
    <Grid>
      <Grid.Col span={12}>


      </Grid.Col>
      <MarketNotional_Chart data={data["intraday-prices"]} priceChange={quote.changePercent} />
      {/* <MarketVolume_Chart data={data["intraday-prices"]} priceChange={quote.changePercent} /> */}

      {/* </Grid.Col> */}
      <Grid.Col span={6}>
      <MyCharts/>
      {/* <MarketChangeOverTimeChart data={data["intraday-prices"]} priceChange={quote.changePercent} /> */}
      {/* <MarketVolume_Chart data={data["intraday-prices"]} priceChange={quote.changePercent} /> */}
      </Grid.Col>
    </Grid>
      </div>
    </>
  );
};

export default Content4;
