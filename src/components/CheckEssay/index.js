import React, { useState, useRef } from "react";
import EssaySubmissionForm from "../EssaySubmissionForm";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { FaSpellCheck, FaRegClock, FaPen } from "react-icons/fa";
import "./style.scss";
import TimeCountDown from "../TimeCountDown";
import Score from "../Score";
import ListText from "./../ListText/index";

const CheckEssay = () => {
  const [score , setScore] = useState(0.0);
  const [score_coherence , setScore_coherence] = useState(0.0);
  const [score_task , setScore_task] = useState(0.0);
  const [score_lexical , setScore_lexical] = useState(0.0);
  const [score_grammatical , setScore_grammatical] = useState(0.0);

  const [name, setName] = useState("");
  const [essay, setEssay] = useState("");
  const refTime = useRef(null);
  const [showBtnNew, setShowBtnNew] = useState(false);

  const handleStart = () => {
    refTime.current?.start();
  };
  const handleNew = () => {
    refTime.current?.stop();
    setName("");
    setEssay("");
    setShowBtnNew(false);
    setScore(0.0);
  };


  const handleSubmit = async(e) => {
    setShowBtnNew(true);
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        'question': {
          'text' : name
        },
        'essay' : {
          'text' : essay
        }
      })
    };
   
    // fetch api
    const fetch_api = await fetch('http://localhost:8000/predict' , requestOptions).
      then(response => response.json()).
      then((data) => {
        setScore_coherence( parseFloat(data['predicted_coherence']));
        setScore_task(parseFloat(data['predicted_task'])); 
      })     
      .catch(error => console.error(error));
      // caculate the overall score 
      let overall_band = parseFloat((score_coherence + score_task)/2);
      setScore(overall_band);
  };

  return (
    <div className="CheckEssay" style={{ marginTop: "20px" }}>
      <Container>
        <Row>
          <Col lg={8}>
            <EssaySubmissionForm
              setName={setName}
              name={name}
              setEssay={setEssay}
              essay={essay}
            />
          </Col>
          <Col lg={4}>
            <div className="mt-10 button-check " style={{ marginTop: "30px" }}>
              <Button
                variant="success w-100 d-flex align-items-center mb-2 py-2"
                onClick={(e) => {
                  handleSubmit(e);
                }}
              >
                <FaSpellCheck />
                <p className="mb-0 ms-10 "> Check the Essay</p>
              </Button>
              {showBtnNew && (
                <Button
                  variant="warning w-100 d-flex align-items-center mb-2 py-2 "
                  onClick={() => {
                    handleNew();
                  }}
                >
                  <FaPen />
                  <p className="mb-0 ms-10 "> New Essay</p>
                </Button>
              )}
              {!showBtnNew && (
                <Button
                  variant="light d-flex align-items-center w-100 py-2"
                  onClick={() => {
                    handleStart();
                  }}
                >
                  <FaRegClock />
                  <p className="mb-0 ms-10"> Start timer</p>
                </Button>
              )}
            </div>
            {!showBtnNew && <TimeCountDown refTime={refTime} />}
          </Col>
        </Row>
        <Row>
          <Col lg={8}></Col>
          <Col lg={4}>
            <Score score={score}/>
          </Col>
        </Row>
        <Row>
          <Col lg={8}></Col>
          <Col lg={4}>
            <ListText arrList={arrList_COHERENCE} />
            <ListText arrList={arrList_lexical} />
            <ListText arrList={arrList_GRAMMATICAL} />
            <ListText arrList={arrList_TASK} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CheckEssay;

let arrList_COHERENCE = [
  {
    title: "COHERENCE AND COHESION",
  },
  {
    name: "Structure your answers in logical paragraphs",
  },
  {
    name: "Support main points with an explanation and then an example",
  },
  {
    name: "Include an introduction and conclusion",
  },
  {
    name: "Use cohesive linking words accurately and appropriately",
  },
  {
    name: "Vary your linking phrases using synonyms",
  },
];

let arrList_lexical = [
  {
    title: "LEXICAL RESOURCE",
  },
  {
    name: "Try to vary your vocabulary using accurate synonyms",
  },
  {
    name: "Check your work for spelling and word formation mistakes",
  },
];

let arrList_GRAMMATICAL = [
  {
    title: "GRAMMATICAL RANGE",
  },
  {
    name: "Use a variety of complex and simple sentences",
  },
  {
    name: "Check your writing for errors",
  },
];


let arrList_TASK = [
  {
    title: "TASK ACHIEVEMENT",
  },
  {
    name: "Answer all parts of the question",
  },
  {
    name: "Word Count",
  },
];


