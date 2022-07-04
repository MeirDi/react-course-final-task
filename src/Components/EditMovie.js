import React, { useState } from "react";
import { addMovie, editMovie } from "./api";
import { Container, Form, Button, Card } from "react-bootstrap";

function EditMovie({ movie, handleChange, handleMovieToEdit }) {
  const [title, setTitel] = useState(movie.title);
  const [img, setImg] = useState(movie.img);
  const [synopsis, setSynopsis] = useState(movie.synopsis);
  const [rating, setRating] = useState(movie.rating);
  const [year, setYear] = useState(movie.year);

  return (
    <Container>
      <Card className="mt-5">
        <Card.Header as="h1">Edit {title}</Card.Header>
        <Card.Body>
          <Form
            className="w-100"
            onSubmit={async (e) => {
              e.preventDefault();
              let res = await editMovie(title, img, synopsis, rating, year);
              console.log(res);
              handleMovieToEdit(null);
              handleChange();
            }}
          >
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

export default EditMovie;
