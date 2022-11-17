import React from "react";
import { Sidebar } from "./sidebar/Sidebar";
import { getMovieData } from "./utils/fetch";
import "./App.css";
import { Main } from "./main/Main";

export type Movie = {
  id: string;
  title: string;
  year: string;
  runtime: string;
  genres: string[];
  director: string;
  actors: string;
  plot: string;
  posterUrl: string;
};
type MovieData = {
  genres: string[];
  movies: Movie[];
};
function App() {
  const [movieData, setMovieData] = React.useState<MovieData>();
  const [loaded, hasLoaded] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (!loaded) {
      hasLoaded(true);
      getMovieData().then(setMovieData);
    }
  }, [loaded]);

  if (!movieData) {
    return null; // loading
  }
  return (
    <div className="cloneflix">
      <Sidebar genres={movieData.genres} />
      <Main movies={movieData.movies} />
    </div>
  );
}

export default App;
