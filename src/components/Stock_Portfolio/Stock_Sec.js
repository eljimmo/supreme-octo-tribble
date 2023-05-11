// import { useState, useEffect } from 'react'
// import Axios from 'axios';
// import { Row } from 'antd';
// import { Audio } from 'react-loader-spinner'
// import SectorData from './Sector_Data';

// export const LOGIN = "login";
// export const REGISTER = "register";

// const Index = props => {
//     const [stockModal, toggleStockModal] = useState(false)
//     const [isLoading, setLoading] = useState(false);
//     const [errorMessage, setErrorMessage] = useState(null);

//     const IEX = process.env.NODE_ENV !== 'production' ? ["sandbox", `${process.env.IEX_TEST_TOKEN}`] : ["cloud",`${process.env.IEX_TOKEN}`];






//     useEffect(() => {
//     let userID = localStorage.getItem("userID")
//     let token = localStorage.getItem("stockAppToken");
//     let authenticated = false;
//     if (token && userID) {
//         Axios.post(`${process.env.BASE_URL}/authenticate?token=${token}`)
//         .then(function (res) {
//             // logIn(userID);
//         })
//         .catch(function (error) {
//             console.log(error);
//             setErrorMessage(true)
//         });
//     }
//     },
//      [])

//     return(
//         <>
//             { isLoading && !errorMessage ?
//                 ( <Audio
//                     height = "80"
//                     width = "80"
//                     radius = "9"
//                     color = 'green'
//                     ariaLabel = 'three-dots-loading'     
//                     wrapperStyle
//                     wrapperClass
//                   /> ) 
//             :
//                 <>
//                     <Row type="flex" justify="center">        
//                         {stockModal && 
//                             <div id="myModal" className="modal" onClick={() => toggleStockModal(false)}>
//                             <div className="modal-content">
                              
//                             </div>
//                             </div>
//                         }
//                     </Row>
       
//                     {
//                         Object.entries(props.secData).length !== 0 &&
//                             <SectorData data={props.secData} />             
//                     }
//                     { errorMessage && <Row type="flex" justify="center"><span className="red">Could Not Authenticate Account</span></Row>}
//                     <style jsx global>{`
//                         body {
//                             font-family: Avenir,Helvetica,sans-serif;
//                         }
//                         .left {
//                             float: left;
//                         }
//                         .green {
//                             color: #31a36e;
//                         }
//                         .red {
//                             color: #f5222d;
//                         }
//                         .yellow {
//                             color: #e3c322;
//                         }
//                         .white {
//                             color: white;
//                         }
//                         .black {
//                             color: black;
//                         }
//                         .center {
//                             text-align:center;
//                         }
//                         .stock-col {
//                             margin-left: 8%;
//                             margin-top: 30px;
//                         }
//                         .modal {
//                             display: flex; /* Hidden by default */
//                             position: fixed; /* Stay in place */
//                             z-index: 1; /* Sit on top */
//                             left: 0;
//                             top: 0;
//                             width: 100%; /* Full width */
//                             height: 100%; /* Full height */
//                             overflow: auto; /* Enable scroll if needed */
//                             background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
//                         }
//                         .modal-content {
//                             background-color: #010912;
//                             margin: auto;
//                             padding: 20px;
//                             border: 1px solid white;
//                             border-radius: 6px;
//                         }
//                         .close {
//                             float: right;
//                             font-size: 28px;
//                             font-weight: bold;
//                         }
//                         .close:hover,
//                         .close:focus {
//                             color: white;
//                             text-decoration: none;
//                             cursor: pointer;
//                         }
//                         /* Mobile CSS */
//                         @media only screen and (max-width: 768px) {
//                             .modal {
//                                 position: relative;
//                             }
//                         }
//                         /* Small Mobile CSS */
//                         @media only screen and (max-width: 576px) {
//                             .stock-col {
//                                 text-align: center;
//                                 width: 100%;
//                                 margin-left: 0;
//                             }
//                         }
//                     `}</style>
//                 </>
//             }
//         </>
//     )
// };

// Index.getInitialProps = async function() {
//     const res = await fetch(`https://www.alphavantage.co/query?function=SECTOR&apikey=${process.env.ALPHA_TOKEN}`);
//     let secData = await res.json();
//     if(secData["Error Message"] || secData["Note"])
//         secData = {}
//     return { secData };
// }


// export default Index;