import styled, { keyframes } from 'styled-components';
import React from 'react';
import TimeClock from '../TimeClock/Index';


const HeroP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;
  display: inline-block;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;


const Grid = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: start;
  font-size: 4em;
  line-height: 0.74em;
  color: #00b100;
  background-image: url('/view.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;



  @media (max-width: 425px) {
    grid-template-columns: 1fr;
  }
`

const Left = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: 1fr auto;
  height: 100%;
  padding: 100px;
  white-space: nowrap;
  line-height: 1em;
  max-width: 60%; /* Limit the width to control text wrapping */
  overflow: hidden; /* Hide any overflow content */
  word-wrap: break-word; /* Allow words to break to the next line */
  @media (max-width: 768px) {
    padding: 50px;
  }
`

const Right = styled.div`
  position: relative;
  display: flex;

  background: transparent;
  
`
const Sub = styled.div`
  align-self: end;
  width: 400px;
  height: 2px;
  background: transparent; /* Set the background to transparent */
  box-shadow: 0 0 10px 5px white; /* Add a white box-shadow for the glow effect */
`;


const FeatureBox = styled.div`
  flex: 1;
  background-color: transparent;
  padding: 20px;
  border-radius: 10px;
  margin: 0 10px;
  border: 2px solid #00b100;  // Green border

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }

  // Hover effect
  &:hover {
    transform: scale(1.05);  // Slightly enlarges the card on hover
    box-shadow: 0px 4px 15px rgba(0, 177, 0, 0.4);  // Greenish shadow
    transition: all 0.3s ease-out;  // Smooth transition effect
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

const gradientText = keyframes`
{
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}`;

const Title = styled.h1`
  animation: ${gradientText} 5s ease-in-out infinite;
  font-size: 48px;
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


const PageWrapper = styled.div`
  display: relative;
  max-width: 800px;
  width: 100%;  // take full width by default
  margin: 20px auto;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 768px) {
    padding: 10px;  // Reduce padding for mobile
  }
`;


const Content = styled.div`
  background-color: transparent;
  padding: 20px;
  border-radius: 10px;
  margin-top: 20px;
  text-align: center;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;

  @media screen and (max-width: 768px) {
    flex-direction: column;  // stack boxes vertically on mobile
  }
`;



const Subtitle = styled.h2`
  font-size: 28px;
  color: #2193b0;
  margin-top: 30px;
  text-align: center;
`;

const Paragraph = styled.p`
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 20px;
  color: #ffffff;
  @media screen and (max-width: 480px) {
    font-size: 14px;  // slightly smaller font for mobile
  }
`;

const StyledParagraph = styled.p`
  font-size: 16px;
  color: #ffffff;
  margin: 0; /* Remove default margin */
  /* You can add padding or margin here as well */

  @media screen and (max-width: 768px) {
    font-size: 14px; /* Adjust font size for mobile devices */
  }
`;


export default function Underlay() {
  return (
    <Grid>
      <Left>

      <div >

      <br />

      <StyledParagraph>
          AI has revolutionized the world of options trading, introducing advanced tools that magnify strategic decision-making and bolster operational efficiencies.
        </StyledParagraph>
        <StyledParagraph>
          With its computational prowess, AI underscores the importance of informed trading, enabling traders to harness cutting-edge tools for more accurate forecasts and optimized trade strategies.
        </StyledParagraph>
        <StyledParagraph>
          AI has revolutionized the world of options trading, introducing advanced tools that magnify strategic decision-making and bolster operational efficiencies.
        </StyledParagraph>
        <StyledParagraph>
          With its computational prowess, AI underscores the importance of informed trading, enabling traders to harness cutting-edge tools for more accurate forecasts and optimized trade strategies.
        </StyledParagraph>
        <StyledParagraph>
          AI has revolutionized the world of options trading, introducing advanced tools that magnify strategic decision-making and bolster operational efficiencies.
        </StyledParagraph>
        <StyledParagraph>
          With its computational prowess, AI underscores the importance of informed trading, enabling traders to harness cutting-edge tools for more accurate forecasts and optimized trade strategies.
        </StyledParagraph>
        <StyledParagraph>
          AI has revolutionized the world of options trading, introducing advanced tools that magnify strategic decision-making and bolster operational efficiencies.
        </StyledParagraph>
        <StyledParagraph>
          With its computational prowess, AI underscores the importance of informed trading, enabling traders to harness cutting-edge tools for more accurate forecasts and optimized trade strategies.
        </StyledParagraph>



        <br />


        
      </div>


        <Sub />
        
      </Left>
      

      <Right>
      <>
      <TimeClock/>

      </>
      </Right>


    </Grid>
  )
}
