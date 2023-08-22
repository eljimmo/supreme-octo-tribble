import React from "react";
import {
  InfoWrapper2,
  // TopLine,
  Heading,
  TopLine2a,
  Heading3,
  BlueTopLine,
  BlackTopLine,
  HeroContainer1,
  HeroContainerTransparent
  

} from "../../../InfoSection/InfoElements";

const HeroMachineLearning = () => {
  return (
    <div id="hero">
  {/* <HeroContainerTransparent> */}
      <Heading3>Machine Learning in Financial Applications</Heading3>
              <InfoWrapper2>
      
      <BlackTopLine> CREATED BY THE LEIBNIZ ANALYTICA TEAM </BlackTopLine>
      
      <TopLine2a>
      Machine learning (ML) is the subset of artificial intelligence (AI) that focuses on building systems that learn—or improve performance—based on the data they consume.
      Create your own custom financial trading agent to better assist you when trading.
      Machine learning algorithms build a model based on sample data, known as training data, in order to make predictions or decisions without being explicitly programmed to do so
      
      </TopLine2a>
      
      </InfoWrapper2>
      <br/>
      </div>

  );
};

export default HeroMachineLearning;
