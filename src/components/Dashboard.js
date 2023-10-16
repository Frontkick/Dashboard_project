import React from 'react';
import Sidebar from './Dashboard/Side.js'
import Home from './Home.js'
import './Dashboard.css'


function Dashboard() {
  return (
    <>
    <div className="grid-container">
    <Sidebar/>
    
    <Home/>
    </div>
    </>

  );
}

export default Dashboard;