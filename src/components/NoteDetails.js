import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router-dom";
import useFetch from "./UseFetch";
import "../stylesheets/NoteDetails.css";

const NoteDetails = () => {
  const { id } = useParams();
  const {
    data: notes,
    error,
    isPending,
  } = useFetch("http://localhost:3000/notes/" + id);

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

        <div className="note-details">
          {isPending && <div> Loading... </div>}
          {error && <div> {error} </div>}
          {notes && (
            <article>
              <h2> {notes.title} </h2>
              <div> {notes.body} </div>
            </article>
          )}
        </div>

        <br />
        <div className="button-save-container">
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
