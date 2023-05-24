// import * as React from "react";
// import { useEffect } from "react";
// import axios from "axios";




// export default function SectorData(props) {
//     const [sectorData, setSectorData] = React.useState([]);

//     const fetchData = () => {
//         let url = "https://www.alphavantage.co/query?function=SECTOR&apikey=0M9PWWBA6S79C84X";
//         let secData = [];
//         axios.get(url).then((res) => {
//             const pData = res.data;
//             //console.log(pData);
//             for (let i = 0; i < 11; i++) {
//                 secData.push(pData["Rank A: Real-Time Performance"][i]);
//             }
//             setSectorData(secData);
//         });
//     };
//     useEffect(() => {
//         fetchData();
//     }

//     //take the data from the api and put it into a table

//     );
//     return (
//         <div className="title">
        
//         <div className="sector-data">
                
                
//                 {Object.entries(props.data["Rank A: Real-Time Performance"]).map(([key,value]) => 
//                     <><span>{key}</span><span className={(value[0] == '-') ? "red" : "white"}> {value} </span>| </>
                
//                 )}



//             </div>
//             </div>
//     );
// }


