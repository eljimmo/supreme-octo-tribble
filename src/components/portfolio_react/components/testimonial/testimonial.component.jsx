import React from "react";
import salon from "../../assets/salon.png";
import { TopLine, Subtitle } from "../../../InfoSection/InfoElements";

const Testimonial = () => {
  return (

    <div id="testimonial">
      <div className="gridlayout1">
        <div>
          <img src={salon} alt="Mockup of Darling Salon Website" />
        </div>
        <div>

          <TopLine>
Utilizing data provided by IEXCloud, Alpha Vantage, & Polygon API, we are able to create AI chatbots that can give you predictions and suggestions on what to do with your stocks.
Create your own bots and change the way the internal model for the AI works.
          </TopLine>
          <Subtitle>
          Artificial Neurons or Nodes
          </Subtitle>
          <Subtitle>
          Predictive Modeling, & Adaptive Control
          </Subtitle>
          <Subtitle>
          Cognitive Modeling
          </Subtitle>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
