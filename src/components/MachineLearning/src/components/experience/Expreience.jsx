import { Component } from "react";
import "./experience.css";
import {
  BTopLine,
  ZTopLine,
  RTopLine,

} from "../experience/elements";



class Experience extends Component {
  render() {
    return (


      <section id="experience">
      <br/>

        <div className="container experience__container">
          <div className="experience__frontend">
            <RTopLine>Machine learning Algorithm Development</RTopLine>
            <div className="experience__content">
              <article className="experience__details">
                <div>
                  <ZTopLine>Supervised learning</ZTopLine>
                  <ZTopLine>Training Data</ZTopLine>
                </div>
              </article>
              <article className="experience__details">
                <div>
                  <ZTopLine>Unsupervised learning</ZTopLine>
                  <ZTopLine>Learn Patterns from unlabeled data.</ZTopLine>
                </div>
              </article>
              <article className="experience__details">
                <div>
                  <ZTopLine >Reinforcement learning</ZTopLine>
                  <ZTopLine>Take Actions in Environments</ZTopLine>
                </div>
              </article>
              <article className="experience__details">
                <div>
                  <ZTopLine>Dimensionality Reduction</ZTopLine>
                  <ZTopLine>reducing variables & set of principal variables</ZTopLine>
                </div>
              </article>
              <article className="experience__details">
                <div>
                  <ZTopLine>Feature Learning</ZTopLine>
                  <ZTopLine>Representative Elements</ZTopLine>
                </div>
              </article>
              <article className="experience__details">
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
                <div>
                  <ZTopLine>Input Sequences</ZTopLine>
                  <ZTopLine>each vector represents a single time step in the sequence</ZTopLine>
                </div>
              </article>
              <article className="experience__details">
                <div>
                  <ZTopLine>Embeddings</ZTopLine>
                  <ZTopLine>Matrix of Vectors</ZTopLine>
                </div>
              </article>
              <article className="experience__details">
                <div>
                  <ZTopLine>Self Attention Mechanism</ZTopLine>
                  <ZTopLine>Attention Computation</ZTopLine>
                </div>
              </article>
              <article className="experience__details">
                <div>
                  <ZTopLine>Multi-Head Self-Attention</ZTopLine>
                  <ZTopLine>Transformer Architecture</ZTopLine>
                </div>
              </article>
              <article className="experience__details">
                <div>
                  <ZTopLine>Feedforward Network</ZTopLine>
                  <ZTopLine>Connected Layers and Activation Functions</ZTopLine>
                </div>
              </article>
              <article className="experience__details">
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
