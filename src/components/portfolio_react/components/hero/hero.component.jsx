import React from "react";
import { TopLine, Subtitle, TextWrapper, Heading } from "../../../InfoSection/InfoElements";


const Hero = () => {
  return (
    <div id="hero">
      <Heading>Project Leibniz Analytica</Heading>
      <TextWrapper>
                <TopLine> Stock Market Derivative Modeling, Machine Learning for Predictive Analysis</TopLine>
                <Subtitle> The foundation of Leibniz Analytica is to build AI models to help guide an investment decision. Create, optimize, manipulate agents to learn how to trade a stock or multiple at once. </Subtitle>
              </TextWrapper>
      <TopLine>&lt; Created by Jim Morales /&gt;</TopLine>
      <p>
      Modeling Statistical properties as distribution variables to quantify the effect of variables as features in a set.
      From Value at Risk, Portfolio vs Benchmark Strategy, Genetic Algorithms, LSTMs, Recurrent Neural Networks, Leibniz provides the tools you need to better your financial asset portfolio.
      Create your own custom financial trading agent to better assist you when trading.
      </p>
      {/* <p>
        Open to remote freelance opportunities, contract jobs, and full time
        work. I like to learn new things, solve problems, and create innovative
        web solutions.
      </p> */}
      <a href="#projects" className="heroBTN">
        See my work
      </a>
    </div>
  );
};

export default Hero;
