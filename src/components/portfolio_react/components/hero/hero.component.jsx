import React from "react";

import {
  InfoWrapper2,
  TopLine,
  Heading,
} from "../../../InfoSection/InfoElements";

const Hero = () => {
  return (
    <div id="hero">
      <Heading>Project Leibniz Analytica</Heading>

              <InfoWrapper2>

      <TopLine> CREATED BY THE LEIBNIZ ANALYTICA TEAM </TopLine>

      <p>
      Modeling Statistical properties as distribution variables to quantify the effect of variables as features in a set.
      From Value at Risk, Portfolio vs Benchmark Strategy, Genetic Algorithms, LSTMs, Recurrent Neural Networks, Leibniz provides the tools you need to better your financial asset portfolio.
      Create your own custom financial trading agent to better assist you when trading.
      </p>
      </InfoWrapper2>
      <br/>

  </div>

  );
};

export default Hero;
