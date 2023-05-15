import { createChatBotMessage } from "react-chatbot-kit";
import Overview from "./widgets/Overview";
import GlobalStatistics from "./widgets/GlobalStatistics";
import LocalStatistics from "./widgets/LocalStatistics";
import Contact from "./widgets/Contact";
import MedicineDelivery from "./widgets/MedicineDelivery";
import CoBotAvatar from "./CoBotAvatar";

const botName = "Leibniz Bot";



const config = {

  lang: "no",
  botName: botName,
  customStyles: {
    botMessageBox: {
      // backgroundColor: "#808080"
      backgroundColor: "#2273c4"
    },
    chatButton: {
      backgroundColor: "#0f5faf"
    }
  },
  initialMessages: [
    createChatBotMessage(
      `Hi I'm ${botName}. I’m here to help you show you how Artificial Intelligent Agents can help with financial investment decisions.`

    ),
    createChatBotMessage(
      "Ask me about a specific stock, cryptocurrency, or anything. I can also tell you jokes.",

      {
        withAvatar: false,
        delay: 400,
        widget: "overview"
      }
    )
  ],
  state: {},
  customComponents: { botAvatar: (props) => <CoBotAvatar {...props} /> },
  widgets: [
    {
      widgetName: "overview",
      widgetFunc: (props) => <Overview {...props} />,
      mapStateToProps: ["messages"]
    },
    {
      widgetName: "globalStatistics",
      widgetFunc: (props) => <GlobalStatistics />
    },
    {
      widgetName: "localStatistics",
      widgetFunc: (props) => <LocalStatistics />
    },
    {
      widgetName: "medicineDelivery",
      widgetFunc: (props) => <MedicineDelivery />
    },
    {
      widgetName: "creatorContact",
      widgetFunc: (props) => <Contact />
    },
  ]
};

export default config;
