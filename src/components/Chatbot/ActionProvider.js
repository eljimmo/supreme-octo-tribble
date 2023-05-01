class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  // new method
  greet() {
    const greetingMessage = this.createChatBotMessage(
      `Hi Folk!😁 ${`\n`}
       How may I help you?`
    );
    this.updateChatbotState(greetingMessage);
  }

  handleCareerList = () => {
    const message = this.createChatBotMessage(
      "Fantastic, do you enjoy being Science Student?",
      {
        widget: "careerLinks"
      }
    );
    this.updateChatbotState(message);
  };

  handleDefault = () => {
    const message = this.createChatBotMessage(
      "Oops! I think you have not selected any option. Please select any option from below to proceed.",
      {
        widget: "highSchoolOptions"
      }
    );
    this.updateChatbotState(message);
  };

  updateChatbotState(message) {
    // NOTICE: This function is set in the constructor, and is passed in from the top level Chatbot component. The setState function here actually manipulates the top level state of the Chatbot, so it's important that we make sure that we preserve the previous state.

    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message]
    }));
  }
}

export default ActionProvider;
