import * as React from "react";
import { Suspense } from "react";
import TabsDemo from '../views/StockSearch/Dash_Start'





function DashboardContent() {

  return (<>


              <TabsDemo/> 
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
