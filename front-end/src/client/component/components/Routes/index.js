import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Routes, Switch } from 'react-router-dom';
import Home from '../../pages/Home';
import Profil from '../../pages/Profil';
import Trending from '../../pages/Trending';
import Navbar from '../Navbar';
import Expodur from '.././Expo/expodur'


const index = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/exposition" element={<Expodur/>} />
      </Routes>
    </div>
  );
};

export default index;