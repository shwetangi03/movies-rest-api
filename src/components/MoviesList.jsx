import React from "react";

import Movie from "./Movie";
import classes from "./MoviesList.module.css";

const MovieList = (props) => {
const deleteHandler = (movieId)=>{
  props.onDelete(movieId)
}

  return (
    <ul className={classes["movies-list"]}>
      {props.movies.map((movie) => (
        <li key={movie.id}>
          <Movie
            title={movie.title}
            releaseDate={movie.releaseDate}
            openingText={movie.openingText}
          />
          <button onClick={() => deleteHandler(movie.id)}>Delete Movie</button>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
