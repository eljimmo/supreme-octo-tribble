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
  TopLine,
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
            <TopLine>Machine learning Algorithm Development</TopLine>
            <div className="experience__content">
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>HTML</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>CSS</h4>
                  <small className="text-light">Advandced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Javascript</h4>
                  <small className="text-light">LoveIt</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Tailwind</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Bootstrap</h4>
                  <small className="text-light">Begginer</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>React</h4>
                  <small className="text-light">Senior</small>
                </div>
              </article>
            </div>
          </div>
          <div className="experience__backend">
            <TopLine>Foundational Development of Chatbots and Virtual Assistants</TopLine>
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
