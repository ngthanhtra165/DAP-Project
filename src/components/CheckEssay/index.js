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
  };

  const handleCheck = () => {
    setShowBtnNew(true);
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
                onClick={() => {
                  handleCheck();
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
            <Score />
          </Col>
        </Row>
        <Row>
          <Col lg={8}></Col>
          <Col lg={4}>
            <ListText arrList={arrList} />
            <ListText arrList={arrList} />

            <ListText arrList={arrList} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CheckEssay;

let arrList = [
  {
    name: "Structure your answers in logical paragraphs",
  },
  {
    name: "Use cohesive linking words accurately and appropriately",
  },
  {
    name: "Vary your linking phrases using synonyms",
  },
];
