import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";
import {
  faCheck,
  faX,
  faFolder,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import "../stylesheets/CategoryList.css";

function CategoryList() {
  const categoryArray = [
    {
      id: 1,
      name: "Category",
    },
    {
      id: 2,
      name: "Category",
    },
    {
      id: 3,
      name: "Category",
    },
    {
      id: 4,
      name: "Category",
    },
    {
      id: 5,
      name: "Category",
    },
    {
      id: 6,
      name: "Category",
    },
    {
      id: 7,
      name: "Category",
    },
    {
      id: 8,
      name: "Category",
    },
    {
      id: 9,
      name: "Category",
    },
    {
      id: 10,
      name: "Category",
    },
  ];

  const [category] = useState(categoryArray);

  return (
    <>
      <Card className="card">
        <Stack direction="horizontal" gap={2}>
          <Form.Control className="me-auto" placeholder="Add a title..." />
          <button className="button-check">
            <FontAwesomeIcon icon={faCheck} />
          </button>
          <button className="button-X">
            <FontAwesomeIcon icon={faX} />
          </button>
        </Stack>
        <br />
        <Row>
          <Col lg={12} md={12} sm={12} xs={12}>
            <ListGroup>
              {category &&
                category.map((item) => {
                  return (
                    <ListGroup.Item
                      action
                      href={`/category?id=${item.id}`}
                      className="category"
                      key={item.id}
                    >
                      <FontAwesomeIcon icon={faFolder} className="icon" />
                      &nbsp;
                      {
                        // eslint-disable-next-line
                        item.name + " " + "(" + item.id + ")"
                      }
                      <span className="caret-container">
                        <FontAwesomeIcon
                          icon={faCaretDown}
                          className="float-end"
                        />
                      </span>
                    </ListGroup.Item>
                  );
                })}
            </ListGroup>
          </Col>
        </Row>
      </Card>
    </>
  );
}

export default CategoryList;
