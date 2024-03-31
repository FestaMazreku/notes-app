import React from "react";
import CategoryList from "./CategoryList";
import CreateNote from "./CreateNote";
import NoteList from "./NoteList";
import { useParams } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

function Home() {
  const { id } = useParams();

  return (
    <Row>
      <Col lg={4} md={4} sm={6} xs={6}>
        <CategoryList />
      </Col>
      {id ? (
        <Col lg={8} md={8} sm={6} xs={6}>
          <NoteList />
        </Col>
      ) : (
        <Col lg={8} md={8} sm={6} xs={6}>
          <CreateNote />
        </Col>
      )}
    </Row>
  );
}

export default Home;