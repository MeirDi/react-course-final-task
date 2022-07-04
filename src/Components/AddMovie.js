import React, { useState } from "react";
import { addMovie } from "./api";
import { Container, Form, Button, Card } from "react-bootstrap";

function AddMovie({ handleChange }) {
  const [title, setTitel] = useState("");
  const [img, setImg] = useState("");
  const [synopsis, setSynopsis] = useState("");
  const [rating, setRating] = useState("");
  const [year, setYear] = useState("");

  return (
    <Container>
      <Card className="mt-5">
        <Card.Header as="h1">Add New Movie</Card.Header>
        <Card.Body>
          <Form
            className="w-100"
            onSubmit={async (e) => {
              e.preventDefault();
              let res = await addMovie(title, img, synopsis, rating, year);
              console.log(res);
              handleChange();
            }}
          >
            <Form.Group>
              <Form.Label>Title </Form.Label>
              <Form.Control
                type="text"
                placeholder="Movie Title"
                onChange={(e) => {
                  setTitel(e.target.value);
                }}
                value={title}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Image </Form.Label>
              <Form.Control
                type="text"
                placeholder="Movie Image"
                onChange={(e) => {
                  setImg(e.target.value);
                }}
                value={img}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Synopsis </Form.Label>
              <Form.Control
                type="text"
                placeholder="Synopsis"
                onChange={(e) => {
                  setSynopsis(e.target.value);
                }}
                value={synopsis}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Rating </Form.Label>
              <Form.Control
                type="text"
                placeholder="Movie Rating"
                onChange={(e) => {
                  setRating(e.target.value);
                }}
                value={rating}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Year </Form.Label>
              <Form.Control
                type="text"
                placeholder="Year"
                onChange={(e) => {
                  setYear(e.target.value);
                }}
                value={year}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default AddMovie;
