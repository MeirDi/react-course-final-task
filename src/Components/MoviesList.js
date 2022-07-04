import React, { useState, useEffect } from "react";
import { getMovies, deleteMovie } from "./api";
import { Container, Form, Button, Alert, Card } from "react-bootstrap";
import Movie from "./Movie";
import AddMovie from "./AddMovie";
import EditMovie from "./EditMovie";

function MoviesList() {
  const [movies, setMovies] = useState([]);
  const [hasChanged, setHasChanged] = useState(false);
  const [editMovie, setEditMovieId] = useState(null);

  const handleChange = () => {
    setHasChanged(!hasChanged);
  };

  const handleMovieToEdit = (movieToEdit) => {
    setEditMovieId(movieToEdit);
  };

  useEffect(() => {
    const fetchAllMovies = async () => {
      let Data = await getMovies();
      let { movies } = Data;
      setMovies(movies);
      console.log(movies);
    };

    fetchAllMovies();
  }, [hasChanged]);

  return (
    <Container>
      <AddMovie handleChange={handleChange} />
      <hr />
      {movies.map((movie, idx) => {
        if (editMovie && editMovie.movie_id == movie.movie_id) {
          return (
            <EditMovie
              key={`movie-${idx}`}
              movie={movie}
              handleMovieToEdit={handleMovieToEdit}
              handleChange={handleChange}
            />
          );
        }
        return (
          <Movie
            key={`movie-${idx}`}
            movie={movie}
            handleMovieToEdit={handleMovieToEdit}
            handleChange={handleChange}
          />
        );
      })}
      ;
    </Container>
  );
  // data.forEach(element => {

  // });
}

export default MoviesList;
