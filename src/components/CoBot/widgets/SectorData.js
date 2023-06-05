// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function SectorData() {
//     const [sector, setSector] = useState([]);


//     useEffect(() => {
//         axios 
//         .get('https://www.alphavantage.co/query?function=SECTOR&apikey=$0M9PWWBA6S79C84X'
//         )
//         .then(res => {
//             setSector(res.data);
//             console.log(res.data);
//         })
//         .catch(error => console.log(error));
//     }, []);

//     // const filteredSector = sector.filter(sector =>
//     //     sector.name.toLowerCase().includes(search.toLowerCase())
//     // );

//     return (

        
//             <div className="title">
//             <div className="sector-data">
//                     {Object.entries(data.sector["Rank A: Real-Time Performance"]).map(([key,value]) => 
//                         <><span>{key}</span><span className={(value[0] == '-') ? "red" : "white"}> {value} </span>| </>
                    
//                     )}
//                 </div>
//                 </div>

//     );  
// }
//     export default SectorData;