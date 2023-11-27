import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Celebrity from "./pages/Celebrity";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import NotFound from "./pages/NotFound";
import Tv from "./pages/Tv";
import MovieDetail from "./pages/MovieDetail";
import Login from "./Components/Login";

function App() {
  return (
    <div className='root-wrap'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/Login'
            element={<Login />}
          />
          <Route
            path='/Movies'
            element={<Movies />}
          />
          <Route
            path='/Movies/:title'
            element={<MovieDetail />}
          />
          <Route
            path='/Tv'
            element={<Tv />}
          />
          <Route
            path='/Celebrity'
            element={<Celebrity />}
          />
          <Route
            path='/*'
            element={<NotFound />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
