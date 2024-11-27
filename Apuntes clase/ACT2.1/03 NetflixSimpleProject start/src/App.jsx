import React from 'react';
import './App.css';
import Banner from './Components/Banner/Banner';
import Navbar from './Components/Navbar/Navbar';
import RowPost from './Components/RowPost/RowPost';

/*
Add the following pages
URLS are in Constants
trending
horror
action
comedy
romance
documentaries
*/

export default function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
    </div>
  );
}
