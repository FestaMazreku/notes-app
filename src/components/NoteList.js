import React from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import axios from "axios";
import { useState, useEffect } from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NoteList = () => {
  const [note, setNote] = useState([]);

  const api = axios.create({
    baseURL: process.env.REACT_APP_API_HOST_URL,
    timeout: 5000,
  });

  const fetchNotes = async () => {
    try {
      const response = await api.get(
        `https://jsonplaceholder.typicode.com/posts`
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
  });

  return (
    <>
      <Card className="card">
        <div>
          <Button variant="success">
            Create Button <FontAwesomeIcon icon={faPlus} />{" "}
          </Button>
        </div>

        <div className="note-details">
          <ListGroup>
            {note &&
              note.map((item) => {
                return (
                  <ListGroup.Item action href={item.id} key={item.id}>
                    &nbsp;
                    <span className="fw-bold">{item.title}</span>
                    <p>{item.body}</p>
                  </ListGroup.Item>
                );
              })}
          </ListGroup>
        </div>
        <br />
      </Card>
    </>
  );
};

export default NoteList;
