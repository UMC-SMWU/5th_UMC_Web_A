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
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;

function overView() {
  return (
    <div>
      <div className="overview_container">
        {movies.results.map((item) => {
          return <Movie title={item.title} overview={item.overview} />;
        })}
      </div>
    </div>
  );
}
