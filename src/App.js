
import './App.css';
import Login from './components/Login.js';
import './components/Logins.css';
import {useState} from 'react';
import Dashboard from './components/Dashboard.js';
import { Route,Router,Routes } from 'react-router-dom';




function App() {
  return (
      
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Dashboard" element={<Dashboard/>}/>
      </Routes>
      
      
     
    
  );
};

export default App;
