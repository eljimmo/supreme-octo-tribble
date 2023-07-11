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
                  <h4>Supervised learning</h4>
                  <small className="text-light">Training Data</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Unsupervised learning</h4>
                  <small className="text-light">Learn Patterns from unlabeled data.</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Reinforcement learning</h4>
                  <small className="text-light">Take Actions in Environments</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Dimensionality Reduction</h4>
                  <small className="text-light">reducing variables & set of principal variables</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Feature Learning</h4>
                  <small className="text-light">Representative Elements</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Statistical Model</h4>
                  <small className="text-light">Embodies a set of statistical Assumptions</small>
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
                  <h4>Input Sequences</h4>
                  <small className="text-light">Tokens</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Embeddings</h4>
                  <small className="text-light">Matrix of Vectors</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Self Attention Mechanism</h4>
                  <small className="text-light">Attention Computation</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Multi-Head Self-Attention</h4>
                  <small className="text-light">Transformer Architecture</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Feedforward Network</h4>
                  <small className="text-light">Connected Layers and Activation Functions</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Layer Normalization</h4>
                  <small className="text-light"> stabilize the training process and prevent the model from overfitting</small>
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
