// import * as React from "react";
// import { useEffect } from "react";
// import axios from "axios";
// import NewsCard from "../Stock_Portfolio/News_Card";
// import {
//   ServicesContainer2,
//   ServicesCard,
//   ServicesH2,
//   ServicesP
// } from '../Services/ServicesElements';
// // import Grid from "@mui/material/Grid";
// import Paper from "@mui/material/Paper";
// // import Quote from '../../views/StockSearch/SSCompos/Content/Quote/QuoteIndex';

// export default function Stock_Load(props) {
//   const [data, setData] = React.useState([]);

//   const fetchData = () => {
    
//     let url = "";
//     if (props.basic === "news?category=general") {
//       url =
//         "https://cloud.iexapis.com/v1/stock/market/batch?&types=quote&symbols=aapl,fb,tsla,spy,amd,nvda,amzn,goog,bac&token=sk_09c6971dee1a4d28801956d73a114c5a";
//     } 
//     axios.get(url).then((res) => {
//       const pData = res.data;
//       console.log(pData);
//       setData(pData);
//     });
//   };
//   useEffect(() => {
//     fetchData();
//   }, []);
//   let final1 =[];
//   for(let i=0;i<data.length && i<10;i++ )
//   {
//     final1.push(


//       <div style={{ overflow: 'hidden', background: 'white' }}>
//       <Paper sx={{ p: 2, margin: 'auto', maxWidth: 850, flexGrow: 1 }}>
//       <ServicesContainer2 id="services">
//       <ServicesCard>


//         <ServicesH2>{data[i].companyName}</ServicesH2>
//         <ServicesP>{data[i].symbol}</ServicesP>
//         <ServicesP>{data[i].latestPrice}</ServicesP>
//         <ServicesP>{data[i].change}</ServicesP>
//         <ServicesP>{data[i].changePercent}</ServicesP>


//       </ServicesCard>
//       </ServicesContainer2>
//       </Paper>
//     </div>


//     )
//   }
  
//   return <>{final1}</>;
// }
