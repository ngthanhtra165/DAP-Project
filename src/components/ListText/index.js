import React from "react";
import { FaQuestionCircle } from "react-icons/fa";

const ListText = (props) => {
  const { arrList = [] } = props;
  return (
    <div style={{ borderTop: "1px dotted #ccc" }} className="pt-4 mt-4">
      {arrList?.map((item, index) => (
        <div className="d-flex  align-items-center" key={index}>
          <FaQuestionCircle className="flex-shrink-0" />
          <p className="mb-0 ps-2">{item?.name}</p>
        </div>
      ))}
    </div>
  );
};

export default ListText;
