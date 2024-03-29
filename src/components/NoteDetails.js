import React from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useState, useEffect } from "react";
import "../stylesheets/NoteDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NoteDetails = () => {
  const [note, setNote] = useState([]);

  const api = axios.create({
    baseURL: process.env.REACT_APP_API_HOST_URL,
    timeout: 5000,
  });

  const fetchNotes = async () => {
    try {
      const response = await api.get(
        `https://jsonplaceholder.typicode.com/posts`,
      );
      if (response.status === 200) {
        setNote(response.data);
      } else {
        alert("Failed to fetch notes!");
      }
    } catch (error) {
      console.log("Failed to fetch notes!" + error);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

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

        <div className="note-details">
          <ListGroup>
            {note &&
              note.map((item) => {
                return (
                  <ListGroup.Item
                    action
                    href={item.id}
                    key={item.id}
                  >
                    &nbsp;
                    <span className="fw-bold">{item.title}</span>
                    <p>{item.body}</p>
                  </ListGroup.Item>
                );
              })}
            }
          </ListGroup>
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
