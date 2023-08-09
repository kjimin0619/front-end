import Movie from "../components/Movie";
import { dummy } from "../movieDummy";

export default function Movies() {
  return (
    <div>
      <div className="movies-container">
        {dummy.results.map((it) => {
          return (
            <Movie
              title={it.title}
              poster_path={it.poster_path}
              vote_average={it.vote_average}
            ></Movie>
          );
        })}
      </div>
    </div>
  );
}
