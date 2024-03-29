import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import "../stylesheets/CreateNote.css";

const CreateNote = ({ onChange }) => {
  return (
    <>
      <Card className="card">
        <div className="create-note">
          <Button className="button">
            {" "}
            Create Note &nbsp; <FontAwesomeIcon icon={faPlus} />{" "}
          </Button>
        </div>

        <div className="input-group mb-3">
         
              <FontAwesomeIcon icon={faSearch} />

        <input
          type="text"
          className="form-control"
          placeholder="Search..."
          aria-label="Search"
          aria-describedby="basic-addon2"
          onChange={(e) => onChange(e.target.value)}
          />
          </div>
      </Card>
    </>
  );
};

export default CreateNote;
