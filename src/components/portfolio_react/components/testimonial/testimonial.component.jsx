import React from "react";
import salon from "../../assets/salon.png";
// import salonowner from "../../assets/salonowner.png";
// import { 
//   InfoContainer,
//   TopLine,
//   Heading2,
//   Subtitle,
// } from "../../../InfoSection/InfoElements";
import { ServicesP } from "../../../Services/ServicesElements";

const Testimonial = () => {
  return (
    <div id="testimonial">
      {/* <InfoContainer>
      <Heading2>Intelligent Smart Networks</Heading2>
      <TopLine>Machine Learning Analytics Processing </TopLine>

      </InfoContainer> */}
      <div className="gridlayout1">
        <div>
          <img src={salon} alt="Mockup of Darling Salon Website" />
        </div>
        <div>

          <ServicesP>
Utilizing data provided by IEXCloud, Alpha Vantage, & Polygon API, we are able to create AI chatbots that can give you predictions and suggestions on what to do with your stocks.
Create your own bots and change the way the internal model for the AI works.
          </ServicesP>
          <ServicesP>
          artificial Neurons or Nodes
          </ServicesP>
          <ServicesP>
          predictive modeling, adaptive control

          </ServicesP>

          <ServicesP>
          cognitive modeling

          </ServicesP>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
