import React, { Component } from "react";
import "./styles.css";
import Chatbot from "react-chatbot-kit";
import config from "./chatbotConfig";
import ActionProvider from "./ActionProvider";
import MessageParser from "./MessageParser";

import { ActionIcon } from '@mantine/core';
import { IconRobot } from '@tabler/icons-react';

class ChatApp extends Component {
  state = {
    showBot: false
  };

  handleShowBot = () => {
    this.setState({
      showBot: !this.state.showBot
    });
  };

  render() {
    return (
      <div className="app">
        {this.state.showBot && (
          <Chatbot
            config={config}
            actionProvider={ActionProvider}
            messageParser={MessageParser}
            className="app_Chatbot"
          />
        )}


<ActionIcon>
      <IconRobot size="350px" onClick={this.handleShowBot}/>
    </ActionIcon>
      </div>
    );
  }
}

export default ChatApp;
