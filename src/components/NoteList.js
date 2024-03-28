import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import "../stylesheets/NoteList.css";

const NoteList = () => {
  return (
    <>
      <Card className="card">
        <div direction="horizontal" gap={1}>
          <Button className="button1">Create New Notes</Button>{" "}
          <Button className="button1">Show all notes</Button>{" "}
          <Button className="button2">Search notes</Button>{" "}
        </div>
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
      </Card>
    </>
  );
};

export default NoteList;
