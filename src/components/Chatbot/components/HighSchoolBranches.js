import React from "react";

import "./HighSchoolBranches.css";

const HighSchoolBranches = (props) => {
  const options = [
    {
      text: "Science",
      handler: props.actionProvider.handleCareerList,
      id: 1
    },
    { text: "Commerce", handler: () => {}, id: 2 },
    { text: "Arts", handler: () => {}, id: 3 }
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="learning-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="learning-options-container">{optionsMarkup}</div>;
};

export default HighSchoolBranches;
