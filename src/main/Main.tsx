import { Movie } from "../App";
import "./Main.css";

type MainProps = {
  movies: Movie[];
};
export const Main = ({ movies }: MainProps) => {
  return (
    <div className="cloneflix-main">
      {movies.map((movie) => (
        <div key={movie.id} className="cloneflix-main-movie">
          <object
            data={movie.posterUrl}
            type="image/jpeg"
            className="cloneflix-main-movie-image"
          >
            <img src="/no-image.png" alt=" " />
          </object>

          <div className="cloneflix-main-movie-pill">{movie.title} </div>
        </div>
      ))}
    </div>
  );
};
