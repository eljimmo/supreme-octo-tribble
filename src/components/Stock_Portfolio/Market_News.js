import * as React from "react";
import { Suspense } from "react";
import NewsLoad from "../Stock_Portfolio/News_Load";
// import Quotes from "../Stock_Portfolio/Gauge";
// import FeaturedPost from "../Stock_Portfolio/Intro";
// import Stocks from "./Stocks";
// import Index from '../Stock_Portfolio/Stock_Sec';




function DashboardContent() {

  return (<>
              {/* <Index/> */}
              {/* <FeaturedPost/> */}
              {/* <br/> */}
              {/* <Quotes/> */}
              {/* <br/> */}
              <NewsLoad basic="news?category=general"/>
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
