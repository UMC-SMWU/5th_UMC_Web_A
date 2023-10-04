import { isVisible } from "@testing-library/user-event/dist/utils";
import Movie from "./Components/movie";
import { movies } from "./movieDummy";

function App() {
  return (
    <div>
      <div className="app-container">
        {movies.results.map((item) => {
          return (
            <Movie
              title={item.title}
              poster_path={item.poster_path}
              vote_average={item.vote_average}
              overview={item.overview}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
