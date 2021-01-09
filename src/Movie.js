import React, { useEffect, useState } from "react";
import "./Movie.css";
import axios from "./axios";
import Nav from "./Nav";

const API_KEY = "d0722026a178b6220247a579cbc752a5";
const base_url = "https://image.tmdb.org/t/p/original/";

function Movie({ match }) {
  const [movieDescription, setMovieDescription] = useState([]);
  const searchMovie = `/movie/${match.params.id}?api_key=${API_KEY}&language=en-US`;

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(searchMovie);
      setMovieDescription(request.data);
      return request;
    }
    fetchData();
  }, [searchMovie]);
  console.log(movieDescription);
  return (
    <div className="main__Container">
      <Nav />
      <div className="movie__Container">
        <img
          className="movie__Poster"
          src={`${base_url}${movieDescription.poster_path}`}
          alt={movieDescription.title}
        />
      </div>
      <div className="movie__Info">
        <p className="movie__Title">{movieDescription.title}</p>
        <div className="movie__Buttons">
          <button className="movieButton">Play</button>
        </div>
        <div className="movie__">
          <p className="movie__ReleaseDate">
            Released : {new Date(movieDescription.release_date).getFullYear()}{" "}
          </p>
          <p>Runtime : {movieDescription.runtime} mins</p>
          <p className="movie__vote">Rating: {movieDescription.vote_average}</p>
        </div>
        <p className="movie__Overview">{movieDescription.overview}</p>
      </div>
    </div>
  );
}

export default Movie;
