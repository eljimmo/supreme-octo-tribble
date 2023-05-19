import React from "react";
// import { TopLine, Subtitle, TextWrapper, Heading, Heading2 } from "../../../InfoSection/InfoElements";
// import InfoSectionCanva from "../../../InfoSection/index_Canvas";
// import { InfoContainer } from "../../../InfoSection/InfoElements";
import {
  // InfoContainer,
  // InfoWrapper,
  InfoWrapper2,
  // InfoRow,
  // Column1,
  // Column2,
  // TextWrapper,
  // TextWrapper2,
  TopLine,
  Heading,
  // Heading2,
  // Subtitle,
} from "../../../InfoSection/InfoElements";

const HeroNeuroevolution = () => {
  return (
    <div id="hero">
      <Heading>Neuro Evolution</Heading>
              <InfoWrapper2>
      <TopLine> Created by Jim Morales </TopLine>

      <p> 
      Neuro Evolution refers to the contruction of artificial intelligence models that are biologically inspired. By utilizing evolutionary processes,
      the architectural construction of the model is designed to optimize the performance of said model. Neuro Evolution enables deep optimal space 
      exploration by a population of evolutionary computional algorithms to create solutions that are continously improved by a process of reproduction, recombination, mutation and selection.
      </p>
      </InfoWrapper2>
      <br/>

  </div>

  );
};

export default HeroNeuroevolution;
