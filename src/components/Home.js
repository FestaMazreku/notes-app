import React from "react";
import NavbarNotes from "./Navbar";
import CategoryList from "./CategoryList";
import NoteList from "./NoteList";
import { Row, Col } from "react-bootstrap";

function Home() {
    return (
        <div>
            <NavbarNotes />
            <Row>
                <Col lg={4} md={4} sm={6} xs={6}>
                    <CategoryList />
                </Col>
                <Col lg={8} md={8} sm={6} xs={6}>
                    <NoteList />
                </Col>
            </Row>
        </div>
    )
}

export default Home;