import React from 'react';
import {
  ServicesContainer,
  ServicesWrapper,
  ServicesCard,
  TopLine,
  ServicesP
} from './ServicesElements';




import TypedReact2 from './Typed_2';

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <TypedReact2/>
      <ServicesWrapper>
        <ServicesCard>
          <TopLine>
            AI Chatbots
          </TopLine>
          <ServicesP>
Utilizing data provided by IEXCloud, Alpha Vantage, & Polygon API, we are able to create AI chatbots that can give you predictions and suggestions on what to do with your stocks.
Create your own bots and change the way the internal model for the AI works.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
        <TopLine>
        DNN (Deep Neural Networks)
          </TopLine>
          <ServicesP>
Create & Alter the parmeters of the model to see how it affects the predictions.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <TopLine>Natural Language Processing (NLP) </TopLine>
          <ServicesP>
Utilizing the most powerful libraries, Project Liebniz Analytica aims to create idiosyncratic AI chatbots that help you better understand the financial position of an individual commodity or stock.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
  </ServicesContainer> 
  );
};

export default Services;


