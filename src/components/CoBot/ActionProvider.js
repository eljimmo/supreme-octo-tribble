class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }
  handleOptions = (options) => {
    const message = this.createChatBotMessage(
      "How can I help you? Below are some possible options.",
      {
        widget: "overview",
        loading: true,
        terminateLoading: true,
        ...options
      }
    );

    this.addMessageToState(message);
  };

  handleGlobalStats = () => {
    const message = this.createChatBotMessage(
      "Here's the latest global stats.",
      {
        widget: "globalStatistics",
        loading: true,
        terminateLoading: true,
        withAvatar: true
      }
    );

    this.addMessageToState(message);
  };

  handleLocalStats = () => {
    const message = this.createChatBotMessage(
      "Here's the latest stats in Sri Lanka.",
      {
        widget: "localStatistics",
        loading: true,
        terminateLoading: true,
        withAvatar: true
      }
    );

    this.addMessageToState(message);
  };

  handleContact = () => {
    const message = this.createChatBotMessage(
      "Email the creator!",
      {
        widget: "creatorContact",
        loading: true,
        terminateLoading: true,
        withAvatar: true
      }
    );

    this.addMessageToState(message);
  };

  handleMedicine = () => {
    const message = this.createChatBotMessage(
      "To have clinical medicine safely delivered to your home, please refer to the link below.",
      {
        widget: "medicineDelivery",
        loading: true,
        terminateLoading: true,
        withAvatar: true
      }
    );

    this.addMessageToState(message);
  };

  handleJoke = () => {
    var jokes = [
      "The Covid 19 Toilet Paper craze was a lot like the Stock Market Crash of 1929 But this time, instead of everyone dumping their stocks, they're stocking for dumps",
      "What's the difference between me and the stock market? 1) My parents are actually invested in the stock market 2) The stock market still has some value 3) People care that the stock market is currently depressed",
      "Secretly found that I can manipulate stock market Whatever I bought, it went red.",
      "I purchased $1,000 in Bose stock today. My accountant said it would be a sound investment.",
      "My friend is an honourable, courteous and chivalrous guy. But he hates the stock market. When I asked him why, he said, “Gentlemen prefer bonds.”",
      "The stock market is down 30%... Yo mama must have skipped a meal."
    ];

    var randomJoke = jokes[Math.floor(Math.random() * jokes.length)];

    const message = this.createChatBotMessage(randomJoke);

    this.addMessageToState(message);
  };

  handleThanks = () => {
    const message = this.createChatBotMessage("You're welcome, and stay safe!");

    this.addMessageToState(message);
  };

  addMessageToState = (message) => {
    this.setState((state) => ({
      ...state,
      messages: [...state.messages, message]
    }));
  };
}

export default ActionProvider;
