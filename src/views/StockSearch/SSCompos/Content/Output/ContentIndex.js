import Quote from '../Quote/QuoteIndex';
import DataChart from '../DataChart/DC_Index';
import MarketNotional_Chart from '../DataChart/MarketNotional_Chart_Index';
import Error from '../Error/E_Index';
import Company from "../Company/C_Index";
import MyCharts from "../DataChart/EXamples";
// import '../style.css';
import { Row, Col } from 'reactstrap';
import { Grid, Container, Text } from '@mantine/core';
import MarketChangeOverTimeChart from '../DataChart/MarketChangeOverTime_Index';
import {Link} from "react-router-dom";


const Content = ({ data }) => {
  const { quote, company } = data;

  const hideMissingLogo = () => {
    const logo = document.querySelector(".company-logo");
    logo.style.display = "none";
  };

  if (data.error) return <Error data={data} />;

  return (
    <>
<Text fz="md" c="green">Stock Valuation & Analysis </Text>
  <Row xs="10">
    <Col className="bg-light border">
      <h1 className="main-title">{quote.companyName}</h1>
    </Col>
    <Col className="bg-light border">
    <p>{`${quote.symbol} | ${quote.primaryExchange}`}</p>
    </Col>
    <Col className="bg-light border">
    <Quote data={quote} />
    </Col>
  </Row>
  <Col className="">
    </Col>
    <div className="main-item">
    <Grid>
      <Grid.Col span={6}>
      <DataChart data={data["intraday-prices"]} priceChange={quote.change} />
      </Grid.Col>
      <Grid.Col span={6}>
  
      <MarketChangeOverTimeChart data={data["intraday-prices"]} priceChange={quote.change} />

      </Grid.Col>
    </Grid>
      </div>
      <div className="bg-light border" >
      <Company general={company} quote={quote} />
      </div>
      
    </>
  );
};

export default Content;
