import React, { useState } from "react";
import "./style.scss";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
function EssaySubmissionForm(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your logic for submitting the essay
  };
  const { setName, name, setEssay, essay } = props;

  return (
    <div className="EssaySubmissionForm ">
      <FloatingLabel
        controlId="floatingTextarea"
        label="Question"
        className="mb-3 position-relative"
      >
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ minHeight: "100px" }}
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
        />
        <div className="random-question">
          <Button
            onClick={() => {
              alert("FetchApi");
            }}
            variant="primary"
            className="py-1"
            style={name !== "" ? { display: "none" } : {}}
          >
            Get a random Question
          </Button>
        </div>
      </FloatingLabel>
      <FloatingLabel controlId="floatingTextarea2" label="Essay">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ minHeight: "100px" }}
          onChange={(e) => {
            setEssay(e.target.value);
          }}
          value={essay}
        />
      </FloatingLabel>
    </div>
  );
}

export default EssaySubmissionForm;
