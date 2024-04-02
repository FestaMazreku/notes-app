import React from "react";
import { Button, Card, ListGroup, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import axios from "axios";
import "../stylesheets/CreateNote.css";

const NoteList = () => {
  const [note, setNote] = useState([]);

  const api = axios.create({
    baseURL: process.env.REACT_APP_API_HOST_URL,
    timeout: 7000,
  });

  const fetchNotes = async () => {
    try {
      const response = await api.get(
        `https://jsonplaceholder.typicode.com/posts`
      );
      if (response.status === 200) {
        setNote(response.data.slice(0, 10));
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

  const handleOnClear = (string) => {
    !string && fetchNotes();
  };

  const handleOnSearch = (string) => {
    const filteredNotes = note.filter((item) =>
      item.title.toLowerCase().includes(string.toLowerCase())
    );
    string ? setNote(filteredNotes) : fetchNotes();
  };

  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: "block", textAlign: "left" }}>
          Title: String({item.title})
        </span>
      </>
    );
  };

  return (
    <Card className="card">
      <Row>
        <Col lg={3}>
          <Button
            className="button-note"
            onClick={() => {
              window.location.assign("/");
            }}
          >
            Create Note <FontAwesomeIcon icon={faPlus} className="mt-1 float-end"/>{" "}
          </Button>
        </Col>
        <Col lg={5}>
          <ReactSearchAutocomplete
            items={note}
            onSearch={handleOnSearch}
            autoFocus
            formatResult={formatResult}
            onClear={handleOnClear}
            fuseOptions={{ useExtendedSearch: true, threshold: 0.3 }}
            placeholder="Search for a title..."
            styling={{ zIndex: 2, borderRadius: "4px" }}
          />
        </Col>
      </Row>
      <Row>
        <Col lg={12} md={12} sm={12} xs={12}>
          <div className="note-details">
            <ListGroup>
              {note &&
                note.map((item) => {
                  return (
                    <ListGroup.Item action key={item.id} onClick={() => {}}>
                      &nbsp;
                      <span className="fw-bold">Title: {item.title}</span>
                      <p>{item.body}</p>
                    </ListGroup.Item>
                  );
                })}
            </ListGroup>
          </div>
        </Col>
      </Row>
    </Card>
  );
};

export default NoteList;
