import {useState, useEffect} from 'react';
import { Button } from 'antd';
import Axios from 'axios';
import { Audio } from 'react-loader-spinner';
import Stock from './Stock';
import React from 'react';

const GetStock = (props) => {
  const [stock, setStock] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [isRemoving, setIsRemoving] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  let dataArr = []

  const getStockData = searchValue => {
    return Axios
    .get(`https://cloud.iexapis.com/stable/stock/${searchValue}/quote?token=sk_09c6971dee1a4d28801956d73a114c5a&filter=symbol,companyName,latestPrice,change,changePercent,peRatio,latestVolume,avgTotalVolume,marketCap`)
    .then(res => {
        Object.entries(res.data).map(([key,value]) => 
          dataArr[key] = value
        )
        dataArr["color"] = (dataArr["changePercent"].toString()[0] == '-') ? "red" : "green"
    })
    .catch(function (error) {
        if (error.response) {
          setErrorMessage(error.response.data)
        }
    })
  }
  const getStockNews = searchValue => {
    return Axios
    .get(`https://cloud.iexapis.com/stable/stock/${searchValue}/news/last/1?token=sk_09c6971dee1a4d28801956d73a114c5a`)
    .then(res => {
      dataArr["newsUrl"] = res.data[0].url;
      dataArr["newsHeadline"] = res.data[0].headline;
    })
    .catch(function (error) {
      if (error.response) {
        setErrorMessage(error.response.data)
      }
    })
  }

  const getStockDiv = searchValue => {
    return Axios
    .get(`https://cloud.iexapis.com/stable/stock/${searchValue}/stats/dividendYield?token=sk_09c6971dee1a4d28801956d73a114c5a`)
    .then(res => {
      dataArr["dividendYield"] = res.data;
    })
    .catch(function (error) {
      dataArr["dividendYield"] = "";
    })
  }
  const getAllStockData = searchValue => { 
    console.log("%c search function called for = " + searchValue, 'background: grey; color:red')
    setLoading(true);
    setErrorMessage(null);
    
    Axios.all([getStockData(searchValue), getStockNews(searchValue), getStockDiv(searchValue)])
    .then(Axios.spread(function(acct, perms) {
      setStock(dataArr);
      setLoading(false);
    }))
    
  }

  const addToPortfolio = (id, symbol) => {
    setIsAdding(true);
    Axios.post(`${process.env.BASE_URL}/api/stocks?userID=${id}&stock=${symbol}`, () => {})
    .then(function (res) {
      setIsAdding(false);
      props.getUserStocks(props.id);
    })
    .catch(function (error) {
      setErrorMessage(error.response.data)
    });
  }

  const deleteFromPortfolio = symbol => {
    setIsRemoving(true);
    Axios.delete(`${process.env.BASE_URL}/api/stocks?userID=${props.id}&stock=${symbol}`, () => {})
    .then(function (res) {
      setIsRemoving(false);
      props.getUserStocks(props.id)
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  useEffect(() => {  
    getAllStockData(props.stockToFind)  
  }, [])
  
  return(
    <React.Fragment>
      {loading && !errorMessage ? 
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
        errorMessage ? 
        <div className="rounded-lg mb-10 mr-10 xs:p-1 lg:w-full lg:p-6 xs:m-auto">
          <div className="mt-4 md:mt-0 md:ml-6">
            <span className="errorMessage block mt-1 text-lg leading-tight font-semibold text-gray-900">{errorMessage}: {props.stockToFind}</span>
          </div>
        </div>
      :
        props.portfolio ?
          <div className="white">
            <Stock data={stock} modal={props.modal}/>
            <div className="btn-remove-container">
              <Button type="default" icon="delete" onClick={() => deleteFromPortfolio(stock.symbol)}>{ isRemoving ? " Removing" : "Remove From Portfolio" }</Button>
            </div>
          </div>
      :
          <div className="white">
            <Stock data={stock} modal={props.modal} />
            {props.loggedIn &&
              <Button type="default" icon="plus" onClick={() => addToPortfolio(props.id, stock.symbol)} className="">{ isAdding ? "Adding.." : "Add To Portfolio"}</Button>
            }
          </div>
      }
      <style jsx>{`
      `}</style>
    </React.Fragment>
  )
}

export default GetStock