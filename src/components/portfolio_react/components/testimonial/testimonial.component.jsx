import React from "react";
import salon from "../../assets/salon.png";
import salonowner from "../../assets/salonowner.png";
import { 
  InfoContainer,
  // InfoWrapper,
  // InfoRow,
  // Column1,
  // Column2,
  // TextWrapper,
  TopLine,
  Heading2,
  Subtitle,
  // ImgWrap,
  // Img 
} from "../../../InfoSection/InfoElements";
// import { ServicesP } from "../../../Services/ServicesElements";

const Testimonial = () => {
  return (
    <div id="testimonial">
      <InfoContainer>
      <Heading2>Intelligent Smart Networks</Heading2>
      <TopLine>Machine Learning Analytics Processing </TopLine>

      </InfoContainer>
      <div className="gridlayout1">
        <div>
          <img src={salon} alt="Mockup of Darling Salon Website" />
        </div>
        <div>
          <div>
            <img
              className="clientPicture"
              src={salonowner}
              alt="Wendy Darling, the owner of Darling Salon"
            />
          </div>
          <Subtitle>
Utilizing data provided by IEXCloud, Alpha Vantage, & Polygon API, we are able to create AI chatbots that can give you predictions and suggestions on what to do with your stocks.
Create your own bots and change the way the internal model for the AI works.
          </Subtitle>
          <Heading2>
          Artificial Neurons or Nodes
          </Heading2>
          <Heading2>
          Predictive Modeling, Adaptive Control
          </Heading2>
          <Heading2>
          Cognitive Modeling
          </Heading2>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
