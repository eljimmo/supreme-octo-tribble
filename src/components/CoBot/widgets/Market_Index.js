import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Coins.css';
import Coin from './Data_Coin';
import SectorData from './SectorData';

const Index = props => {
    const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://www.alphavantage.co/query?function=SECTOR&apikey=$0M9PWWBA6S79C84X'
              )
      .then(res => {
        setData(res.data);
        console.log(res.data);
      })
      .catch(error => console.log(error));
  }, []);

    return (
        <div>
            <h1 className='coin-text'>Sector Performance</h1>   
            <SectorData data={data} />

                      {Object.entries(props.data["Rank A: Real-Time Performance"]).map(([key,value]) => 
                        <><span>{key}</span><span className={(value[0] == '-') ? "red" : "white"}> {value} </span>| </>
                    
                    )}

        </div>

    )
}
    

