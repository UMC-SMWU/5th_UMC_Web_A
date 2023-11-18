import React from "react";
import Tv from "./Components/Tv/Tv";
import tvs from "./tvDummy.js";

function TvMain() {
  return (
    <div className="App">
      <div className="app-container">
        {tvs.results.map((item) => {
          return <Tv key={item.id} tv={item} />;
        })}
      </div>
    </div>
  );
}

export default TvMain;
