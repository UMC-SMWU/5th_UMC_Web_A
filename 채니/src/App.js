import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header"; // Header 컴포넌트를 불러옵니다.
import Movies from "./Pages/Movies";
import Home from "./Pages/Home";
import TV from "./Pages/TV";
import Celebirity from "./Pages/Celebirity";
import NotFound from "./Pages/NotFound";
import MovieDetail from "./Pages/MovieDetail";

function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter>
        <Header />
        <Home />
        <Routes>
          <Route path="/movie/:title" element={<MovieDetail />} />
          <Route path="/movie" element={<Movies />} />
          <Route path="/celeb" element={<Celebirity />} />
          <Route path="/tv" element={<TV />} />
          <Route path="/nf" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
