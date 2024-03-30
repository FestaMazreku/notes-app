import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router-dom";
import NoteDetails from "./NoteDetails";
import "../stylesheets/NoteList.css";

const NoteList = () => {
  const { id } = useParams();
  console.log(id);

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
        {id ? (
          <NoteDetails />
        ) : (
          <Form className="text">
            <Form.Group>
              <br />
              <Form.Control placeholder="Add a title" className="title" />
              <hr />
              <Form.Control
                placeholder="Write your note here..."
                className="note"
              />
            </Form.Group>
          </Form>
        )}
        <br />
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

export default NoteList;
