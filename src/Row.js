import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
import { withRouter } from "react-router-dom";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow, history }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  return (
    <div className="rowContainer">
      <h2>{title}</h2>
      <div className="row_posterContainer">
        {movies.map((movie) => (
          <img
            key={movie.id}
            id={movie.id}
            className={`row_Poster ${isLargeRow && "row_PosterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            onClick={() => {
              history.push({
                pathname: `/movie/${movie.id}`,
              });
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default withRouter(Row);
