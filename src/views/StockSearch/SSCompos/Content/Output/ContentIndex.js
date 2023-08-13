// import Quote from '../Quote/QuoteIndex';
import DataChart from '../DataChart/DC_Index';
import Error from '../Error/E_Index';
// import Company from "../Company/C_Index";
import '../style.css';
import { Row, Col } from 'reactstrap';
import { Grid } from '@mantine/core';
import MarketChangeOverTimeChart from '../DataChart/MarketChangeOverTime_Index';


const Content = ({ data }) => {
  const { quote, company } = data;

  if (data.error) return <Error data={data} />;

  return (
    <>
  <Row xs="12">
    <Col className="bg-light border">
      <h1 className="main-title">{quote.companyName}</h1>
    </Col>
    <Col className="bg-light border">
    <p>{`${quote.symbol} | ${quote.primaryExchange}`}</p>
    </Col>
    <Col className="bg-light border">
    {/* <Quote data={quote} /> */}
    </Col>
  </Row>
  <Col className="">
    </Col>
    <div className="main-item">
    <Grid>
      <Grid.Col span={12}>
      <DataChart data={data["intraday-prices"]} priceChange={quote.change} />
      </Grid.Col>
      <Grid.Col span={12}>
      <MarketChangeOverTimeChart data={data["intraday-prices"]} priceChange={quote.change} />
      </Grid.Col>
    </Grid>
      </div>
      <div className="bg-light border" >
      {/* <Company general={company} quote={quote} /> */}
      </div>
    </>
  );
};

export default Content;
