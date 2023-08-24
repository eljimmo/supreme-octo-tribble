import { Component } from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import "./experience.css";
import {
  // InfoContainer,
  // InfoWrapper,
  // InfoWrapper2,
  // InfoRow,
  // Column1,
  // Column2,
  // TextWrapper,
  // TextWrapper2,
  BTopLine,
  ZTopLine,
  RTopLine,
  BlackTopLine
  // Heading1,
  // Heading2,
  // Subtitle,
} from "../experience/elements";
import styled from 'styled-components'


// import {
//   HeroContainerTransparent,
//   HeroContainer252525,
//   AnimatedGradientText
// } from "../../components/HeroSection/HeroElements";
// import App2 from '../../components/FrostedGlass/App2';


const Grid = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: start;
  font-family: 'ThunderBlack';
  font-size: 4em;
  line-height: 0.74em;
  color: #00b100;

  @media (max-width: 425px) {
    grid-template-columns: 1fr;
  }
`

const Left = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: 1fr auto;
  width: 100%;
  height: 100%;
  padding: 100px;
  white-space: nowrap;
  font-family: 'ThunderThin';
  line-height: 1em;
  @media (max-width: 768px) {
    padding: 50px;
  }
`

const Right = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  background: #252525;
  color: #252525;
`

const Sub = styled.div`
  align-self: end;
  width: 200px;
  height: 2px;
  background: #f7f4af;
`

const Jumbo = styled.div`
  align-self: center;
  padding: 100px;
  font-size: 3.5em;
  color: #f3f3f3;
`

const Label = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  font-family: 'ThunderThin';
  font-size: 0.2em;
  line-height: 1em;
  color: #252525;
  padding: 100px;

  @media (max-width: 768px) {
    padding: 50px;
  }

  @media (max-width: 425px) {
    padding: 20px;
  }
`

class Experience extends Component {
  render() {
    return (


      <section id="experience">
      <br/>

        <div className="container experience__container">
          <div className="experience__frontend">
          {/* <div class="svg-wrapper"> */}

            <RTopLine>Machine learning Algorithm Development</RTopLine>
            <div className="experience__content">
              <article className="experience__details">
                {/* <BsPatchCheckFill className="experience__details-icon" /> */}
                <div>
                  <ZTopLine>Supervised learning</ZTopLine>
                  <ZTopLine>Training Data</ZTopLine>
                </div>
              </article>
              <article className="experience__details">
                {/* <BsPatchCheckFill className="experience__details-icon" /> */}
                <div>
                  <ZTopLine>Unsupervised learning</ZTopLine>
                  <ZTopLine>Learn Patterns from unlabeled data.</ZTopLine>
                </div>
              </article>
              <article className="experience__details">
                {/* <BsPatchCheckFill className="experience__details-icon" /> */}
                <div>
                  <ZTopLine >Reinforcement learning</ZTopLine>
                  <ZTopLine>Take Actions in Environments</ZTopLine>
                </div>
              </article>
              <article className="experience__details">
                {/* <BsPatchCheckFill className="experience__details-icon" /> */}
                <div>
                  <ZTopLine>Dimensionality Reduction</ZTopLine>
                  <ZTopLine>reducing variables & set of principal variables</ZTopLine>
                </div>
              </article>
              <article className="experience__details">
                {/* <BsPatchCheckFill className="experience__details-icon" /> */}
                <div>
                  <ZTopLine>Feature Learning</ZTopLine>
                  <ZTopLine>Representative Elements</ZTopLine>
                </div>
              </article>
              <article className="experience__details">
                {/* <BsPatchCheckFill className="experience__details-icon" /> */}
                <div>
                  <ZTopLine>Statistical Model</ZTopLine>
                  <ZTopLine>Embodies a set of statistical Assumptions</ZTopLine>
                </div>
              </article>
            </div>
          </div>
          <div className="experience__backend">
            <BTopLine>Foundational Development of Chatbots and Virtual Assistants</BTopLine>
            <div className="experience__content">
              <article className="experience__details">
                {/* <BsPatchCheckFill className="experience__details-icon" /> */}
                <div>
                  <ZTopLine>Input Sequences</ZTopLine>
                  <ZTopLine>each vector represents a single time step in the sequence</ZTopLine>
                </div>
              </article>
              <article className="experience__details">
                {/* <BsPatchCheckFill className="experience__details-icon" /> */}
                <div>
                  <ZTopLine>Embeddings</ZTopLine>
                  <ZTopLine>Matrix of Vectors</ZTopLine>
                </div>
              </article>
              <article className="experience__details">
                {/* <BsPatchCheckFill className="experience__details-icon" /> */}
                <div>
                  <ZTopLine>Self Attention Mechanism</ZTopLine>
                  <ZTopLine>Attention Computation</ZTopLine>
                </div>
              </article>
              <article className="experience__details">
                {/* <BsPatchCheckFill className="experience__details-icon" /> */}
                <div>
                  <ZTopLine>Multi-Head Self-Attention</ZTopLine>
                  <ZTopLine>Transformer Architecture</ZTopLine>
                </div>
              </article>
              <article className="experience__details">
                {/* <BsPatchCheckFill className="experience__details-icon" /> */}
                <div>
                  <ZTopLine>Feedforward Network</ZTopLine>
                  <ZTopLine>Connected Layers and Activation Functions</ZTopLine>
                </div>
              </article>
              <article className="experience__details">
                {/* <BsPatchCheckFill className="experience__details-icon" /> */}
                <div>
                  <ZTopLine>Layer Normalization</ZTopLine>
                  <ZTopLine> stabilize the training process and prevent the model from overfitting</ZTopLine>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>



    );
  }
}

export default Experience;
