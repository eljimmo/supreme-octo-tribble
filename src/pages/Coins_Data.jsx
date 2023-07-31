import * as React from "react";
import { Suspense } from "react";
import Coin_Data from '../components/CoBot/widgets/CryptoCoins'
// import NewsLoad from "../charts/NewsLoad";
// import Stocks from "./Stocks";




function DashboardContent() {

  return (<>
              <Coin_Data/>
              <br/>
              {/* <NewsLoad basic="news?category=general"/> */}
              </>
  );
}

export default function MarketNews(async) {
  
  return (
    <Suspense fallback={<h1>Loading profile...</h1>}>
      <DashboardContent />
    </Suspense>
  );
}
