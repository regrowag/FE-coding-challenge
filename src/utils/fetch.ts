export const getMovieData = () =>
  fetch("/movies.json").then((data) => data.json());
