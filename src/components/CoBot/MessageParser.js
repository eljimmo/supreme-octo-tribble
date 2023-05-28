class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    message = message.toLowerCase();
    console.log(message);

    if (
      message.includes("options") ||
      message.includes("help") ||
      message.includes("do for me")
    ) {
      return this.actionProvider.handleOptions({ withAvatar: true });
    }

    if (
      message.includes("News") ||
      message.includes("news") ||
      message.includes("Market News") ||
      message.includes("latest") ||
      message.includes("noticias") ||
      message.includes("report") ||
      message.includes("story")
    ) {
      return this.actionProvider.handleMarket();
    }

    if (
      message.includes("stats") ||
      message.includes("statistics") ||
      message.includes("deaths")
    ) {
      return [
        this.actionProvider.handleGlobalStats(),
        this.actionProvider.handleLocalStats()
      ];
    }

    if (message.includes("portfolio") || 
    message.includes("delivery")
    
    ) {
      return this.actionProvider.handleMedicine();
    }

    if (
      message.includes("joke") ||
      message.includes("jokes") ||
      message.includes("funny")
    ) {
      return this.actionProvider.handleJoke();
    }
    if (
      message.includes("quotes") ||
      message.includes("quote") 
          ) {
      return this.actionProvider.handleQuotes();
    }

    if (
      message.includes("coins") ||
      message.includes("coin") ||
      message.includes("bitcoin") ||
      message.includes("crypto") 
          ) {
      return this.actionProvider.handleCryptoCoins();
    }

    if (message.includes("thanks") || message.includes("thank you")) {
      return this.actionProvider.handleThanks();
    }

    return this.actionProvider.handleOptions({ withAvatar: true });
  }
}

export default MessageParser;
