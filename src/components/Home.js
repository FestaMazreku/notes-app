import React from "react";
import NavbarNotes from "./Navbar";
import CategoryList from "./CategoryList";
import { Row, Col } from "react-bootstrap";
import CreateNote from "./CreateNote";
import { useParams } from "react-router-dom";

function Home() {
  const { id } = useParams();
  console.log(id);

  return (
    <>
      <NavbarNotes />
      <Row>
        <Col lg={4} md={4} sm={6} xs={6}>
          <CategoryList />
        </Col>
        <Col lg={8} md={8} sm={6} xs={6}>
          <CreateNote />
        </Col>
      </Row>
    </>
  );
}

export default Home;
