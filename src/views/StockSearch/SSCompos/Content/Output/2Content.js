import Quote from '../Quote/QuoteIndex';
import DataChart from '../DataChart/DC_Index';
import MarketChangeOverTimeChart from '../DataChart/MarketChangeOverTime_Index';
import MarketNotional_Chart from '../DataChart/MarketNotional_Chart_Index';
import MarketVolume_Chart from '../DataChart/MarketVolume_Index';
import News from '../News/NewsIndex';
import Error from '../Error/E_Index';
import Company from "../Company/C_Index";

import '../style.css';
import { Row, Col } from 'reactstrap';
import { Grid } from '@mantine/core';


const Content2 = ({ data }) => {
  const { quote } = data;


  if (data.error) return <Error data={data} />;

  return (
    <>
      {/* <MarketNotional_Chart data={data["intraday-prices"]} priceChange={quote.changePercent} />  */}
      <MarketChangeOverTimeChart data={data["intraday-prices"]} priceChange={quote.change} />
    </>
  );
};

export default Content2;
