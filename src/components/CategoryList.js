import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";
import { faCheck, faX, faFolder, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "react-bootstrap/Card";
import "../stylesheets/CategoryList.css";

function CategoryList() {
  return (
    <>
      <Card className="card">
        <Stack direction="horizontal" gap={2}>
          <Form.Control className="me-auto" placeholder="Add a title..." />
          <button className="button-check">
            {" "}
            <FontAwesomeIcon icon={faCheck} />{" "}
          </button>
          <button className="button-X">
            <FontAwesomeIcon icon={faX} />
          </button>
        </Stack>
        <br />

        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
          <Row>
            <Col sm={12}>
              <ListGroup>
                <ListGroup.Item action href="category1" className="category">
                  {" "}
                  <FontAwesomeIcon icon={faFolder} className="icon" />
                  &nbsp; Category (1)
                  <span className="caret-container">
                    <FontAwesomeIcon icon={faCaretDown} className="caret" />
                  </span>
                </ListGroup.Item>
                <br />
                <ListGroup.Item action href="category2" className="category">
                  <FontAwesomeIcon icon={faFolder} className="icon" />
                  &nbsp; Category (5)
                  <span className="caret-container">
                    <FontAwesomeIcon icon={faCaretDown} className="caret" />
                  </span>
                </ListGroup.Item>
                <br />
                <ListGroup.Item action href="category3" className="category">
                  <FontAwesomeIcon icon={faFolder} className="icon" />
                  &nbsp; Category (2)
                  <span className="caret-container">
                    <FontAwesomeIcon icon={faCaretDown} className="caret" />
                  </span>
                </ListGroup.Item>
                <br />
                <ListGroup.Item action href="category4" className="category">
                  <FontAwesomeIcon icon={faFolder} className="icon" />
                  &nbsp; Category (0)
                  <span className="caret-container">
                    <FontAwesomeIcon icon={faCaretDown} className="caret" />
                  </span>
                </ListGroup.Item>
                <br />
                <ListGroup.Item action href="category5" className="category">
                  <FontAwesomeIcon icon={faFolder} className="icon" />
                  &nbsp; Category (6)
                  <span className="caret-container">
                    <FontAwesomeIcon icon={faCaretDown} className="caret" />
                  </span>
                </ListGroup.Item>
                <br />
                <ListGroup.Item action href="category6" className="category">
                  <FontAwesomeIcon icon={faFolder} className="icon" />
                  &nbsp; Category (3)
                  <span className="caret-container">
                    <FontAwesomeIcon icon={faCaretDown} className="caret" />
                  </span>
                </ListGroup.Item>
                <br />
                <ListGroup.Item action href="category7" className="category">
                  <FontAwesomeIcon icon={faFolder} className="icon" />
                  &nbsp; Category (2)
                  <span className="caret-container">
                    <FontAwesomeIcon icon={faCaretDown} className="caret" />
                  </span>
                </ListGroup.Item>
                <br />
                <ListGroup.Item action href="category8" className="category">
                  <FontAwesomeIcon icon={faFolder} className="icon" />
                  &nbsp;Category (2)
                  <span className="caret-container">
                    <FontAwesomeIcon icon={faCaretDown} className="caret" />
                  </span>
                </ListGroup.Item>
                <br />
                <ListGroup.Item action href="category9" className="category">
                  <FontAwesomeIcon icon={faFolder} className="icon" />
                  &nbsp;Category (0)
                  <span className="caret-container">
                    <FontAwesomeIcon icon={faCaretDown} className="caret" />
                  </span>
                </ListGroup.Item>
                <br />
                <ListGroup.Item action href="category10" className="category">
                  <FontAwesomeIcon icon={faFolder} className="icon" />
                  &nbsp; Category (0)
                  <span className="caret-container">
                    <FontAwesomeIcon icon={faCaretDown} className="caret" />
                  </span>
                </ListGroup.Item>
                <br />
                <ListGroup.Item action href="category11" className="category">
                  <FontAwesomeIcon icon={faFolder} className="icon" />
                  &nbsp;Category (0)
                  <span className="caret-container">
                    <FontAwesomeIcon icon={faCaretDown} className="caret" />
                  </span>
                </ListGroup.Item>
                <br />
                <ListGroup.Item action href="category12" className="category">
                  <FontAwesomeIcon icon={faFolder} className="icon" />
                  &nbsp; Category (0)
                  <span className="caret-container">
                    <FontAwesomeIcon icon={faCaretDown} className="caret" />
                  </span>
                </ListGroup.Item>
                <br />
                <ListGroup.Item action href="category13" className="category">
                  <FontAwesomeIcon icon={faFolder} className="icon" />
                  &nbsp;Category (0)
                  <span className="caret-container">
                    <FontAwesomeIcon icon={faCaretDown} className="caret" />
                  </span>
                </ListGroup.Item>
                <br />
                <ListGroup.Item action href="category14" className="category">
                  <FontAwesomeIcon icon={faFolder} className="icon" />
                  &nbsp; Category (0)
                  <span className="caret-container">
                    <FontAwesomeIcon icon={faCaretDown} className="caret" />
                  </span>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col sm={8}>
              <Tab.Content></Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Card>
    </>
  );
}

export default CategoryList;
