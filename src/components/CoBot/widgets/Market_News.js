import * as React from "react";
import { Suspense } from "react";
import News from "../widgets/News";
import './Data_Stock.css';
import './Coins.css';


function DashboardContent() {

  return (<>
    <div className='coin-app'>
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
