import Options from "./Options";

const GeneralOptions = (props) => {
  const options = [
    // {
    //   name: "Show me recommended stocks.",
    //   handler: props.actionProvider.handleGlobalStats,
    //   id: 1
    // },
    // {
    //   name: "Show me what stocks to avoid.",
    //   handler: props.actionProvider.handleLocalStats,
    //   id: 2
    // },
    // {
    //   name: "Show me my portfolio.",
    //   handler: props.actionProvider.handleMedicine,
    //   id: 4
    // },
    {
      name: "US Market Sector Index",
      handler: props.actionProvider.handleContact,
      id: 3
    },
    {
      name: "Crypto Coins",
      handler: props.actionProvider.handleCryptoCoins,
      id: 5
    },
  ];
  return <Options options={options} title="Options" {...props} />;
};

export default GeneralOptions;
