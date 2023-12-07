//React Router v6 App
import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, /*Link*/ } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

//component imports
import Navbar from './Navbar';
import Home from './Home';
import Contact from './Contact';
import Nightlife from './Nightlife'
import Food from './Food';
import History from './History';
import AttractionsList from './Attraction';
//import Footer from './Footer';
import './App.css';
import './Home.css';
import FoodList from './Food';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          {<Navbar />}

          <br />
          {/* <Footer /> */}

          {/* Routes tag goes after rendered components */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/history" element={<History />} />
            <Route exact path='/contact' element={<Contact />} />
            <Route path='/food' element={<Food />} />
            <Route path='/nightlife' element={<Nightlife />} />
            <Route path='/attraction' element={<AttractionsList />} />
            <Route path='/foods' element={<FoodList />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  };
};


export default App;