import React from "react";
import { RTopLine } from "../../../InfoSection/InfoElements";
import SplashApp from "../../../Splash";
import styled from "styled-components";

const SectorInfoContainer = styled.div`
  display: block;
  flex-wrap: wrap;
  margin: 10px;
  flex-direction: row;
`;

const Testimonial = () => {
  return (

    <div id="testimonial">
      <div className="gridlayout1">
        <SectorInfoContainer>

        <SplashApp />
        
        </SectorInfoContainer>
        <div>


          <RTopLine>
          Create networks of intelligence 
          </RTopLine>

          <br/>



          <RTopLine>
          Create and Alter intelligence parameters
          </RTopLine>


          <br/>
          <br/>
          
          <RTopLine>
          Create your own bots and change the way the internal model for the AI works.
          </RTopLine>

          <br/>
          <RTopLine>
          Create and Alter intelligent decision making processes
          </RTopLine>
      </div>
      </div>
</div>
  );
};

export default Testimonial;
