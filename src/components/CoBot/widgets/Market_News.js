import * as React from "react";
import { Suspense } from "react";
import News from "../widgets/News";
import './Data_Stock.css';


function DashboardContent() {

  return (<>
      <div className='glass'>

          {/* <div style={{ overflow: 'hidden', background: 'smokewhite', alignContent: 'center' }}> */}
              <News basic="news?category=general"/>
              </div>

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
