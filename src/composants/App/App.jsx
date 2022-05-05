import React, { useState } from 'react';
import {
  Routes, Route,
} from 'react-router';
import Entrance from '../../pages/entrance/Entrance';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Home from '../../pages/home/Home';
import Biography from '../../pages/biography/Biography';
import ArtistWebGalery from '../../pages/artist-web-galery/ArtistWebGalery';
import Contact from '../../pages/contact/Contact';
import SpecialMentions from '../../pages/special-mentions/SpecialMentions';
import WorkArt from '../../pages/work-art/WorkArt';
import './App.css';
import fakeData from './data';

function App() {
  const [tableau, setTableau] = useState({});

  const setTableauData = (tableauData) => {
    setTableau(tableauData);
    console.log(tableauData);
  };
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Entrance />} />

      </Routes>
      {window.location.pathname !== '/' && <Header />}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/biography" element={<Biography />} />
        <Route path="/artist-web-galery" element={<ArtistWebGalery data={fakeData} setTableauData={setTableauData} />} />
        <Route path="/work-art" element={<WorkArt tableau={tableau} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/special-mentions" element={<SpecialMentions />} />
      </Routes>
      {window.location.pathname !== '/' && <Footer />}

    </div>
  );
}

export default React.memo(App);
