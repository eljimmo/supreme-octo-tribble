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
      backgroundColor: "#808080"
    },
    chatButton: {
      backgroundColor: "#0f5faf"
    }
  },
  initialMessages: [
    createChatBotMessage(
      `Hi I'm ${botName}. I’m here to help you show you how our Artificial Intelligent Agents can help with investment decisions.`

    ),
    createChatBotMessage(
      "Here's a quick overview of what I can help you with. You can also type a stock name or industry sector in & I will give you some info on it.",
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
      widgetName: "creatorContact",
      widgetFunc: (props) => <Contact />
    },
    {
      widgetName: "medicineDelivery",
      widgetFunc: (props) => <MedicineDelivery />
    }
  ]
};

export default config;
