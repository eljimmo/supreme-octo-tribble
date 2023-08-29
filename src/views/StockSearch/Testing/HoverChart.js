import React, { useState } from 'react';
import {
    AnimatedGradientSmall
  } from "../../../components/InfoSection/InfoElements";


function HoverCard({ stock }) {
const [likeList, setLikeList] = useState('');

  const renderLikeList = () => {
    return <div className="likes__list">
        
        <p>Price: ${stock.latestPrice}</p>
      <p>PE Ratio {stock.peRatio}</p>
      <p>52 Week High: ${stock.week52High}</p>
      <p>52 Week Low: ${stock.week52Low}</p>


    </div>;
  };

  const handleLeave = () => {
    setLikeList('');
  };

  const handleHover = () => {
    setLikeList(renderLikeList());
  };

  return (
    <div className="likes__wrapper">
      <div className="likes__relavance" onMouseOver={handleHover} onMouseLeave={handleLeave}>
      <AnimatedGradientSmall>Symbol {stock.symbol}</AnimatedGradientSmall>
{likeList}
      </div>
    </div>
  );
}

export default HoverCard;
