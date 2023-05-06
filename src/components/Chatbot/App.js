import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";
import { ConditionallyRender } from "react-util-kit";


import { ReactComponent as Logo } from "./assets/icons/logo.svg";
import { ReactComponent as ButtonIcon } from "./assets/icons/robot.svg";
import config from "./bots/docsbot/config";
import MessageParser from "./bots/docsbot/MessageParser";
import ActionProvider from "./bots/docsbot/ActionProvider";

import "./App.css";

function ChatApp() {
  const [showChatbot, toggleChatbot] = useState(false);

  return (
    <div className="App">
        <Logo style={{ paddingTop: "40px", height: "150px", width: "150px" }} />
        <h1 className="app-header">Project Leibniz Analytica</h1>



        <div className="app-chatbot-container">
          <ConditionallyRender
            ifTrue={showChatbot}
            show={
              <Chatbot
                config={config}
                messageParser={MessageParser}
                actionProvider={ActionProvider}
              />
            }
          />
        </div>

        <button
          className="app-chatbot-button"
          onClick={() => toggleChatbot((prev) => !prev)}
        >
          <ButtonIcon className="app-chatbot-button-icon" />
        </button>

        {/* <div className="app-overview"> */}
          {/* <h2 className="app-header">Overview</h2> */}
          {/* <p className="app-paragraph">
            The AI bots work under the parameters given by the creator and with the data choosen. Utilizing the data and the parameters, the AI bots will be able to make predictions and give suggestions. 
          </p> */}
          {/* <div className="app-overview-gist-container"> */}
          {/* </div> */}

          {/* <h2 className="app-header">Contact Creator</h2>

          <a
            href="https://github.com/eljimmo"
            className="app-quickstart-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a> */}
        {/* </div> */}

    </div>
  );
}

export default ChatApp;
