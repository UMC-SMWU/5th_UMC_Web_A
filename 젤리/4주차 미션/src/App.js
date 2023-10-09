import { isVisible } from "@testing-library/user-event/dist/utils";
import Movie from "./Components/Movie/Movie";
import { movies } from "./movieDummy";
import * as A from "./Components/Movie/Movie.style";

function App() {
  return (
    <A.Body>
      <A.App_container>
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
      </A.App_container>
    </A.Body>
  );
}

export default App;
