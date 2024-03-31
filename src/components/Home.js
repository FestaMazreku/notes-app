import React from "react";
import NavbarNotes from "./Navbar";
import CategoryList from "./CategoryList";
import WriteNote from "./WriteNote";
import { Row, Col } from "react-bootstrap";
// import CreateNote from "./CreateNote";

function Home() {
  const categoryListStyle = {
    backgroundColor: "rgb(241, 240, 240)",
    height: "900px",
  };

  return (
    <>
      <NavbarNotes />
      <Row style={categoryListStyle}>
        <Col lg={4} md={4} sm={6} xs={6}>
          <CategoryList />
        </Col>
        <Col lg={8} md={8} sm={6} xs={6}>
          <WriteNote />
        </Col>
        {/* <Col lg={6} md={6} sm={4} xs={4}>
          <CreateNote />
        </Col> */}
      </Row>
    </>
  );
}

export default Home;
