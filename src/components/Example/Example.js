import React from 'react';
import './Example.css';

const EssayExample = (props) => {
  const score = props.score || ''; // default score is empty string if not provided

  return (
    <div className="essay">
      <div className="header">
        <h2 className="title">{props.title}</h2>
        <div className="score">{score}</div>
      </div>
      <div className="content">{props.content}</div>
    </div>
  );
}

export default EssayExample;
