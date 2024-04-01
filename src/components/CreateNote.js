import { Button, Form, Card, Alert, Row, Col } from "react-bootstrap";
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
  const [successMessage, setSuccessMessage] = useState("");
  const [variant, setVariant] = useState("");

  const handleInput = (event) => {
    setNote({ ...note, [event.target.name]: event.target.value });
  };

  function handleSubmit(event) {
    console.log("Form submitted!");
    event.preventDefault();
    axios
      .post(`https://jsonplaceholder.typicode.com/posts`, { note })
      .then((response) => {
        setVariant("success");
        setSuccessMessage("Note created successfully!");
        setTimeout(() => {
          setSuccessMessage("");
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
        setVariant("danger");
        setSuccessMessage("Note creation failed!");
        setTimeout(() => {
          setSuccessMessage("");
        }, 3000);
      });
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
        {successMessage && (
            <Alert className="mt-4" key={variant} variant={variant}>
              {successMessage}
            </Alert>
        )}
        <Row>
          <Col lg={12} md={12} sm={12} xs={12}>
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
                as="textarea"
                rows={6}
                onChange={handleInput}
                placeholder="Write your note here..."
                className="body"
                name="body"
              />
              <Button className="button-save float-end mt-4" type="submit">
                Save Changes &nbsp;{" "}
                <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
              </Button>
            </Form>
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default CreateNote;
