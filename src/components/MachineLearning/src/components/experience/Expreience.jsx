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
  ZTopLine
  // Heading1,
  // Heading2,
  // Subtitle,
} from "../experience/elements";

class Experience extends Component {
  render() {
    return (
      <section id="experience">

        <div className="container experience__container">
          <div className="experience__frontend">
            <BTopLine>Machine learning Algorithm Development</BTopLine>
            <div className="experience__content">
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <BTopLine>Supervised learning</BTopLine>
                  <ZTopLine>Training Data</ZTopLine>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <BTopLine>Unsupervised learning</BTopLine>
                  <ZTopLine>Learn Patterns from unlabeled data.</ZTopLine>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <BTopLine >Reinforcement learning</BTopLine>
                  <ZTopLine>Take Actions in Environments</ZTopLine>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <BTopLine>Dimensionality Reduction</BTopLine>
                  <ZTopLine>reducing variables & set of principal variables</ZTopLine>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <BTopLine>Feature Learning</BTopLine>
                  <ZTopLine>Representative Elements</ZTopLine>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <BTopLine>Statistical Model</BTopLine>
                  <ZTopLine>Embodies a set of statistical Assumptions</ZTopLine>
                </div>
              </article>
            </div>
          </div>
          <div className="experience__backend">
            <BTopLine>Foundational Development of Chatbots and Virtual Assistants</BTopLine>
            <div className="experience__content">
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <BTopLine>Input Sequences</BTopLine>
                  <ZTopLine>each vector represents a single time step in the sequence</ZTopLine>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <BTopLine>Embeddings</BTopLine>
                  <ZTopLine>Matrix of Vectors</ZTopLine>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <BTopLine>Self Attention Mechanism</BTopLine>
                  <ZTopLine>Attention Computation</ZTopLine>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <BTopLine>Multi-Head Self-Attention</BTopLine>
                  <ZTopLine>Transformer Architecture</ZTopLine>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <BTopLine>Feedforward Network</BTopLine>
                  <ZTopLine>Connected Layers and Activation Functions</ZTopLine>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <BTopLine>Layer Normalization</BTopLine>
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
