import React from "react";
import "./Example.css";

const EssayExample = (props) => {
  return (
    <div className="essay">
      <div className="score-container">{props.score}</div>
      <h2 className="title">{props.title}</h2>
      <div className="content">{props.content}</div>
    </div>
  );
};

export default EssayExample;
