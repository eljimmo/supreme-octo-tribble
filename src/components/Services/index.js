import React from 'react';
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-3.svg';
import Icon3 from '../../images/svg-5.svg';
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP
} from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Algorithms and Methods</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>AI Assisted Analysis</ServicesH2>
          <ServicesP>
            A comprehensive financial modeling structure enables investors to capture a more holistic valuation towards determining navigation in volatile risk field.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Find Underlying Stock Trend Patterns Utilizing the most powerful modern day tools.</ServicesH2>
          <ServicesP>
            By minimizing the variable search space, & subsequent effect, a process of data optimization is created to find correlational traces in data.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Unleash the power of Artificial Intelligence Algorithms to analyze financial data.</ServicesH2>
          <ServicesP>
            Created by the Leibniz Analytica Team, data provided by IEX Cloud, graphing library provided by Plotly Dash.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
