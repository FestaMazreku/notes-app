import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
                <ListGroup.Item action href="#link1" className="category">
                  {" "}
                  <FontAwesomeIcon icon={faFolder} className="icon" />
                  &nbsp; Category (1)
                </ListGroup.Item>
                <br />
                <ListGroup.Item action href="#link2" className="category">
                  <FontAwesomeIcon icon={faFolder} className="icon" />
                  &nbsp; Category (5)
                </ListGroup.Item>
                <br />
                <ListGroup.Item action href="#link3" className="category">
                  <FontAwesomeIcon icon={faFolder} className="icon" />
                  &nbsp; Category (12)
                </ListGroup.Item>
                <br />
                <ListGroup.Item action href="#link4" className="category">
                  <FontAwesomeIcon icon={faFolder} className="icon" />
                  &nbsp; Category (0)
                </ListGroup.Item>
                <br />
                <ListGroup.Item action href="#link5" className="category">
                  <FontAwesomeIcon icon={faFolder} className="icon" />
                  &nbsp; Category (16)
                </ListGroup.Item>
                <br />
                <ListGroup.Item action href="#link6" className="category">
                  <FontAwesomeIcon icon={faFolder} className="icon" />
                  &nbsp; Category (3)
                </ListGroup.Item>
                <br />
                <ListGroup.Item action href="#link7" className="category">
                  <FontAwesomeIcon icon={faFolder} className="icon" />
                  &nbsp; Category (2)
                </ListGroup.Item>
                <br />
                <ListGroup.Item action href="#link8" className="category">
                  <FontAwesomeIcon icon={faFolder} className="icon" />
                  &nbsp;Category (2)
                </ListGroup.Item>
                <br />
                <ListGroup.Item action href="#link9" className="category">
                  <FontAwesomeIcon icon={faFolder} className="icon" />
                  &nbsp;Category (0)
                </ListGroup.Item>
                <br />
                <ListGroup.Item action href="#link10" className="category">
                  <FontAwesomeIcon icon={faFolder} className="icon" />
                  &nbsp; Category (0)
                </ListGroup.Item>
                <br />
                <ListGroup.Item action href="#link11" className="category">
                  <FontAwesomeIcon icon={faFolder} className="icon" />
                  &nbsp;Category (0)
                </ListGroup.Item>
                <br />
                <ListGroup.Item action href="#link12" className="category">
                  <FontAwesomeIcon icon={faFolder} className="icon" />
                  &nbsp; Category (0)
                </ListGroup.Item>
                <br />
                <ListGroup.Item action href="#link13" className="category">
                  <FontAwesomeIcon icon={faFolder} className="icon" />
                  &nbsp;Category (0)
                </ListGroup.Item>
                <br />
                <ListGroup.Item action href="#link14" className="category">
                  <FontAwesomeIcon icon={faFolder} className="icon" />
                  &nbsp; Category (0)
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
