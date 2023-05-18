import React from "react";
import salon from "../../assets/salon.png";
import { ServicesP } from "../../../Services/ServicesElements";

const Testimonial = () => {
  return (

    <div id="testimonial">
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
          Artificial Neurons or Nodes
          </ServicesP>
          <ServicesP>
          Predictive Modeling, & Adaptive Control
          </ServicesP>
          <ServicesP>
          Cognitive Modeling
          </ServicesP>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
