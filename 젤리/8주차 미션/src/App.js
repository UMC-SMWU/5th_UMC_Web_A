import React from 'react';
import './App.css';
import {Weather} from './pages/Weather'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={<Weather />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
