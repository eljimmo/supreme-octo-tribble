import { useState, useEffect } from 'react'
import Axios from 'axios';
// import Page from '../layouts/page';
import { Row, Col } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import { Audio } from 'react-loader-spinner';
// import AuthenticationForm from '../components/AuthenticationForm'
// import SearchForm from  '../components/SearchForm'
import GetStock from './GetStock';
import SectorData from './SectorData';

export const LOGIN = "login";
export const REGISTER = "register";

const Index = props => {
    const [registerForm, setRegisterForm] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const [userID, setUserID] = useState(null);
    const [stockModal, toggleStockModal] = useState(false)
    const [searchedStock, setSearchedStock] = useState("");
    const [userStocks, setUserStocks] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);


    const IEX = 'sk_09c6971dee1a4d28801956d73a114c5a'


    const search = searchValue => {
        setSearchedStock(searchValue)
        toggleStockModal(true)
    }

    const getUserStocks = id => {
        setLoading(true);    
        setErrorMessage(null);
    
        let dataArr = []
        Axios
        .get(`${process.env.BASE_URL}/api/stocks?userID=${id}`)
      .then(res => {
          res.data.map(stock => {
            dataArr.push(stock.stock)
      })
          setUserStocks(dataArr)
          setLoading(false)
          toggleStockModal(false)
        })
        .catch(function (error) {
          if (error.response) {
          setErrorMessage(error.response.data)
          setLoading(false);
          }
        })
    }

    useEffect(() => {
    let userID = localStorage.getItem("userID")
    let token = localStorage.getItem("stockAppToken");
    let authenticated = false;
    if (token && userID) {
        Axios.post(`${process.env.BASE_URL}/authenticate?token=${token}`)
        .then(function (res) {
            // logIn(userID);
        })
        .catch(function (error) {
            console.log(error);
            setErrorMessage(true)
        });
    }
    }, [])

    return(
        // <Page>
        <div className="container">
            { isLoading && !errorMessage ?
                // ( <Circles 
                //     type="Oval"
                //     color="#31a36e"
                //     height="100"	
                //     width="100"
                //     /> ) 
                ( <Audio
                    height="80"
                    width="80"
                    radius="9"
                    color="green"
                    ariaLabel="loading"
                    wrapperStyle
                    wrapperClass
          />
                   )
            :
                <>
                    <Row type="flex" justify="center">        
                        {stockModal && 
                            <div id="myModal" className="modal" onClick={() => toggleStockModal(false)}>
                            <div className="modal-content">
                                <span className="close green" onClick={() => toggleStockModal(false)}><SmileOutlined /></span>
                                {/* <GetStock stockToFind={searchedStock} modal={true} id={userID} loggedIn={loggedIn} getUserStocks={getUserStocks} IEX={IEX} /> */}
      </div>
                            </div>
                        }
                        {/* <SearchForm search={search} /> */}
                    </Row>
                    { loggedIn ?
                        <>
                            {/* <Row type="flex" justify="center"><a onClick={logOut}>Log Out</a></Row> */}
                            <Row type="flex" justify="start">
                                {userStocks.map((stock, index) => {
                                    return <Col xs={12} sm={12} md={6} lg={6} xl={6} className="stock-col" key={stock}><GetStock stockToFind={stock} modal={false} id={userID} portfolio={loggedIn} getUserStocks={getUserStocks} IEX={IEX} /></Col>
      })}
                            </Row>
                        </>
                    :   
                        !registerForm ?
                            <>
                                <Row type="flex" justify="center">Login or Register to create a portfolio</Row>
                                <Row type="flex" justify="center">
                                    {/* <div className="center"><AuthenticationForm view={LOGIN} logIn={logIn}/></div> */}
                                </Row>
                                <Row type="flex" justify="center">
                                    <a onClick={() => setRegisterForm(true)}>Click Here to Sign Up</a>
                                </Row>                          
                            </>
                        :
                            <Row type="flex" justify="center">
                                {/* <div className="center"><AuthenticationForm view={REGISTER} /></div> */}
                            </Row>
                    }
                    {
                        Object.entries(props.secData).length !== 0 &&
                            <SectorData data={props.secData} />             
                    }
                    { errorMessage && <Row type="flex" justify="center"><span className="red">Could Not Authenticate Account</span></Row>}
                    <style jsx global>{`
                        body {
                            font-family: Avenir,Helvetica,sans-serif;
                        }
                        .left {
                            float: left;
                        }
                        .green {
                            color: #31a36e;
                        }
                        .red {
                            color: #f5222d;
                        }
                        .yellow {
                            color: #e3c322;
                        }
                        .white {
                            color: white;
                        }
                        .black {
                            color: black;
                        }
                        .center {
                            text-align:center;
                        }
                        .stock-col {
                            margin-left: 8%;
                            margin-top: 30px;
                        }
                        .modal {
                            display: flex; /* Hidden by default */
                            position: fixed; /* Stay in place */
                            z-index: 1; /* Sit on top */
                            left: 0;
                            top: 0;
                            width: 100%; /* Full width */
                            height: 100%; /* Full height */
                            overflow: auto; /* Enable scroll if needed */
                            background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
                        }
                        .modal-content {
                            background-color: #010912;
                            margin: auto;
                            padding: 20px;
                            border: 1px solid white;
                            border-radius: 6px;
                        }
                        .close {
                            float: right;
                            font-size: 28px;
                            font-weight: bold;
                        }
                        .close:hover,
                        .close:focus {
                            color: white;
                            text-decoration: none;
                            cursor: pointer;
                        }
                        /* Mobile CSS */
                        @media only screen and (max-width: 768px) {
                            .modal {
                                position: relative;
                            }
                        }
                        /* Small Mobile CSS */
                        @media only screen and (max-width: 576px) {
                            .stock-col {
                                text-align: center;
                                width: 100%;
                                margin-left: 0;
                            }
                        }
                    `}</style>
                </>
            }
    </div>
        // </Page>
    )
};

Index.getInitialProps = async function() {
    const res = await fetch(`https://www.alphavantage.co/query?function=SECTOR&apikey=${process.env.ALPHA_TOKEN}`);
    let secData = await res.json();
    if(secData["Error Message"] || secData["Note"])
        secData = {}
    return { secData };
}


export default Index;