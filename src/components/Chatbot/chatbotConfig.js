import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import HighSchoolBranches from "./components/HighSchoolBranches";
import List from "./components/List";

const botName = "Career Guidance Bot";

const config = {
  botName: botName,
  initialMessages: [
    createChatBotMessage(
      `Hi There! I am ${botName}. I am here to help you in making a better choice for your Career.`
    ),
    createChatBotMessage(
      "May I know in which stream from the below you are enrolled in?",
      {
        withAvatar: true,
        widget: "highSchoolBranches"
      }
    )
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#a1c3f0"
    },
    chatButton: {
      backgroundColor: "#ccdbfd"
    }
  },
  widgets: [
    {
      widgetName: "highSchoolBranches",
      widgetFunc: (props) => <HighSchoolBranches {...props} />
    },
    {
      widgetName: "careerLinks",
      widgetFunc: (props) => <List {...props} />,
      props: {
        options: [
          {
            text: "Yes",
            id: 1
          },
          {
            text: "No",
            id: 2
          },
          {
            text: "May Be",
            id: 3
          }
        ]
      }
    }
  ]
};

export default config;
