import React from "react";
import "./index.css"
const Score = ({score}) => {
  return (
    <div style={{ borderTop: "1px dotted #ccc" }} className="mt-4">
      <h1 style={{ fontSize: "7rem" }} className="text-center">
        {score}
      </h1>
      <h5 className="text-center ">Overall Band Score</h5>
    </div>
  );
};

export default Score;
