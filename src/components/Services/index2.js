import React from 'react';
import {
  ServicesContainer,
  ServicesWrapper,
  ServicesCard,
  ServicesH2,
  ServicesP
} from './ServicesElements';
import TypedReact2 from './Typed_2';

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <TypedReact2/>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesH2>
            AI Chatbots
          </ServicesH2>
          <ServicesP>
Utilizing data provided by IEXCloud, Alpha Vantage, & Polygon API, we are able to create AI chatbots that can give you predictions and suggestions on what to do with your stocks.
Create your own bots and change the way the internal model for the AI works.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
        <ServicesH2>
        DNN (Deep Neural Networks)
          </ServicesH2>
          <ServicesP>
Create & Alter the parmeters of the model to see how it affects the predictions.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesH2>Natural Language Processing (NLP) </ServicesH2>
          <ServicesP>
Utilizing the most powerful libraries, Project Liebniz Analytica aims to create idiosyncratic AI chatbots that help you better understand the financial position of an individual commodity or stock.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;


