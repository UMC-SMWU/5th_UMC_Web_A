import React from "react";
import Movie from "./Components/Movie/Movie";
import movies from "./movieDummy.js";

function App() {
  return (
    <div className="App">
      <div className="app-container">
        {movies.results.map((item) => {
          return <Movie key={item.id} movie={item} />;
        })}
      </div>
    </div>
  );
}

export default App;
