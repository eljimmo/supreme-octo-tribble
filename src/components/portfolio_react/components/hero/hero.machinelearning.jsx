import React from "react";
// import { TopLine, Subtitle, TextWrapper, Heading, Heading2 } from "../../../InfoSection/InfoElements";
// import InfoSectionCanva from "../../../InfoSection/index_Canvas";
// import { InfoContainer } from "../../../InfoSection/InfoElements";
import {
  // InfoContainer,
  // InfoWrapper,
  InfoWrapper2,
  // InfoRow,
  // Column1,
  // Column2,
  // TextWrapper,
  // TextWrapper2,
  TopLine,
  Heading,
  // Heading2,
  // Subtitle,
} from "../../../InfoSection/InfoElements";

const HeroMachineLearning = () => {
  return (
    <div id="hero">
      <Heading>Machine Learning</Heading>
              <InfoWrapper2>
      <TopLine> Created by Jim Morales </TopLine>

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

export default HeroMachineLearning;
