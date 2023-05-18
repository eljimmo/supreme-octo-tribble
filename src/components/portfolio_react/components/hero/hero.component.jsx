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

const Hero = () => {
  return (
    <div id="hero">
      <Heading>Project Leibniz Analytica</Heading>
      {/* <TextWrapper> */}
                {/* <TopLine> Stock Market Derivative Modeling, Machine Learning for Predictive Analysis</TopLine> */}
                {/* <Subtitle> The foundation of Leibniz Analytica is to build AI models to help guide an investment decision. Create, optimize, manipulate agents to learn how to trade a stock or multiple at once. </Subtitle> */}
              {/* </TextWrapper> */}
              <InfoWrapper2>
              {/* <InfoRow>

<Column2>
<InfoContainer>
</InfoContainer>
</Column2>
</InfoRow> */}

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

export default Hero;
