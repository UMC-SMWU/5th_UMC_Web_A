import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Header from "./Components/Header"; // Header 컴포넌트를 불러옵니다.
import Movies from "./Pages/Movies";
import Home from "./Pages/Home";
import Tvs from "./Pages/Tvs";
import Celebirity from "./Pages/Celebirity";
import NotFound from "./Pages/NotFound";
import MovieDetail from "./Pages/MovieDetail";
import Login from "./Components/Login";

function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/movie/:title" element={<MovieDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/movie" element={<Movies />} />
          <Route path="/" element={<Home />} />
          <Route path="/celeb" element={<Celebirity />} />
          <Route path="/tv" element={<Tvs />} />
          <Route path="/nf" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/nf" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
