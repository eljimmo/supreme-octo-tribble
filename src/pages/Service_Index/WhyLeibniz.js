import React from 'react';
import styled, { keyframes } from 'styled-components';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar/index';
import Footer from '../../components/Footer/index';
import OptimizerComparisonChart from './OptimizerChart';

const sgdSampleData = {
    epochs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], // example epochs data
    loss: [0.9, 0.85, 0.8, 0.78, 0.76, 0.74, 0.73, 0.72, 0.71, 0.7]  // example loss data for SGD
};

const adamSampleData = {
    epochs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    loss: [0.9, 0.82, 0.7, 0.6, 0.55, 0.52, 0.5, 0.49, 0.48, 0.47] // example loss data for Adam
};

const rmspropSampleData = {
    epochs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    loss: [0.9, 0.83, 0.71, 0.63, 0.59, 0.57, 0.54, 0.52, 0.51, 0.5] // example loss data for RMSprop
};

const adagradSampleData = {
    epochs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    loss: [0.9, 0.86, 0.79, 0.77, 0.75, 0.73, 0.72, 0.71, 0.7, 0.69] // example loss data for Adagrad
};


const TopLine1 = styled.div`
  color: #00b100;
  font-size: 12px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

const gradientText = keyframes`
{
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}`;

const Title = styled.h1`
  animation: ${gradientText} 5s ease-in-out infinite;
  font-size: 48px;
  letter-spacing: 0.8rem;
  text-transform: uppercase;
  text-align: center;
  background: linear-gradient(to right, #ee9ca7, #ffdde1, #2193b0, #6dd5ed);
  background-size: 200%;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

const PageWrapper = styled.div`
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Content = styled.div`
  background-color: transparent;
  padding: 20px;
  border-radius: 10px;
  margin-top: 20px;
  text-align: center;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`;

const FeatureBox = styled.div`
  flex: 1;
  background-color: transparent;
  padding: 20px;
  border-radius: 10px;
  margin: 0 10px;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`;


const Subtitle = styled.h2`
  font-size: 28px;
  color: #2193b0;
  margin-top: 30px;
  text-align: center;
`;

const Paragraph = styled.p`
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 20px;
  color: #ffffff;
`;

export default function ChooseUs() {
  return (
    <>
      {/* <Navbar />
      <Sidebar /> */}
      <PageWrapper>
        <Title>Why Choose Our Trading Bots?</Title>
        <Content>
          <Subtitle>Experience the power of advanced algorithms, unparalleled deep learning techniques,
             and innovative technology that ensures a competitive edge in the trading world.</Subtitle>
        </Content>

        <Row>
          <FeatureBox>
            <TopLine1>Advanced Algorithms</TopLine1>
            <Paragraph>Our algorithms are built on the latest research and are continuously updated
               to ensure maximum profitability and efficiency.</Paragraph>
          </FeatureBox>
          <FeatureBox>
            <TopLine1>Deep Learning</TopLine1>
            <Paragraph>With TensorFlow integration, our bot learns from market patterns and can 
              predict price movements with uncanny accuracy.</Paragraph>
          </FeatureBox>
          <FeatureBox>
            <TopLine1>Innovative Technology</TopLine1>
            <Paragraph>Stay ahead of the curve with high-frequency trading, cloud integration, and real-time analytics.</Paragraph>
          </FeatureBox>
        </Row>

        <Subtitle>Deep Neural Networks (DNN)</Subtitle>
        <Paragraph>
          At the core of our bot's intelligence lies the power of DNNs. Deep Neural Networks are a class of models in the neural network family that excel in recognizing patterns and features in vast datasets. By utilizing multiple layers, our bot can understand the intricacies of financial data, making more accurate and informed trading decisions.
        </Paragraph>

        <Subtitle>Keras & Training Models</Subtitle>
        <Paragraph>
          Our bot is built using Keras, an open-source neural network API that provides an easy and fast way to design and experiment with deep learning models. With Keras, we can efficiently train our models, ensuring that they're always equipped with the latest patterns and trends identified in the trading world.
        </Paragraph>

        <Subtitle>Feature Extraction & Machine Learning</Subtitle>
        <Paragraph>
          The process of identifying the most relevant features from raw data is pivotal. Our bot uses advanced machine learning techniques to filter out noise and focus on the key indicators that matter most. This process ensures that our bot is not just crunching numbers but making decisions based on the genuine insights drawn from the data.
        </Paragraph>

        <Subtitle>Optimizers and Model Fine-tuning</Subtitle>
        <Paragraph>
          The choice of optimizer can significantly influence the performance of our models. Optimizers are algorithms that adjust the weights in our network based on the loss function, ensuring models converge to optimal solutions.
        </Paragraph>

        <Row>
          <FeatureBox>
            <TopLine1>SGD (Stochastic Gradient Descent)</TopLine1>
            <Paragraph>SGD is a classic optimization algorithm.
               It updates the weights using only one training example at a time and is suitable for large datasets. 
               Though simple, it's proven effective for many tasks.</Paragraph>
          </FeatureBox>
          <FeatureBox>
            <TopLine1>Adam</TopLine1>
            <Paragraph>Adam is an adaptive learning rate optimization algorithm. 
              It combines the best properties of AdaGrad and RMSprop algorithms to provide an optimization that can handle 
              sparse gradients on noisy problems.</Paragraph>
          </FeatureBox>
          <FeatureBox>
            <TopLine1>Learning Rate Decay</TopLine1>
            <Paragraph>A high learning rate can speed up training, but it might skip the optimal solution. 
              Learning rate decay gradually reduces the learning rate over epochs, ensuring convergence to the best 
              weights without overshooting.</Paragraph>
          </FeatureBox>
        </Row>
        <>
        <OptimizerComparisonChart adagradData={adagradSampleData} rmspropData={rmspropSampleData} sgdData={sgdSampleData} adamData={adamSampleData} />
        </>
        <Subtitle>Deep Neural Network Layers</Subtitle>
        <Paragraph>
          Layers in a DNN can be thought of as levels of abstraction. The initial layers might recognize simple patterns, like lines and edges in an image. As we go deeper, these patterns combine to recognize more complex structures. In trading, early layers might identify basic market movements, whereas deeper layers interpret these as potential trading signals or strategies. Our bot's deep architecture ensures a comprehensive understanding of market data.
        </Paragraph>

      </PageWrapper>
      {/* <Footer/> */}
    </>
  );
}






