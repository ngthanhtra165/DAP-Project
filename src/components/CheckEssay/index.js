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
  const [score, setScore] = useState(0);
  const [score_coherence, setScore_coherence] = useState(0.0);
  const [score_task, setScore_task] = useState(0.0);
  const [score_lexical, setScore_lexical] = useState(0.0);
  const [score_grammatical, setScore_grammatical] = useState(0.0);

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
    setScore(0);
    setScore_coherence(0);
    setScore_task(0);
    setScore_grammatical(0);
    setScore_lexical(0);
  };

  const handleSubmit = async (e) => {
    setShowBtnNew(true);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        question: name,
        essay: essay,
      }),
    };

    // fetch api
    const fetch_api = await fetch(
      "https://dca6-2405-4802-35f-8b80-44a2-9cfd-3e28-ca03.ap.ngrok.io/predict",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        let diem1 = data["predicted_coherence"],
          diem2 = data["predicted_task"],
          diem3 = data["predicted_grammar"],
          diem4 = data["predicted_lexical"];
        let overall_band = parseFloat((diem1 + diem2 + diem3 + diem4) / 4);
        let thresh_hold = parseInt((diem1 + diem2 + diem3 + diem4) / 4);
        const kc = parseFloat(overall_band - thresh_hold);
        console.log(`kc is ${kc}`);
        if (kc < 0.25) setScore(thresh_hold);
        else if (kc >= 0.25 && kc < 0.75)
          setScore(parseFloat(thresh_hold + 0.5));
        else setScore(thresh_hold + 1);
        setScore_coherence(parseFloat(data["predicted_coherence"]));
        setScore_task(parseFloat(data["predicted_task"]));
        setScore_grammatical(data["predicted_grammar"]);
        setScore_lexical(data["predicted_lexical"]);
        console.log(score_coherence);
        console.log(score);
      })
      .catch((error) => console.error(error));
    // caculate the overall score
    // setScore_coherence(6);
    // setScore_task(6);
    // setScore_grammatical(7);
    // setScore_lexical(8)
    console.log(`the socre is ${score}`);
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
            <Score score={score} />
          </Col>
        </Row>
        <Row>
          <Col lg={8}></Col>
          <Col lg={4}>
            <ListText score={score_coherence} arrList={arrList_COHERENCE} />
            <ListText score={score_grammatical} arrList={arrList_lexical} />
            <ListText score={score_lexical} arrList={arrList_GRAMMATICAL} />
            <ListText score={score_task} arrList={arrList_TASK} />
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
    index: 0,
  },
  {
    name: "Support main points with an explanation and then an example",
    index: 1,
  },
  {
    name: "Include an introduction and conclusion",
    index: 2,
  },
  {
    name: "Use cohesive linking words accurately and appropriately",
    index: 3,
  },
  {
    name: "Vary your linking phrases using synonyms",
    index: 4,
  },
];

let arrList_lexical = [
  {
    title: "LEXICAL RESOURCE",
  },
  {
    name: "Try to vary your vocabulary using accurate synonyms",
    index: 0,
  },
  {
    name: "Check your work for spelling and word formation mistakes",
    index: 1,
  },
];

let arrList_GRAMMATICAL = [
  {
    title: "GRAMMATICAL RANGE",
  },
  {
    name: "Use a variety of complex and simple sentences",
    index: 0,
  },
  {
    name: "Check your writing for errors",
    index: 1,
  },
];

let arrList_TASK = [
  {
    title: "TASK ACHIEVEMENT",
  },
  {
    name: "Answer all parts of the question",
    index: 0,
  },
  {
    name: "Word Count",
    index: 1,
  },
];
