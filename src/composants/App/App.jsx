import React from 'react';
import {
  Routes, Route,
} from 'react-router';
import Entrance from '../../pages/entrance/Entrance';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Entrance />} />

      </Routes>
      {window.location.pathname !== '/' && ('header ')}
      <Routes>
        <Route path="/home" element="home" />
        <Route path="/biography" element="biography" />
        <Route path="/artist-web-galery" element="artist-web-galery" />
        <Route path="/work-art" element="work-art" />
        <Route path="/contact" element="contact" />
        <Route path="/special-mentions" element="special-mentions" />
      </Routes>
      {window.location.pathname !== '/' && ' footer '}
    </div>
  );
}

export default React.memo(App);
