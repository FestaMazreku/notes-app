import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useState } from "react";
import "../stylesheets/CreateNote.css";

const CreateNote = () => {
  const [note, setNote] = useState({
    title: "",
    body: "",
  });

  const handleInput = (event) => {
    setNote({ ...note, [event.target.name]: event.target.value });
  };

  function handleSubmit(event) {
    console.log("Form submitted!");
    event.preventDefault();
    axios
      .post(`https://jsonplaceholder.typicode.com/posts`, { note })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  }

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

        <Form onSubmit={handleSubmit}>
          <br />
          <Form.Control
            type="text"
            onChange={handleInput}
            placeholder="Add a title"
            className="title"
            name="title"
          />
          <hr />
          <Form.Control
            type="text"
            onChange={handleInput}
            placeholder="Write your note here..."
            className="body"
            name="body"
          />

          <div className="button-save-container float-end">
            <Button className="button-save">
              Save Changes &nbsp;{" "}
              <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
            </Button>
          </div>
        </Form>
        <br />

        {/* <div className="button-save-container float-end">
          <Button className="button-save">
            Save Changes &nbsp;{" "}
            <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
          </Button>
        </div> */}
      </Card>
    </>
  );
};

export default CreateNote;
