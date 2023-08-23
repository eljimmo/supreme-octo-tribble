import React from "react";
import { TopLine, Subtitle, InfoContainer3, YTopLine, RTopLine, Wrapper } from "../../../InfoSection/InfoElements";
import Typewriter from 'typewriter-effect';
// import App from "../../../Flower/App";

const Testimonial = () => {
  return (

    <div id="testimonial">
      <div className="gridlayout1">
        <div>

        {/* <App /> */}
        
        </div>
        <div>

          <TopLine>
Utilizing data provided by IEXCloud, Alpha Vantage, & Polygon API, we are able to create AI chatbots that can give you predictions and suggestions on what to do with your stocks.
</TopLine>


Create your own bots and change the way the internal model for the AI works.



          <TopLine>
          Create and Alter Intelligence Parameters
          </TopLine>


          <Typewriter
options={{
strings: ['Intelligence is an accident of evolution and not necessarily an advantage.', 'The theory of evolution is quite rightly called the greatest unifying theory in biology.', 'DNA is like a computer program but far, far more advanced than any software ever created.', 'This is evolution, The monkey, The man, And then the gun', 'All modern men are descended from a wormlike creature, but it shows more on some people.', 'A hen is only an eggs way of making another egg', 'Evolution is not finished; reason is not the last word nor the reasoning animal the supreme figure of Nature. As man emerged out of the animal, so out of man the superman emerges.', 'The whole point of being alive is to evolve into the complete person you were intended to be.', 'Mutation is random; natural selection is the very opposite of random', 'To give us room to explore the varieties of mind and body into which our genome can evolve, one planet is not enough.', 'Evolution is amazingly versatile in adapting the materials at hand to other uses.'],
autoStart: true,
loop: true,
}}
/> 


          {/* <Subtitle>
          Predictive Modeling, & Adaptive Control
          </Subtitle>
          <Subtitle>
          Cognitive Modeling
          </Subtitle> */}
        {/* </InfoContainer3> */}
      </div>
      </div>
</div>
  );
};

export default Testimonial;
