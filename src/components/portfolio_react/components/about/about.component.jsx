import React from "react";
import { ReactComponent as Html } from "../../assets/html.svg";
import { ReactComponent as Css } from "../../assets/css.svg";
import { ReactComponent as Js } from "../../assets/js.svg";
import { ReactComponent as Ts } from "../../assets/ts.svg";
import { ReactComponent as Node } from "../../assets/node.svg";
import { ReactComponent as Reacti } from "../../assets/react.svg";
import { ReactComponent as Fire } from "../../assets/fire.svg";
import { ReactComponent as Boot } from "../../assets/boot.svg";
// import { ReactComponent as Figma } from "../../assets/figma.svg";
// import { ReactComponent as Git } from "../../assets/git.svg";
// import { ReactComponent as Gulp } from "../../assets/gulp.svg";
// import { ReactComponent as Post } from "../../assets/post.svg";
import { 
  // InfoContainer, 
  TopLine, Subtitle, TextWrapper, Heading } from "../../../InfoSection/InfoElements";

const About = () => {
  return (
    <div id="about">
      <div>
        <Heading>About the Creator</Heading>
        <TextWrapper>
        <p>
          Hello! My name is Jim Morales and I am a self taught developer whoi started my programming journey while at the Univeristy of Texas A&M. 
        </p>
        </TextWrapper>
        <Subtitle>
        Machine Learning is a vast field of study dedicated to the research of algorithimic methods that utilize data to better performance for a given problem.      
        learn and improve from experience.
        </Subtitle>
        <TopLine>
        Understanding What is Neuro Evolution in Algorithms.
        Evolutionary algorithms inspired by biological processes found in nature, creating populations of solutions and then eliminating non fitting candidates.       
        Creating idiosyncratic Agents,
        A comprehensive financial modeling structure enables investors to capture a holistic valuation towards determining navigation in a changing volatile risk field.
        </TopLine>
      </div>
      <div>
        <h3 style={{ marginTop: "2rem" }}>Current Tech Stack</h3>
        <div className="skillgrid">
          <div>
            <div className="skillemblem">
              <Html />
            </div>
            <p>HTML5</p>
          </div>
          <div>
            <div className="skillemblem">
              <Css />
            </div>
            <p>CSS3</p>
          </div>
          <div>
            <div className="skillemblem">
              <Js />
            </div>
            <p>JavaScript</p>
          </div>
          <div>
            <div className="skillemblem">
              <Ts />
            </div>
            <p>TypeScript</p>
          </div>
          <div>
            <div className="skillemblem">
              <Node />
            </div>
            <p>NodeJS</p>
          </div>
          <div>
            <div className="skillemblem">
              <Reacti />
            </div>
            <p>React</p>
          </div>
          <div>
            <div className="skillemblem">
              <Fire />
            </div>
            <p>Firebase</p>
          </div>
          <div>
            <div className="skillemblem">
              <Boot />
            </div>
            <p>Bootstrap</p>
          </div> 
        </div>
      </div>
      <div>
      {/* <InfoContainer> */}
        {/* <Heading2>Programming Directive</Heading2> */}
        {/* <Subtitle>Consume, as in to consume knowledge to serve the end user.</Subtitle> */}
        {/* <Subtitle>
          Enhance, as in to share solutions in order to enhance the problem.
        </Subtitle>
        <Subtitle>
          Replicate, as in to replicate the process to consistently solve
          problems.
        </Subtitle> */}
        {/* </InfoContainer> */}

      </div>
    </div>
  );
};

export default About;
