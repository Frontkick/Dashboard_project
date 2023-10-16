import React from 'react'
import './Dashboard/Dash.css';
import {BsFillTagFill, BsHandThumbsUpFill, BsSearch, BsPersonCircle, BsCashStack,BsBellFill}
from 'react-icons/bs'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { PieChart, Pie } from 'recharts';
import { VscBlank } from "react-icons/vsc";
import { pic } from "./Login.js";
import { useState } from 'react';

function Home() {

const bar_data = [
  {
    name: 'Week 1',
    Guest: 4000,
    User: 2400,
    amt: 2400,
  },
  {
    name: 'Week 2',
    Guest: 3000,
    User: 1398,
    amt: 2210,
  },
  {
    name: 'Week 3',
    Guest: 2000,
    User: 9800,
    amt: 2290,
  },
  {
    name: 'Week 4',
    Guest: 2780,
    User: 3908,
    amt: 2000,
  },
  
];
const pie_data = [
  { name: 'Basic Tress', value: 1000 },
  { name: 'Custom Short Pants', value: 3000 },
  { name: 'Super Hoodies', value: 2500 },
  { name: 'Denim Jeans', value: 2000 },
];

const [modal, setModal] = useState
(false);

const toggleInput = () =>{
  setModal(!modal)
}
  return (
    <main className='main-container'>
      <div className='main-title'>
        <h3 className='d'>Dashboard</h3>
        <input style={{marginLeft:950+"px",marginTop:30+"px"}}className="input" type="text" placeholder="Search"/>
        <div className='head_icon'>
        <a href="" style={{color:"black"}}><BsSearch /></a>
        <VscBlank/>
        <a href="" style={{color:"black"}}><BsBellFill /></a>
        <img className='pic' src={pic}/>
        </div>
      </div>
      

      <div className='main-cards'>
        <div className='card'>
          <div className='card-inner'>
            <BsCashStack className='card-icon'/>
            <h3>Total Revenues</h3>

          </div>
          <h1>$2,129,430</h1>
        </div>
      

      <div className='card'>
          <div className='card-inner'>
            <BsFillTagFill className='card-icon'/>
            <h3>Total Transactions</h3>

          </div>
          <h1>1,520</h1>
        </div>

        <div className='card'>
          <div className='card-inner'>
            <BsHandThumbsUpFill className='card-icon'/>
            <h3>Total Likes</h3>

          </div>
          <h1>9,780</h1>
        </div>

        <div className='card'>
          <div className='card-inner'>
            <BsPersonCircle className='card-icon'/>
            <h3>Total Users</h3>

          </div>
          <h1>10,000</h1>
        </div>
        </div>
        <p className='paragraph'>Activities</p>
        <div className='charts'>
          <ResponsiveContainer width="200%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={bar_data}
            barCategoryGap={"35%"}
            barGap={"5%"}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
        >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Guest" fill="rgb(177, 50, 50)" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                <Bar dataKey="User" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
              </BarChart>
            </ResponsiveContainer>
        </div>
        <p className='paragraph'>Top Products</p>
          <div className='pie_chart'>
            
              <ResponsiveContainer width="100%" height="100%">
                <PieChart width={400} height={400}>
                  <Pie dataKey="value" data={pie_data} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" />
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            
            <button onClick={toggleInput} >+</button>

            </div>
            {modal &&(
            <div className='modal'>
              <div className='overlay'></div>
                <div className='modal-content'>
                  <h1>Add New Profile</h1>
                  <p>Basic</p><hr/>
                  <br/>
                  <p>Enter Name*</p>
                  <input className='inputt' type='text' placeholder='Eg. Elon Musk'/>
                  <br/>
                  <p>Enter Email*</p>
                  <input className='inputt' type='Email' placeholder='Eg. xyz@xyz.com'/>
                  <br/>
                  <p>Enter Phone*</p>
                  <input className='inputt' type='integer' placeholder='Eg. +91 123456789'/>
                  <br/>
                  <button className='enter' onClick={toggleInput}>Submit</button>
                  
                </div>
                <div className='social'>
                    <p style={{position:"relative",top:"11px"}}> Social</p>
                    <br/>
                    <br/>
                    <p>Instagram*</p>
                    <input className='inputt' type='text' placeholder='Eg. instagram.com/username'/>
                    <br/>
                    <p>Youtube*</p>
                    <input className='inputt' type='text' placeholder='Eg. youtube.com/username'/>
                    <br/>
                  </div>
            </div>
            )}
          
    </main>
  );
}

export default Home;