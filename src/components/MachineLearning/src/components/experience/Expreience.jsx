import { Component } from "react";
import "./experience.css";
import styled from 'styled-components';



const RTopLine = styled.div`
  color: #ff0900;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 0.5rem;
  text-transform: uppercase;
  margin-bottom: 16px;

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }

`;

const ZTopLine = styled.div`
  color: #ffffff;
  font-size: 12px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

const BTopLine = styled.div`
  color: #4485c9;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 0.5rem;
  text-transform: uppercase;
  margin-bottom: 16px;

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }

`;


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
                <ZTopLine>Supervised Learning</ZTopLine>
                <ZTopLine>Use labeled data to make predictions.</ZTopLine>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <ZTopLine>Unsupervised Learning</ZTopLine>
                <ZTopLine>Discover patterns and structures from unlabeled data.</ZTopLine>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <ZTopLine>Reinforcement Learning</ZTopLine>
                <ZTopLine>Train models to make sequences of decisions by rewarding them for correct actions.</ZTopLine>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <ZTopLine>Dimensionality Reduction</ZTopLine>
                <ZTopLine>Reduce the number of random variables and obtain a set of principal ones.</ZTopLine>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <ZTopLine>Feature Engineering</ZTopLine>
                <ZTopLine>Selection, transformation, or creation of input variables to enhance model performance.</ZTopLine>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <ZTopLine>Statistical Models</ZTopLine>
                <ZTopLine>Create models based on statistical methods to capture relationships between variables.</ZTopLine>
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
                <ZTopLine>Convert discrete variables into continuous vectors, often for better representation in machine learning models.</ZTopLine>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <ZTopLine>Self Attention Mechanism</ZTopLine>
                <ZTopLine>Allows models, especially transformers, to weigh input features differently and capture global dependencies.</ZTopLine>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <ZTopLine>Multi-Head Self-Attention</ZTopLine>
                <ZTopLine>Part of the Transformer architecture that captures different types of information in the input data.</ZTopLine>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <ZTopLine>Feedforward Network</ZTopLine>
                <ZTopLine>A neural network where connections between the units do not form a cycle, commonly used in deep learning.</ZTopLine>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <ZTopLine>Layer Normalization</ZTopLine>
                <ZTopLine>Normalizes input data within each layer, ensuring that the activations don't reach extremely high or low values.</ZTopLine>
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
