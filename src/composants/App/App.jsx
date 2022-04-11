import React from 'react';
import {
  Routes, Route,
} from 'react-router';
import Entrance from '../../pages/entrance/Entrance';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Home from '../../pages/home/Home';
import Biography from '../../pages/biography/Biography';
import ArtistWebGalery from '../../pages/artist-web-galery/ArtistWebGalery';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Entrance />} />

      </Routes>
      {window.location.pathname !== '/' && <Header />}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/biography" element={<Biography />} />
        <Route path="/artist-web-galery" element={<ArtistWebGalery />} />
        <Route path="/work-art" element="work-art" />
        <Route path="/contact" element="contact" />
        <Route path="/special-mentions" element="special-mentions" />
      </Routes>
      {window.location.pathname !== '/' && <Footer />}
    </div>
  );
}

export default React.memo(App);
