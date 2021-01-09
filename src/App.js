import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Row from "./Row";
import requests from "./Request";
import Banner from "./Banner";
import Nav from "./Nav";
import Movie from "./Movie";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <div className="App">
            <Nav />
            <Banner />
            <Row
              title="NETFLIX ORIGINALS"
              fetchUrl={requests.fetchNetflixOriginals}
              isLargeRow={true}
            />
            <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
            <Row
              title="Romance Movies"
              fetchUrl={requests.fetchRomanceMovies}
            />
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
          </div>
        </Route>
        <Route path="/movie/:id" exact component={Movie} />
        <Route
          path="/"
          render={() => (
            <div className="error__Page">
              <p>ERROR 404 PAGE NOT FOUND</p>
            </div>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
