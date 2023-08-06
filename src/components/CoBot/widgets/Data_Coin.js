import React from 'react';
import './Data_Stock.css';

const Coin = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange
}) => {
  return (
    <div className='coin-container glass'>
      <div className='coin-row'>
        <div className='coin'>
          <img src={image} alt='crypto' />
          <h1>{name}</h1>
          <p className='coin-symbol'>{symbol}</p>
        </div>
        <div className='coin-data'>
          <p className='coin-price'>Price: ${price}</p>


          <p className='coin-price'>Change % 24h:
          {priceChange < 0 ? (
            <p className='coin-percent red'>{priceChange.toFixed(2)}%</p>
          ) : (
            <p className='coin-percent green'>{priceChange.toFixed(2)}%</p>
          )}
          </p>

          <p className='coin-marketcap'>
          Market Cap: ${marketcap.toLocaleString()}
          </p>

                    <p className='coin-volume'>
                      Market Volume: ${volume.toLocaleString()}</p>

        </div>
      </div>
    </div>
  );
};

export default Coin;