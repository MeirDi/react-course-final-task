import React from "react";
import { Button } from "react-bootstrap";
import { deleteMovie } from "./api";

function Movie({ movie, handleChange, handleMovieToEdit }) {
  console.log(movie);
  return (
    <div>
      <h1>{movie.title}</h1>
      <img src={movie.img} alt=""></img>
      <p>{movie.synopsis}</p>
      <Button
        onClick={() => {
          handleMovieToEdit(movie);
        }}
      >
        Edit movie
      </Button>
      <Button
        onClick={() => {
          deleteMovie(movie.movie_id);
          handleChange();
        }}
      >
        Delete movie
      </Button>
    </div>
  );
}

export default Movie;
