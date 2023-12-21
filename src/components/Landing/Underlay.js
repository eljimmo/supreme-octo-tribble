import styled, { keyframes } from 'styled-components';
import React from 'react';
import TimeClock from '../TimeClock/Index';
import Typewriter from 'typewriter-effect';

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
  position: absolute;
  margin: 5px;
  display: flex;
  top: ${(props) => (props.vertical ? '0px' : '25%')};
  right: ${(props) => (props.vertical ? '50%' : '50px')};
  width: ${(props) => (props.vertical ? '2px' : '150px')};
  height: ${(props) => (props.vertical ? '150px' : '2px')};


  background: transparent;
  
`
const Sub = styled.div`
  align-self: end;
  width: 400px;
  height: 2px;
  background: transparent; /* Set the background to transparent */
  box-shadow: 0 0 10px 5px white; /* Add a white box-shadow for the glow effect */
`;






const StyledParagraph = styled.p`
  font-size: 14px;
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
      <h1 style={{ color: 'white' }}>
                                          <Typewriter
                                            options={{
                                              strings: ['Project Leibniz', 'Releasing 2024', 'Financial Simulations', 'Predicting Behaviors'],
                                              autoStart: true,
                                              loop: true,
                                            }}
                                          />
                                  </h1>

          {/* AI can help find financial  */}
          {/* Creating financial simulations */}
        </StyledParagraph>

        <StyledParagraph>
        simulations in trading.
          {/* AI underscores the importance of informed trading. */}
        </StyledParagraph>

        <StyledParagraph>
          AI has opened the world 
        </StyledParagraph>

        <StyledParagraph>
        of synthetic trading.
          {/* Enabling computational prowess. */}
        </StyledParagraph>

        <StyledParagraph>
          Introducing computational tools 
        </StyledParagraph>

        <StyledParagraph>
        that magnify strategic decision-making.
          {/* With its computational prowess, AI underscores the importance of informed trading, enabling traders to harness cutting-edge tools for more accurate forecasts and optimized trade strategies. */}
        </StyledParagraph>

        {/* <StyledParagraph>
          With its computational prowess, AI underscores the importance of informed trading, enabling traders to harness cutting-edge tools for more accurate forecasts and optimized trade strategies.
        </StyledParagraph>

        <StyledParagraph>
          AI has revolutionized the world of options trading, introducing advanced tools that magnify strategic decision-making and bolster operational efficiencies.
        </StyledParagraph>

        <StyledParagraph>
          With its computational prowess, AI underscores the importance of informed trading, enabling traders to harness cutting-edge tools for more accurate forecasts and optimized trade strategies.
        </StyledParagraph> */}



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
