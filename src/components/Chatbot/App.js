import React, { Component } from "react";
import "./styles.css";
import Chatbot from "react-chatbot-kit";
import config from "./chatbotConfig";
import ActionProvider from "./ActionProvider";
import MessageParser from "./MessageParser";

class App extends Component {
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
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMSTcf9vxteFLXwKOVebZMuNkDh7PkAvwe7w&usqp=CAU"
          alt="Career Guidance Bot"
          onClick={this.handleShowBot}
        />
      </div>
    );
  }
}

export default App;
