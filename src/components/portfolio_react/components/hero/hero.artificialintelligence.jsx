import React from "react";
import styled, { keyframes } from 'styled-components';

import OptimizerComparisonChart from '../../../../pages/Service_Index/OptimizerChart';
import InfoSection from "../../../InfoSection";
import { homeObjOne } from "../../../InfoSection/Data";


const sgdSampleData = {
    epochs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], // example epochs data
    loss: [0.9, 0.85, 0.8, 0.78, 0.76, 0.74, 0.73, 0.72, 0.71, 0.7]  // example loss data for SGD
};

const adamSampleData = {
    epochs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    loss: [0.9, 0.82, 0.7, 0.6, 0.55, 0.52, 0.5, 0.49, 0.48, 0.47] // example loss data for Adam
};

const rmspropSampleData = {
    epochs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    loss: [0.9, 0.83, 0.71, 0.63, 0.59, 0.57, 0.54, 0.52, 0.51, 0.5] // example loss data for RMSprop
};

const adagradSampleData = {
    epochs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    loss: [0.9, 0.86, 0.79, 0.77, 0.75, 0.73, 0.72, 0.71, 0.7, 0.69] // example loss data for Adagrad
};


const HiddenContent = styled.div`
  display: none;
  background-color: rgba(0, 0, 0, 0.1); // semi-transparent background
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
`;



const gradientText = keyframes`
  0% { background-position: 0 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0 50%; }
`;

const AnimatedGradientText1 = styled.h1`
  animation: ${gradientText} 5s ease-in-out infinite;
  font-size: 50px;
  letter-spacing: 0.8rem;
  text-transform: uppercase;
  text-align: center;
  background: linear-gradient(to right, #ee9ca7, #ffdde1, #2193b0, #6dd5ed);
  background-size: 200%;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

const InfoContainer3 = styled.div`
  color: #fff;
  background: transparent;
  @media screen and (max-width: 768px) {
    padding: 100px 0;
    height: 1100px;
  }
`;

const TopLine1 = styled.div`
  color: #00b100;
  font-size: 12px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;


const TopLine2 = styled.div`
  color: #5900b1;
  font-size: 12px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

const InfoWrapper2 = styled.div`
  display: grid;
  z-index: 1;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;  // This ensures the boxes wrap onto the next line in smaller screens.
  justify-content: space-between;
  margin-top: 40px;
  @media screen and (max-width: 768px) {
    flex-direction: column; // Stack the boxes vertically for screens smaller than 768px.
  }
`;

const FeatureBox = styled.div`
  flex: 1;
  background-color: transparent;
  padding: 20px;
  border-radius: 10px;
  border: 2px solid #00b100;
  margin: 0 10px;
  box-sizing: border-box;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 20px;
    max-width: 100%;
    padding: 10px;
  }

  &:hover ${HiddenContent}, &:active ${HiddenContent} {
    display: block; // This allows HiddenContent to show on hover for desktops and on tap/click for mobile.
  }
`;


export default function Heroartificialintelligence() {
  const [hoveredBox, setHoveredBox] = React.useState(null);
  const toggleContentVisibility = (boxName) => {
    if (hoveredBox === boxName) {
      setHoveredBox(null);
    } else {
      setHoveredBox(boxName);
    }
  };

// const Heroartificialintelligence = () => {
  return (
    <div id="hero">
      <InfoContainer3>
        <AnimatedGradientText1>
          Artificial Intelligence in Commercial Investments
        </AnimatedGradientText1>
        <InfoWrapper2>
          <TopLine1>
            “Artificial intelligence is a system built to make predictions or decisions that influence our environment, based on objectives defined by humans.”
            While many might confuse machine learning (ML) as synonymous with AI, it's essential to clarify that ML is a subset focused on creating systems that enhance their performance through data. Hence, while all ML is AI, not all AI entails ML.
          </TopLine1>
          <Row>

                      <FeatureBox
                  onMouseEnter={() => setHoveredBox('Importance')}
                  onMouseLeave={() => setHoveredBox(null)}
                  onClick={() => toggleContentVisibility('Importance')} // Added onClick for touch devices
                >
                <TopLine1>Importance in Investment</TopLine1>
                <p>
                AI has transformed the investment landscape by introducing unprecedented capabilities and tools that enhance both strategic decision-making and operational efficiencies.                 </p>
                {hoveredBox === 'Importance' && (
                  <HiddenContent>
                    More information about Importance in Investment...
                    {/* <OptimizerComparisonChart adagradData={adagradSampleData} rmspropData={rmspropSampleData} sgdData={sgdSampleData} adamData={adamSampleData} /> */}
                    <InfoSection {...homeObjOne} />

                  </HiddenContent>
                )}
              </FeatureBox>


              <FeatureBox
                onMouseEnter={() => setHoveredBox('Importance')}
                onMouseLeave={() => setHoveredBox(null)}
                onClick={() => toggleContentVisibility('Importance')} // Added onClick for touch devices
              >
              <TopLine2>Deep Learning & Patterns</TopLine2>
              <p>
              Leveraging deep learning in financial investments has paved the way for a revolutionary approach to predicting market behaviors, understanding complex financial products, and managing vast portfolios.               </p>
              {hoveredBox === 'Importance' && (
                <HiddenContent>
                  Finding patterns in data is a key component of machine learning. In fact, it's the primary way that ML algorithms learn. The more data you feed an ML algorithm, the more patterns it can find, and the more accurate its predictions become.
                    <OptimizerComparisonChart adagradData={adagradSampleData} rmspropData={rmspropSampleData} sgdData={sgdSampleData} adamData={adamSampleData} />
                </HiddenContent>
              )}
            </FeatureBox>
                        <FeatureBox
                  onMouseEnter={() => setHoveredBox('Importance')}
                  onMouseLeave={() => setHoveredBox(null)}
                  onClick={() => toggleContentVisibility('Importance')} // Added onClick for touch devices
                >
              <TopLine1>Why Our Bots Stand Out</TopLine1>
              <p>
                Our algorithmic trading bots utilize the best in AI and ML to offer a competitive advantage. If you're serious about maximizing returns and staying ahead of the market curve, there's no tool better equipped than ours.
              </p>
              {hoveredBox === 'Importance' && (
                <HiddenContent>
                  Finding patterns in data is a key component of machine learning. In fact, it's the primary way that ML algorithms learn. The more data you feed an ML algorithm, the more patterns it can find, and the more accurate its predictions become.
                    
                    {/* <OptimizerComparisonChart adagradData={adagradSampleData} rmspropData={rmspropSampleData} sgdData={sgdSampleData} adamData={adamSampleData} /> */}
                    <InfoSection {...homeObjOne} />

                </HiddenContent>
              )}
            </FeatureBox>
          </Row>
        </InfoWrapper2>
      </InfoContainer3>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  );
};

