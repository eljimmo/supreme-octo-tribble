import MarketVolume_Chart from '../DataChart/MarketVolume_Index';
import Error from '../Error/E_Index';
// import '../style.css';



const Content3 = ({ data }) => {
  const { quote } = data;


  if (data.error) return <Error data={data} />;

  return (
    <>
      <MarketVolume_Chart data={data["intraday-prices"]} priceChange={quote.change} />
    </>
  );
};

export default Content3;
