import {useState , useEffect} from 'react'
import axios from 'axios';
import './App.css';
import Ccard from './components/card/Ccard.js'
import Ccard2 from './components/card/Ccard2.js';
import Card3 from './components/card/Ccard3.js';
import Card4 from './components/card/Card4.js';
import Navbar from './components/navbar/Navbar.js';
import React from 'react';
import { useSelector } from 'react-redux';

function App() {
  
  return (
    <>
    
    <Navbar />
    <div className="App">
    <div className="left">
    <Ccard />
    <Ccard2 />
    </div>
    <div className="right">
    <Card3 />

    <Card4 />
    </div>
    </div>
   
    
    </>
  );
}

export default App;
