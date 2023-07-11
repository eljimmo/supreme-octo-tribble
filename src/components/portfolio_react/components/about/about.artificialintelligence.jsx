import React from "react";
import { ReactComponent as Html } from "../../assets/html.svg";
import { ReactComponent as Css } from "../../assets/css.svg";
import { ReactComponent as Js } from "../../assets/js.svg";
import { ReactComponent as Ts } from "../../assets/ts.svg";
import { ReactComponent as Node } from "../../assets/node.svg";
import { ReactComponent as Reacti } from "../../assets/react.svg";
import { ReactComponent as Fire } from "../../assets/fire.svg";
import { ReactComponent as Boot } from "../../assets/boot.svg";
import { ReactComponent as Figma } from "../../assets/figma.svg";
import { ReactComponent as Git } from "../../assets/git.svg";
import { ReactComponent as Gulp } from "../../assets/gulp.svg";
import { ReactComponent as Post } from "../../assets/post.svg";
import { Subtitle3, Heading1, TopLine,BlueTopLine } from "../../../InfoSection/InfoElements";
import '../../styles.css';

const Artificialintelligenceabout = () => {
  return (

    <div id="about">
    <div>
      <Heading1>Deep learning is a type of machine learning and artificial intelligence (AI) that imitates the way humans gain certain types of knowledge.</Heading1>
      <Subtitle3>
      The adjective "deep" in deep learning refers to the use of multiple layers in the network. The universal approximation theorem for deep neural networks concerns the capacity of networks with bounded width but the depth is allowed to grow.      
      </Subtitle3>
      {/* <Subtitle3>
      Deep learning is a type of machine learning and artificial intelligence (AI) that imitates the way humans gain certain types of knowledge.
      </Subtitle3> */}
      {/* <p>
      UNDERSTANDING WHAT IS NEURO EVOLUTION IN ALGORITHMS. 
      EVOLUTIONARY ALGORITHMS INSPIRED BY BIOLOGICAL PROCESSES FOUND IN NATURE, CREATING POPULATIONS OF SOLUTIONS AND THEN ELIMINATING NON FITTING CANDIDATES. 
      CREATING IDIOSYNCRATIC AGENTS, A COMPREHENSIVE FINANCIAL MODELING STRUCTURE ENABLES INVESTORS TO CAPTURE A HOLISTIC VALUATION TOWARDS DETERMINING NAVIGATION IN A CHANGING VOLATILE RISK FIELD.
      </p> */}
    </div>
    <div>
      <BlueTopLine style={{ marginTop: "2rem" }}>The agent, The environment, The reward function, The action space, The state space...</BlueTopLine>
      <div className="skillgrid">
        <div>
          <div className="skillemblem">
            <Html />
          </div>
          <p>Turtle Agent</p>
        </div>
        <div>
          <div className="skillemblem">
            <Css />
          </div>
          <p>Duel-Q-Learning Agent</p>
        </div>
        <div>
          <div className="skillemblem">
            <Js />
          </div>
          <p>Actor-Critic-Agent</p>
        </div>
        <div>
          <div className="skillemblem">
            <Ts />
          </div>
          <p>Curiosity-Q-Learning Agent</p>
        </div>
        <div>
          <div className="skillemblem">
            <Node />
          </div>
          <p>Moving-Average Agent</p>
        </div>
        <div>
          <div className="skillemblem">
            <Reacti />
          </div>
          <p>Duel-Curiosity-Q-Learning Agent</p>
        </div>
        <div>
          <div className="skillemblem">
            <Fire />
          </div>
          <p>Neuro-Evolution-Agent</p>
        </div>
        <div>
          <div className="skillemblem">
            <Boot />
          </div>
          <p>Q-Learning Agent</p>
        </div>
        <div>
          <div className="skillemblem">
            <Figma />
          </div>
          <p>Policy Gradient Agent</p>
        </div>
        <div>
          <div className="skillemblem">
            <Git />
          </div>
          <p>Recurrent-Q-Learning Agent</p>
        </div>
        <div>
          <div className="skillemblem">
            <Gulp />
          </div>
          <p>Evolution Strategy Agent</p>
        </div>
        <div>
          <div className="skillemblem">
            <Post />
          </div>
          <p>Actor-Critic-Recurrent Agent</p>
        </div>
      </div>
    </div>
    <div>
      <Heading1>Programming Meta-learning and Architecture Search</Heading1>
      <Subtitle3>AI applications in finance may create or intensify financial and non-financial risks, and give rise to potential financial consumer and investor protection considerations. The use of AI amplifies risks that could affect a financial institution’s safety and soundness, given the lack of explainability or interpretability of AI model processes, with potential for pro-cyclicality and systemic risk in the markets.</Subtitle3>
      <Subtitle3>
        Enhance, as in to share solutions in order to enhance the problem.
      </Subtitle3>
      <Subtitle3>
        Replicate, as in to replicate the process to consistently solve
        problems.
      </Subtitle3>
    </div>
  </div>

  );
};

export default Artificialintelligenceabout;
