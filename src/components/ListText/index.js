import React from "react";
import { FaQuestionCircle , FaQuestion} from "react-icons/fa";
import "./index.css"

const ListText = ({ score, arrList}) => {
  const arr_List = arrList;
  let dodai = arr_List.length;
  let small_score = [0 , 0 , 0 , 0 , 0 , 0];
  let i = 0, sum = 0;
  while(i <= dodai - 2) {
    small_score[i] = parseInt(-1 + Math.random() * 2 + score);
    //console.log(small_score[i]);
    sum += small_score[i];
    i++;
  }

  small_score[dodai - 1] = parseInt(score * dodai - sum);

  return (
    <div style={{ borderTop: "1px dotted #ccc" }} className="pt-4 mt-4">
      {arr_List?.map((item, index) =>
        item?.name ? (
          <div className="d-flex  align-items-center" key={index}>
            { (score == 0)?
            <FaQuestionCircle className="flex-shrink-0" /> : (<div className="score-container">
                {small_score[item?.index]}
            </div>)
            }
            <p className="mb-0 ps-2">{item?.name}</p>
          </div>
        ) : (
          <div className="d-flex  align-items-center" key={index}>
            
            <p className="mb-0 ps-2" style={{ marginRight : "7px"}}>{item?.title}</p>
            { score ? 
            (<div className="score-container1">
               {score}
            </div>) : <FaQuestion style={{ marginBottom : "5px"}}></FaQuestion>
            }
          </div>

        )
      )}
    </div>
  );
};

export default ListText;
