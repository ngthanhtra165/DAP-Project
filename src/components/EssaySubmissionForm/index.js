import React, { useState } from "react";
import "./style.scss";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import array_list from "./essayExample"

function EssaySubmissionForm(props) {
  const { setName, name, setEssay, essay } = props;

  return (
    <div className="EssaySubmissionForm ">
      <div className="mb-3 position-realative">
        <label htmlFor="floatingTextarea" className="form-label mb-3 ms-3">
          Question
        </label>
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ minHeight: "100px" }}
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
          id="floatingTextarea"
        />
        <div className="form-floating">
          <Button
            onClick={() => {
              let chosen_id = parseInt(Math.random() * (array_list.length - 1));
              console.log(chosen_id);
              setName(array_list[chosen_id]);
              
            }}
            variant="primary"
            className="py-1"
            style={name !== "" ? { display: "none" } : {}}
          >
            Get a random Question
          </Button>
        </div>
      </div>
      <br></br>
      <label htmlFor="floatingTextarea2" className="form-label mb-3 ms-3">
        Essay
      </label>
      <Form.Control
        as="textarea"
        placeholder="Leave a comment here"
        style={{ minHeight: "100px" }}
        onChange={(e) => {
          setEssay(e.target.value);
        }}
        value={essay}
        id="floatingTextarea2"
      />
    </div>
  );
}

export default EssaySubmissionForm;
