import styled, { keyframes } from 'styled-components';
import React from 'react';
import TimeClock from '../TimeClock/Index';

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
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;



  @media (max-width: 425px) {
    grid-template-columns: 1fr;
  }
`


const GridSVG = styled.div`


  width: 100%;
  height: 100%;
  background-image: url('/Sci.svg');
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
  font-size: 16px;
  color: #ffffff;
  margin: 0; /* Remove default margin */
  /* You can add padding or margin here as well */

  @media screen and (max-width: 768px) {
    font-size: 14px; /* Adjust font size for mobile devices */
  }
`;


export default function Overlay() {
  return (
    <Grid>
        <GridSVG>
        <TimeClock/>
        </GridSVG>
         <Left>

                <div >

                <br />




                <br />


                
                </div>


  {/* <Sub /> */}
  
</Left>
      <Left>

                <div >

                <br />


                    <br />


                    
                </div>


        
      </Left>
      

      <Right>
      <>

      </>
      </Right>


    </Grid>
  )
}
