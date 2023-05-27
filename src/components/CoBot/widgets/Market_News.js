import * as React from "react";
import { Suspense } from "react";
import News from "../widgets/News";
import './Data_Stock.css';
// import { PurpleServicesH2 } from '../Services/ServicesElements';


function DashboardContent() {

  return (<>
          <div style={{ overflow: 'hidden', background: 'black', alignContent: 'center' }}>
        <p>Market News</p>
        </div>

              <News basic="news?category=general"/>
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
