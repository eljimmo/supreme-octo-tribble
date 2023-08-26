import * as React from "react";
import { Suspense } from "react";
import Tabs_Demo from '../views/StockSearch/Dash_Start'





function DashboardContent() {

  return (<>


              <Tabs_Demo/> 
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
