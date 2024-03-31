import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router-dom";
import { useFetch } from "react";

const CreateNote = () => {
  const { id } = useParams();
  const {
    data: notes,
    error,
    isPending,
  } = useFetch("http://localhost:3000 / notes / " + id);

  return (
    <>
      <Card className="card">
        <div>
          <Button variant="success">
            Create Button <FontAwesomeIcon icon={faPlus} />{" "}
          </Button>
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

export default CreateNote;
