import * as React from "react";
import { Suspense } from "react";
import NewsLoad from "../Stock_Portfolio/News_Load";

function DashboardContent() {

  return (<>
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
