import * as React from "react";
import { Suspense } from "react";
// import NewsLoad from "./NewsLoad";
// import Stocks from "./Stocks";
import Tabs_Demo from '../views/StockSearch/Dash_Start'
// import StockSearch from '../views/StockSearch/Stock_Search_Index';





function DashboardContent() {

  return (<>
              {/* <Stocks/> */}
              {/* <br/> */}
              {/* <br/> */}

              <Tabs_Demo/> 
              {/* <StockSearch/> */}
              {/* <br/> */}
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
