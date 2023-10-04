import Movie from "./components/Movie";
import { movies } from "./movieDummy";

function App() {

  return (
    <div className="App">
      <ul className="grid4">
        {
          movies.results.map((item)=>{
            return (<>
              <Movie
                key={item.id}
                id={item.id}
                poster_path={item.poster_path}
                title={item.title}
                vote_average={item.vote_average}
                overview={item.overview}/>
              </>
            )
          })
        }
      </ul>
    </div>
  );
}

export default App;


