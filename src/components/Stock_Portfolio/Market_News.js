import * as React from "react";
import { Suspense } from "react";
import NewsLoad from "../Stock_Portfolio/News_Load";
import { PurpleServicesH2 } from '../Services/ServicesElements';

function DashboardContent() {

  return (<>
          <div style={{ overflow: 'hidden', background: 'black', alignContent: 'center' }}>
        <PurpleServicesH2>Market News</PurpleServicesH2>
        </div>

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
