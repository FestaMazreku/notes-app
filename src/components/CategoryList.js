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
  faPlus,
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
    {
      id: 11,
      name: "Category",
    },
    {
      id: 12,
      name: "Category",
    },
    {
      id: 13,
      name: "Category",
    },
    {
      id: 14,
      name: "Category",
    },
    {
      id: 15,
      name: "Category",
    },
    {
      id: 16,
      name: "Category",
    },
    {
      id: 17,
      name: "Category",
    },
    {
      id: 18,
      name: "Category",
    },
    {
      id: 19,
      name: "Category",
    },
    {
      id: 20,
      name: "Category",
    },
  ];

  const [category, setCategory] = useState(categoryArray);
  const [showForm, setShowForm] = useState(false);
  const [newCategoryTitle, setNewCategoryTitle] = useState("");

  const handleAddCategory = () => {
    setShowForm(true);
  };

  const handleSaveCategory = () => {
    const newCategory = {
      id: category.length + 1,
      name: newCategoryTitle,
    };
    setCategory([...category, newCategory]);
    setNewCategoryTitle("");
    setShowForm(false);
  };

  const handleChange = (e) => {
    setNewCategoryTitle(e.target.value);
  };

  return (
    <>
      <Card className="card">
        <Stack direction="horizontal" gap={2}>
          {!showForm && (
            <button className="button-category" onClick={handleAddCategory}>
              Create Category{" "}
              <FontAwesomeIcon icon={faPlus} className="mt-1 float-end" />{" "}
            </button>
          )}
          {showForm && (
            <>
              <Form.Control
                className="me-auto"
                placeholder="Add a title..."
                value={newCategoryTitle}
                onChange={handleChange}
              />
              <button className="button-check" onClick={handleSaveCategory}>
                <FontAwesomeIcon icon={faCheck} />
              </button>
              <button
                className="button-cancel"
                onClick={() => setShowForm(false)}
              >
                <FontAwesomeIcon icon={faX} />
              </button>
            </>
          )}
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
