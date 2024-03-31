import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NoteDetails = () => {
  return (
    <>
      <Card className="card">
        <div className="button-container">
          <div className="left-buttons">
            <Button className="button button1"></Button>
            <Button className="button button2"></Button>
            <Button className="button button3"></Button>
          </div>

          <div className="right-buttons">
            <Button className="button"></Button>
            <Button className="button"></Button>
            <Button className="button"></Button>
          </div>
        </div>

        <br />
        <div className="button-delete-container float-start">
          <Button className="button-delete">
            Delete Note &nbsp;{" "}
            <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
          </Button>
        </div>

        <div className="button-save-container float-end">
          <Button className="button-save">
            Save Changes &nbsp;{" "}
            <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
          </Button>
        </div>
      </Card>
    </>
  );
};

export default NoteDetails;
