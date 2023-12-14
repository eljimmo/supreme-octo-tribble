import React from "react";
import styled, { keyframes } from 'styled-components';

import OptimizerComparisonChart from '../../../../pages/Service_Index/OptimizerChart';
// import InfoSection from "../../../InfoSection";
import InfoSection3 from "../../../InfoSection/Index3";
import InfoSection4 from "../../../InfoSection/Index4";
import { homeObjOne, homeObjTwo, homeObjFour } from "../../../InfoSection/Data";


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


const StyledParagraph = styled.p`
  font-size: 16px;
  line-height: 1.5;
  color: #cbcbcb;
  
  /* Add a default margin for larger screens */
  margin: 0 20px;

  @media screen and (max-width: 768px) {
    /* Adjust margin for smaller screens (e.g., mobile devices) */
    margin: 0 10px;
  }
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

const InfoContainer4 = styled.div`
  color: #fff;
  background: transparent;
  display: flex;
  flex-direction: column; /* Stack children vertically */
  align-items: center; /* Center content horizontally */
  justify-content: center; /* Center content vertically */
  padding: 20px; /* Add padding for spacing around the content */
  
  @media screen and (max-width: 768px) {
    padding: 60px 0; /* Adjust padding for smaller screens */
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
  backdrop-filter: blur(10px); /* Adjust the blur amount as needed */

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
      <InfoContainer4>
      <FeatureBox>
        <AnimatedGradientText1>
          Artificial Intelligence for Derivatives Options Pricing
        </AnimatedGradientText1>
       </FeatureBox>
        <InfoWrapper2>
          {/* <FeatureBox>
        <TopLine1>
            "Options trading is a sophisticated financial strategy that allows investors to leverage their positions and potentially amplify returns. Just as it's crucial to distinguish between machine learning (ML) and artificial intelligence (AI) in technology, it's essential to understand the nuances in options trading. Our app harnesses the power of AI to guide traders in navigating this complex landscape, pinpointing optimal options to consider based on data-driven insights. So, while all options trading can benefit from informed decisions, not all trading tools empower traders the way our app does."
          </TopLine1>
          </FeatureBox> */}
          <Row>

                      <FeatureBox
                  onMouseEnter={() => setHoveredBox('Importance')}
                  onMouseLeave={() => setHoveredBox(null)}
                  onClick={() => toggleContentVisibility('Importance')} // Added onClick for touch devices
                >
                <TopLine1>Importance in options trading Investment</TopLine1>
                <StyledParagraph>
                AI has revolutionized the world of options trading, introducing advanced tools that magnify strategic decision-making and bolster operational efficiencies. With its computational prowess, AI underscores the importance of informed trading, enabling traders to harness cutting-edge tools for more accurate forecasts and optimized trade strategies.                </StyledParagraph>
                {hoveredBox === 'Importance' && (
                  <HiddenContent>
                    More information about Importance in Investment...
                    <InfoSection3 {...homeObjOne} />

                  </HiddenContent>
                )}
              </FeatureBox>


              <FeatureBox
                onMouseEnter={() => setHoveredBox('Importance')}
                onMouseLeave={() => setHoveredBox(null)}
                onClick={() => toggleContentVisibility('Importance')} // Added onClick for touch devices
              >
              <TopLine2>Deep Learning & Patterns</TopLine2>
              <StyledParagraph>
              Leveraging deep learning in options trading has ushered in a groundbreaking approach to deciphering market behaviors, gaining intricate insights into the 'Greeks' and their implications, and comprehensively understanding the underlying assets. This sophisticated AI-driven perspective empowers traders to manage their positions with enhanced precision and foresight.               </StyledParagraph>
              {hoveredBox === 'Importance' && (
                <HiddenContent>
                  Finding patterns in data is a key component of machine learning. In fact, it's the primary way that ML algorithms learn. The more data you feed an ML algorithm, the more patterns it can find, and the more accurate its predictions become.
                    <InfoSection4 {...homeObjFour} />
                </HiddenContent>
              )}
            </FeatureBox>
                        <FeatureBox
                  onMouseEnter={() => setHoveredBox('Importance')}
                  onMouseLeave={() => setHoveredBox(null)}
                  onClick={() => toggleContentVisibility('Importance')} // Added onClick for touch devices
                >
              <TopLine1>Why Our Bots Stand Out</TopLine1>
              <StyledParagraph>
              Our algorithmic trading bots, specialized for options trading, harness the prowess of AI and ML to interpret intricate market conditions and the dynamics of the 'Greeks'. If you're committed to optimizing your options strategy, navigating market nuances, and consistently staying ahead of the market curve, our platform provides an unparalleled advantage.              </StyledParagraph>
              {hoveredBox === 'Importance' && (
                <HiddenContent>
                  Finding patterns in data is a key component of machine learning.
                    
                    <InfoSection3 {...homeObjTwo} />

                </HiddenContent>
              )}
            </FeatureBox>
          </Row>
        </InfoWrapper2>
      </InfoContainer4>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  );
};

