import React from 'react';
import {
  Routes, Route,
} from 'react-router';
import './App.css';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element="entrance" />
        <Route path="/home" element="home" />
        <Route path="/biography" element="biography" />
        <Route path="/artist-web-galery" element="artist-web-galery" />
        <Route path="/work-art" element="work-art" />
        <Route path="/contact" element="contact" />
        <Route path="/special-mentions" element="special-mentions" />
      </Routes>

    </div>
  );
}

export default React.memo(App);
